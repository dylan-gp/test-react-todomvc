import React from 'react';
import ListItemView from '../components/ListItemView';

export default class Component extends React.Component {
  state = {
    inputBoxShow: false
  }

  componentDidMount() {
    this.setState({item: this.props.item});
  }

  dblClickHandler = () =>
    this.setState({inputBoxShow: true});

  changeItemSubmit = e => {
    e.preventDefault();  // prevent page reload
    const trimmedInput = this.input.value.trim();
    if (trimmedInput === '') return; // if the input has no value then exit
    this.setState((prev) => {
      return {inputBoxShow: false};
    });
    this.props.changeItemText(this.props.item.id)(trimmedInput); // pass it all way up to chenge state
  }

  passUpRef = ref => this.input = ref;

  render = () => 
    this.state.item ? 
      <ListItemView
        dblClickHandler={this.dblClickHandler}
        inputBoxShow={this.state.inputBoxShow}
        changeItemSubmit={this.changeItemSubmit}
        passUpRef={this.passUpRef}
        {...this.props}
      />
      : null;
}