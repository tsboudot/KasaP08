import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Apptheader from './Apptheader'
import Apptinfos from './Apptinfos'
const ApptPage = () => {
    return (
        <div>
            <Navbar />
            <Apptheader />
            <Apptinfos />
            <Footer />
        </div>
    );
};

export default ApptPage;