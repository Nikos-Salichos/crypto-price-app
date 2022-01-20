import './App.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Coin from './components/Coin';

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);

  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10')
      .then((response) => setListOfCoins(response.data.coins))
  }, [])


  return (
    <div className="App">
      <div className='cryptoHeader'></div>
      <div className='cryptoDisplay'>{listOfCoins.map(coin => {
        return <Coin
          key={coin.symbol}
          name={coin.name}
          icon={coin.icon}
          price={coin.price}
          symbol={coin.symbol}></Coin>
      })}</div>
    </div>
  );
}

export default App;
