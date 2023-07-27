import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

function Apptinfos({ appt }) {
    const [showDescription, setShowDescription] = useState(false);
    const [showEquipment, setShowEquipment] = useState(false);

    const descRef = useRef(null);
    const equipRef = useRef(null);

    useEffect(() => {
        if (showDescription && showEquipment) {
            const descHeight = descRef.current.offsetHeight;
            const equipHeight = equipRef.current.offsetHeight;
            const maxHeight = Math.max(descHeight, equipHeight);

            descRef.current.style.height = `${maxHeight}px`;
            equipRef.current.style.height = `${maxHeight}px`;
        }
    }, [showDescription, showEquipment]);

    return (
        <div className="apptInfos">
            <div className="description">
                <div className="apptInfosHeader">
                    <h2>Description</h2>
                    <button onClick={() => setShowDescription(!showDescription)} className={showDescription ? "rotated" : ""}>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </button>
                </div>
                <CSSTransition in={showDescription} timeout={1000} classNames="description" unmountOnExit>
                    <div ref={descRef} className="apptInfosContent">
                        {showDescription && <p className="fetchDescription">{appt.description}</p>}
                    </div>
                </CSSTransition>
            </div>
            <div className="equipement">
                <div className="apptInfosHeader">
                    <h2>Equipements</h2>
                    <button onClick={() => setShowEquipment(!showEquipment)} className={showEquipment ? "rotated" : ""}>
                        <FontAwesomeIcon icon={faCaretUp} />
                    </button>
                </div>
                <CSSTransition in={showEquipment} timeout={1000} classNames="equipment" unmountOnExit>
                    <div ref={equipRef} className="apptInfosContent">
                        {showEquipment &&
                            <ul className="fetchEquipement">
                                {appt.equipments.map((equipment, index) => (
                                    <li key={index} className="equip">{equipment}</li>
                                ))}
                            </ul>
                        }
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
};

export default Apptinfos;