import os

class Config:
    # Set the DEBUG mode from environment variable or default to False
    DEBUG = os.environ.get('DEBUG', 'False') == 'True'
    
    # Set the application port, defaulting to 8000
    PORT = int(os.environ.get('PORT', 8000))
    
    # MongoDB URI, defaulting to a local MongoDB database
    DATABASE_URI = os.environ.get('DATABASE_URI', 'mongodb://localhost:27017/crowdmonitoring')
    
    # RTSP camera URL or '0' for webcam; set via environment or default
    CAMERA_URL = os.environ.get('CAMERA_URL', '0')  # 0 for webcam, or RTSP URL for IP camera
