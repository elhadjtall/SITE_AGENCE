import React, { useState, useEffect, createContext } from 'react';


// import les datas
import { housesData } from '../data';


// creation du context
export const HouseContext = createContext();


const HouseContextProvider = () => {
  return (
    <HouseContext.Provider value={console.log('je suis le context')}>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContext
