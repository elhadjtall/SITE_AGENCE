const client = require('../config/redis'); // Assurez-vous que le chemin est correct

const Redis = {
  // Ajout d'une donnée dans Redis
  add: async (data) => {
    try {
      await client.set(data.id, JSON.stringify(data)); // Stocke la donnée avec l'ID comme clé
      console.log(`Donnée ajoutée avec succès : ${data.id}`);
    } catch (err) {
      console.error('Erreur lors de l\'ajout de la donnée dans Redis :', err);
      throw err;
    }
  },

  // Récupération de toutes les données
  getAll: async () => {
    try {
      const keys = await client.keys('*'); // Récupère toutes les clés dans Redis
      const values = await Promise.all(keys.map((key) => client.get(key))); // Récupère les valeurs pour chaque clé
      return values.map((value) => JSON.parse(value)); // Parse chaque valeur JSON en objet
    } catch (err) {
      console.error('Erreur lors de la récupération des données :', err);
      throw err;
    }
  },
  // Mise à jour d'une donnée par ID
  updateById: async (id, data) => {
    try {
      await client.set(id, JSON.stringify(data)); // Stocke la donnée avec l'ID comme clé
      console.log(`Donnée mise à jour avec успé : ${id}`);
    } catch (err) {
      console.error(`Erreur lors de la mise à jour de la donnée avec id ${id} :`, err);
      throw err;
    }
  },

  // Récupération d'une donnée par ID
  getById: async (id) => {
    try {
      const value = await client.get(id); // Récupère la valeur associée à l'ID
      return value ? JSON.parse(value) : null; // Parse la valeur JSON si elle existe
    } catch (err) {
      console.error(`Erreur lors de la récupération de la donnée avec id ${id} :`, err);
      throw err;
    }
  },

  // Suppression d'une donnée par ID
  deleteById: async (id) => {
    try {
      await client.del(id); // Supprime la clé associée à l'ID
      console.log(`Donnée avec id ${id} supprimée`);
    } catch (err) {
      console.error(`Erreur lors de la suppression de la donnée avec id ${id} :`, err);
      throw err;
    }
  },
};

module.exports = Redis;
