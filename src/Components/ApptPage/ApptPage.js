import React from 'react';
import Navbar from '../Navbar';
import { useParams } from 'react-router-dom';
import { useAppt } from '../context/ApptContext'
import Apptheader from './Apptheader';
import Apptinfos from './Apptinfos';
import Footer from '../Footer';
import Error from '../Error';



function ApptPage() {
    const appt = useAppt();
    const { id } = useParams();

    const currentAppt = appt.find((apt) => apt.id === id);

    if (!currentAppt) {
        return <Error />;
    }

    return (
        <main>
            <Navbar />
            <Apptheader appt={currentAppt} /> {/* passez l'appartement actuel comme prop */}
            <Apptinfos appt={currentAppt} />
            <Footer />
        </main>
    );
};

export default ApptPage;
