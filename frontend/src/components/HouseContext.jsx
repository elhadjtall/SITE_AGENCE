import React, { useState, createContext } from 'react';
import { housesData } from '../data';

// Création du contexte
export const HouseContext = createContext();

// Composant Provider
export const HouseContextProvider = ({ children }) => {

  return (
    <HouseContext.Provider value={console.log('test') }>
      {children}
    </HouseContext.Provider>
  );
};
