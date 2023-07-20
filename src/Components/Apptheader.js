import React from 'react';

function Apptheader(props) {
    return (
        <div class="apptHeader">
            <h1 className="apptTittle">{props.tittle}</h1>
        </div>
    );
};

export default Apptheader;