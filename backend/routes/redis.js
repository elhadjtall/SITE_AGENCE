const express = require('express');
const router = express.Router();
const Redis = require('../models/redis'); // Importez l'objet Redis

// Route pour tester l'ajout et la récupération de clé
router.get('/creation-index', async (req, res) => {
  try {
    // Ajoute une clé dans Redis
    const result = await Redis.createIndex();
    res.status(200).json({ message: result ? "Index créé" : "Index non créé" });
  } catch (err) {
    console.error('Erreur lors de la recuperation de l\'index :', err);
    res.status(500).json({ error: 'Erreur Redis', details: err.message });
  }
});

module.exports = router;
