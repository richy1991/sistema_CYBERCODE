const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir archivos estáticos
app.use(express.static('public'));
app.use(express.static('src'));

// Ruta principal
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Frontend ejecutándose en http://localhost:${PORT}`);
  console.log(`📁 Sirviendo archivos desde /public y /src`);
  console.log(`\n🚀 Sistema CYBERCODE iniciado correctamente`);
  console.log(`   - Frontend: http://localhost:${PORT}`);
  console.log(`   - Backend:  http://localhost:3001`);
});
