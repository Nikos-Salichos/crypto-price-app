import './App.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Coin from './components/Coin';

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0')
      .then((response) => setListOfCoins(response.data.coins))
  }, [])

  const filteredCoins = listOfCoins.filter(c => {
    return c.name.toLowerCase().includes(searchWord.toLowerCase());
  })

  return (
    <div className="App">
      <div className='cryptoHeader'>
        <input type="text"
          placeholder="Search your coin!"
          onChange={e => { setSearchWord(e.target.value) }}></input>
      </div>

      <div className='cryptoDisplay'>{filteredCoins.map(coin => {
        return (<Coin
          key={coin.symbol}
          name={coin.name}
          icon={coin.icon}
          price={coin.price}
          symbol={coin.symbol}></Coin>)
      })}
      </div>
    </div >
  );
}

export default App;
