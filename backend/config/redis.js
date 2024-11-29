const redis = require('redis');

// Configuration du client Redis
const client = redis.createClient({
  host: 'localhost', // Adresse du serveur Redis
  port: 6379         // Port par défaut de Redis
});

// Gestion des erreurs
client.on('error', (err) => console.error('Erreur Redis:', err));

// Connexion à Redis
client.connect()
  .then(() => console.log('Connecté à Redis'))
  .catch((err) => console.error('Erreur de connexion à Redis:', err));

module.exports = client; // Exporte le client Redis