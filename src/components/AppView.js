import React from 'react';
import TitleBarView from './TitleBarView';
import InputBar from '../containers/InputBar';
import ToDoList from '../containers/ToDoList';
import { Route } from 'react-router-dom';


export default (props) => (
  <React.Fragment>
    <TitleBarView
      title='To-Do'
    />
    <InputBar
      addItem={props.addItem}
    />
    <Routes
      {...props}
    />
  </React.Fragment>
);

const Routes = (props) => {
  const completedItems = props.items.filter(item => item.complete === true);
  const activeItems = props.items.filter(item => !item.complete);

  const cbRender = items => 
    items.length ?
      <ToDoList
        {...props}
        items={items} // must be last or ...props will overwrite
      /> : null;

  return (
    <React.Fragment>
      <Route exact path='/' render={() => cbRender(props.items)} />
      <Route exact path='/active' render={() => cbRender(activeItems)} />
      <Route exact path='/completed' render={() => cbRender(completedItems)} />
    </React.Fragment>
  );
};