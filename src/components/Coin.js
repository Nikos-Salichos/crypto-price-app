import React from 'react';

function coin({ name, icon, price, symbol }) {
    return <div className='coin'>
        <h1> Name: {name} </h1>
        <img src={icon} alt=""></img>
        <h1> Price: {price} </h1>
        <h1> Symbol: {symbol} </h1>
    </div>;
}

export default coin;
