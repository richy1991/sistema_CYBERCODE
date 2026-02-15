# Script de Demostración - Cómo Configurar Google OAuth en CyberCode
# Ejecuta este script para obtener instrucciones paso a paso

Write-Host "╔════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   CONFIGURACIÓN DE GOOGLE OAUTH EN CYBERCODE                   ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan

Write-Host "`n📋 PASO 1: Crear Proyecto en Google Cloud Console" -ForegroundColor Yellow
Write-Host "─────────────────────────────────────────────────" -ForegroundColor Gray
Write-Host "1. Abre: https://console.cloud.google.com" -ForegroundColor White
Write-Host "2. Haz clic en 'Seleccionar un proyecto' (arriba izquierda)" -ForegroundColor White
Write-Host "3. Haz clic en 'NUEVO PROYECTO'" -ForegroundColor White
Write-Host "4. Nombre del proyecto: CyberCode" -ForegroundColor White
Write-Host "5. Haz clic en 'CREAR'" -ForegroundColor White

Write-Host "`n📋 PASO 2: Habilitar Google+ API" -ForegroundColor Yellow
Write-Host "─────────────────────────────────────────────────" -ForegroundColor Gray
Write-Host "1. En GoogleCloud Console, busca 'Google+ API'" -ForegroundColor White
Write-Host "2. Selecciona 'Google+ API'" -ForegroundColor White
Write-Host "3. Haz clic en 'HABILITAR'" -ForegroundColor White

Write-Host "`n📋 PASO 3: Crear OAuth Credentials" -ForegroundColor Yellow
Write-Host "─────────────────────────────────────────────────" -ForegroundColor Gray
Write-Host "1. Ve al menú 'Credenciales' (izquierda)" -ForegroundColor White
Write-Host "2. Haz clic en 'CREAR CREDENCIALES'" -ForegroundColor White
Write-Host "3. Selecciona 'OAuth 2.0 Client ID'" -ForegroundColor White
Write-Host "4. Selecciona tipo: 'Aplicación web'" -ForegroundColor White

Write-Host "`n📋 PASO 4: Configurar URLs Autorizados" -ForegroundColor Yellow
Write-Host "─────────────────────────────────────────────────" -ForegroundColor Gray
Write-Host "En la sección 'URIs autorizados', agrega:" -ForegroundColor White
Write-Host "  • http://localhost:3000" -ForegroundColor Cyan
Write-Host "  • http://localhost:3000/auth/callback" -ForegroundColor Cyan
Write-Host "  • https://tu-dominio.com (para producción)" -ForegroundColor Cyan

Write-Host "`n📋 PASO 5: Copiar el Client ID" -ForegroundColor Yellow
Write-Host "─────────────────────────────────────────────────" -ForegroundColor Gray
Write-Host "1. Se mostrará un popup con ✅ Client ID 👈 COPIA ESTE" -ForegroundColor White
Write-Host "2. También verás 'Client Secret' (NO lo compartas)" -ForegroundColor Red
Write-Host "3. Cierra el popup" -ForegroundColor White

Write-Host "`n📋 PASO 6: Guardar el Client ID en .env.local" -ForegroundColor Yellow
Write-Host "─────────────────────────────────────────────────" -ForegroundColor Gray

# Verificar si .env.local existe
$envPath = ".env.local"
if (Test-Path $envPath) {
    Write-Host "✓ Archivo .env.local encontrado" -ForegroundColor Green
    Write-Host "`nAbre el archivo y reemplaza:" -ForegroundColor White
    Write-Host "  REACT_APP_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID_HERE" -ForegroundColor Red
    Write-Host "`nCon tu Client ID real:" -ForegroundColor White
    Write-Host "  REACT_APP_GOOGLE_CLIENT_ID=123456789-abcdef...apps.googleusercontent.com" -ForegroundColor Green
} else {
    Write-Host "✗ Archivo .env.local NO encontrado" -ForegroundColor Red
    Write-Host "Creando .env.local..." -ForegroundColor Yellow
    @"
# Google OAuth Configuration
REACT_APP_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID_HERE
REACT_APP_API_URL=http://localhost:3001
"@ | Out-File -FilePath $envPath -Encoding UTF8
    Write-Host "✓ Archivo .env.local creado" -ForegroundColor Green
}

Write-Host "`n📋 PASO 7: Reiniciar el Servidor" -ForegroundColor Yellow
Write-Host "─────────────────────────────────────────────────" -ForegroundColor Gray
Write-Host "1. Detén el servidor actual (Ctrl+C)" -ForegroundColor White
Write-Host "2. Ejecuta: npm start" -ForegroundColor Cyan
Write-Host "3. El navegador debería abrir automáticamente" -ForegroundColor White

Write-Host "`n📋 PASO 8: Prueba el Botón de Google" -ForegroundColor Yellow
Write-Host "─────────────────────────────────────────────────" -ForegroundColor Gray
Write-Host "1. En http://localhost:3000" -ForegroundColor White
Write-Host "2. Haz clic en 'Iniciar Sesión'" -ForegroundColor White
Write-Host "3. Deberías ver 'Continuar con Google'" -ForegroundColor Cyan
Write-Host "4. Haz clic y selecciona tu cuenta de Google" -ForegroundColor White
Write-Host "5. ¡Listo! Deberías estar registrado automáticamente" -ForegroundColor Green

Write-Host "`n⏰ Tiempo estimado: 5-10 minutos" -ForegroundColor Magenta
Write-Host "`n💡 Consejo: Si algo no funciona, revisa GOOGLE_OAUTH_SETUP.md para más detalles" -ForegroundColor Cyan

Write-Host "`n" -ForegroundColor Gray

# Ofrecer abrir Google Cloud Console automáticamente
$response = Read-Host "¿Deseas que abra Google Cloud Console en el navegador? (S/N)"
if ($response -eq "S" -or $response -eq "s") {
    Start-Process "https://console.cloud.google.com"
    Write-Host "✓ Abriendo Google Cloud Console..." -ForegroundColor Green
}
