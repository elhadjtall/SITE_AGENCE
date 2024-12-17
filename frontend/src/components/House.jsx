import React from 'react';


// importation des icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';



const House = ({ house}) => {
    // creer une constante house, image, type, country, address, bedrooms, bathrooms, surface, price
    const {image, type, country, address, bedrooms, bathrooms, surface, price} = house;
  return (
    // creer une div pour ajouter les images et les infos
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8 w-full rounded-lg' src={image} alt="" />
      {/* creer une div pour ajouter les infos */}
      <div className='mb-4 flex gap-x-2 text-sm'>
        {/* creer une div pour ajouter le type */}
          <div className='bg-green-500 rounded-full text-white px-3'>{type}</div>
          <div className='bg-violet-500 rounded-full text-white px-3'>{country}</div>
      </div>
    </div>
  )
}

export default House;
