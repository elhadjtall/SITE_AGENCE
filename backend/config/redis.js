const redis = require('redis');

// Configure le client Redis pour se connecter au conteneur
const client = redis.createClient({
  host: 'localhost', // Hôte local, car Redis est mappé sur le port 6379
  port: 6379
});

// Gestion des erreurs
client.on('error', (err) => console.error('Erreur Redis :', err));

// Connexion
client.connect()
  .then(() => console.log('Connecté à Redis'))
  .catch((err) => console.error('Erreur de connexion à Redis :', err));

module.exports = client;
