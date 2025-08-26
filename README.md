# Qlik Frontend (GitHub Pages)

Frontend estático para embeber una app de Qlik Sense Cloud usando Qlik Embed y un backend de tokens en Vercel.

## Pasos

1. Edita `index.html`:
   - Cambia `<TU_TENANT>` → tu tenant Qlik Cloud (ej. `miempresa.eu.qlikcloud.com`).
   - Pon `<APP_ID>` y `<SHEET_ID>` de tu app Qlik.

2. Edita `script.js`:
   - Cambia la URL de fetch a tu backend en Vercel (`https://<tu-proyecto>.vercel.app/api/access-token`).

3. Activa **GitHub Pages** en tu repo (Settings → Pages → Source: main branch → root).

4. Abre tu sitio en: https://<usuario>.github.io/<repo>/
