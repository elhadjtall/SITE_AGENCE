const client = require('../config/redis'); // Assurez-vous que ce fichier configure Redis correctement

const Redis = {
  // Ajout d'une donnée dans Redis
  add: async (data) => {
    try {
      // Stocke la donnée sous forme JSON avec l'`id` comme clé
      await client.set(data.id, JSON.stringify(data));
      console.log(`Donnée ajoutée avec succès : ${data.id}`);
    } catch (err) {
      console.error('Erreur lors de l\'ajout de la donnée dans Redis :', err);
      throw err;
    }
  },

  // Récupération d'une donnée spécifique
  getById: async (id) => {
    try {
      const value = await client.get(id); // Récupère la valeur associée à la clé `id`
      return value ? JSON.parse(value) : null; // Convertit la chaîne JSON en objet
    } catch (err) {
      console.error(`Erreur lors de la récupération de la donnée avec id ${id} :`, err);
      throw err;
    }
  },

  // Récupération de toutes les données
  getAll: async () => {
    try {
      const keys = await client.keys('*'); // Récupère toutes les clés
      const values = await Promise.all(keys.map((key) => client.get(key))); // Récupère les valeurs associées aux clés
      return values.map((value) => JSON.parse(value)); // Convertit chaque chaîne JSON en objet
    } catch (err) {
      console.error('Erreur lors de la récupération de toutes les données :', err);
      throw err;
    }
  },

  // Suppression d'une donnée par clé
  deleteById: async (id) => {
    try {
      await client.del(id); // Supprime la clé `id`
      console.log(`Donnée supprimée avec succès : ${id}`);
    } catch (err) {
      console.error(`Erreur lors de la suppression de la donnée avec id ${id} :`, err);
      throw err;
    }
  },
};

module.exports = Redis;
