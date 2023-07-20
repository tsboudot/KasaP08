import React, { useState, useEffect } from 'react';
import CardAppt from './CardAppt';
import { useAppt } from './context/ApptContext';

function ApptContainer() {
    const appt = useAppt();

    return (
        <div className="apptContainer">
            {appt.map((appt) => (
                <CardAppt
                    id={appt.id}
                    title={appt.title}
                    imageCard={appt.cover}
                />
            ))}
        </div>
    );
}
export default ApptContainer;

/*const ApptContainer = () => {
    const [numItems, setNumItems] = useState(8); // Initialiser à la valeur par défaut

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) { // Remplacez 768 par la taille de votre media query
                setNumItems(12); // Remplacez 12 par le nombre d'items pour les grandes tailles d'écran
            } else {
                setNumItems(8); // Remplacez 8 par le nombre d'items pour les petites tailles d'écran
            }
        };

        window.addEventListener('resize', handleResize);

        // Appeler la fonction une fois au chargement pour obtenir la taille initiale correcte
        handleResize();

        // Ne pas oublier de supprimer l'écouteur d'événements lorsque le composant est démonté
        return () => window.removeEventListener('resize', handleResize);
    }, []); // [] indique que cet effet ne doit être exécuté qu'une fois au chargement du composant 

    return (
        <div className='ApptContainer'>
            {
                Array.from({ length: numItems }).map((_, i) => <CardAppt key={i} />)
            }
        </div>
    );
};

export default ApptContainer; */