package com.loginpage;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.PowerManager;
import android.provider.Settings;
import android.widget.Toast;

import androidx.annotation.NonNull;


import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

// this is  Module class in pass all method in call  ReactNative side
public class RNNativeToastLibraryModule extends ReactContextBaseJavaModule {



    private static ReactApplicationContext reactContext;

    RNNativeToastLibraryModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;

    }

    //-->create  string for execute for react native side  with add  native side method
    @NonNull
    @Override
    public String getName() {
        return "RNToastModule";
    }

    // -->show simple toast
    @ReactMethod
    public void show() {
        Toast.makeText(this.reactContext, "Hi from Android", Toast.LENGTH_LONG).show();
    }


    // -->Start Service in  Service class side  and call react native side.
    @ReactMethod
    public void startService() {

        this.reactContext.startService(new Intent(this.reactContext, ReactServices.class));
    }
    @ReactMethod
    public void openNetworkSettings() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            Intent intent = new Intent();
            String packageName = reactContext.getPackageName();
            PowerManager pm = (PowerManager) reactContext.getSystemService(reactContext.POWER_SERVICE);
            if (!pm.isIgnoringBatteryOptimizations(packageName)) {
                intent.setAction(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS);
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                intent.setData(Uri.parse("package:" + packageName));
                this.reactContext.startActivity(intent);
            }
        }
    }




    //-->Stop Service from stopService method call
    @ReactMethod
    public void stopService() {
        this.reactContext.stopService(new Intent(reactContext, ReactServices.class));
    }

}
