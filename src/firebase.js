import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Reemplaza estas variables con tu configuración de Firebase
// Obtén esto en: https://console.firebase.google.com
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDEMO_CHANGE_THIS",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "cybercode-demo.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "cybercode-demo",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "cybercode-demo.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:123456789:web:abcdef123456"
};

// INSTRUCCIONES PARA OBTENER TU CONFIGURACIÓN FIREBASE:
// 1. Visita https://console.firebase.google.com
// 2. Crea un nuevo proyecto (o usa uno existente)
// 3. Ve a Project Settings (rueda de engranaje)
// 4. En "General" → "Tu aplicación" → Selecciona </> (Web)
// 5. Copia tu config y reemplaza firebaseConfig arriba
// 6. Alternativamente, crea un archivo .env.local con:
//    REACT_APP_FIREBASE_API_KEY=tu_api_key
//    REACT_APP_FIREBASE_AUTH_DOMAIN=tu_auth_domain
//    REACT_APP_FIREBASE_PROJECT_ID=tu_project_id
//    REACT_APP_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
//    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
//    REACT_APP_FIREBASE_APP_ID=tu_app_id

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
