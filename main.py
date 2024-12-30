from database.db import Base, engine
from routers import music_recognition, auth
from fastapi import FastAPI
from dotenv import load_dotenv

load_dotenv()


app = FastAPI()
# app.include_router(music_recognition.router,
#                    prefix='/api/v1', tags=['music-recognition'])
# app.include_router(auth.router, prefix='/api/v1', tags=['auth'])
