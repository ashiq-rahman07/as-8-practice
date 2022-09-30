// use local storage to manage cart data
const addToDb = value => {
    let breakeTimee = {};

    //get the shopping cart from local storage
    const brTime = localStorage.getItem('BrTime');
    if (brTime) {
        breakeTimee = JSON.parse(brTime);
    }

    // add quantity
    const time = brTime[value];
    if (time) {
        const newTime = time + 1;
        brTime[value] = newTime;
    }
    else {
        breakeTimee[value] = 0;
    }
    localStorage.setItem('BrTime', JSON.stringify(brTime));
}

const getStoredCart = () => {
    let breakTime = {};

    //get the shopping cart from local storage
    const storedTime = localStorage.getItem('BrTime');
    if (storedTime) {
        breakTime = JSON.parse(storedCart);
    }
    return breakTime;
}



export {
    addToDb,
    getStoredCart
   
}
