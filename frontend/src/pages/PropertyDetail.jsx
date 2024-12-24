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

  //get the house based on the id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  
  return (
    <section>
        <div className='container mx-auto min-h-[800px] mb-14'>
            <div>
                <div>
                    <h2>{house.name}</h2>
                    <h2>{house.address}</h2>
                </div>
                <div>
                    <div>{house.type}</div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default PropertyDetail;
