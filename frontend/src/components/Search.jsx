import React from 'react';


// importation des liens
import { Link } from 'react-router-dom';


// importation des composants
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';


// importation des icons
import { RiSearch2Line } from 'react-icons/ri';

const Search = () => {
  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-2 lg:gap-0'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />

      {/* on affiche le bouton de recherche */}
      <button>
        <RiSearch2Line className='text-2xl text-violet-700' />
      </button>
    </div>
  )
}

export default Search
