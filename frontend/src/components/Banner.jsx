import React from 'react';



// importation image du banner
import banner from '../assets/img/banner.jpg';

// importation des composants search
import Search from '../components/Search';

const Banner = () => {
  return <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    {/* le contenu du banner en 2 parties : le texte et l'image */}
          <div className='flex flex-col lg:flex-row'> 
            <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
              <h1><span>Trouver </span>une maison de rêve</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            {/* c'est l'image du banner importer en haut qu'on affiche ici*/}
            <div>
              <img src={banner} alt="" />
            </div>
          </div>
          <Search />
  </section>

}

export default Banner
