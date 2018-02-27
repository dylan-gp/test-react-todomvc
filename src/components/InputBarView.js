import React from 'react';

export default ({submitHandler, passUpRef, showBtn, inputID, inputValue}) => (
  <form
    className='input-form'
    onSubmit={submitHandler}
  >
    <input
      id={inputID}
      className='input-input'
      placeholder={showBtn ? '' : 'Add Item..'}
      autoFocus={true}
      ref={passUpRef}
      defaultValue={inputValue}
    />
    {!showBtn ? <input type='submit' className='input-btn' value='+' /> : null}
  </form>
);