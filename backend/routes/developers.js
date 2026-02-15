const express = require('express');
const router = express.Router();
const db = require('../database');

// Middleware para verificar admin
const adminMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  // Verificar que es admin (cualquier usuario puede ser testeado en desarrollo)
  // En producción, decodificar JWT y verificar rol
  next();
};

// GET /api/developers - Obtener todos los desarrolladores
router.get('/', (req, res) => {
  db.all('SELECT * FROM developers', [], (err, rows) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    
    // Parsear JSON fields
    const developers = rows.map(dev => ({
      ...dev,
      skills: dev.skills ? JSON.parse(dev.skills) : []
    }));
    
    res.json(developers);
  });
});

// POST /api/developers - Crear nuevo desarrollador
router.post('/', adminMiddleware, (req, res) => {
  const { nombre, apellido, teléfono, email, perfil_git, linkedin, bio, skills } = req.body;
  
  const skillsJson = JSON.stringify(skills || []);
  
  db.run(
    `INSERT INTO developers (nombre, apellido, teléfono, email, perfil_git, linkedin, bio, skills) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [nombre, apellido, teléfono, email, perfil_git, linkedin, bio, skillsJson],
    function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      
      res.json({
        id: this.lastID,
        nombre,
        apellido,
        teléfono,
        email,
        perfil_git,
        linkedin,
        bio,
        skills: JSON.parse(skillsJson)
      });
    }
  );
});

// PUT /api/developers/:id - Actualizar desarrollador
router.put('/:id', adminMiddleware, (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, teléfono, email, perfil_git, linkedin, bio, skills } = req.body;
  
  const skillsJson = JSON.stringify(skills || []);
  
  db.run(
    `UPDATE developers SET nombre=?, apellido=?, teléfono=?, email=?, perfil_git=?, linkedin=?, bio=?, skills=? 
     WHERE id=?`,
    [nombre, apellido, teléfono, email, perfil_git, linkedin, bio, skillsJson, id],
    function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      
      res.json({
        id,
        nombre,
        apellido,
        teléfono,
        email,
        perfil_git,
        linkedin,
        bio,
        skills: JSON.parse(skillsJson)
      });
    }
  );
});

// DELETE /api/developers/:id - Eliminar desarrollador
router.delete('/:id', adminMiddleware, (req, res) => {
  const { id } = req.params;
  
  db.run('DELETE FROM developers WHERE id=?', [id], function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    
    res.json({ message: 'Developer deleted successfully' });
  });
});

module.exports = router;
