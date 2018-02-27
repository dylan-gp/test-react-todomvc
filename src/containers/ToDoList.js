import React from 'react';
import ListView from '../components/ListView';


export default class ToDoList extends React.Component {
  getAnyComplete = () => 
    this.props.items.some(item => item.complete);

  render = () => 
    <ListView 
      {...this.props}
      getAnyComplete={this.getAnyComplete}
    />;
}