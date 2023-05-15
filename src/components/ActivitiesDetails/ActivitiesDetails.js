import React from 'react';
import './ActivitiesDetails.css'

const ActivitiesDetails = () => {
    return (
        <div className='activities-details'>
            <div className='profile '>
                <img className='profile-image' src="https://tse4.mm.bing.net/th?id=OIP.tZPMM5xIJl-QnPMNjNhLuAHaHa&pid=Api&P=0" alt="" />
                <div className='profile-details'>
                    <p >Fake Partha</p>
                    <p>Sydney Australia</p>
                </div>
            </div>
            <div className='person-details'>
                <div className='person-detail'>
                    <p className='fw-bold fs-2'>75 <small>kg</small></p>
                    <p>Weight</p>
                </div>
                <div className='person-detail'>
                    <p className='fw-bold fs-2'>6.5</p>
                    <p>Height</p>
                </div>
                <div className='person-detail'>
                    <p className='fw-bold fs-2'>25 <small>yrs</small></p>
                    <p>Age</p>
                </div>
            </div>
            <h3 className='my-5'>Add a break</h3>
            <div className='break-time'>
                <button className='btn btn-info rounded-pill'>10s</button>
                <button className='btn btn-info rounded-pill'>20s</button>
                <button className='btn btn-info rounded-pill'>30s</button>
                <button className='btn btn-info rounded-pill'>40s</button>
                <button className='btn btn-info rounded-pill'>50s</button>
            </div>
            <div className="exercise-details">
                <h3 className='my-5'>Exercise Details</h3>
                <p className='bg-secondary text-info p-3 rounded fw-bolder fs-5'>Exercise time : {0} seconds</p>
                <p className='bg-secondary text-white p-3 rounded fw-bolder fs-5'>Break time : {0} seconds</p>
            </div>
            <button className='btn fs-5 btn-info'>Activity Completed</button>
        </div>
    );
};

export default ActivitiesDetails; <h1>hello</h1>