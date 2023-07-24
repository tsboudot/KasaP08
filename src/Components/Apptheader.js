import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Apptheader({ appt }) {
    const stars = [];
    for (let i = 0; i < appt.rating; i++) {
        stars.push(<span key={i}>&#9733;</span>) // &#9733 est le code HTML pour l'étoile
    }  // Recevez l'appartement actuel comme prop
    return (
        <div className="apptHeader">
            <Carousel>
                {appt.pictures.map((picture, index) => (
                    <div key={index}>
                        <img src={picture} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Carousel>
            <div className="apptHeaderTop">
                <div className="apptHeaderRight">
                    <h1 className="apptTittle">{appt.title}</h1> {/* utilisez la prop pour afficher le titre */}
                    <p className="apptLocation">{appt.location}</p>
                </div>
                <div className="appHeaderLeft__host">
                    <div className="apptHostName"></div>
                    <div className="appptHostPicture"></div>
                </div>
            </div>
            <div className="apptHeaderBottom">
                <div className="ratings">
                    {stars}
                </div>
                <div className="tags">
                    <ul>{appt.tags.map((tag, index) => (
                        <li className="tagAppart" key={index}>{tag}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Apptheader;