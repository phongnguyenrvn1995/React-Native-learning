package com.mynativemodule

import android.R
import android.os.Build
import android.util.Log
import android.widget.ImageView
import androidx.annotation.RequiresApi
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import java.util.Objects

class MyViewManager : SimpleViewManager<MyView>() {
    companion object {
        private const val NATIVE_CLASS = "MyView"
    }

    override fun getName(): String {
        return NATIVE_CLASS
    }

    override fun createViewInstance(themedReactContext: ThemedReactContext): MyView {
        return MyView(themedReactContext)
    }

    @RequiresApi(Build.VERSION_CODES.M)
    @ReactProp(name="backGroundColor", defaultInt = 0)
    fun backGroundColor(view: MyView, color: Int) {
        Log.d("TAG", "backGroundColor: ${color}")
        if(color == 0) {
            view.myBackGroundColor(R.color.holo_blue_dark)
        } else {
            view.myBackGroundColor(R.color.holo_green_dark)
        }
        view.invalidate()
    }

    @ReactProp(name="mySrc")
    fun mySrc(view: MyView, src: String?) {
        Log.d("TAG", "mySrc: $src")
        if(src == "medie") {
            view.setImageResource(com.mynativemodule.R.drawable.medie)
        } else {
            view.setImageResource(com.mynativemodule.R.drawable.soul_time)
        }
        view.invalidate()
    }

    @ReactProp(name="myArr")
    fun myArr(view: MyView, arr: com.facebook.react.bridge.ReadableArray) {
        Log.d("TAG", "myArr: $arr")
    }
}