const express = require('express');
const Redis = require('./models/redis');
const router = express.Router();
const client = require('./config/redis');

// Route pour initialiser l'index Redis
router.get('/create-index', async (req, res) => {
  try {
    const result = await redis.createIndex();
    res.status(200).json({ message: result ? 'Index créer avec success' : 'Index deja creer' });
  } catch (error) {
    console.error("Erreur de l'initialisation de l'index :", error);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'initialisation de l\'index.' });
  }
});

module.exports = router;
