import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [sortBy, setSortBy] = useState('rating');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json'
      )
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);

  return (
    <div className='App'>
      <header>Melp</header>
    </div>
  );
}

export default App;
