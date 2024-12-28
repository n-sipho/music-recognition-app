import wave
import os
import datetime
import tempfile
from models.acrcloud import ACRCloudResults

def save_audio_as_wav(audio_bytes):
    """
    Saves audio bytes as a WAV file in a temporary directory with a timestamped filename.

    Args:
      audio_bytes: The audio data as bytes.
      sample_rate: The sample rate of the audio.
      channels: The number of channels in the audio.
      sample_width: The sample width of the audio in bytes.
    """
    try:
        # Generate a timestamped filename
        timestamp = datetime.datetime.now().strftime("%Y_%m_%d_%H_%M_%S")
        filename = f"{timestamp}.wav"

        # Get the temporary directory path
        temp_dir = tempfile.gettempdir()
        file_path = os.path.join(temp_dir, filename)

        # Write the WAV file
        with wave.open(file_path, 'wb') as wf:
            wf.setnchannels(channels)
            wf.setsampwidth(sample_width)
            wf.setframerate(sample_rate)
            wf.writeframes(audio_bytes)
        return file_path

    except Exception as e:
        print(f"Error saving WAV file: {e}")
