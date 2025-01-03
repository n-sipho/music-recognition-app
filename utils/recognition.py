import os
import wave
import json
from datetime import datetime
from acrcloud.recognizer import ACRCloudRecognizer
from schemas.acrcloud import ACRCloudResults
from dotenv import load_dotenv

load_dotenv()

host = os.getenv('ACRCLOUD_HOST')
access_key = os.getenv('ACRCLOUD_ACCESS_KEY')
access_secret = os.getenv('ACRCLOUD_ACCESS_SECRET')

config = {
    'host': host,
    'access_key': access_key,
    'access_secret': access_secret,
    'timeout': 10  # seconds
}

'''This module can recognize ACRCloud by most of audio/video file.
        Audio: mp3, wav, m4a, flac, aac, amr, ape, ogg ...
        Video: mp4, mkv, wmv, flv, ts, avi ...'''
re = ACRCloudRecognizer(config)


async def identify_music(audio_bytes: []) -> ACRCloudResults:
    try:
        resp = re.recognize_audio_buffer(audio_bytes, 0)
        data = json.loads(resp)

        # # Parse the response into the acrcloud response Pydantic model
        song_recognition_resp = ACRCloudResults.parse_obj(data)
        return song_recognition_resp
    except Exception as e:
        return {"error": f"An error occurred: {str(e)}"}
