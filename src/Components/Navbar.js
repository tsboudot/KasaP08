import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo"><img src='/logo.png' alt="logo" /></div>
            <NavLink to="/" activeClassName="active" exact>Accueil</NavLink>
            <NavLink to="/about" activeClassName="active">A propos</NavLink>
        </nav>
    );
};

export default Navbar;