import React from 'react';

const Mainsection = (props) => {
    const { children } = props;
    return (
        <div className='mainSection'>
            {children}
        </div>
    );
};

export default Mainsection;