import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <>
    <div className='bg-slate-900'> 
      <Header />
    </div>
    </>
  )
}

export default App
