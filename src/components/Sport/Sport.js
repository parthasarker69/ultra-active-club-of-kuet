import React from 'react';
import './Sport.css'

const Sport = ({ sport }) => {

    const { name, picture, description, timeRequired } = sport;
    return (

        <div className="col">
            <div className="card">
                <img src={picture} className="card-img card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold fs-2">{name}</h5>
                    <p className="card-text pt-3">{description}</p>
                    <p className="card-text fw-bold py-3">Time Required : {timeRequired}</p>
                    <a href="#hh" className="card-button btn btn-info">Add To Play</a>
                </div>

            </div>
        </div>
    );
};

export default Sport;