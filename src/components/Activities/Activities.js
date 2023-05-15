import React from 'react';
import './Activities.css'
import Sports from '../Sports/Sports';
import ActivitiesDetails from '../ActivitiesDetails/ActivitiesDetails';


const Activities = () => {
    return (
        <div className='activities-container mx-4 row row-cols-md-2 row-cols-sm-1'>
            <div className='col col-md-9'>
                <h2 >ULTRA-ACTIVE-CLUB-OF-KUET</h2>
                <h3 className='my-5'>Select today’s exercise</h3>
                <Sports></Sports>
            </div>
            <div className='col-md-2 mx-auto bg-white mt-5'>
                <ActivitiesDetails></ActivitiesDetails>
            </div>
        </div>
    );
};

export default Activities;