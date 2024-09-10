from pymongo import MongoClient
import time
from datetime import datetime, timedelta

class Database:
    def __init__(self):
        # Initialize the MongoDB client and database
        self.client = MongoClient("mongodb+srv://amborse31:hoanhuy31@crowdtracking.ozaoo6n.mongodb.net/")
        self.db = self.client["CrowdTracking"]
        self.collection = self.db["Crowd"]
        self.lastRecorded = time.time()  # Initialize with current timestamp

    def insertRecord(self, count, frameId):
        currentTime = datetime.now()  # Use datetime object for formatting
        currentTimestamp = time.time()  # Get current timestamp

        # Only record data every second
        if currentTimestamp - self.lastRecorded >= 1:  # Use timestamps for comparison
            record = {
                "frameId": frameId,
                "peopleCount": count,
                "timestamp": currentTime.strftime("%d-%m-%Y %H:%M:%S")  # Format datetime object
            }
            try:
                self.collection.insert_one(record)
                print(f"Recorded: Frame {frameId}, Time {currentTime.strftime('%d-%m-%Y %H:%M:%S')}, People {count}")
            except Exception as e:
                print(f"Failed to insert record into database: {e}")
            self.lastRecorded = currentTimestamp  # Update the last recorded timestamp

    def getlastestRecord(self):
        latestRecord = self.collection.find_one(sort=[("timestamp", -1)])
        return latestRecord["peopleCount"] if latestRecord else 0

    # Fetch last hour data (15-minute intervals)
    def getLastHourData(self):
        pipeline = [
            {"$addFields": {
                "timestamp": {
                    "$dateFromString": {
                        "dateString": "$timestamp",
                        "format": "%d-%m-%Y %H:%M:%S"
                    }
                }
            }},
            {"$match": {
                "timestamp": {
                    "$gte": datetime.utcnow() - timedelta(hours=1)
                }
            }},
            {"$group": {
                "_id": {
                    "hour": {"$hour": "$timestamp"},
                    "minute": {"$subtract": [{"$minute": "$timestamp"}, {"$mod": [{"$minute": "$timestamp"}, 15]}]}
                },
                "avgCount": {"$avg": "$peopleCount"}
            }},
            {"$sort": {"_id.hour": 1, "_id.minute": 1}}
        ]
        return list(self.collection.aggregate(pipeline))

    # Fetch last 30 minutes data (1-minute intervals)
    def getLast30MinutesData(self):
        pipeline = [
            {"$addFields": {
                "timestamp": {
                    "$dateFromString": {
                        "dateString": "$timestamp",
                        "format": "%d-%m-%Y %H:%M:%S"
                    }
                }
            }},
            {"$match": {
                "timestamp": {
                    "$gte": datetime.utcnow() - timedelta(minutes=30)
                }
            }},
            {"$group": {
                "_id": {
                    "minute": {"$minute": "$timestamp"},
                    "second": {"$second": "$timestamp"}
                },
                "avgCount": {"$avg": "$peopleCount"}
            }},
            {"$sort": {"_id.minute": 1, "_id.second": 1}}
        ]
        return list(self.collection.aggregate(pipeline))

    def close(self):
        self.client.close()
