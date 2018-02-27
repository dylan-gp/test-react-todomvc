import React from 'react';
import ListItem from '../containers/ListItem';

export default ({items, deleteItem}) => (
  <ul className='list-container'>
    {items.map(
      item =>
        <ListItem key={item.id} item={item} deleteItem={deleteItem}/>
    )}
    <ListCount items={items}/>
  </ul>
);

const ListCount = ({items}) => 
  <li className="list-item-count">
    <label>
      {`${items.length} item${items.length > 1 ? 's' : ''}`}
    </label>
  </li>;