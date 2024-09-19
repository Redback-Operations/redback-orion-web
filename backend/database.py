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
        try:
            # Log the current time and calculate one hour ago
            print("Fetching data for the last hour...")
            current_time = datetime.now()
            one_hour_ago = current_time - timedelta(hours=1)
            print(f"Current time: {current_time}, One hour ago: {one_hour_ago}")

            # MongoDB aggregation pipeline
            pipeline = [
                {"$addFields": {
                    "timestamp": {
                        "$dateFromString": {
                            "dateString": "$timestamp",
                            "format": "%d-%m-%Y %H:%M:%S"
                        }
                    }
                }},
                {"$match": {"timestamp": {"$gte": one_hour_ago}}},  # Ensure we are fetching data from only the last hour
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

            # Execute the aggregation pipeline and log the result
            result = list(self.collection.aggregate(pipeline))
            print(f"Aggregation result: {result}")

            if not result:
                return {"data": [], "trend": "No data available"}

            # Interpolate missing data
            full_hour_data = self.interpolateMissingIntervals(result)

            # Calculate trend
            trend = self.calculateTrend(full_hour_data)

            return {
                'data': full_hour_data,
                'trend': trend
            }
        except Exception as e:
            # Log the detailed error message
            print(f"Error fetching last hour data: {e}")
            return {"error": "Failed to get last hour data"}

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
        if len(counts) > 1:
            x = np.arange(len(counts))
            slope, _ = np.polyfit(x, counts, 1)
            return "Increasing" if slope > 0 else "Decreasing" if slope < 0 else "Stable"
        return "No data"

    def getLast30MinutesData(self):
        try:
            thirty_minutes_ago = datetime.now() - timedelta(minutes=30)
            pipeline = [
                {"$addFields": {
                    "timestamp": {
                        "$dateFromString": {
                            "dateString": "$timestamp",
                            "format": "%d-%m-%Y %H:%M:%S"
                        }
                    }
                }},
                {"$match": {"timestamp": {"$gte": thirty_minutes_ago}}},
                {"$group": {
                    "_id": {
                        "minute": {"$minute": "$timestamp"},
                        "hour": {"$hour": "$timestamp"}
                    },
                    "avgCount": {"$avg": "$peopleCount"}
                }},
                {"$sort": {"_id.minute": 1}}
            ]

            result = list(self.collection.aggregate(pipeline))

            if not result:
                return {"data": [], "movingAverage": [], "anomalies": []}

            all_minutes = set(range(30))
            result_minutes = set(item['_id']['minute'] for item in result)
            missing_minutes = all_minutes - result_minutes

            for minute in missing_minutes:
                result.append({"_id": {"minute": minute, "hour": result[0]['_id']['hour']}, "avgCount": 0})

            result = sorted(result, key=lambda x: x['_id']['minute'])

            moving_average = self.calculateMovingAverage(result)
            anomalies = self.detectAnomalies(result, moving_average)

            formatted_result = [{"time": f"{item['_id']['hour']:02d}:{item['_id']['minute']:02d}", "count": item["avgCount"]} for item in result]

            return {"data": formatted_result, "movingAverage": moving_average, "anomalies": anomalies}
        except Exception as e:
            print(f"Error fetching last 30 minutes data: {e}")
            return {"error": "Failed to get last 30 minutes data"}

    def calculateMovingAverage(self, data, window=5):
        counts = [item['avgCount'] for item in data]
        return [sum(counts[max(0, i - window + 1):i + 1]) / min(i + 1, window) for i in range(len(counts))]

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
        try:
            latest_record = self.collection.find_one(sort=[("timestamp", -1)])
            if latest_record:
                current_count = latest_record['peopleCount']
                occupancy_rate = self.calculateOccupancyRate(current_count)
                return {
                    "currentCount": current_count,
                    "occupancyRate": round(occupancy_rate, 2)
                }
            return None
        except Exception as e:
            print(f"Error fetching live occupancy data: {e}")
            return None

    def close(self):
        self.client.close()
