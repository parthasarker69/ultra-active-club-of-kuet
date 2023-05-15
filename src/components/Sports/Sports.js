import React, { useEffect, useState } from 'react';
import './Sports.css'
import Sport from '../Sport/Sport';

const Sports = () => {

    const [sports, setSports] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])

    return (
        <div className='sports-container row row-cols-1 row-cols-md-3 g-4'>
            {
                sports.map(sport => <Sport
                    sport={sport}
                    key={sport.id}
                ></Sport>)
            }
        </div>
    );
};

export default Sports;