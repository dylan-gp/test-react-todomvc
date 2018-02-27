import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import TitleBar from './components/TitleBar';
import InputBar from './containers/InputBar';
import ToDoList from './containers/ToDoList';
import './styles/App.css';


class App extends Component {
  state = {
    items: []
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
              items: prev.items.filter(
                item =>
                  item.id !== id
              )
            })
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
  render() {
    return (
      <React.Fragment>
        <TitleBar 
          title='To-Do'
        />
        <InputBar
          addItem={this.addItem}
        />
        {this.state.items.length ?
          <ToDoList 
            items={this.state.items}
            markAllComplete={this.markAllComplete}
            clearCompleted={this.clearCompleted}
            deleteItem={this.deleteItem}  // have to pass through multiple layers of components(maybe think about redux)
          /> : null
        }
      </React.Fragment>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
