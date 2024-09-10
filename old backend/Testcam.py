from flask import Flask, jsonify
import cv2
import numpy as np
from ultralytics import YOLO
from collections import defaultdict
from utils import calculateHomography, transformPoints
from pymongo import MongoClient
import time as time_module
from datetime import datetime

app = Flask(__name__)

# Load the YOLO model
model = YOLO("yolov8n.pt")

# Connect to the MongoDB database
client = MongoClient("")
db = client["Crowd_Monitoring"]
collection = db["Crowd_Count"]

lastRecorded = time_module.time()
rtspUrl = 1
cap = cv2.VideoCapture(rtspUrl)

trackHistory = defaultdict(list)
from floorReplica import floorReplica
canvasHeight = 1000
canvasWidth = 700
tilesX = 25
tilesY = 15
floorImage = floorReplica(canvasHeight, canvasWidth, tilesX, tilesY, rtspUrl)

height, width, channels = floorImage.shape
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
video = cv2.VideoWriter('output.mp4', fourcc, 20.0, (width, height))

ptsSRC = np.array([[28, 1158], [2120, 1112], [1840, 488], [350, 518], [468, 1144]])
ptsDST = np.array([[0, 990], [699, 988], [693, 658], [0, 661], [141, 988]])
homographyMatrix = calculateHomography(ptsSRC, ptsDST)

@app.route('/api/stats', methods=['GET'])
def get_stats():
    data = list(collection.find().sort("timestamp", -1).limit(1))
    if data:
        return jsonify(data[0])
    else:
        return jsonify({"error": "No data available"}), 404

def run_tracking():
    global lastRecorded
    while True:
        success, frame = cap.read()
        results = model.track(frame, persist=True, show=False, imgsz=1280, verbose=True)
        annotatedFrame = floorImage.copy()

        if results[0].boxes is not None and hasattr(results[0].boxes, 'id'):
            if results[0].boxes.id.numel() > 0:
                boxes = results[0].boxes.xywh.cpu().numpy()
                trackIDs = results[0].boxes.id.cpu().numpy()

                annotatedFrame = floorImage.copy()
                for trackID in np.unique(trackIDs):
                    history = trackHistory[trackID]
                    if len(history) > 1:
                        points = np.array(history, dtype=np.int32)
                        newPoints = transformPoints(points, homographyMatrix)
                        newPoints = newPoints.astype(np.int32)
                        cv2.polylines(annotatedFrame, [newPoints], isClosed=False, color=(0, 0, 255), thickness=2)

                for box, trackID in zip(boxes, trackIDs):
                    x, y, w, h = box
                    center = (int(x), int(y + h / 2))
                    trackHistory[trackID].append(center)
                    if len(trackHistory[trackID]) > 50:
                        trackHistory[trackID].pop(0)

                currentTime = time_module.time()
                if currentTime - lastRecorded > 1:
                    frameId = int(cap.get(cv2.CAP_PROP_POS_FRAMES))
                    totalPeople = len(np.unique(trackIDs))
                    timestamp = time_module.strftime("%d-%m-%Y %H:%M:%S", time_module.localtime(currentTime))

                    record = {
                        "frameId": frameId,
                        "timestamp": timestamp,
                        "totalPeople": totalPeople
                    }
                    collection.insert_one(record)
                    lastRecorded = currentTime

                video.write(annotatedFrame)

        cv2.imshow("Map Tracking", annotatedFrame)
        cv2.imshow("Camera Feed", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    from threading import Thread
    tracking_thread = Thread(target=run_tracking)
    tracking_thread.start()
    app.run(debug=True, port=8000)
