const redis = require('redis');

// Configuration du client Redis
const client = redis.createClient({
  host: 'localhost', // Adresse de Redis (Docker ou local)
  port: 6379,        // Port par défaut de Redis
});

client.on('error', (err) => console.error('Erreur dans le client Redis :', err));

client.connect()
  .then(() => console.log('Connecté à Redis'))
  .catch((err) => console.error('Erreur de connexion à Redis :', err));

module.exports = client; // Exporte le client Redis
