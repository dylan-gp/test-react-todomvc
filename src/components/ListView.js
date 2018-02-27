import React from 'react';
import ListItem from '../containers/ListItem';

export default (props) => (
  <ul className='list-container'>
    {props.items.map(
      item =>
        <ListItem
          key={item.id}
          item={item}
          {...props}
        />
    )}
    <LastListItem
      items={props.items}
      {...props}
    />
  </ul>
);

const LastListItem = ({markAllComplete, items, clearCompleted, getAnyComplete}) => (
    <li className="list-item-count">
      <BottomOfListClickText
        feature={markAllComplete}
        featureName="all completed"
      />
      {
        getAnyComplete() ?
          <BottomOfListClickText
            feature={clearCompleted}
            featureName="clear completed"
          /> :
          null
      }
      <ListCount items={items} />
    </li>
);

const BottomOfListClickText = ({feature, featureName}) =>
  <p className="list-feature" onClick={feature}>{featureName}</p>;


const ListCount = ({items}) => 
  <p>
    <strong>{items.length}</strong>
    {` item${items.length > 1 ? 's' : ''}`}
  </p>;