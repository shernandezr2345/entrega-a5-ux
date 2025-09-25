# RunningWeb

Una aplicación web moderna para el seguimiento y gestión de actividades de running, construida con Angular 19.

## 🏃‍♂️ Características

- **Gestión de Metas**: Crea, edita y monitorea tus objetivos de running
- **Sistema de Alertas**: Configura notificaciones personalizadas para tus entrenamientos
- **Perfil de Usuario**: Administra tu información personal y datos deportivos
- **Historial de Actividades**: Visualiza tu progreso y estadísticas
- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil

## 🚀 Tecnologías

- **Framework**: Angular 19.1.6
- **Lenguaje**: TypeScript
- **Estilos**: SCSS con design tokens
- **Fuente**: Roboto
- **Arquitectura**: Componentes standalone

## 📁 Estructura del Proyecto

```
src/app/
├── components/
│   ├── alertas/          # Gestión de alertas
│   ├── perfil/           # Perfil de usuario
│   ├── navegacion/       # Componentes de navegación
│   ├── crear-meta/       # Creación de una meta
│   ├── meta-sugerida/    # Meta sugerida
│   ├── metas/             # Ver Meta
│   └── compartido/       # Componentes reutilizables
├── tokens.scss           # Design tokens y variables
└── styles.css           # Estilos globales
```

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd RunningWeb
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   ng serve
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4200
   ```

## 📱 Funcionalidades


### Sistema de Alertas
- Alertas por tiempo o distancia
- Notificaciones personalizables
- Plantillas de mensajes
- Control de vibración y sonido

### Perfil de Usuario
- Datos básicos (nombre, contacto, dirección)
- Información deportiva (nivel, marca personal, entrenador)
- Configuración de preferencias

## 🎨 Design System

La aplicación utiliza un sistema de design consistente con:

- **Colores principales**: 
  - Primary Purple: `#624E88`
  - Light Purple: `#8967B3`
  - Secondary Pink: `#CB80AB`
  - Accent Yellow: `#E6D9A2`

- **Tipografía**: Roboto con diferentes pesos y tamaños
- **Componentes reutilizables**: Cards, botones, formularios
- **Layout responsivo**: Grid y flexbox

## 🔧 Scripts Disponibles

```bash
# Desarrollo
ng serve

# Build de producción
ng build

# Ejecutar tests
ng test

# Linting
ng lint

# Generar componente
ng generate component nombre-componente

```

## 🌐 Responsive Design

- **Desktop**: Layout completo con sidebar
- **Tablet**: Adaptación de columnas y espaciado
- **Mobile**: Navegación colapsada y layout vertical

```




## 👥 Equipo

Eduard Bernal - e.bernalo@uniandes.edu.co 

Pantalldas desarrolladas: 1. Listado de alertas
                          2. Creación de alertas
                          3. Perfil

Steven Hernandez Rios - s.hernandezr2345@uniandes.edu.co 

Pantalldas desarrolladas: 1. Crear meta
                          2. Meta sugerida
                          3. Meta

---

**RunningWeb** - Tu compañero digital para alcanzar tus metas de running 🏃‍♂️💪
