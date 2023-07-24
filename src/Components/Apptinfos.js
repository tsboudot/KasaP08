import React from 'react';

function Apptinfos({ appt }) {
    return (
        <div className="apptInfos">
            <div className="description">
                <h2>Description</h2>
                <p className="fetchDescription">{appt.description}</p>
            </div>
            <div className="equipement">
                <h2>Equipements</h2>
                <ul className="fetchEquipement">
                    {appt.equipments.map((equipment, index) => (
                        <li key={index} className="equip">{equipment}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Apptinfos;