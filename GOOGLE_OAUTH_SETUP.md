# Configuración de Google OAuth en CyberCode

## ¿Por qué Google OAuth?
Permite que los usuarios se registren/inicien sesión usando su cuenta de Google sin recordar contraseñas adicionales.

## Pasos para Configurar Google OAuth

### 1. Crear Proyecto en Google Cloud Console
1. Ve a https://console.cloud.google.com
2. Haz clic en el selector de proyecto (arriba a la izquierda)
3. Haz clic en "NUEVO PROYECTO"
4. Nombre: "CyberCode"
5. Haz clic en "CREAR"

### 2. Habilitar Google+ API
1. En la barra de búsqueda, busca "Google+ API"
2. Selecciona "Google+ API"
3. Haz clic en "HABILITAR"

### 3. Crear Credenciales OAuth
1. Ve a "Credenciales" en el menú izquierdo
2. Haz clic en "CREAR CREDENCIALES"
3. Selecciona "OAuth 2.0 Client ID"
4. Selecciona "Aplicación web"
5. En "URIs autorizados":
   - Desarrollo: http://localhost:3000
   - Producción: https://tu-dominio.com

### 4. Obtener el Client ID
1. Se mostrará un popup con "Client ID" y "Client Secret"
2. Copia el **Client ID** (es lo que necesitas)

### 5. Configurar en CyberCode
1. Copia el archivo `.env.local.example` a `.env.local`
2. Reemplaza `YOUR_GOOGLE_CLIENT_ID_HERE` con tu Client ID real
3. Reinicia el servidor: npm start

## Archivos a Crear
```
.env.local
```

Contenido:
```
REACT_APP_GOOGLE_CLIENT_ID=123456789-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com
REACT_APP_API_URL=http://localhost:3001
```

## Verificar que Funciona
1. En navegador, abre http://localhost:3000
2. Haz clic en "Iniciar Sesión"
3. Deberías ver el botón de "Google Sign-In"
4. Haz clic y selecciona tu cuenta Google
5. ¡Listo! Deberías estar registrado

## Solucionar Problemas

### Error: "popup_blocked_by_browser"
- Asegúrate de permitir popups en tu navegador

### Error: "invalid_client"
- El Client ID es incorrecto o no está en `.env.local`
- Verifica que reiniciaste npm start después de cambiar .env.local

### No veo el botón de Google
- Asegúrate de que `.env.local` existe y tiene el Client ID
- Verifica en la consola del navegador (F12) si hay errores

## FAQ

**P: ¿Puedo usar OAuth sin crear un proyecto de Google?**
A: No, necesitas un Client ID real. Es gratis crear uno.

**P: ¿Es seguro compartir mi Client ID?**
A: Sí, es público. El secreto (Secret) es lo que debe mantenerse privado.

**P: ¿Qué datos se obtienen de Google?**
A: Solo: email, nombre, foto de perfil. Nada más.

**P: ¿Los usuarios necesitan confirmar email?**
A: No, Google ya verificó que el email es válido.

## Siguientes Pasos
- [ ] Crear proyecto en Google Cloud Console
- [ ] Habilitar Google+ API
- [ ] Crear OAuth Client ID
- [ ] Copiar .env.local.example a .env.local
- [ ] Pegar Client ID en .env.local
- [ ] Reiniciar: npm start
- [ ] Probar botón de Google

¡Estás listo! 🚀
