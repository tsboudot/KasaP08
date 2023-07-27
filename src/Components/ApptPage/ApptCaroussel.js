import React, { useState } from 'react';
import { useAppt } from '../context/ApptContext';

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
            <button onClick={handlePrev}>Précédente</button>
            <img className='CarousselImg' src={currentAppt.pictures[pictureIndex]} alt="imageAppt" />
            <button onClick={handleNext}>Suivante</button>
        </div>
    );
};

export default ApptCaroussel;