const express = require('express');
const redisRoutes = require('./routes/redis');
const app = express();

// Middleware pour parser les données JSON
app.use(express.json());

// Ajout des routes Redis
app.use('/redis', redisRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
