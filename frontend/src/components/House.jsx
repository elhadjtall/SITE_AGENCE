import React from 'react';


// importation des icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';



const House = ({ house}) => {
    // creer une constante house, image, type, country, address, bedrooms, bathrooms, surface, price
    const {image, type, country, address, bedrooms, bathrooms, surface, price} = house;
  return (
    // creer une div pour ajouter les images et les infos
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-lg'>
      <img src={image} alt="" />
      {/* creer une div pour ajouter les infos */}
      <div className='flex flex-col gap-3'>
        {/* creer une div pour ajouter le type */}
        <div>
          <h4>{type}</h4>
          <p>{country}</p>
        </div>
        {/* creer une div pour ajouter l'adresse */}
        <div>
          <h4>{address}</h4>
          <p>{price}</p>
        </div>
        {/* creer une div pour ajouter les infos */}
        <div>
          <p>{bedrooms} <BiBed className='text-violet-700' /></p>
          <p>{bathrooms} <BiBath className='text-violet-700' /></p>
          <p>{surface} <BiArea className='text-violet-700' /></p>
        </div>
      </div>
    </div>
  )
}

export default House;
