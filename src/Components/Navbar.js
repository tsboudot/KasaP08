import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo"><img src='/logo.png' alt="logo" /></div>
            <div className="navbar_divLink">
                <NavLink to="/" activeclassname="active">Accueil</NavLink>
                <NavLink to="/about" activeclassname="active">A propos</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;