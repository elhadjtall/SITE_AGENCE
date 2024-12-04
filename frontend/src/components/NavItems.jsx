import React, { useState } from 'react';
import { Link } from "react-router-dom";


const navItems = () => {
    

    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [HeaderFixed, setHeaderFixed] = useState(false);

    //  addevent listener
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    })

    return (
        <header>
            <div className="hedear-top">
                <div className="container">
                    <div className="header-top-area">
                        <Link to="/signup" className='lab-btn me-3'><span>Create Account</span></Link>
                        <Link to="/login"><span>Log In</span></Link>
                    </div>
                </div>
            </div>

            {/*  Headet Botton */}
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        {/* Logo */}
                        <div className="logo">
                            <div className="logo-search-acte">
                                <div className="logo">
                                    <Link to="/">
                                    <h1>ElhadjTALL</h1>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}


export default Navitems