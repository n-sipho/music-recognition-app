import { View, StyleSheet, DeviceEventEmitter } from "react-native";
import { Button } from "react-native-paper";
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { apiBaseUrl } from "@/constants/ApiBaseUrl";
import MusicRecognition from "@/specs/MusicRecognition";
import Config from 'react-native-config';

// const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;
const host = Config.ACRCLOUD_HOST as string;
const accessKey = Config.ACRCLOUD_ACCESS_KEY as string;
const accessSecret = Config.ACRCLOUD_ACCESS_SECRET as string;

MusicRecognition
const Index = () => {
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [recognitionData, setRecognitionData] = useState<RecognitionResult | null>(null);

  const sendAudio = async (uri) => {
    try {
      console.log('Sending audio for recognition');

      const info = await FileSystem.getInfoAsync(uri);
      const audioData = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });

      const formData = new FormData();
      formData.append('audio_file', {
        uri,
        name: info.uri.split('/').pop(),
        type: 'audio/mpeg', // Adjust if your recording is in a different format
      });

      const response = await fetch(`${apiBaseUrl}/api/v1/music-recognition`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Audio sent successfully:', data);
    } catch (err) {
      console.error('Failed to send audio', err);
    }
  };

  async function startRecording() {
    try {
      // if (permissionResponse.status !== 'granted') {
      //   console.log('Requesting permission..');
      //   await requestPermission();
      // }
      // await Audio.setAudioModeAsync({
      //   allowsRecordingIOS: true,
      //   playsInSilentModeIOS: true,
      // });

      // console.log('Starting recording..');
      // const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      // setRecording(recording);
      // console.log('Recording started');
      await MusicRecognition.startRecognition().then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  async function stopRecording() {
    // console.log('Stopping recording..');
    // setRecording(undefined);
    // await recording.stopAndUnloadAsync();
    // await Audio.setAudioModeAsync(
    //   {
    //     allowsRecordingIOS: false,
    //   }
    // );
    // const uri = recording.getURI();
    // console.log('Recording stopped and stored at', uri);
    // sendAudio(uri);
    await MusicRecognition.stopRecognition().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  };

  useEffect(() => {
    MusicRecognition.initialize(host, accessKey, accessSecret).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.error(err);
    });

    const resultListener = DeviceEventEmitter.addListener(
      'onRecognitionResult',
      (result: string) => {
        try {
          // Parse the result JSON string
          const parsedResult: { result: string } = JSON.parse(result);
          const recognitionResult: RecognitionResult = JSON.parse(parsedResult.result);
          setRecognitionData(recognitionResult);
          console.log('Recognition Data:', recognitionResult);
        } catch (error) {
          console.error('Error parsing recognition result:', error);
        }
      }
    );

    return () => {
      resultListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={recording ? stopRecording : startRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#ecf0f1',
    alignItems: "center",
    // padding: 10,
  },
});

export default Index;