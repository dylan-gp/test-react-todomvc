import React from 'react';
import ListItemView from '../components/ListItemView';
import { loadState, saveState } from '../utils/localStorage';


export default class Component extends React.Component {
  state = {
    item: null,
    inputBoxShow: false
  }

  componentDidMount() {
    this.setState({item: this.props.item});
  }

  componentDidUpdate() {
    if (!this.props.anyComplete && this.state.item.complete)
      this.props.setComplete();
    const loadedState = loadState();
    const itemIndex = 
      loadedState
        .items
        .findIndex(
          stateItem =>
            stateItem.id === this.state.item.id
          );
    loadedState.items[itemIndex] = this.state.item;
    saveState(loadedState);
  }

  markComplete = () =>
    this.setState(prev => {
      prev.item.complete = true;
      return {item: prev.item};
    });

  dblClickHandler = () =>
    this.setState({inputBoxShow: true});

  changeItemText = e => {
    e.preventDefault();  // prevent page reload
    const trimmedInput = this.input.value.trim();
    if (trimmedInput === '') return; // if the input has no value then exit
    this.setState((prev) => {
      prev.item.name = trimmedInput;
      return {inputBoxShow: false};
    });
  }

  passUpRef = ref => this.input = ref;

  render = () => 
    this.state.item ? 
      <ListItemView
        item={this.state.item}
        markComplete={this.markComplete}
        deleteItem={this.props.deleteItem}
        dblClickHandler={this.dblClickHandler}
        inputBoxShow={this.state.inputBoxShow}
        changeItemText={this.changeItemText}
        passUpRef={this.passUpRef}
      />
      : null;
}