# RunningMobile

Aplicación Android desarrollada en Kotlin como prototipo de una app para registrar y dar seguimiento a carreras.
Este proyecto no incluye lógica de negocio ni persistencia de datos, se centra en la navegación de pantallas (Activities) y el diseño de la interfaz de usuario basado en Material Design.

## Estructura del Proyecto  

```text
app/
│── manifests/
│   └── AndroidManifest.xml        # Configuración de Activities y permisos
│
│── java/com.a5.runningmobile/     # Código fuente en Kotlin
│   ├── MainActivity.kt             # Pantalla principal con BottomNavigationView
│   ├── LoginActivity.kt            # Pantalla de login
│   ├── BienvenidoActivity.kt       # Pantalla de bienvenida
│   ├── CarreraActivity.kt          # Configuración de carrera
│   ├── CarreraEnCursoActivity.kt   # Vista de carrera en curso con métricas
│   ├── CarreraTerminaActivity.kt   # Vista de resumen al finalizar carrera
│
│── res/                           # Recursos del proyecto
│   ├── layout/                     # Vistas en XML
│   │   ├── activity_main.xml
│   │   ├── activity_login.xml
│   │   ├── activity_bienvenido.xml
│   │   ├── activity_carrera.xml
│   │   ├── activity_carrera_en_curso.xml
│   │   └── activity_carrera_terminada.xml
│   ├── drawable/                   # Íconos, botones, backgrounds
│   ├── menu/                       # Menús de navegación
│   ├── mipmap/                     # Icono de la app
│   ├── values/                     # Colores, estilos y strings
│   │   ├── colors.xml
│   │   ├── styles.xml
│   │   └── strings.xml
```

## Tecnologías Utilizadas  

- **Lenguaje:** Kotlin  
- **Entorno:** Android Studio (Gradle como sistema de build)  
- **UI Framework:** Android XML Layouts  
- **Componentes de Material Design:**  
  - BottomNavigationView  
  - FloatingActionButton  
  - MaterialButton  
  - Spinner / AutoCompleteTextView (para inputs desplegables)  
- **Navegación:** Intents entre Activities  


---

## Instalación y Ejecución  

1. Clona el repositorio:  
   ```bash
   git clone https://github.com/shernandezr2345/entrega-a5-ux.git
   ```

2. Ingresa a la carpeta `RunningMobile`.  

3. Abre el proyecto en **Android Studio**.  

4. Sincroniza dependencias de Gradle:  
   ```bash
   ./gradlew build
   ```

5. Conecta un dispositivo Android físico **o** inicia un Emulador (AVD).  

6. Ejecuta la aplicación:  
   ```bash
   ./gradlew installDebug
   ```  

---

## Funcionalidades Principales (Prototipo)  

- **Login** → Pantalla inicial de ingreso.  
- **Bienvenida** → Pantalla introductoria.  
 
- **Navegación inferior** → Menú con Inicio, Carreras, Alertas y Perfil.  


Eduard Bernal - e.bernalo@uniandes.edu.co 

Pantalldas desarrolladas:

- **Carrera** → Configuración de la carrera (modo caminando, cicla, otro).  
- **Carrera en curso** → Visualización de métricas (tiempo, ritmo, duración) y un mapa.  
- **Carrera terminada** → Resumen final. 
---


