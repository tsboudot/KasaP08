import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function AboutDiv({ title, id, content }) {
    const [showContent, setShowContent] = useState(false);

    return (
        <div className="aboutDiv">
            <div className="aboutDivHeader">
                <h2>{title}</h2>
                <button onClick={() => setShowContent(!showContent)} className={showContent ? "rotated" : ""}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
            </div>
            <div className={`aboutDivContent ${showContent ? 'show' : 'hide'}`}>
                <p id={id}>{content}</p>
            </div>
        </div>
    );
};

export default AboutDiv;