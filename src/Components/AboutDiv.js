import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

function AboutDiv({ title, id, content }) {
    const [showContent, setShowContent] = useState(false);

    return (
        <div className="aboutDiv">
            <div className="aboutDivHeader">
                <h2>{title}</h2>
                <button onClick={() => setShowContent(!showContent)} className={showContent ? "rotated" : ""}>
                    <FontAwesomeIcon icon={faCaretUp} />
                </button>
            </div>
            <CSSTransition in={showContent} timeout={1000} classNames="content" unmountOnExit>
                <div className="aboutDivContent">
                    {showContent && <p id={id}>{content}</p>}
                </div>
            </CSSTransition>
        </div>
    );
};

export default AboutDiv;