import React, { useEffect, useState } from 'react';
import Side from './Side';
import Workouts from './Workouts';

const Home = () => {
    const [workouts,setWorkout] = useState([]);
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('workout.json')
        .then(res=>res.json())
        .then(data =>setWorkout(data))
    },[])
    const handleAddToCart = (workout) => {
        // console.log(workout);
        // do not do this: cart.push(product);
        const newCart = [...cart, workout];
        setCart(newCart);
    }
    return (
        <div className='grid grid-cols-7 gap-5 w-10/12 m-auto mt-10'>
            <div className='col-span-5 grid grid-cols-3 gap-5 text-center'>
                {
                   workouts.map(workout => <Workouts key={workout.id} workout={workout}
                       handleAddToCart={handleAddToCart}
                   ></Workouts>)
                }



            </div>
           <Side cart={cart}></Side>
        </div>
    );
};

export default Home;