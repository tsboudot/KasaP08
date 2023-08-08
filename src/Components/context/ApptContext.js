import React, { createContext, useState, useEffect, useContext } from "react";

const ApptContext = createContext();


export const ApptProvider = ({ children }) => {
    const [appt, setAppt] = useState([]);

    useEffect(() => {
        fetch("/db.json")
            .then((res) => res.json())
            .then((res) => setAppt(res));
    }, []);

    return <ApptContext.Provider value={appt}>{children}</ApptContext.Provider>;
};


export const useAppt = () => {
    return useContext(ApptContext);
};