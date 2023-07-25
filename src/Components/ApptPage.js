import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { useAppt } from './context/ApptContext'
import Apptheader from './Apptheader';
import Apptinfos from './Apptinfos';
import Footer from './Footer';


function ApptPage() {
    const appt = useAppt();
    const { id } = useParams();

    const currentAppt = appt.find((apt) => apt.id === id);

    if (!currentAppt) {
        return <div>Appartement non trouvé</div>;
    }

    return (
        <div>
            <Navbar />
            <Apptheader appt={currentAppt} /> {/* passez l'appartement actuel comme prop */}
            <Apptinfos appt={currentAppt} />
            <Footer />
        </div>
    );
};

export default ApptPage;