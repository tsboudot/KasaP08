import React from 'react';

const root_url = 'http://localhost:3000/'
const Footer = () => {
    return (
        <footer>
            <img src={root_url + "/logoBlack.png"} alt="logo" className="logoFooter" />
            <h3>&#9400; 2020 Kasa. All rights reserved</h3>
        </footer>
    );
};

export default Footer;