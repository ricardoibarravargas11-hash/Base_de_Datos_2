# Base de Datos II — Portafolio Académico

Portal estático para organizar el material de **Base de Datos II** de Ricardo Ibarra Vargas, Ingeniería de Sistemas, Universidad Peruana Los Andes.

## Secciones
- **Inicio:** presentación y ruta académica.
- **Unidades:** semanas 1–16 agrupadas en cuatro unidades.
- **Progreso:** cobertura dinámica según los archivos publicados.
- **Recursos:** biblioteca con búsqueda por nombre, semana y formato.
- **Semana:** consulta individual de cada semana.
- **Perfil:** información del portafolio.
- **Administrador:** prototipo para publicar múltiples archivos.

## Estructura
Los recursos se almacenan en `semanas/1` hasta `semanas/16`. Se aceptan PDF, JPG, JPEG, PNG y WEBP desde el administrador.

## GitHub Pages
En GitHub: **Settings → Pages → Deploy from a branch → main → /(root)**.

## Seguridad
El administrador actual usa un token introducido manualmente en el navegador para escribir mediante la API de GitHub. No se almacena en el repositorio. Para una versión pública de producción conviene migrar la escritura a OAuth/GitHub App o a un backend/serverless, de modo que ningún token con permisos de escritura quede expuesto al cliente.