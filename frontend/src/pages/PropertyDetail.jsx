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
                    <div className='flex gap-x-6 text-violet-700 mb-6'>
                        <div className='flex gap-x-2 items-center'>
                            <BiBed  className='text-2xl'/>
                            <div className='flex gap-x-2'>{house.bedrooms}</div>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                            <BiBath className='text-2xl'/>
                            <div className='flex gap-x-2'>{house.bedrooms}</div>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                            <BiArea className='text-2xl'/>
                            <div className='flex gap-x-2'>{house.surface}</div>
                        </div>
                    </div>
                    <div>{house.description}</div>
                </div>
                {/* creer une div pour ajouter les infos de la maison et la map à droite */}
                <div className='flex-1 bg-white-100 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
                    <div className='flex items-center gap-x-4 mb-8'>
                        {/* creer une div pour ajouter l'image de l'agent et le lien */}
                        <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                            {/* creer une img pour ajouter l'image de l'agent */}
                            <img src={house.agent.image} alt="" />
                        </div>
                        <div>
                            <div className='font-bold text-lg'>{house.agent.name}</div>
                            <Link to='' className='text-violet-700 text-sm'>Voir la liste</Link>
                        </div>
                    </div>
                    {/* formulaire */}
                    <form>
                        <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type="text" placeholder='Nom*' />
                            <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type="email" placeholder='Email*' />
                            <input  className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type="text" placeholder='Telephone*' />
                            <textarea className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-36 resize-none text-sm' placeholder='Message*'></textarea>
                            <div>
                                <button>Envoyer</button>
                                <button>Appeler</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    </section>
  );
};

export default PropertyDetail;
