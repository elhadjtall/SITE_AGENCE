const express = require('express');
const app = express();
const port = 3000;
const redis = require('./routes/redis');


// Middlewares pour parser les Json
app.use(express.json());

// Routes
app.use('/redis', redis);

// Lancer le serveur
app.use((req, res) => {
    res.status(200).json({ message: 'Bienvenue sur le backend' });
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Le serveur est lancé sur le port ${port}`);
});