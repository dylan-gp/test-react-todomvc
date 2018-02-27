import React from 'react';

export default ({addItem, passUpRef}) => (
  <form className='input-form' onSubmit={addItem}>
    <input
      className='input-input'
      placeholder='Add Item..'
      autoFocus={true}
      ref={passUpRef}
    />
    <input type='submit' className='input-btn' value='+' />
  </form>
);