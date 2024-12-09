import React from 'react';



// importation image du banner
import banner from '../assets/img/banner.jpg';

// importation des composants search
import Search from '../components/Search';

const Banner = () => {
  return <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    {/* le contenu du banner en 2 parties : le texte et l'image */}
          <div className='flex flex-col lg:flex-row'>
            {/* le code className='flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0' permet de cacher le texte sur les petits ecrans */}
            <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
              {/* le code className='text-4xl lg:text-[58px] font-semibold leading-none mb-6' permet de cacher le titre sur les petits ecrans */}
              <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'><span className='text-violet-700'>Trouver </span>une maison de rêve</h1>
              {/* le code className 'max-w-[480px] mb-8' permet d'arrenger le text de notre pages */}
              <p className='max-w-[480px] mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            {/* c'est l'image du banner importer en haut qu'on affiche ici*/}
            {/* le code className='hidden flex-1 lg:flex justify-end items-end' permet de cacher l'image sur les petits ecrans */}
            <div className='hidden flex-1 lg:flex justify-end items-end'>
              <img className='max-h-[640px] w-full object-cover' src={banner} alt="" />
            </div>
          </div>
          <Search />
  </section>

}

export default Banner
