import logging
from flask import Flask, jsonify, Response, stream_with_context, request
from flask_cors import CORS
from cameraProcessing import CameraProcessor
from database import Database

app = Flask(__name__)
cors = CORS(app)
cameraProcessor = CameraProcessor()
db = Database()

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.errorhandler(Exception)
def handle_exception(e):
    logger.error(f"Unhandled exception: {str(e)}", exc_info=True)
    return jsonify(error=str(e)), 500

# Get the real-time people count from the live frame
@app.route("/api/liveCount", methods=["GET"])
def getLivePeopleCount():
    try:
        count = cameraProcessor.livePeopleCount  # Fetch live count from the current frame
        rolling_avg = cameraProcessor.rolling_average
        prediction = cameraProcessor.future_prediction
        return jsonify({
            "livePeopleCount": count,
            "rollingAverage": round(rolling_avg, 2),
            "futurePrediction": round(prediction, 2)
        })
    except Exception as e:
        logger.error(f"Error getting live count: {str(e)}")
        return jsonify({"error": "Failed to get live count"}), 500

@app.route("/api/last_hour_data", methods=["GET"])
def getLastHourData():
    try:
        data = db.getLastHourData()
        processed_data = [{
            "time": f'{item["_id"]["hour"]:02d}:{item["_id"]["interval"]:02d}', 
            "count": round(item["avgCount"])
        } for item in data['data']]
        return jsonify({
            "data": processed_data,
            "trend": data['trend']
        })
    except Exception as e:
        logger.error(f"Error getting last hour data: {str(e)}")
        return jsonify({"error": "Failed to get last hour data"}), 500

# Corrected last 30 minutes data route
@app.route("/api/last_30_minutes_data", methods=["GET"])
def getLast30MinutesData():
    try:
        data = db.getLast30MinutesData()
        if not data:
            return jsonify({"error": "No data available for the last 30 minutes"}), 404

        processed_data = [{
            "time": f'{item["time"]}',  # This is now formatted as actual time.
            "count": round(item["count"])
        } for item in data['data']]

        return jsonify({
            "data": processed_data,
            "movingAverage": [round(avg, 2) for avg in data['movingAverage']],
            "anomalies": data['anomalies']
        })
    except Exception as e:
        logger.error(f"Error getting last 30 minutes data: {str(e)}")
        return jsonify({"error": "Failed to get last 30 minutes data"}), 500

# Get occupancy rate
@app.route("/api/occupancy", methods=["GET"])
def getOccupancyRate():
    try:
        occupancy_data = db.getLiveOccupancyData()
        if occupancy_data:
            return jsonify(occupancy_data)
        else:
            return jsonify({"error": "No occupancy data available"}), 404
    except Exception as e:
        logger.error(f"Error getting occupancy rate: {str(e)}")
        return jsonify({"error": "Failed to get occupancy rate"}), 500

# Stream live video feed
@app.route("/LiveTracking/videoFeed", methods=["GET"])
def videoFeed():
    try:
        logger.info("Starting video feed stream")
        return Response(stream_with_context(cameraProcessor.getFrame()), mimetype="multipart/x-mixed-replace; boundary=frame")
    except Exception as e:
        logger.error(f"Error in video feed: {str(e)}")
        return jsonify({"error": "Failed to stream video feed"}), 500

# Stream annotated video feed
@app.route("/LiveTracking/annotatedVideoFeed", methods=["GET"])
def annotatedVideoFeed():
    try:
        logger.info("Starting annotated video feed stream")
        return Response(stream_with_context(cameraProcessor.getAnnotatedFrame()), mimetype="multipart/x-mixed-replace; boundary=frame")
    except Exception as e:
        logger.error(f"Error in annotated video feed: {str(e)}")
        return jsonify({"error": "Failed to stream annotated video feed"}), 500

if __name__ == "__main__":
    DEBUG = True  # Set to False for production
    PORT = 8000  # Port number for the application to run on

    logger.info("Starting the Flask application")
    app.run(debug=DEBUG, port=PORT)
