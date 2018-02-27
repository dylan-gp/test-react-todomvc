import React from 'react';

export default (props) => (
  <form className='input-form' onSubmit={props.addItem}>
    <input
      className='input-input'
      placeholder='Add Item..'
      ref={props.passUpRef}
    />
    <input type='submit' className='input-btn' value='+' />
  </form>
);