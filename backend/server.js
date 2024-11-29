const express = require('express');
const redisRoutes = require('./routes/redis');
const app = express();

app.use('/api', redisRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
