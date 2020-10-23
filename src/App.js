import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from './Table';

import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState('false');

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
      <header>
        <h1>Melp</h1>
      </header>
      {loading ? 'Cargando...' : <Table data={data} sortData={setData} />}
    </div>
  );
}

export default App;
