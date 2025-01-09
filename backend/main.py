from routers import music_recognition
from fastapi import FastAPI
from dotenv import load_dotenv

load_dotenv()


app = FastAPI()

@app.get("/")
def read_root():
    return {"Status": "Backend is running"}

app.include_router(music_recognition.router)
# app.include_router(auth.router)


# if __name__ == "__main__":
#     uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)