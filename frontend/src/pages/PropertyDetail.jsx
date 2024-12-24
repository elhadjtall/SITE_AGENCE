import React from 'react';

// Importation des données
import { housesData } from '../data';

// Importation des liens
import { Link } from 'react-router-dom';

// Importation des icônes
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const PropertyDetail = () => {
  // Récupération de l'ID depuis les paramètres d'URL
  const { id } = useParams();

  // Recherche des détails de la propriété par son ID
  const property = housesData.find((house) => house.id === parseInt(id, 10));

  // Vérification si la propriété existe
  if (!property) {
    return (
      <div>
        <h2>Propriété introuvable</h2>
        <Link to="/">Retour à la page d'accueil</Link>
      </div>
    );
  }

  const { name, beds, baths, area } = property; // Exemple d'utilisation des données

  return (
    <div>
      <h1>Détails de la propriété</h1>
      <h2>{name}</h2>
      <div>
        <BiBed /> {beds} Chambres
        <BiBath /> {baths} Salles de bain
        <BiArea /> {area} m²
      </div>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
};

export default PropertyDetail;
