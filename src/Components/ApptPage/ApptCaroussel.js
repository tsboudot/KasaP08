import React, { useState } from 'react';
import { useAppt } from '../context/ApptContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
const ApptCaroussel = ({ id }) => {
    const appts = useAppt();
    const currentAppt = appts.find((apt) => apt.id === id);
    const [pictureIndex, setPictureIndex] = useState(0);

    if (!currentAppt || currentAppt.pictures.length === 0) {
        return <div>Aucune image trouvée pour cet appartement</div>;
    }

    const handleNext = () => {
        setPictureIndex((prevIndex) => (prevIndex + 1) % currentAppt.pictures.length);
    };

    const handlePrev = () => {
        setPictureIndex((prevIndex) => (prevIndex + currentAppt.pictures.length - 1) % currentAppt.pictures.length);
    };

    return (
        <div className='Caroussel'>
            <button className="prevButton" onClick={handlePrev}><FontAwesomeIcon icon={faCaretLeft} /></button>
            <img className='CarousselImg' src={currentAppt.pictures[pictureIndex]} alt="imageAppt" />
            <button className="nextButton" onClick={handleNext}><FontAwesomeIcon icon={faCaretRight} /></button>
            <p className="CarousselIndex">{`${pictureIndex + 1} / ${currentAppt.pictures.length}`}</p>

        </div>
    );
};

export default ApptCaroussel;