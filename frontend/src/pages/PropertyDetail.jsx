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
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                <div>
                    <h2 className='text-2xl font-semibold'>{house.name}</h2>
                    <h3 className='text-lg mb-4'>{house.address}</h3>
                </div>
                <div>
                    <div>{house.type}</div>
                    <div>{house.country}</div>
                </div>
                <div>
                    <div>$ {house.price}</div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default PropertyDetail;
