import React from 'react';


// imporation de links
import { Link } from 'react-router-dom';





const Header = () => {
  return <Header className='py-6 mb-12 border-b'>
    <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
            <h3>MyImmo</h3>
        </Link>
        {/* button */}
        <div className='flex items-center gap-6'>
            <Link className='hover:text-violet-900 transition-all duration-300' to='/'>Log In</Link>
            <Link to='/'>Sign Up</Link>
        </div>
    </div>
  </Header>;
};

export default Header
