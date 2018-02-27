import React from 'react';

export default ({item, markComplete, deleteItem}) => (
  <li className={item.complete ? 'list-item complete' : 'list-item'} >
    <p>{item.name}</p>
    {item.complete ? 
      null :
      <button onClick={markComplete}>√</button>
    }
    <button onClick={deleteItem(item.id)}>X</button>
  </li>
);