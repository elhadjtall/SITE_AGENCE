import React, { useEffect, useState, useContext } from 'react'; // Suppression des imports inutilisés (useState, useEffect)
import { RiArrowDownSLine, RiArrowUpSLine, RiHome5Line } from 'react-icons/ri'; // Import des icônes
import { Menu } from '@headlessui/react'; // Import de Headless UI
import { HouseContext } from './HouseContext'; // Import du contexte

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext); // Utilisation du contexte

  const [isOpen, setIsOpen] = useState(false);

  return (
    // Code pour le menu de pays
    <Menu as="div" className="dropdown relative">
      {/* Code pour le bouton de pays et la phrase "Selectionner votre pays"  */}
      <Menu.Button className="dropdown-btn w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        {/* Code pour les icones */}
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div>
          <div className='text-[13px]'>Selectionner votre property</div>
        </div>
        {/* Code pour les icones de dropdown en haut et en bas */}
        {isOpen ? (
              <RiArrowUpSLine 
              className="dropdown-icon-secondary" />
            ) : (
              <RiArrowDownSLine 
              className="dropdown-icon-secondary" />
            )}
    </Menu.Button>
    {/* Code pour la liste de pays */}
    <Menu.Items className="dropdown-menu">
      {properties.map((property, index) => {
        return (
          <Menu.Item
            as="li"
            key={index}
            onClick={() => setProperty(property)}
            className="cursor-pointer hover:text-violet-700 transition"
          >
            {property}
          </Menu.Item>
        );
      })}
    </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
