import React from 'react';
import InputBarView from './InputBarView';


export default (props) => (
  <li className={props.item.complete ? 'list-item complete' : 'list-item'} >
    {props.inputBoxShow ? 
      <InputBarView
        showBtn={true}
        inputID="input-inside-container"
        passUpRef={props.passUpRef}
        submitHandler={props.changeItemSubmit}
        inputValue={props.item.name}
      /> :
      <ListItemStandard
        dblClickHandler={props.dblClickHandler}
        item={props.item}
        markComplete={props.markComplete}
        deleteItem={props.deleteItem}
      />
    }
  </li>
);


const ListItemStandard = (props) => (
  <React.Fragment>
    <label onDoubleClick={props.dblClickHandler}>{props.item.name}</label>
    {!props.item.complete ? 
      <button onClick={props.markComplete(props.item.id)}>√</button> :
      null
    }
    <button onClick={props.deleteItem(props.item.id)}>X</button>
  </React.Fragment>
);

