import React from "react";


const NavItems = () => {
    // On creer une constante pour le menu
    const content = <>
        <div>
            <ul>
                <Link to="Home">
                    <li>Home</li>
                </Link>
                
                <Link to="">
                    <li>About</li>
                </Link>
                
                <Link>
                    <li>Services</li>
                </Link>
                
                <Link>
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>

        </nav>
    )
}

export default NavItems;