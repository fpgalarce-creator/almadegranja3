# Alma de Granja

Sitio e-commerce construido con React, Vite y TailwindCSS para una experiencia moderna y responsiva que refleja un estilo rural premium. Incluye catálogo filtrable, carrito con envío por WhatsApp, modo oscuro y un panel de administración básico.

## Tecnologías
- React + Vite
- TailwindCSS
- React Router
- Context API para carrito, productos y autenticación

## Scripts
- `npm install` — instala dependencias.
- `npm run dev` — inicia el entorno de desarrollo.
- `npm run build` — genera la build lista para producción.
- `npm run preview` — sirve la build localmente.

## Despliegue en Vercel
1. Haz fork o clona el repositorio en tu cuenta.
2. En Vercel, crea un nuevo proyecto e importa este repositorio.
3. Mantén el comando de build por defecto `npm run build` y el directorio de salida `dist`.
4. Despliega y disfruta del sitio responsivo en cualquier dispositivo.

## Notas
- Los productos y el carrito se almacenan en `localStorage` para simular un backend.
- El panel Admin utiliza credenciales por defecto: `admin@almadegranja.cl` / `Admin123`.
- El botón de WhatsApp arma automáticamente el mensaje de pedido con los datos del carrito.
