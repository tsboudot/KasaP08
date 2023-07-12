import React from 'react';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo"><img src='/logo.png' alt="logo" /></div>
            <p>Acceuil</p>
            <p>A propos</p>
        </nav>
    );
};

export default Navbar;