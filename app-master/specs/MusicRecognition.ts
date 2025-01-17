import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import { NativeModules, Platform } from 'react-native';

const { MusicRecognition } = NativeModules; // Import the native module

if (!MusicRecognition) {
    throw new Error(
        'MusicRecognition native module is not available. Ensure it is linked correctly on Android.'
    );
}

export interface Spec extends TurboModule {
    initialize(host: string, accessKey: string, accessSecret: string): Promise<string>;
    startRecognition(): Promise<string>;
    stopRecognition(): Promise<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
    'MusicRecognition',
);