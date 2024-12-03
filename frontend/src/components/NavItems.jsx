import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';


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
                        
                    </div>
                </div>
            </div>
        </header>
    )

}
