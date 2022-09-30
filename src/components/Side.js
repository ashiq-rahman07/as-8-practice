import React, { useEffect, useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';

const Side = (props) => {
    const { cart } = props;

    // console.log(cart)

    let wrktTime = 0;

    for (const workout of cart) {
        wrktTime = wrktTime + workout.time;
    }
    // const [etime,setEtime] = useState([])
    // let breakTime = 0;
    const [brTime, setBrtime] = useState(0)

    const btnHandler = (value) => {
        // console.log(value)
        setBrtime(value)
        localStorage.setItem('BrTime', value)


    }
    useEffect(() => {
        const storeTime =  localStorage.getItem('BrTime');
        const getStoreTime = JSON.parse(storeTime);
        setBrtime(getStoreTime)

    }, [brTime])

    const notify = () => toast('Here is your toast.');
    return (
        <div className='col-span-2 bg-orange-700 p-4'>
            <h3>  sidebar : {cart.length}</h3>
            <div className='flex gap-4'>
                <div><img className='w-10 rounded-full' src="asq.jpg" alt="" /></div>

                <div>
                    <h3>Md Ashiqur Rahman</h3>
                    <p><small>Chhtak, Sunamganj</small></p>
                </div>

            </div>
            <div className='flex gap-5 mt-5 justify-center items-center bg-slate-600 py-2 rounded-lg'>
                <div>
                    <h2>75<span>kg</span></h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2>6.9</h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2>25<span>years</span></h2>
                    <p>Age</p>
                </div>
            </div>
            <div>
                <h2>Add a Breaks</h2>
                <div className='flex gap-4'>
                    <button onClick={() => btnHandler(10)} className='rounded-full bg-slate-200 p-2'>10<span>s</span></button>
                    <button onClick={() => btnHandler(20)} className='rounded-full bg-slate-200 p-2'>20<span>s</span></button>
                    <button onClick={() => btnHandler(30)} className='rounded-full bg-slate-200 p-2'>30<span>s</span></button>
                    <button onClick={() => btnHandler(40)} className='rounded-full bg-slate-200 p-2'>40<span>s</span></button>
                    <button onClick={() => btnHandler(50)} className='rounded-full bg-slate-200 p-2'>50<span>s</span></button>
                </div>
            </div>
            <div className='mt-4'>
                <h2>Exercise Details</h2>
                <div className='flex justify-between bg-slate-500 mt-3 py-2 px-3'>
                    <h3>Exercise time</h3>
                    <p>{wrktTime}s</p>
                </div>
                <div className='flex justify-between bg-gray-600 mt-3 py-2 px-3'>
                    <h3>Break time</h3>
                    <p>{brTime}<span>minit</span></p>
                </div>
            </div>
            <button onClick={notify} className='bg-purple-900 px-4 py-2 mt-10'>Activity Completed</button>
            <Toaster />
        </div>
    );
};

export default Side;