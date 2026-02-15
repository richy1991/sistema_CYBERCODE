# 🔐 Configuración de Google OAuth para CyberCode

## ¿Qué es Google OAuth?
Es un sistema de autenticación que permite que los usuarios se registren/logueen usando su cuenta de Google sin crear una cuenta nueva.

---

## 📍 Paso 1: Accede a Google Cloud Console

1. Abre: **https://console.cloud.google.com/**
2. Si necesitas, crea una cuenta de Google o inicia sesión

---

## 📍 Paso 2: Crea un Nuevo Proyecto

1. En la parte superior, haz click en el selector de proyectos
2. Click en **"NEW PROJECT"**
3. Nombre: **CyberCode**
4. Empresa/Ubicación: Deja en blanco o agrega tu empresa
5. Click en **"CREATE"**
6. Espera a que se cree (30 segundos aprox)

---

## 📍 Paso 3: Habilita Google+ API

1. En la barra de búsqueda (parte superior), escribe: **Google+ API**
2. Click en el resultado "Google+ API"
3. Click en el botón azul **"ENABLE"**
4. Espera a que se habilite

---

## 📍 Paso 4: Crea Credenciales OAuth 2.0

1. En el menú izquierdo, ve a **"Credentials"** (Credenciales)
2. Click en el botón azul **"Create Credentials"** (arriba a la derecha)
3. Selecciona **"OAuth 2.0 Client ID"**

### Si aparece "Configure OAuth consent screen":
1. Click en **"External"** como tipo de usuario
2. Click **"CREATE"**
3. Completa el formulario:
   - **App name**: CyberCode
   - **User support email**: tu@email.com
   - **Developer contact**: tu@email.com
4. Click **"SAVE AND CONTINUE"**
5. En "Scopes", click **"ADD OR REMOVE SCOPES"**
6. Busca y selecciona:
   - `userinfo.email`
   - `userinfo.profile`
7. Click **"UPDATE"** y luego **"SAVE AND CONTINUE"**
8. Vuelve a Credentials

---

## 📍 Paso 5: Crea el Cliente OAuth Web

1. Click en **"Create Credentials"** nuevamente
2. Selecciona **"OAuth 2.0 Client ID"**
3. **Application type**: selecciona **"Web application"**
4. **Name**: CyberCode

### Agrega Authorized JavaScript origins:
Haz click en **"ADD URI"** para cada uno:
- `http://localhost:3000`
- `http://localhost:3001`
- `https://cybercodeonline.com` (cuando tengas dominio)
- `https://tudominio.com` (si tienes otro)

### Agrega Authorized redirect URIs:
Haz click en **"ADD URI"** para cada uno:
- `http://localhost:3000`
- `http://localhost:3000/`
- `https://cybercodeonline.com`
- `https://cybercodeonline.com/`

5. Click **"CREATE"**

---

## 📍 Paso 6: Copia tu Client ID

Aparecerá una ventana emergente con:
- **Client ID** ← **COPIA ESTO**
- **Client Secret** ← Mantén esto seguro

---

## 📝 Paso 7: Configura tu aplicación CyberCode

### Opción A: Desarrollo Local

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Busca esta línea:
   ```
   REACT_APP_GOOGLE_CLIENT_ID=TU_GOOGLE_CLIENT_ID_AQUI
   ```
3. Reemplaza `TU_GOOGLE_CLIENT_ID_AQUI` con tu Client ID real
4. **Guarda el archivo**
5. Reinicia tu servidor (npm start)

### Opción B: Vercel (Producción)

1. Abre tu proyecto en Vercel: https://vercel.com/dashboard
2. Selecciona **sistema_CYBERCODE**
3. Click en **"Settings"**
4. Click en **"Environment Variables"**
5. Agrega una nueva variable:
   - **Name**: `REACT_APP_GOOGLE_CLIENT_ID`
   - **Value**: Tu Client ID (pégalo aquí)
   - Click **"Save"**
6. Vercel redesplegará automáticamente

---

## ✅ Verificación

Una vez configurado, en tu aplicación:
- ✓ El botón "Sign in with Google" debería funcionar
- ✓ Los usuarios pueden registrarse con Google
- ✓ La información del usuario se carga correctamente

---

## 🔒 Seguridad

**IMPORTANTE:**
- *Nunca* compartas tu **Client Secret** en público
- El **Client ID** sí se puede compartir (está en URLs públicas)
- En `.env.local`, solo necesitas el **Client ID**, no el Secret
- Para el backend, si lo necesitas, usa un archivo `.env` separado

---

## 🐛 Solución de problemas

### Error: "The OAuth client was not found"
- Verifica que hayas copiado correctamente el Client ID
- Verifica que está en `.env.local`
- Reinicia el servidor

### Error: "Error 401: invalid_client"
- El Client ID es incorrecto
- Cópialo nuevamente de Google Cloud Console
- Asegúrate de que no tengas espacios extras

### El botón de Google no aparece
- Verifica que `@react-oauth/google` está instalado (`npm list @react-oauth/google`)
- Verifica que tu Client ID está en `.env.local`

---

## 📚 Documentación oficial
- Google OAuth: https://developers.google.com/identity/protocols/oauth2
- React OAuth Google: https://github.com/react-oauth/google

---

**¿Necesitas ayuda?** Contacta en: contacto@cybercode.com
