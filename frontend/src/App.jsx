import React from 'react';
import NavItems from './components/NavItems';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <>
    <div className='bg-slate-900'> 
      <NavItems />
    </div>
    <div className="min-vh-100">
      <Outlet />
    </div>
    </>
  )
}

export default App
