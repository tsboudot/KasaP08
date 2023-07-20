import React, { createContext, useState, useEffect, useContext } from "react";

// Création du contexte
const ApptContext = createContext();

// Un composant provider qui enveloppe votre application et fournit le contexte
export const ApptProvider = ({ children }) => {
    const [appt, setAppt] = useState([]);

    useEffect(() => {
        fetch("db.json")
            .then((res) => res.json())
            .then((res) => setAppt(res));
    }, []);

    return <ApptContext.Provider value={appt}>{children}</ApptContext.Provider>;
};

// Un hook personnalisé qui permet d'accéder facilement au contexte
export const useAppt = () => {
    return useContext(ApptContext);
};