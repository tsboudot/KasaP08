import React from 'react';
import { Link } from 'react-router-dom';


function CardAppt(props) {
    const link = {
        pathname: "/flat",
        state:
        {
            apptId: props.id
        }
    }
    return (
        <Link to={link}>

            <div className='cardAppt'>
                <div className="divCardImage"><img src={props.imageCard} alt="" className="cardImage" /></div>
                < div className="divCardName" > <p className=''>{props.title}</p></div >
            </div >
        </Link >
    );
};

export default CardAppt;