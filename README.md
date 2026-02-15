# 🔐 CyberCode - Plataforma de Ciberseguridad y Desarrollo

Soluciones de ciberseguridad, desarrollo seguro y consultoría técnica para empresas modernas.

## 📋 Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración Firebase](#configuración-firebase)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [API Endpoints](#api-endpoints)
- [Admin Panel](#admin-panel)

## ✅ Requisitos

- Node.js v16+ instalado
- npm v8+
- Cuenta de Firebase (gratis en https://firebase.google.com)

## 🚀 Instalación

1. **Clonar el repositorio:**
   ```bash
   cd sistema_CYBERCODE
   npm install
   ```

2. **Instalar dependencias del backend:**
   ```bash
   cd backend
   npm install
   cd ..
   ```

3. **Instalar Firebase (si no lo instaló):**
   ```bash
   npm install firebase react-firebase-hooks --legacy-peer-deps
   ```

## 🔥 Configuración Firebase

### Paso 1: Crear Proyecto Firebase

1. Ve a [https://console.firebase.google.com](https://console.firebase.google.com)
2. Haz clic en "Crear un proyecto"
3. Completa los detalles del proyecto (nombre, país)
4. Acepta los términos y crea el proyecto

### Paso 2: Obtener Configuración

1. En la página principal del proyecto, haz clic en **</> (Web)**
2. Dale un nombre a tu aplicación web (ej: "CyberCode Web")
3. Se te mostrará un objeto `firebaseConfig` con los siguientes campos:
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`

### Paso 3: Crear archivo .env.local

1. Copia el contenido de `.env.example`
2. Crea un archivo `.env.local` en la raíz del proyecto
3. Reemplaza los valores con los de tu Firebase:
   ```
   REACT_APP_FIREBASE_API_KEY=tu_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=tu_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=tu_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
   REACT_APP_FIREBASE_APP_ID=tu_app_id
   ```

### Paso 4: Habilitar Google OAuth

1. En Firebase Console, ve a **Authentication** → **Sign-in method**
2. Haz clic en **Google**
3. Habilítalo y selecciona tu proyecto GCP
4. Guarda los cambios

## ▶️ Ejecución

### Terminal 1 - Backend (Puerto 3001):
```bash
cd backend
node server.js
```

### Terminal 2 - Frontend (Puerto 3000):
```bash
npm start
```

Luego, abre [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
sistema_CYBERCODE/
├── src/
│   ├── components/
│   │   ├── Header.js           # Navegación principal
│   │   ├── Hero.js             # Página de inicio
│   │   ├── AuthModal.js        # Login/Registro
│   │   ├── Services.js         # Catálogo de servicios
│   │   ├── CommunityFeed.js    # Red social de desarrolladores
│   │   ├── About.js            # Página acerca de + perfiles
│   │   └── AdminPanel.js       # Panel administrativo
│   ├── firebase.js             # Configuración Firebase
│   ├── App.js                  # Router principal
│   └── index.js                # Punto de entrada
├── backend/
│   ├── routes/
│   │   ├── auth.js             # Autenticación (login/register)
│   │   ├── posts.js            # Posts de la comunidad
│   │   ├── admin.js            # Campañas, descuentos, estadísticas
│   │   └── developers.js       # Perfiles de desarrolladores
│   ├── database.js             # Schema SQLite
│   └── server.js               # Express server
├── package.json                # Dependencias frontend
└── .env.example                # Template de variables de entorno
```

## 🔗 API Endpoints

### Autenticación (`/api/auth`)
```
POST   /api/auth/register     - Crear nueva cuenta
POST   /api/auth/login        - Iniciar sesión
GET    /api/auth/me          - Obtener usuario actual
```

### Posts (`/api/posts`)
```
GET    /api/posts            - Obtener todos los posts
POST   /api/posts            - Crear nuevo post (requiere auth)
POST   /api/posts/:id/like   - Dar like a un post
```

### Admin (`/api/admin`)
```
GET    /api/admin/stats      - Estadísticas (solo admin)
GET    /api/admin/campaigns  - Obtener campañas
POST   /api/admin/campaigns  - Crear campaña
GET    /api/admin/discounts  - Obtener códigos de descuento
POST   /api/admin/discounts  - Crear código de descuento
POST   /api/admin/interactions - Registrar interacción de usuario
```

### Desarrolladores (`/api/developers`)
```
GET    /api/developers       - Obtener todos los desarrolladores
POST   /api/developers       - Crear perfil de desarrollador (admin)
PUT    /api/developers/:id   - Actualizar desarrollador
DELETE /api/developers/:id   - Eliminar desarrollador
```

## 👨‍💼 Admin Panel

Acceso: **Email: di.ck.nina29@gmail.com**

### Funcionalidades:
- **Dashboard**: Estadísticas en tiempo real (usuarios, posts, likes)
- **Campañas**: Crear/editar campañas promocionales con descuentos
- **Códigos de Descuento**: Gestionar códigos para clientes
- **Desarrolladores**: Ver y editar perfiles del equipo

### Para ingresar al panel:
1. Regístrate o inicia sesión
2. Si tu email es `di.ck.nina29@gmail.com`, aparecerá un acceso a "Panel Administrativo"
3. Gestiona campañas, descuentos y developer profiles

## 🎨 Personalización

### Actualizar redes sociales (GitHub):
Edita `src/components/Header.js`:
```javascript
{ icon: FaGithub, url: 'https://github.com/richy1991', color: 'text-gray-800' }
```

### Agregar desarrolladores:
1. Inicia sesión como admin
2. Ve a "Panel Administrativo" → "Desarrolladores"
3. O directamente en base de datos SQLite (`developers` table)

### Cambiar marca/colores:
- Busca "CyberCode" en archivos para cambiar nombre
- Cambia colores Tailwind (`from-cyan-500`, `from-purple-600`, etc.)

## 📊 Base de Datos

### Tablas principales:
- **users**: Usuarios registrados
- **posts**: Posts de la comunidad
- **likes**: Likes en posts
- **comments**: Comentarios en posts
- **campaigns**: Campañas promocionales
- **discounts**: Códigos de descuento
- **developers**: Perfiles de desarrolladores
- **user_interactions**: Tracking de acciones de usuarios

## 🐛 Troubleshooting

### Error: "Cannot find module 'firebase'"
```bash
npm install firebase react-firebase-hooks --legacy-peer-deps
```

### Error: "EADDRINUSE 3001"
El puerto 3001 está en uso. Cambia el puerto en `backend/server.js`:
```javascript
const PORT = process.env.PORT || 3002; // Cambia 3001 a 3002
```

### Error: "CORS"
Asegúrate de que el backend esté corriendo en `http://localhost:3001`

### Firebase no funciona
1. Verifica que `.env.local` esté en la raíz
2. Reinicia `npm start`
3. Comprueba la configuración en Firebase Console

## 🔐 Seguridad

- Las contraseñas se hashean con bcrypt (10 rounds)
- JWT tokens expiran en 1 hora
- Middleware de autenticación en rutas protegidas
- CORS habilitado solo para localhost (desarrollo)

## 📦 Dependencias principales

```json
{
  "react": "^18.2.0",
  "framer-motion": "^10.16.4",
  "tailwindcss": "^3.4.1",
  "firebase": "^latest",
  "react-firebase-hooks": "^latest",
  "react-icons": "^4.12.0",
  "lucide-react": "^0.263.1"
}
```

## 📝 Licencia

© 2026 CyberCode. Todos los derechos reservados.

## 🤝 Contacto

- Email: di.ck.nina29@gmail.com
- GitHub: https://github.com/richy1991

---

**Made with ❤️ by CyberCode Team**
