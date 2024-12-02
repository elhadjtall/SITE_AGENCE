import React, { useState } from 'react';

const ImmeubleForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    id: '',
    nom: '',
    adresse: '',
    nbr_appartements: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ id: '', nom: '', adresse: '', nbr_appartements: '' }); // Réinitialise le formulaire
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="id" placeholder="ID" value={formData.id} onChange={handleChange} />
      <input name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} />
      <input name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} />
      <input name="nbr_appartements" placeholder="Nombre d'appartements" type="number" value={formData.nbr_appartements} onChange={handleChange} />
      <input name='image' placeholder="URL de l'image" value={formData.image} onChange={handleChange} />
      <input name='description' placeholder="Description" value={formData.description} onChange={handleChange} />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default ImmeubleForm;
