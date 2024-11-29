const express = require('express');
const router = express.Router();
const Redis = require('../models/redis'); // Importez l'objet Redis

// Route pour tester l'ajout et la récupération de clé
router.get('/test-redis', async (req, res) => {
  try {
    // Ajoute une clé dans Redis
    await Redis.setKey('test_key', 'Hello Redis!');

    // Récupère la clé depuis Redis
    const value = await Redis.getKey('test_key');

    res.json({ message: `Valeur récupérée : ${value}` });
  } catch (err) {
    res.status(500).json({ error: 'Erreur Redis', details: err.message });
  }
});

module.exports = router;
