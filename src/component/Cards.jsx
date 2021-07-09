import React from 'react';

const Cards = (props) => {
    return (
        <div>
            <div className="cards" style={{width: 'auto'}}>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Cards;