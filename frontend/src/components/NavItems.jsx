import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // Ajoute l'écouteur d'événement pour la gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setHeaderFixed(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyage de l'écouteur d'événement
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
      {/* Barre supérieure */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login" className="lab-btn">
              <span>Log In</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo */}
            <div className="logo">
              <Link to="/">
                <h1>ElhadjTALL</h1>
              </Link>
            </div>

            {/* Bouton de menu mobile */}
            <div className="menu-toggle" onClick={() => setMenuToggle(!menuToggle)}>
              <span className={`menu-icon ${menuToggle ? "open" : ""}`}></span>
            </div>

            {/* Navigation */}
            <nav className={`menu ${menuToggle ? "active" : ""}`}>
              <ul className="lab-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/immeuble">Immeuble</Link></li>
                <li><Link to="/appartement">Appartement</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
