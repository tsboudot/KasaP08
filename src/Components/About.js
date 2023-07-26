import React from 'react';
import Navbar from './Navbar';
import BannerAbout from './BannerAbout';
import FooterAbout from './FooterAbout';
import AboutDiv from './AboutDiv';

function About() {
    return (
        <main>
            <Navbar />
            <BannerAbout />
            <section className="aboutSection">
                <AboutDiv title="Fiabilité" id="Id1" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
                <AboutDiv title="Respect" id="Id2" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme" />
                <AboutDiv title="Service" id="Id3" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme" />
                <AboutDiv title="Sécurité" id="Id4" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </section>
            <FooterAbout />
        </main>
    );
};

export default About;