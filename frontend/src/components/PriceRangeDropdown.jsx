import React, { useEffect, useState, useContext } from 'react'; // Suppression des imports inutilisés (useState, useEffect)
import { RiWallet3Line, RiArrowUpSLine, RiHome5Line } from 'react-icons/ri'; // Import des icônes
import { Menu } from '@headlessui/react'; // Import de Headless UI
import { HouseContext } from './HouseContext'; // Import du contexte

const PriceRangeDropdown = () => {
  const { price, setPrice} = useContext(HouseContext); // Utilisation du contexte

  const [isOpen, setIsOpen] = useState(false);
  // definition du prix
  const prices = [
    {
      value: 'price range (any)',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 180000',
    },
    {
      value: '180000 - 200000',
    },
    {
      value: '200000 - 230000',
    },
    {
      value: '230000 - 260000',
    },
    {
      value: '260000 - 290000',
    },
    {
      value: '290000 - 320000',
    },
    {
      value: '320000 - 350000',
    },
  ];

  return (
    // Code pour le menu de pays
    <Menu as="div" className="dropdown relative">
      {/* Code pour le bouton de pays et la phrase "Selectionner votre pays"  */}
      <Menu.Button className="dropdown-btn w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        {/* Code pour les icones */}
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Selectionner votre price</div>
        </div>
    </Menu.Button>
    {/* Code pour la liste de pays */}
    <Menu.Items className="dropdown-menu">
      {prices.map((price, index) => {
        return (
          <Menu.Item
            as="li"
            key={index}
            onClick={() => setPrice(price.value)}
            className="cursor-pointer hover:text-violet-700 transition"
          >
            {price.value}
          </Menu.Item>
        );
      })}
    </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
