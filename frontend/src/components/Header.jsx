import React from 'react';


// imporation de links
import { Link } from 'react-router-dom';





const Header = () => {
  return <Header>
    <div className="container mx-auto">
        {/* Logo */}
        <Link to="/">
            <h3>MyImmo</h3>
        </Link>
        {/* button */}
        <div>
            <Link to='/'>Log In</Link>
            <Link to='/'>Sign Up</Link>
        </div>
    </div>
  </Header>;
};

export default Header
