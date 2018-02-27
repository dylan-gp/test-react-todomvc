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
