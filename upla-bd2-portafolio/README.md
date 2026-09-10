# Portafolio — Base de Datos II

Portafolio de trabajos del curso **Base de Datos II**, Escuela Profesional
de Ingeniería de Sistemas y Computación, Universidad Peruana Los Andes (UPLA).

**Autor:** Ricardo Ibarra Vargas

## Estructura del proyecto

```
upla-bd2-portafolio/
├── login.html           # Inicio de sesión (puerta de entrada al sitio)
├── index.html           # Página de inicio
├── unidad1.html         # Unidad I — Semanas 1–4
├── unidad2.html         # Unidad II — Semanas 5–8
├── unidad3.html         # Unidad III — Semanas 9–12
├── unidad4.html         # Unidad IV — Semanas 13–16
├── perfil.html          # Perfil del estudiante
├── css/
│   └── style.css        # Estilos generales del sitio
├── js/
│   ├── auth.js            # Control de acceso (login/logout) y main.js
│   └── main.js
├── assets/
│   └── img/
│       └── logo-upla.png # Escudo institucional (extraído del sílabo oficial)
└── README.md
```

## Inicio de sesión

El login es una simulación del lado del cliente (no hay servidor ni base de
datos de usuarios real): cualquier usuario y contraseña ingresados permiten
entrar. Al enviar el formulario se guarda una bandera en `sessionStorage` y
se redirige a `index.html`; el botón **Cerrar sesión** del menú la borra y
regresa a `login.html`. Todas las páginas internas verifican esa bandera
mediante `js/auth.js` y redirigen al login si no existe.

## Completar las tareas semanales

Cada unidad (`unidad1.html` … `unidad4.html`) tiene una tarjeta por semana
con el texto de marcador de posición *"Aquí va la tarea dejada en la semana
N"*. Reemplázalo directamente en el HTML por el contenido real de cada tarea.

## Publicar en GitHub Pages

1. Sube esta carpeta a un repositorio de GitHub.
2. Ve a **Settings → Pages**.
3. En "Branch", selecciona `main` y la carpeta `/root`.
4. Guarda; el sitio quedará publicado en `https://<usuario>.github.io/<repositorio>/`.
