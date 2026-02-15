# 🚀 CyberCode - Quick Start Guide para Windows
# Guía rápida de inicio para desarrolladores

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║      🔐 CyberCode - Guía Rápida de Inicio                 ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

Write-Host "📋 PASO 1: Configurar Firebase" -ForegroundColor Green
Write-Host "================================"
Write-Host ""
Write-Host "1. Ve a https://console.firebase.google.com"
Write-Host "2. Crea un nuevo proyecto (o usa uno existente)"
Write-Host "3. En Project Settings (⚙️) → General → Tu aplicación"
Write-Host "4. Haz clic en </> (Web) y copia la configuración"
Write-Host "5. Crea archivo .env.local en la raíz del proyecto"
Write-Host "6. Pega tu configuración de Firebase:"
Write-Host ""
Write-Host "   REACT_APP_FIREBASE_API_KEY=..." -ForegroundColor Yellow
Write-Host "   REACT_APP_FIREBASE_AUTH_DOMAIN=..."
Write-Host "   REACT_APP_FIREBASE_PROJECT_ID=..."
Write-Host "   REACT_APP_FIREBASE_STORAGE_BUCKET=..."
Write-Host "   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=..."
Write-Host "   REACT_APP_FIREBASE_APP_ID=..."
Write-Host ""
Write-Host "7. En Firebase Console → Authentication → Habilita Google Sign-In"
Write-Host ""
Write-Host "✅ Firebase configurado!" -ForegroundColor Green
Write-Host ""

Write-Host "📦 PASO 2: Instalar dependencias" -ForegroundColor Green
Write-Host "================================="
Write-Host ""
Write-Host "Ejecuta en terminnal:"
Write-Host "  > npm install" -ForegroundColor Yellow
Write-Host "  > cd backend && npm install && cd .."
Write-Host ""
Write-Host "✅ Dependencias instaladas!" -ForegroundColor Green
Write-Host ""

Write-Host "💾 PASO 3: Inicializar Base de Datos" -ForegroundColor Green
Write-Host "===================================="
Write-Host ""
Write-Host "1. Abre PowerShell/CMD en la carpeta 'backend'"
Write-Host "   > cd backend" -ForegroundColor Yellow
Write-Host ""
Write-Host "2. Ejecuta el script de inicialización:"
Write-Host "   > npm run init-data" -ForegroundColor Yellow
Write-Host ""
Write-Host "Esto creará:"
Write-Host "  • 2 Desarrolladores de ejemplo"
Write-Host "  • 3 Campañas promocionales"
Write-Host "  • 4 Códigos de descuento"
Write-Host ""
Write-Host "✅ Base de datos inicializada!" -ForegroundColor Green
Write-Host ""

Write-Host "▶️  PASO 4: Ejecutar el Proyecto" -ForegroundColor Green
Write-Host "==============================="
Write-Host ""
Write-Host "Terminal 1 - Backend (Puerto 3001):" -ForegroundColor Cyan
Write-Host "  > cd backend" -ForegroundColor Yellow
Write-Host "  > npm start"
Write-Host ""
Write-Host "Terminal 2 - Frontend (Puerto 3000):" -ForegroundColor Cyan
Write-Host "  > npm start" -ForegroundColor Yellow
Write-Host ""
Write-Host "Luego abre: http://localhost:3000" -ForegroundColor Magenta
Write-Host ""
Write-Host "✅ ¡Sistema ejecutándose!" -ForegroundColor Green
Write-Host ""

Write-Host "👤 PASO 5: Acceso de Admin" -ForegroundColor Green
Write-Host "========================="
Write-Host ""
Write-Host "Email admin: di.ck.nina29@gmail.com" -ForegroundColor Yellow
Write-Host "Contraseña: (Crea una cuenta con este email)"
Write-Host ""
Write-Host "Características admin:"
Write-Host "  • Dashboard con estadísticas"
Write-Host "  • Gestionar campañas"
Write-Host "  • Crear códigos de descuento"
Write-Host "  • Editar perfiles de desarrolladores"
Write-Host ""

Write-Host "📱 PASO 6: Navegación" -ForegroundColor Green
Write-Host "===================="
Write-Host ""
Write-Host "Menu principal:"
Write-Host "  • Inicio: Página principal con hero section"
Write-Host "  • Servicios: Catálogo de servicios"
Write-Host "  • Comunidad: Red social de desarrolladores"
Write-Host "  • Acerca de: Información y equipo"
Write-Host "  • Admin: Panel administrativo (solo admin)"
Write-Host ""

Write-Host "🔗 URLS ÚTILES" -ForegroundColor Green
Write-Host "============="
Write-Host ""
Write-Host "Frontend:     http://localhost:3000" -ForegroundColor Cyan
Write-Host "Backend:      http://localhost:3001" -ForegroundColor Cyan
Write-Host "Firebase:     https://console.firebase.google.com" -ForegroundColor Cyan
Write-Host "GitHub Code:  https://github.com/richy1991" -ForegroundColor Cyan
Write-Host ""

Write-Host "⚠️  TROUBLESHOOTING" -ForegroundColor Red
Write-Host "=================="
Write-Host ""
Write-Host "❌ Puerto 3000/3001 en uso:"
Write-Host "   Cambia el puerto en package.json o variable PORT"
Write-Host ""
Write-Host "❌ Firebase no funciona:"
Write-Host "   Verifica que .env.local esté en la raíz"
Write-Host "   Reinicia: npm start"
Write-Host ""
Write-Host "❌ Error CORS:"
Write-Host "   Asegúrate de que backend está en http://localhost:3001"
Write-Host ""
Write-Host "❌ npm install falla:"
Write-Host "   npm cache clean --force" -ForegroundColor Yellow
Write-Host "   npm install --legacy-peer-deps"
Write-Host ""

Write-Host "📚 DOCUMENTACIÓN" -ForegroundColor Green
Write-Host "================"
Write-Host "Lee README.md para más información"
Write-Host ""

Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  ✨ ¡Listo para comenzar! ✨                              ║" -ForegroundColor Cyan
Write-Host "║                                                            ║" -ForegroundColor Cyan
Write-Host "║  Cualquier duda: di.ck.nina29@gmail.com                   ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan

Write-Host ""
Write-Host "Presiona cualquier tecla para continuar..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
