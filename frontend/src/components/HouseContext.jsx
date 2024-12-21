import React, { useState, createContext, useEffect } from 'react';
import { housesData } from '../data';

// Création du contexte
export const HouseContext = createContext();

// Composant Provider
export const HouseContextProvider = ({ children }) => {
  // Déclaration des états
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('price range (any)');
  const [loading, setLoading] = useState(false);

  // Retourne tous les pays de la base de données
  useEffect(() => {
    const allCountries = houses.map((house) => house.country);

    // Supprimez les doublons et ajoutez une option par défaut
    const uniqueCountries = ['location (any)', ...new Set(allCountries)];

    // Mettez les pays dans l'ordre alphabétique
    setCountries(uniqueCountries.sort());
  
  }, []);

// Retourne tous les types de biens immobiliers de la base de données
  useEffect(() => {
    const allProperties = houses.map((house) => house.type);

    // Supprimez les doublons et ajoutez une option par défaut 
    const uniqueProperties = ['property type (any)', ...new Set(allProperties)];

    // Mettez les types de biens immobiliers dans l'ordre alphabétique
    setProperties(uniqueProperties.sort());
  }, []);

  // importation de la fonction handleClick
  const handleClick = () => {

    // set loading to true
    setLoading(true);
    // console.log(country, property, price);
  }

  // create a function pour checker si le caractère est include
  const isDefault = (str) => {
    return str.split('').includes('any');
  };

  // obtenir la première valeur du prix et l’analyser pour le nombre
  const minPrice = parseInt(price.split(' ')[0]);
  // obtenir la deuxième valeur du prix et l’analyser pour le nombre
  const maxPrice = parseInt(price.split(' ')[2]);
  // console.log(minPrice, maxPrice);

  // filtrer les biens immobiliers selon le prix
  const newHouses = housesData.filter((house) => {
    const housePrice = parseInt(house.price);

    // si les values sont selectionnées
    if (
      house.country === country &&
      house.type === property &&
      housePrice >= minPrice &&
      housePrice <= maxPrice
    ) {
      return house;
    }
    
    // si les values sont par defaut
    if (
      isDefault(country) &&
      isDefault(property) &&
      isDefault(price)
    ) {
      return house;
    }
    // si le pays n'est pas par defaut
    if (!isDefault(country) && isDefault(property) && isDefault(price)) {
      return house.country === country;
    }

    // si le property is not default
    if (!isDefault(property) && isDefault(country) && isDefault(price)) {
      return house.type === property;
    }
    
    // si le prix n'est pas par defaut
    if (!isDefault(price) && isDefault(country) && !isDefault(property)) {
      if (housePrice >= minPrice && housePrice <= maxPrice) {
        return house;
      }
    }

    // si le pays et le property n'est pas par defaut
    if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
      return house.country === country && house.type === property;
    }

    // si le pays et le prix n'est pas par defaut
    if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
      if (house.country >= country && housePrice === minPrice && housePrice <= maxPrice) {
        return house.country;
      };
    }

    // si le property et le prix n'est pas par defaut
    if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
      if (housePrice >= minPrice && housePrice <= maxPrice) {
        return house.country === property;
      }
    }


  });
  console.log(newHouses);

  // Retourne le provider avec les valeurs du contexte
  return (
    <HouseContext.Provider
      value={{
        houses,
        setHouses,
        country,
        setCountry,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        loading,
        setLoading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};
