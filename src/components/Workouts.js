import React from 'react';

const Workouts = ({workout,handleAddToCart}) => {
    const {img,name,time}=workout
    return (
        <div>
            <img className='w-full' src={img} alt="" />
            <h3>{name}</h3>
            <p>{time}</p>
            <button onClick={()=>handleAddToCart(workout)} className=' bg-purple-700 rounded-md py-4 px-3'>select workout</button>
        </div>
    );
};

export default Workouts;