import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Apptheader from './Apptheader'
import Apptinfos from './Apptinfos'
import { useParams } from 'react-router-dom';

function ApptPage(props) {

    return (
        <div>
            <Navbar />
            <Apptheader tittle={props.tittle} />
            <Apptinfos />
            <Footer />
        </div>
    );
};

export default ApptPage;