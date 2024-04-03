package com.mynativemodule

import android.content.Context
import android.graphics.Canvas
import android.os.Build
import androidx.annotation.RequiresApi
import androidx.appcompat.content.res.AppCompatResources
import androidx.appcompat.widget.AppCompatImageView

class MyView(context: Context) : AppCompatImageView(context) {
    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
//        setImageDrawable(AppCompatResources.getDrawable(context, R.drawable.medie))
//        scaleType = ScaleType.CENTER_INSIDE
    }

    @RequiresApi(Build.VERSION_CODES.M)
    fun myBackGroundColor(color: Int) {
        setBackgroundColor(context.getColor(color))
    }
}