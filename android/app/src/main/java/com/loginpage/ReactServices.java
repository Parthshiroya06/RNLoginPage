package com.loginpage;

import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.Handler;
import android.os.IBinder;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;


public class ReactServices extends Service {
    private static ReactApplicationContext reactContext;
 // use this class for scheduling messaging with executes thread  with runnable
    private Handler handler = new Handler();

//create runnable object  because  Runnable interface should be implemented
// by any class whose  executed by a thread.
    private Runnable runnable = new Runnable() {
        @Override
        public void run() {

            Context context = getApplicationContext();

            Log.d("dataCodes", "run Code" );
            Toast.makeText(context, "HI from Android Service", Toast.LENGTH_SHORT).show();
            handler.postDelayed(this, 10000);
        }
    };


    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
            
        this.handler.post(this.runnable);

        return super.onStartCommand(intent, flags, startId);
    }


    @Override
    public void onCreate() {
        super.onCreate();
        Log.d("Create","service created");


    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        this.handler.removeCallbacks(this.runnable);
        Log.d("stop","service Stop");
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
}


