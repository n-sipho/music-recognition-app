from fastapi import APIRouter, HTTPException, UploadFile, File
from utils.recognition import identify_music
# from utils.audio import save_audio_as_wav

router = APIRouter(prefix='/api/v1', tags=['music-recognition'])


@router.post('/music-recognition')
async def music_recognition(audio_file: UploadFile = File(...)):
    try:
        # Read the incoming audio bytes
        audio_bytes = await audio_file.read()

        song_resp = await identify_music(audio_bytes)
        if song_resp.status.code == 0:
            pass
        
        return song_resp
    except Exception as e:
        return {"error": f"An error occurred: {str(e)}"}
