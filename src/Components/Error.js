import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Error = () => {
    return (
        <div className="pageError">
            <Navbar />
            <div className="pageErrorMainSection">
                <h2 className="tittle404">
                    404
                </h2>
                <h3 className="subTittle404">
                    Oups! La page que vous demaindez n'existe pas.
                </h3>
                <Link to="/" className="link404">Retourner à la page d'accueil</Link>

            </div>
            <Footer />
        </div>
    );
};

export default Error;