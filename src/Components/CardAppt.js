import React from 'react';
import { Link } from 'react-router-dom';


function CardAppt(props) {
    const link = {
        pathname: `/flat/${props.id}`,
        state: {
            apptId: props.id
        }
    };
    return (
        <Link to={link} className="cardApptslink">

            <div className='cardApptDiv'>
                <div className="divCardImage"><img src={props.imageCard} alt="" className="cardImage" /></div>
                < div className="divCardName" > <p className=''>{props.title}</p></div >
            </div >
        </Link >
    );
};

export default CardAppt;