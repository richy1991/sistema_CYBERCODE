#!/bin/bash
# Verificador de OAuth - Comprueba que todo está configurado correctamente

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║        🔍 VERIFICADOR DE CONFIGURACIÓN OAUTH CYBERCODE        ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

CHECKS_PASSED=0
CHECKS_FAILED=0

# 1. Verificar si .env.local existe
echo -n "1️⃣  Archivo .env.local existe: "
if [ -f ".env.local" ]; then
    echo "✅ ENCONTRADO"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo "❌ NO ENCONTRADO"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

# 2. Verificar si tiene Client ID no placeholder
echo -n "2️⃣  Google Client ID configurado: "
if grep -q "REACT_APP_GOOGLE_CLIENT_ID=.*apps.googleusercontent.com" .env.local 2>/dev/null; then
    echo "✅ VÁLIDO"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
elif grep -q "REACT_APP_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID_HERE" .env.local 2>/dev/null; then
    echo "❌ PLACEHOLDER (Aún no configurado)"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
else
    echo "❓ NO ENCONTRADO"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

# 3. Verificar si @react-oauth/google está instalado
echo -n "3️⃣  @react-oauth/google instalado: "
if grep -q '"@react-oauth/google"' package.json 2>/dev/null; then
    echo "✅ SÍ"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo "❌ NO"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

# 4. Verificar si AuthModal.js tiene GoogleLogin
echo -n "4️⃣  AuthModal integrado con Google: "
if grep -q "import.*GoogleLogin.*from.*@react-oauth/google" src/components/AuthModal.js 2>/dev/null; then
    echo "✅ SÍ"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo "❌ NO"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

# 5. Verificar si App.js tiene GoogleOAuthProvider
echo -n "5️⃣  App envuelto con GoogleOAuthProvider: "
if grep -q "GoogleOAuthProvider" src/App.js 2>/dev/null; then
    echo "✅ SÍ"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo "❌ NO"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

# 6. Verificar si node_modules existe
echo -n "6️⃣  node_modules existe: "
if [ -d "node_modules" ]; then
    echo "✅ SÍ"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo "❌ NO (ejecuta: npm install)"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

# 7. Verificar backend database soporta auth_provider
echo -n "7️⃣  Backend soporta OAuth: "
if grep -q "auth_provider" backend/database.js 2>/dev/null; then
    echo "✅ SÍ"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo "❌ NO"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

# 8. Verificar documentación
echo -n "8️⃣  Documentación OAuth existe: "
if [ -f "QUICK_START_OAUTH.md" ] && [ -f "GOOGLE_OAUTH_SETUP.md" ]; then
    echo "✅ SÍ"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo "❌ NO"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                       RESULTADO FINAL                         ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "✅ Checks pasados:  $CHECKS_PASSED/8"
echo "❌ Checks fallidos: $CHECKS_FAILED/8"
echo ""

if [ $CHECKS_FAILED -eq 0 ]; then
    echo "🎉 ¡TODO ESTÁ CONFIGURADO CORRECTAMENTE!"
    echo ""
    echo "Próximos pasos:"
    echo "  1. Obtén Google Client ID: https://console.cloud.google.com"
    echo "  2. Edita .env.local con tu Client ID"
    echo "  3. Ejecuta: npm start"
    echo "  4. ¡Prueba 'Continuar con Google'!"
    exit 0
else
    echo "⚠️  Hay $([ $CHECKS_FAILED -eq 1 ] && echo "un" || echo "$CHECKS_FAILED") check(s) sin resolver."
    echo ""
    echo "Para arreglar:"
    echo "  • Si falta .env.local: cópialo de .env.local.example"
    echo "  • Si falta Client ID: obtén uno en Google Cloud Console"
    echo "  • Si falta @react-oauth/google: ejecuta npm install @react-oauth/google"
    echo "  • Si falta node_modules: ejecuta npm install"
    echo ""
    echo "Consulta QUICK_START_OAUTH.md para más detalles"
    exit 1
fi
