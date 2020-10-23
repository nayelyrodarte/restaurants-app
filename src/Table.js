import React, { useState } from 'react';

function Table(data) {
  const [sortData, sortedData] = useState(data.data);

  const displayRestaurants = sortData.map((restaurant) => (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>
        {restaurant.address.street} <br /> {restaurant.address.city}
      </td>
      <td>{restaurant.rating}</td>
      <button>Ver más</button>
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
              <button onClick={() => sort('name')}>Sort</button>Restaurante
            </th>
            <th>Dirección</th>
            <th>
              <button onClick={() => sort('rating')}>Sort</button>Rating
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayRestaurants}</tbody>
      </table>
    </div>
  );
}

export default Table;
