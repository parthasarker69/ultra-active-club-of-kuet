import React from 'react';
import './Activities.css'
import Sports from '../Sports/Sports';


const Activities = () => {
    return (
        <div className='activities-container'>
            <h2 >ULTRA-ACTIVE-CLUB-OF-KUET</h2>
            <h3 className='my-5'>Select today’s exercise</h3>
            <Sports></Sports>
        </div>
    );
};

export default Activities;