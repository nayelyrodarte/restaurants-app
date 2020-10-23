import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from './components/Table';
import MapContainer from './components/MapContainer';
import floatingArrowIcon from './img/chevron-up.svg';
import './index.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState('false');
  const [view, setView] = useState('list');

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json'
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className='App'>
      <div
        className='float'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img src={floatingArrowIcon} alt='floating-arrow-icon' />
      </div>

      <header>
        <h1>Melp</h1>
      </header>

      <div className='header__buttons'>
        <button onClick={() => setView('list')}>Ver lista</button>
        <button onClick={() => setView('map')}>Ver mapa</button>
      </div>
      {loading ? (
        <p className='charging__message'>'Cargando...'</p>
      ) : view === 'list' ? (
        <Table data={data} />
      ) : (
        <MapContainer data={data} />
      )}
    </div>
  );
}

export default App;
