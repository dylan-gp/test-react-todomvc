import React from 'react';
import ListItem from '../containers/ListItem';

export default ({items, deleteItem}) => (
  <ul className='list-container'>
    {items.map(
      item =>
        <ListItem key={item.id} item={item} deleteItem={deleteItem}/>
    )}
  </ul>
);