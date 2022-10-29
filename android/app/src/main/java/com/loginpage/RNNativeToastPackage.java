package com.loginpage;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

//-->create this class because ReactPackage
public class RNNativeToastPackage implements ReactPackage {
    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {

        List<NativeModule> modules =new ArrayList<>();
        // -->pass this NativeModule class in ArrayList to MainApplication class
        modules.add(new RNNativeToastLibraryModule(reactContext));

        return modules;
    }


    @NonNull    
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {
        //-->Pass default empty list
        return Collections.emptyList();
    }
}
