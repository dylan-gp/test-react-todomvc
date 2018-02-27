import React from 'react';
import InputBarView from '../components/InputBarView';

export default class InputBar extends React.Component {
  passUpRef = ref => this.input = ref;
  addItem = (e) => {
    e.preventDefault();  // prevent page reload
    const todo = {
      id: Math.random() * 1000, // better way to handle this in the future
      name: this.input.value.trim(),
      complete: false
    };
    this.props.addItem(todo);
    this.input.value = ''; // clear the input field
  }
  render = () => 
    <InputBarView
      passUpRef={this.passUpRef}
      addItem={this.addItem}
    />;
}