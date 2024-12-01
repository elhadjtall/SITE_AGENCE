const express = require('express');
const redisRoutes = require('./routes/redis'); // Import des routes Redis
const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Ajoute les routes Redis avec le préfixe "/redis"
app.use('/redis', redisRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
