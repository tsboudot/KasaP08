import React from 'react';


function Apptheader({ appt }) {  // Recevez l'appartement actuel comme prop
    return (
        <div className="apptHeader">
            <h1 className="apptTittle">{appt.title}</h1> {/* utilisez la prop pour afficher le titre */}
        </div>
    );
};


export default Apptheader;