import React from 'react';
import ListItemView from '../components/ListItemView';

export default class Component extends React.Component {
  state = {
    item: null
  }
  
  componentDidMount() {
    this.setState({item: this.props.item});
  }

  markComplete = () =>
    this.setState(prev => {
      prev.item.complete = true;
      return {item: prev.item};
    });

  render = () => 
    this.state.item ? 
      <ListItemView
        item={this.state.item}
        markComplete={this.markComplete}
        deleteItem={this.props.deleteItem}
      />
      : null;
}