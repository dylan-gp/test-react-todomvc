import React from 'react';

export default (props) => (
  <ul className='list-container'>
    {props.items.map(
      item =>
        <li className='list-item' key={item.id} >
          <p>{item.name}</p>
          <button>X</button>
        </li>
    )}
  </ul>
);