const express = require('express');
const router = express.Router();
const Redis = require('../models/redis');

// Route pour ajouter une donnée
router.post('/add', async (req, res) => {
  try {
    const data = req.body; // Données envoyées par le client
    await Redis.add(data);
    res.status(201).json({ message: 'Donnée ajoutée avec succès !', data });
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de l\'ajout des données', details: err.message });
  }
});

// Route pour récupérer toutes les données
router.get('/view', async (req, res) => {
  try {
    const data = await Redis.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des données', details: err.message });
  }
});

// Route pour récupérer une donnée par id
router.get('/view/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Redis.getById(id);
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ error: `Donnée avec id ${id} introuvable` });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des données', details: err.message });
  }
});

// Route pour supprimer une donnée par id
router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Redis.deleteById(id);
    res.json({ message: `Donnée avec id ${id} supprimée avec succès` });
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la suppression des données', details: err.message });
  }
});

module.exports = router;
