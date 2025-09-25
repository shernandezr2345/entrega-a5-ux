package com.a5.runningmobile

import android.content.Intent
import android.os.Bundle
import android.widget.ImageButton
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.google.android.material.bottomnavigation.BottomNavigationView

class CarreraTerminadaActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_carrera_terminada)


        val btnBack: ImageButton = findViewById(R.id.btnBack0)
        btnBack.setOnClickListener {
            finish()
        }

        val bottomNav = findViewById<BottomNavigationView>(R.id.bottomNav)
        bottomNav.setOnItemSelectedListener { item ->
            when (item.itemId) {
                R.id.nav_home -> {
                    startActivity(Intent(this, BienvenidoActivity::class.java))
                    true
                }
                R.id.nav_carreras -> {
                    startActivity(Intent(this, CarreraActivity::class.java))
                    true
                }

                else -> false
            }
        }

    }
}