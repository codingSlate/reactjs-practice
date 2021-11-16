import React, { useState } from 'react';
import './Form.css';
const Form = (props) => {
  const [item, setItem] = useState({ itemName: '' });

  const submitItemHandler = (e) => {
    e.preventDefault();
    const getItems = {
      itemName: item.itemName,
    };
    props.onAddItem(getItems);
  };

  const taskNameHandler = (e) => {
    setItem((prevState) => {
      return { ...prevState, itemName: e.target.value };
    });
  };
  return (
    <form onSubmit={submitItemHandler}>
      <input
        type="text"
        placeholder="Enter Item"
        onChange={taskNameHandler}
        placeholder="Enter Item"
      />
      <input type="submit" value="Add Item" />
    </form>
  );
};
export default Form;
