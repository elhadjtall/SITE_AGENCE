const express = require('express');
const router = express.Router();
const redisClient = require('./config/redis');

// Test d'écriture et de lecture dans Redis
router.get('/test-redis', async (req, res) => {
  try {
    await redisClient.set('test_key', 'Hello Redis!');
    const value = await redisClient.get('test_key');
    res.json({ message: `Valeur dans Redis : ${value}` });
  } catch (err) {
    res.status(500).json({ error: 'Erreur Redis', details: err.message });
  }
});

module.exports = router;
