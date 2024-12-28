from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI
from routers import music_recognition

app = FastAPI()
app.include_router(music_recognition.router)