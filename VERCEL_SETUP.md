# 🚀 Configuración de Vercel para CyberCode

## 📦 Deployment en Vercel

Tu aplicación está lista para deployar en Vercel. Sigue estos pasos:

---

## 🔐 Configurar Variables de Entorno (IMPORTANTE)

### Método 1: Desde el Dashboard de Vercel (Recomendado)

1. **Accede a Vercel Dashboard**
   - Ve a: https://vercel.com/dashboard
   - Inicia sesión si es necesario

2. **Selecciona tu proyecto**
   - Busca y selecciona: `sistema_CYBERCODE`

3. **Ve a Settings**
   - Click en la pestaña **"Settings"** (arriba)

4. **Configura Environment Variables**
   - En el menú izquierdo, click en **"Environment Variables"**
   - Click en **"Add New"**

5. **Agrega tu Google Client ID**
   ```
   Name:  REACT_APP_GOOGLE_CLIENT_ID
   Value: 1078859007075-5av3e0lt4693gjvm8cf3ku2pd9oc9uvl.apps.googleusercontent.com
   ```
   
   **Importante:** Marca todas las opciones:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

6. **Guarda y redeploy**
   - Click **"Save"**
   - Vercel redesplegará automáticamente

---

### Método 2: Usando vercel.json (Ya configurado)

El archivo `vercel.json` ya contiene tu Client ID configurado. Vercel lo detectará automáticamente al hacer deploy.

**Ventaja:** No necesitas configurar manualmente en el dashboard.
**Desventaja:** El Client ID queda visible en el repositorio público (aunque esto es aceptable para Client IDs).

---

## 🌐 URLs Autorizadas en Google Cloud Console

Asegúrate de que estas URLs están configuradas en tu Google Cloud Console:

### Authorized JavaScript origins:
- `http://localhost:3000`
- `http://localhost:3001`
- `https://tu-proyecto.vercel.app`
- `https://cybercodeonline.com` (si tienes dominio personalizado)

### Authorized redirect URIs:
- `http://localhost:3000`
- `http://localhost:3000/`
- `https://tu-proyecto.vercel.app`
- `https://tu-proyecto.vercel.app/`
- `https://cybercodeonline.com`
- `https://cybercodeonline.com/`

---

## 🔄 Proceso de Deploy

### Primera vez (desde GitHub):

1. **Conecta tu repositorio**
   - Ve a https://vercel.com/new
   - Selecciona tu repositorio de GitHub: `sistema_CYBERCODE`
   - Click "Import"

2. **Configura el proyecto**
   - Framework Preset: **Create React App**
   - Root Directory: `./` (raíz)
   - Build Command: `npm run build`
   - Output Directory: `build`

3. **Deploy**
   - Click "Deploy"
   - Espera a que termine (2-3 minutos)

### Deploys subsecuentes:

Cada vez que hagas `git push` a la rama `main`, Vercel automáticamente:
1. Detecta el cambio
2. Hace build del proyecto
3. Deploya la nueva versión

---

## 🐛 Solución de Problemas

### El botón de Google no funciona en producción

**Causa:** Las URLs de Vercel no están autorizadas en Google Cloud Console.

**Solución:**
1. Ve a https://console.cloud.google.com
2. Abre tu proyecto CyberCode
3. Ve a Credentials
4. Edita tu OAuth 2.0 Client ID
5. Agrega las URLs de Vercel (ver sección "URLs Autorizadas" arriba)

### Error: "REACT_APP_GOOGLE_CLIENT_ID is undefined"

**Causa:** La variable de entorno no está configurada en Vercel.

**Solución:**
1. Ve a Settings > Environment Variables en Vercel
2. Verifica que `REACT_APP_GOOGLE_CLIENT_ID` está configurado
3. Redeploy el proyecto manualmente

### Build falla con error de dependencias

**Causa:** Falta alguna dependencia en `package.json`.

**Solución:**
1. Verifica que todas las dependencias estén en `package.json`:
   - `@react-oauth/google`
   - `react-icons`
   - `framer-motion`
   - `lucide-react`
2. Haz commit y push

---

## 📊 Monitoreo

Después del deploy, verifica:
- ✅ La aplicación carga correctamente
- ✅ El botón de Google aparece
- ✅ El login con Google funciona
- ✅ Los posts se cargan (si tienes backend)

---

## 🔗 URLs Importantes

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Google Cloud Console:** https://console.cloud.google.com
- **Tu Proyecto:** https://github.com/richy1991/sistema_CYBERCODE

---

## 📝 Notas

- El backend (Express + SQLite) **NO** se deploya en Vercel (solo frontend)
- Para el backend, considera usar:
  - Railway (https://railway.app)
  - Render (https://render.com)
  - Heroku (https://heroku.com)

- Si necesitas el backend en producción, contacta para ayuda con la configuración.

---

**¿Problemas?** Contacta en: contacto@cybercode.com
