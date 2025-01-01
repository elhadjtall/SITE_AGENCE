import React from 'react';
import { Link } from 'react-router-dom';  // les liens de navigation de react



// Le code pour les nav links et le logo de l'entete
const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h3 className="text-2xl font-semibold text-violet-500">MyImmo</h3>
        </Link>
        {/* Buttons Log in and Sign up */}
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                className="hover:text-violet-900 transition"
                to="/">Home</Link>
            </li>
            <li>
              <Link
                className="hover:text-violet-900 transition"
                to="/about">About</Link>
            </li>
          </ul>
          <Link
            className="hover:text-violet-900 transition"
            to="/login">Log In</Link>
          <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
