import React, { useState, createContext, useEffect } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext();

export const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('price range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    const uniqueCountries = ['location (any)', ...new Set(allCountries)];
    setCountries(uniqueCountries.sort());
  }, [houses]);

  useEffect(() => {
    const allProperties = houses.map((house) => house.type);
    const uniqueProperties = ['property type (any)', ...new Set(allProperties)];
    setProperties(uniqueProperties.sort());
  }, [houses]);

  const isDefault = (str) => {
    return str.includes('any');
  };

  const filterHouses = () => {
    setLoading(true);
    
    const minPrice = parseInt(price.split(' ')[0]) || 0;
    const maxPrice = parseInt(price.split(' ')[2]) || Infinity;

    const filteredHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // Si tous les filtres sont par défaut
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return true;
      }

      // Application des filtres
      const matchesCountry = isDefault(country) || house.country === country;
      const matchesProperty = isDefault(property) || house.type === property;
      const matchesPrice = isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice);

      return matchesCountry && matchesProperty && matchesPrice;
    });

    setHouses(filteredHouses);
    setTimeout(() => setLoading(false), 500);
  };

  const handleClick = () => {
    filterHouses();
  };

  return (
    <HouseContext.Provider
      value={{
        houses,
        setHouses,
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};