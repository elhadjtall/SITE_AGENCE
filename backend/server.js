const express = require('express');
const cors = require('cors');
const redisRoutes = require('./routes/redis'); // Import des routes Redis
const app = express();


// Active CORS pour autoriser les requêtes depuis le front-end
app.use(cors());

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Ajoute les routes Redis avec le préfixe "/redis"
app.use('/redis', redisRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
