import React from 'react';

function Table(data) {
  const displayRestaurants = data.data.map((restaurant) => (
    <tr>
      <td>{restaurant.name}</td>
      <td>
        {restaurant.address.street} <br /> {restaurant.address.city}
      </td>
      <td>{restaurant.rating}</td>
      <button>Ver más</button>
    </tr>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Restaurante</th>
            <th>Dirección</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayRestaurants}</tbody>
      </table>
    </div>
  );
}

export default Table;
