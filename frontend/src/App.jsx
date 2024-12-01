import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    category: '',
  });

  // Récupère toutes les données depuis le backend
  useEffect(() => {
    axios.get('http://localhost:3000/redis/view')
      .then(response => setData(response.data))
      .catch(error => console.error('Erreur lors de la récupération des données :', error));
  }, []);

  // Fonction pour ajouter une donnée
  const addData = () => {
    axios.post('http://localhost:3000/redis/add', formData)
      .then(response => {
        console.log(response.data);
        setData(prev => [...prev, formData]); // Ajoute la nouvelle donnée localement
        setFormData({ id: '', name: '', description: '', price: '', category: '' }); // Réinitialise le formulaire
      })
      .catch(error => console.error('Erreur lors de l\'ajout des données :', error));
  };

  // Fonction pour supprimer une donnée
  const deleteData = (id) => {
    axios.delete(`http://localhost:3000/redis/delete/${id}`)
      .then(() => {
        setData(prev => prev.filter(item => item.id !== id)); // Supprime localement
      })
      .catch(error => console.error('Erreur lors de la suppression des données :', error));
  };

  return (
    <div>
      <h1>Gestion des Données avec Redis</h1>

      {/* Formulaire pour ajouter une donnée */}
      <div>
        <input
          type="text"
          placeholder="ID"
          value={formData.id}
          onChange={e => setFormData({ ...formData, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Nom"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={e => setFormData({ ...formData, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Prix"
          value={formData.price}
          onChange={e => setFormData({ ...formData, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Catégorie"
          value={formData.category}
          onChange={e => setFormData({ ...formData, category: e.target.value })}
        />
        <button onClick={addData}>Ajouter</button>
      </div>

      {/* Liste des données */}
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <b>{item.name}</b>: {item.description} - {item.price}€
            <button onClick={() => deleteData(item.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
