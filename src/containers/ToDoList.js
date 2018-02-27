import React from 'react';
import ListView from '../components/ListView';

export default class ToDoList extends React.Component {
  state = {
    anyComplete: false
  }

  setComplete = () => this.setState({ anyComplete: true });

  render = () => 
    <ListView 
      items={this.props.items}
      deleteItem={this.props.deleteItem}
      markAllComplete={this.props.markAllComplete}
      clearCompleted={this.props.clearCompleted}
      anyComplete={this.state.anyComplete}
      setComplete={this.setComplete}
    />;
}