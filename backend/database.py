from unittest import result
from pymongo import MongoClient
import time
from datetime import datetime, timedelta
import numpy as np

class Database:
    def __init__(self):
        self.client = MongoClient("mongodb+srv://amborse31:hoanhuy31@crowdtracking.ozaoo6n.mongodb.net/")
        self.db = self.client["CrowdTracking"]
        self.collection = self.db["Crowd"]
        self.lastRecorded = time.time()

    def insertRecord(self, count, frameId=None):
        currentTime = datetime.now()
        currentTimestamp = time.time()

        if currentTimestamp - self.lastRecorded >= 1:
            record = {
                "frameId": frameId,
                "peopleCount": count,
                "timestamp": currentTime.strftime("%d-%m-%Y %H:%M:%S")
            }
            try:
                self.collection.insert_one(record)
                print(f"Recorded: Frame {frameId}, Time {currentTime}, People {count}")
            except Exception as e:
                print(f"Failed to insert record into database: {e}")
            self.lastRecorded = currentTimestamp

    def getLastHourData(self):
        one_hour_ago = datetime.now() - timedelta(hours=1)
        pipeline = [
            {"$addFields": {
                "timestamp": {
                    "$dateFromString": {
                        "dateString": "$timestamp",
                        "format": "%d-%m-%Y %H:%M:%S"
                    }
                }
            }},
            {"$match": {"timestamp": {"$gte": one_hour_ago}}},
            {"$group": {
                "_id": {
                    "interval": {
                        "$subtract": [
                            {"$minute": "$timestamp"},
                            {"$mod": [{"$minute": "$timestamp"}, 15]}
                        ]
                    },
                    "hour": {"$hour": "$timestamp"}
                },
                "avgCount": {"$avg": "$peopleCount"}
            }},
            {"$sort": {"_id.hour": 1, "_id.interval": 1}}
            ]
        
        result = list(self.collection.aggregate(pipeline))
        
        # Interpolate missing data
        full_hour_data = self.interpolateMissingIntervals(result)
        
        # Calculate trend
        trend = self.calculateTrend(full_hour_data)
        
        return {
            'data': full_hour_data,
            'trend': trend
        }
    
    def interpolateMissingIntervals(self, data):
        full_data = []
        for i in range(4):  # 4 15-minute intervals in an hour
            interval_data = next((item for item in data if item['_id']['interval'] == i * 15), None)
            if interval_data:
                full_data.append(interval_data)
            else:
                # Linear interpolation
                prev_data = full_data[-1] if full_data else {'avgCount': 0}
                next_data = next((item for item in data if item['_id']['interval'] > i * 15), {'avgCount': prev_data['avgCount']})
                interpolated_count = (prev_data['avgCount'] + next_data['avgCount']) / 2
                full_data.append({'_id': {'interval': i * 15, 'hour': data[0]['_id']['hour'] if data else 0}, 'avgCount': interpolated_count})
        return full_data

    def calculateTrend(self, data):
        counts = [item['avgCount'] for item in data]
        x = np.arange(len(counts))
        slope, _ = np.polyfit(x, counts, 1)
        return "Increasing" if slope > 0 else "Decreasing" if slope < 0 else "Stable"

    def getLast30MinutesData(self):
        
        thirty_minutes_ago = datetime.now() - timedelta(minutes=30)

        # Create a list of all minutes in the last 30 minutes
   
        # MongoDB pipeline
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
                    "$gte": thirty_minutes_ago
                }
            }},
        {"$group": {
                "_id": {
                    "minute": {"$minute": "$timestamp"}
                },
                "avgCount": {"$avg": "$peopleCount"}
            }},
        {"$sort": {"_id.minute": 1}}
        ]
        result = list(self.collection.aggregate(pipeline))

        # Fill in missing minutes with zero count
        all_minutes = set(range(30))
        result_minutes = set(item['_id']['minute'] for item in result)
        missing_minutes = all_minutes - result_minutes
        
        for minute in missing_minutes:
            result.append({"_id": {"minute": minute}, "avgCount": 0})
        
        result = sorted(result, key=lambda x: x['_id']['minute'])

         # Calculate moving average
        moving_average = self.calculateMovingAverage(result)
        
        # Detect anomalies
        anomalies = self.detectAnomalies(result, moving_average)
        
        return result, moving_average, anomalies

    def calculateMovingAverage(self, data, window=5):
        counts = [item['avgCount'] for item in data]
        return [sum(counts[max(0, i-window+1):i+1]) / min(i+1, window) for i in range(len(counts))]

    def detectAnomalies(self, data, moving_average, threshold=2):
        anomalies = []
        counts = [item['avgCount'] for item in data]
        std_dev = np.std(counts)
        for i, (item, avg) in enumerate(zip(data, moving_average)):
            if abs(item['avgCount'] - avg) > threshold * std_dev:
                anomalies.append((item['_id']['minute'], item['avgCount']))
        return anomalies
    
    def calculateOccupancyRate(self, current_count, max_capacity=100):
        return min(current_count / max_capacity * 100, 100)

    def getLiveOccupancyData(self):
        latest_record = self.collection.find_one(sort=[("timestamp", -1)])
        if latest_record:
            current_count = latest_record['peopleCount']
            occupancy_rate = self.calculateOccupancyRate(current_count)
            return {
                "currentCount": current_count,
                "occupancyRate": round(occupancy_rate, 2)
            }
        return None

    def close(self):
        self.client.close()
