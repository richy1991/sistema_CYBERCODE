# 🚀 Guía de Despliegue - CyberCode

Instrucciones para desplegar CyberCode en producción.

## 📋 Tabla de Contenidos

1. [Opciones de hospedaje](#opciones-de-hospedaje)
2. [Despliegue en Vercel (Frontend)](#despliegue-en-vercel-frontend)
3. [Despliegue en Heroku (Backend)](#despliegue-en-heroku-backend)
4. [Despliegue en Firebase Hosting](#despliegue-en-firebase-hosting)
5. [Configuración de dominio](#configuración-de-dominio)

---

## Opciones de Hospedaje

### Frontend
- **Vercel** ⭐ (Recomendado - $0-20 USD/mes)
- **Netlify** ($0-20 USD/mes)
- **Firebase Hosting** (Gratis con límites)
- **AWS Amplify** ($0.15+ por GB)

### Backend
- **Heroku** ❌ (Cerrado)
- **Railway** ⭐ (Recomendado - $5+ USD/mes)
- **Render** ($7+ USD/mes)
- **AWS EC2** ($10+ USD/mes)
- **DigitalOcean** ($5+ USD/mes)
- **Google Cloud Run** (Pago por uso)

### Base de Datos
- **Firebase Firestore** ⭐ (Gratis con límites)
- **MongoDB Atlas** (Gratis con límites)
- **Railway PostgreSQL** ($15+ USD/mes)

---

## Despliegue en Vercel (Frontend) ⭐

### Paso 1: Preparar el código
```bash
# En la raíz del proyecto
npm run build
```

### Paso 2: Crear cuenta Vercel
1. Ve a https://vercel.com
2. Haz clic en "Sign Up"
3. Elige "GitHub" y conecta tu repo

### Paso 3: Configurar variables de entorno
1. En Vercel Dashboard → Settings → Environment Variables
2. Agrega las variables de Firebase:
   ```
   REACT_APP_FIREBASE_API_KEY = tu_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN = tu_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID = tu_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET = tu_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID = tu_sender_id
   REACT_APP_FIREBASE_APP_ID = tu_app_id
   REACT_APP_BACKEND_URL = https://tu-backend.com
   ```

### Paso 4: Desplegar
```bash
# Usa el CLI de Vercel
npm i -g vercel
vercel
```

**Resultado**: Tu frontend estará en `https://tu-proyecto.vercel.app`

---

## Despliegue en Railway (Backend) ⭐

### Paso 1: Crear cuenta Railway
1. Ve a https://railway.app
2. Haz clic en "Login with GitHub"
3. Conecta tu repositorio

### Paso 2: Crear un nuevo proyecto
1. Haz clic en "Create a new project"
2. Selecciona "Deploy from GitHub"
3. Elige el repositorio `sistema_CYBERCODE`

### Paso 3: Configurar variables de entorno
En la sección "Variables":
```
NODE_ENV=production
PORT=3001
```

### Paso 4: Configurar el start script
Railway detectará automáticamente `npm start` en `backend/`

Para especificar qué ejecutar, crea un archivo `Procfile`:
```
web: cd backend && npm start
```

### Paso 5: Desplegar
Railway desplegará automáticamente cuando hagas push a GitHub.

**Resultado**: Tu backend estará en `https://tu-proyecto.railway.app`

---

## Alternativa: Despliegue en Heroku (Legacy)

### Cuenta de Heroku con código de crédito
```bash
# Instalar Heroku CLI
npm install -g heroku

# Crear aplicación
heroku create tu-app-nombre

# Configurar variables de entorno
heroku config:set NODE_ENV=production

# Desplegar
git push heroku main
```

---

## Configuración CORS para Producción

Actualiza `backend/server.js`:

```javascript
const cors = require('cors');

const allowedOrigins = [
  'https://tu-dominio.com',
  'https://www.tu-dominio.com',
  'http://localhost:3000' // Desarrollo
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
```

---

## Configuración de Dominio Personalizado

### En Vercel (Frontend)
1. Dashboard → Settings → Domains
2. Agrega `www.tu-dominio.com`
3. Sigue las instrucciones de DNS
4. Vercel proporciona registros CNAME/ANAME

### En Railway (Backend)
1. Project Settings → Domains
2. Agrega `api.tu-dominio.com`
3. Copia los registros DNS
4. Configura en tu proveedor de dominios

### Proveedor de Dominios
- Recomienda: **Namecheap** o **Google Domains**

Registros DNS típicos:
```
# Frontend (Vercel)
www.tu-dominio.com  CNAME  cname.vercel-dns.com

# Backend (Railway)
api.tu-dominio.com  CNAME  tu-proyecto.railway.app
```

---

## Base de Datos en Producción

### Opción 1: PostgreSQL en Railway
1. En Railway Project, haz clic en "Add Service"
2. Selecciona "PostgreSQL"
3. Railway configura automáticamente `DATABASE_URL`

Adapta `database.js` para PostgreSQL:
```javascript
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);
```

### Opción 2: MongoDB Atlas (NoSQL)
1. Ve a https://www.mongodb.com/cloud/atlas
2. Crea un cluster gratuito
3. Obtén la cadena de conexión
4. Usa `mongoose` para conectar

### Opción 3: Firebase Firestore
```javascript
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
```

---

## Script de Despliegue Automático

Crea `deploy.sh`:
```bash
#!/bin/bash

echo "🚀 Desplegando CyberCode..."

# 1. Build frontend
echo "📦 Compilando frontend..."
npm run build

# 2. Push a GitHub
echo "📤 Empujando cambios..."
git add .
git commit -m "Deploy: $(date)"
git push origin main

# 3. Vercel desplegará automáticamente

# 4. Railway desplegará automáticamente

echo "✅ ¡Despliegue completado!"
echo "🌐 Frontend: https://tu-dominio.com"
echo "🔗 Backend API: https://api.tu-dominio.com"
```

---

## Checklist de Despliegue

- [ ] Firebase proyecto configurado
- [ ] Variables de entorno en Vercel
- [ ] Variables de entorno en Railway
- [ ] CORS configurado correctamente
- [ ] Base de datos en producción
- [ ] Dominio personalizado apuntando a Vercel
- [ ] API endpoint apuntando a Railway
- [ ] HTTPS habilitado (automático en Vercel/Railway)
- [ ] Email de admin verificado
- [ ] Datos iniciales cargados en producción

---

## Monitoreo en Producción

### Logs de Vercel
```bash
vercel logs tu-proyecto
```

### Logs de Railway
En el dashboard de Railway → Logs

### Monitoreo de Base de Datos
- MongoDB Atlas: Dashboard → Monitoring
- PostgreSQL: Railway Dashboard → Logs
- Firebase: Firebase Console → Analytics

---

## Optimización de Rendimiento

### Frontend
```bash
# Analizar tamaño del bundle
npm install -g analyze
npm run build -- --analyze
```

### Backend
- Implementar caché con Redis
- Usar CDN para assets estáticos
- Optimizar queries de BD

---

## Seguridad en Producción

1. **JWT Secret**: Usa una cadena aleatoria fuerte
2. **HTTPS**: Vercel y Railway lo habilitan automáticamente
3. **CORS**: Whitelist de dominios permitidos
4. **Rate Limiting**: Implementa con `express-rate-limit`
5. **Validación**: Valida todos los inputs
6. **Secrets**: Usa variables de entorno para claves sensibles

---

## Soporte y Ayuda

- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://railway.app/docs
- **Firebase Deploy**: https://firebase.google.com/docs/hosting/quickstart

---

**¡Listo para producción! 🚀**
