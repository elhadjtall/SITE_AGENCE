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
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};
