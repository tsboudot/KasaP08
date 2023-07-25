import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

function Apptinfos({ appt }) {
    const [showDescription, setShowDescription] = useState(false);
    const [showEquipment, setShowEquipment] = useState(false);

    return (
        <div className="apptInfos">
            <div className="description">
                <div className="apptInfosHeader">
                    <h2>Description</h2>
                    <button onClick={() => setShowDescription(!showDescription)} className={showDescription ? "rotated" : ""}>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </button>

                </div>
                <div className={`apptInfosContent ${showDescription ? "visible" : ""}`}>
                    {showDescription && <p className="fetchDescription">{appt.description}</p>}
                </div>
            </div>
            <div className="equipement">
                <div className="apptInfosHeader"><h2>Equipements </h2>
                    <button onClick={() => setShowEquipment(!showEquipment)} className={showEquipment ? "rotated" : ""}>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </button>

                </div>
                <div className={`apptInfosContent ${showEquipment ? "visible" : ""}`}>
                    {showEquipment &&
                        <ul className="fetchEquipement">
                            {appt.equipments.map((equipment, index) => (
                                <li key={index} className="equip">{equipment}</li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
};

export default Apptinfos;
