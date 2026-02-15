const express = require('express');
const router = express.Router();
const db = require('../database');

// Middleware para verificar admin
const adminMiddleware = (req, res, next) => {
  // En producción, decodificar JWT y verificar email == admin
  // Por ahora, cualquier token válido puede acceder para desarrollo
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  next();
};

// GET /api/admin/stats - Obtener estadísticas
router.get('/stats', adminMiddleware, (req, res) => {
  db.all(`
    SELECT 
      (SELECT COUNT(*) FROM users) as totalUsers,
      (SELECT COUNT(*) FROM posts) as totalPosts,
      (SELECT COUNT(*) FROM likes) as totalLikes
  `, [], (err, rows) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json(rows[0]);
  });
});

// GET /api/admin/campaigns - Obtener todas las campañas
router.get('/campaigns', adminMiddleware, (req, res) => {
  db.all('SELECT * FROM campaigns ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json(rows || []);
  });
});

// POST /api/admin/campaigns - Crear campaña
router.post('/campaigns', adminMiddleware, (req, res) => {
  const { name, description, discount } = req.body;
  
  db.run(
    `INSERT INTO campaigns (name, description, discount, active) VALUES (?, ?, ?, 1)`,
    [name, description, discount],
    function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      
      res.json({
        id: this.lastID,
        name,
        description,
        discount,
        active: 1
      });
    }
  );
});

// PUT /api/admin/campaigns/:id - Actualizar campaña
router.put('/campaigns/:id', adminMiddleware, (req, res) => {
  const { id } = req.params;
  const { name, description, discount, active } = req.body;
  
  db.run(
    `UPDATE campaigns SET name=?, description=?, discount=?, active=? WHERE id=?`,
    [name, description, discount, active, id],
    function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      
      res.json({
        id,
        name,
        description,
        discount,
        active
      });
    }
  );
});

// DELETE /api/admin/campaigns/:id - Eliminar campaña
router.delete('/campaigns/:id', adminMiddleware, (req, res) => {
  const { id } = req.params;
  
  db.run('DELETE FROM campaigns WHERE id=?', [id], function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    
    res.json({ message: 'Campaign deleted' });
  });
});

// GET /api/admin/discounts - Obtener códigos de descuento
router.get('/discounts', adminMiddleware, (req, res) => {
  db.all('SELECT * FROM discounts ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json(rows || []);
  });
});

// POST /api/admin/discounts - Crear código de descuento
router.post('/discounts', adminMiddleware, (req, res) => {
  const { code, percentage } = req.body;
  
  db.run(
    `INSERT INTO discounts (code, percentage, active) VALUES (?, ?, 1)`,
    [code.toUpperCase(), percentage],
    function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      
      res.json({
        id: this.lastID,
        code: code.toUpperCase(),
        percentage,
        active: 1
      });
    }
  );
});

// PUT /api/admin/discounts/:id - Actualizar descuento
router.put('/discounts/:id', adminMiddleware, (req, res) => {
  const { id } = req.params;
  const { active } = req.body;
  
  db.run(
    `UPDATE discounts SET active=? WHERE id=?`,
    [active, id],
    function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      
      res.json({ message: 'Discount updated', id, active });
    }
  );
});

// DELETE /api/admin/discounts/:id - Eliminar descuento
router.delete('/discounts/:id', adminMiddleware, (req, res) => {
  const { id } = req.params;
  
  db.run('DELETE FROM discounts WHERE id=?', [id], function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    
    res.json({ message: 'Discount deleted' });
  });
});

// POST /api/admin/interactions - Log de interacción de usuario
router.post('/interactions', (req, res) => {
  const { user_id, action, post_id } = req.body;
  
  db.run(
    `INSERT INTO user_interactions (user_id, action, post_id) VALUES (?, ?, ?)`,
    [user_id, action, post_id],
    function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      
      res.json({ message: 'Interaction logged' });
    }
  );
});

module.exports = router;
