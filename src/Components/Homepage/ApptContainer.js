import React from 'react';
import CardAppt from './CardAppt';
import { useAppt } from '../context/ApptContext';

function ApptContainer() {
    const appt = useAppt();

    return (
        <div className="apptContainer">
            {appt.map((appt) => (
                <CardAppt
                    key={appt.id}
                    id={appt.id}
                    title={appt.title}
                    imageCard={appt.cover}
                />
            ))}
        </div>
    );
}
export default ApptContainer;
