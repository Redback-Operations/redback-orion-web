import os

class Config:
    DEBUG = os.environ.get('DEBUG', 'False') == 'True'
    PORT = int(os.environ.get('PORT', 8000))
    DATABASE_URI = os.environ.get('DATABASE_URI', 'mongodb://localhost:27017/crowdmonitoring')
    CAMERA_URL = os.environ.get('CAMERA_URL', '0')  # 0 for webcam, or RTSP URL for IP camera

# In app.py
from backend import app
from config import Config

app.config.from_object(Config)

if __name__ == "__main__":
    app.run(debug=app.config['DEBUG'], port=app.config['PORT'])