package com.managrsphere.plugins.applemaps

import android.util.Log

class AppleMaps {

    fun echo(value: String?): String? {
        Log.i("Echo", value ?: "null")

        return value
    }
}
