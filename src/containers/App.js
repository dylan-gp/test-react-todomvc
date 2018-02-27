import React from 'react';
import AppView from '../components/AppView';
import { loadState, saveState } from '../utils/localStorage';
import '../styles/App.css';


export default class App extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    this.setState(loadState);
  }
  componentDidUpdate() {
    saveState(this.state); // think about how to deal with those that are individually completed
  }

  addItem = item =>
    this.setState(
      prev => 
        ({items: [...prev.items, item]})
    );

  deleteItem =
    id =>
      () => // this is where the Event would be taken in but we dont need it 
        this.setState(
          prev =>
            ({
              items: prev.items.filter( // just filter out the one with the matching id
                item =>
                  item.id !== id
              )
            })
        );

  markComplete = 
    id =>
      () =>
        this.setState(
          prev => {
            prev.items.forEach(
              item =>
                item.id === id ? 
                  item.complete = true :
                  null
            );
            return prev;
          }
        );

  markAllComplete = () =>
    this.setState(
      prev => {
        prev.items.forEach(
          item =>
            item.complete = true
        )
        return prev;
      }
    );

  clearCompleted = () =>
    this.setState(
      prev =>
        ({
          items: prev.items.filter(
            item =>
              !item.complete
          )
        })
    );
    
  changeItemText =
    id =>
      input =>
        this.setState(
          prev =>
            prev.items.map(
              item => {
                if (item.id === id)
                  item.name = input;
                return item;
              }
            )
        );

  render = () => 
    <AppView
      items={this.state.items}
      addItem={this.addItem}
      deleteItem={this.deleteItem}
      markComplete={this.markComplete}
      markAllComplete={this.markAllComplete}
      clearCompleted={this.clearCompleted}
      changeItemText={this.changeItemText}
    />;
}