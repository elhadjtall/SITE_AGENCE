import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h3>MyImmo</h3>
        </Link>
        {/* Buttons */}
        <div className="flex items-center gap-6">
          <Link
            className="hover:text-violet-900 transition-all duration-300"
            to="/"
          >
            Log In
          </Link>
          <Link className="hover:text-violet-900 transition-all duration-300" to="/">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
