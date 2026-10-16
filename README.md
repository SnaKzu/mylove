# Para Valentina, mi luz en la noche

Una carta de amor interactiva, música y una progresión visual desde la noche hacia la esperanza.

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Abre `http://localhost:3000` en el navegador.

## Producción

```bash
pnpm build
pnpm start
```

El proyecto está preparado para desplegarse en Vercel como una aplicación Next.js con App Router. El reproductor usa el embed oficial de Spotify para “To the Wilder” de Woodkid y no reproduce audio automáticamente.

## Personalización

El contenido principal está organizado al inicio de `app/page.tsx` en los arreglos `letterParagraphs` y `promises`. La identidad visual, responsive y las animaciones viven en `app/globals.css`.
