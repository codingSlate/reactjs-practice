import React from 'react';
import './AddItemForm.css';
import Form from './Form';
const AddItemForm = (props) => {
  const addedItemHandler = (data) =>{
    console.log(data)
  }
  return (
    <div>
      <Form showName={addedItemHandler}/>
      <h2>Item List</h2>
    </div>
  );
};
export default AddItemForm;
