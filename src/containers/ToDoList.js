import React from 'react';
import ListView from '../components/ListView';

export default class ToDoList extends React.Component {
  render = () => 
    <ListView 
      items={this.props.items}
    />;
}