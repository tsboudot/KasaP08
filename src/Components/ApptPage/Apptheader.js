import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Apptheader({ appt }) {
    const activeStars = [];
    const inactiveStars = [];
    const rating = appt.rating;

    for (let i = 0; i < rating; i++) {
        activeStars.push(<span key={i} className="activeStar">&#9733;</span>);
    }

    for (let i = rating; i < 5; i++) {
        inactiveStars.push(<span key={i} className="inactiveStar">&#9733;</span>);
    }

    return (
        <div className="apptHeader">
            <Carousel>
                {appt.pictures.map((picture, index) => (
                    <div key={index}>
                        <img src={picture} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Carousel>
            <div className="apptHeaderInfos">
                <div className="apptHeaderLeft">
                    <div className="apptHeaderTittle&loc">
                        <h3 className="apptTittle">{appt.title}</h3> {/* utilisez la prop pour afficher le titre */}
                        <p className="apptLocation">{appt.location}</p>
                    </div>
                    <div className="apptHeadertags">

                        <ul>{appt.tags.map((tag, index) => (
                            <li className="tagAppart" key={index}>{tag}</li>
                        ))}
                        </ul>
                    </div>
                </div>

                <div className="apptHeaderRight">
                    <div className="apptHeaderHost">
                        <div className="apptHostName"><h4>{appt.host.name}</h4></div>
                        <div className="apptHostPicture"><img src={appt.host.picture} alt={`Host: ${appt.host.name}`} className="apptHostImg" /></div>
                    </div>
                    <div className="ratings">
                        {activeStars}
                        {inactiveStars}
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Apptheader;