#!/usr/bin/env bash
# Quick Setup Script for Google OAuth
# Run this script to automatically configure CyberCode OAuth

echo "╔════════════════════════════════════════════════════════════╗"
echo "║      CONFIGURACIÓN RÁPIDA DE GOOGLE OAUTH                  ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "📝 Creando archivo .env.local..."
    cat > .env.local << EOF
# Google OAuth - Reemplaza con tu Client ID real
REACT_APP_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID_HERE
REACT_APP_API_URL=http://localhost:3001
EOF
    echo "✓ Archivo .env.local creado"
else
    echo "✓ Archivo .env.local ya existe"
fi

echo ""
echo "📋 PASOS SIGUIENTES:"
echo "─────────────────────────────────────────────────"
echo ""
echo "1. Abre Google Cloud Console:"
echo "   https://console.cloud.google.com"
echo ""
echo "2. Crea un nuevo proyecto llamado 'CyberCode'"
echo ""
echo "3. Habilita 'Google+ API'"
echo ""
echo "4. Ve a Credenciales → Crear Credencial → OAuth 2.0 Client ID"
echo "   Tipo: Aplicación Web"
echo "   URIs: http://localhost:3000"
echo ""
echo "5. Copia el Client ID (NO el Secret)"
echo ""
echo "6. Abre .env.local y reemplaza:"
echo "   YOUR_GOOGLE_CLIENT_ID_HERE"
echo "   con tu Client ID actual"
echo ""
echo "7. Guarda el archivo y reinicia:"
echo "   npm start"
echo ""
echo "✅ ¡Listo! Los botones de OAuth estarán activos"
echo ""

# Offer to open Google Cloud Console
read -p "¿Abrir Google Cloud Console en el navegador? (s/n) " response
if [[ "$response" == "s" || "$response" == "S" ]]; then
    open "https://console.cloud.google.com"
    echo "✓ Abriendo Google Cloud Console..."
fi
