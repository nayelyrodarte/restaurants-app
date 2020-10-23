import React, { useState } from 'react';
import ascendingIcon from '../img/ascending-sort.png';
import alphabeticalIcon from '../img/alphabetical-order.svg';

function Table(data) {
  const [sortData, sortedData] = useState(data.data);

  const displayRestaurants = sortData.map((restaurant) => (
    <tr key={restaurant.id} className='row'>
      <td>
        <div className='row__text'>
          <div className='row__header'>
            {' '}
            <p>{restaurant.name}</p>
            <p>{restaurant.address.street} </p>
            <p> {restaurant.address.city} </p>
          </div>
          <div>
            {' '}
            <p> {restaurant.contact.phone}</p>
            <p> {restaurant.contact.site}</p>
            <div
              className='fb-like'
              data-href='#'
              data-width='1em'
              data-layout='standard'
              data-action='like'
              data-size='small'
              data-share='true'
            ></div>
          </div>
        </div>
      </td>
      <td>
        <div className='row__rating'>{restaurant.rating}</div>
      </td>
    </tr>
  ));

  const sort = (key) => {
    const sorted = data.data.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    sortedData([...sorted]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <button
                onClick={() => {
                  sort('name');
                }}
              >
                <img src={alphabeticalIcon} alt='alphabetical-icon'></img>
              </button>
              Restaurante
            </th>
            <th>
              <button onClick={() => sort('rating')}>
                <img src={ascendingIcon} alt='ascending-icon'></img>
              </button>
              Rating
            </th>
          </tr>
        </thead>
        <tbody>{displayRestaurants}</tbody>
      </table>
    </div>
  );
}

export default Table;
