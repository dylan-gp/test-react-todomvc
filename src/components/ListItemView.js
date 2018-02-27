import React from 'react';
import InputBarView from './InputBarView';


export default (props) => (
  <li className={props.item.complete ? 'list-item complete' : 'list-item'} >
    {props.inputBoxShow ? 
      <InputBarView
        showBtn={true}
        inputID="input-inside-container"
        passUpRef={props.passUpRef}
        submitHandler={props.changeItemText}
        inputValue={props.item.name}
      /> :
      <label onDoubleClick={props.dblClickHandler}>{props.item.name}</label>
    }
    {!props.item.complete && !props.inputBoxShow ? 
      <button onClick={props.markComplete}>√</button> :
      null
    }
    {!props.inputBoxShow ? 
      <button onClick={props.deleteItem(props.item.id)}>X</button> :
      null
    }
  </li>
);


