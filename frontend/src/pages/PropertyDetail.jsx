import React from 'react';

// Importation des données
import { housesData } from '../data';

// Importation des liens
import { Link } from 'react-router-dom';

// importation use params
import { useParams } from 'react-router-dom';

// Importation des icônes
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const PropertyDetail = () => {
  // Récupération de l'ID depuis les paramètres d'URL
  const { id } = useParams();
  console.log(id);

  //get the house based on the id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <div>
        property detail
    </div>
  );
};

export default PropertyDetail;
