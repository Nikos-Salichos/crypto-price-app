import './App.css';
import React, { useEffect } from 'react';
import Axios from 'axios';

function App() {

  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10').then((response) => console.log(response))
  }, [])


  return (
    <div className="App">
      <div className='cryptoHeader'></div>
      <div className='cryptoDisplay'></div>
    </div>
  );
}

export default App;
