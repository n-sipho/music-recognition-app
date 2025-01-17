package com.anonymous.appmaster

//import com.facebook.react.bridge.ReactApplicationContext
//import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.bridge.*
import com.facebook.react.bridge.Promise
import com.acrcloud.rec.ACRCloudClient
import com.acrcloud.rec.ACRCloudConfig
import com.acrcloud.rec.ACRCloudResult
import com.acrcloud.rec.IACRCloudListener

class MusicRecognitionModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext), IACRCloudListener {

    private var mClient: ACRCloudClient? = null
    private var mConfig: ACRCloudConfig = ACRCloudConfig()
    private var isInitialized: Boolean = false

    override fun getName() = NAME

    @ReactMethod
    fun initialize(host: String, accessKey: String, accessSecret: String, promise: Promise) {
        try {
            mConfig.acrcloudListener = this
            mConfig.context = reactApplicationContext
            mConfig.host = host
            mConfig.accessKey = accessKey
            mConfig.accessSecret = accessSecret
            mConfig.recorderConfig.isVolumeCallback = true

            mClient = ACRCloudClient()
            isInitialized = mClient?.initWithConfig(mConfig) == true

            if (isInitialized) {
                promise.resolve("Initialized successfully")
            } else {
                promise.reject("Initialization error", "Failed to initialize ACRCloudClient")
            }
        } catch (e: Exception) {
            promise.reject("Initialization error", e)
        }
    }

    @ReactMethod
    fun startRecognition(promise: Promise) {
        if (!isInitialized) {
            promise.reject("Not initialized", "Call initialize() first")
            return
        }

        if (mClient?.startRecognize() == true) {
            promise.resolve("Recognition started")
        } else {
            promise.reject("Start error", "Failed to start recognition")
        }
    }

    @ReactMethod
    fun stopRecognition(promise: Promise) {
        if (mClient != null) {
            mClient?.cancel()
            promise.resolve("Recognition stopped")
        } else {
            promise.reject("Stop error", "Client is null")
        }
    }

    override fun onResult(result: ACRCloudResult?) {
        val resultJson = result?.result ?: "{}"
        // Send result back to JavaScript via React Native's event emitter
        this.sendEvent(reactApplicationContext, "onRecognitionResult", Arguments.createMap().apply {
            putString("result", resultJson)
        })
    }

    override fun onVolumeChanged(volume: Double) {
        // Optional: Implement volume change handling
         sendEvent(reactApplicationContext, "onVolumeChanged", Arguments.createMap().apply {
             putDouble("volume", volume)
         })
    }

    private fun sendEvent(reactContext: ReactContext, eventName: String, params: WritableMap) {
        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(eventName, params)
    }

    override fun onCatalystInstanceDestroy() {
        super.onCatalystInstanceDestroy()
        mClient?.release()
        isInitialized = false
    }

    companion object {
        const val NAME = "MusicRecognition"
    }
}