import React, { useEffect, useState, useContext } from 'react'; // Suppression des imports inutilisés (useState, useEffect)
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'; // Import des icônes
import { Menu } from '@headlessui/react'; // Import de Headless UI
import { HouseContext } from './HouseContext'; // Import du contexte

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext); // Utilisation du contexte

  console.log(country); // Affiche le pays actuel dans la console

  return (
    <div>
      CountryDropdown
    </div>
  );
};

export default CountryDropdown;
