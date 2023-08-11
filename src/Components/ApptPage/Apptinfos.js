import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Apptinfos({ appt }) {
    const [showDescription, setShowDescription] = useState(false);
    const [showEquipment, setShowEquipment] = useState(false);

    useEffect(() => {
    }, [showDescription, showEquipment]);

    return (
        <div className="apptInfos">
            <div className="column">
                <div className="description">
                    <div className="apptInfosHeader">
                        <h2>Description</h2>
                        <button onClick={() => setShowDescription(!showDescription)} className={showDescription ? "rotated" : ""}>
                            <FontAwesomeIcon icon={faChevronUp} />
                        </button>
                    </div>

                    <div className={`apptInfosContent ${showDescription ? 'show' : ''}`}>
                        {showDescription && <p className="fetchDescription">{appt.description}</p>}
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="equipement">
                    <div className="apptInfosHeader">
                        <h2>Equipements</h2>
                        <button onClick={() => setShowEquipment(!showEquipment)} className={showEquipment ? "rotated" : ""}>
                            <FontAwesomeIcon icon={faChevronUp} />
                        </button>
                    </div>

                    <div className={`apptInfosContent ${showEquipment ? 'show' : ''}`}>
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
        </div>
    );
};

export default Apptinfos;
