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
                <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
                    <div className='bg-green-700 text-white rounded-full px-3'>{house.type}</div>
                    <div className='bg-violet-700 text-white rounded-full px-3'>{house.country}</div>
                </div>
                <div className='text-lg font-semibold text-violet-600 mb-4'>
                    <div className='flex items-center gap-1'>$ {house.price}</div>
                </div>
            </div>
            <div className='flex flex-col items-start gap-8 lg:flex-row'>
                <div className='max-w-[768px]'>
                    <div className='mb-8'>
                        <img className='w-full h-full object-cover' src={house.imageLg} alt="" />
                    </div>
                    <div>
                        <div className='flex gap-x-4 mb-6 text-sm'>
                            <BiBed  className='text-2xl'/>
                            <div className='flex gap-x-2'>{house.bedrooms}</div>
                        </div>
                        <div className='flex gap-x-4 mb-6 text-sm'>
                            <BiBath className='text-2xl'/>
                            <div className='flex gap-x-2'>{house.bedrooms}</div>
                        </div>
                        <div className='flex gap-x-4 mb-6 text-sm'>
                            <BiArea className='text-2xl'/>
                            <div className='flex gap-x-2'>{house.bedrooms}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default PropertyDetail;
