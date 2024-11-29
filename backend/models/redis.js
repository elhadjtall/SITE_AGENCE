const client = require('../config/redis'); // Assurez-vous que le chemin est correct

const Redis = {
  // Exemple : Ajouter une clé
  setKey: async (key, value) => {
    try {
      await client.set(key, value);
      console.log(`Clé ajoutée : ${key} = ${value}`);
    } catch (err) {
      console.error('Erreur lors de l\'ajout de la clé :', err);
      throw err;
    }
  },

  // Exemple : Récupérer une clé
  getKey: async (key) => {
    try {
      const value = await client.get(key);
      return value;
    } catch (err) {
      console.error('Erreur lors de la récupération de la clé :', err);
      throw err;
    }
  }
};

module.exports = Redis; // Exporter l'objet Redis
