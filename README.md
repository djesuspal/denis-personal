# denis.pe

Sitio personal de Denis Jesus Palma Abanto — [www.denis.pe](https://www.denis.pe).

Next.js 16 (App Router, todo estático) · React 19 · Tailwind CSS 4 · desplegado en Vercel al hacer push a `main`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
npm run lint
```

- `lib/site.ts` — nombre, enlaces, correo y navegación en un solo lugar.
- `components/voxel-cube.tsx` — el cubo animado del inicio (canvas, sin video).
- `app/opengraph-image.tsx` — tarjeta para redes, generada en el build con las fuentes de `assets/fonts`.
- `/empresas` y `/blog` siguen publicadas pero fuera de la navegación.
