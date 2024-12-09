import React from 'react';
import { Outlet } from 'react-router-dom';


// Importation des composants
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-[#fff]'> 
      <Header />
      <Outlet />
      <Footer />
    </div>
  
  )
}

export default App
