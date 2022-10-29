package com.loginpage;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;


public class BootUpReceiver extends BroadcastReceiver {

    // call this method for if service once  start then device is restart or app is close so our service it should be callable.
    @Override
    public void onReceive(Context context, Intent intent) {
        Intent target = new Intent(context, ReactServices.class);
        context.startActivity(target);



       //context.startService(new Intent(context, ReactServices.class));

        
    }
}
