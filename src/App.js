import React, { useState } from 'react';
import './style.css';
import AddItemForm from './components/AddItemForm';
import ShowItemList from './components/ShowItemList';
const taskList = [];

export default function App() {
  const [task, setTask] = useState(taskList);
  const getItemHandler = (data) => {
    // task.push(data);
    // console.log(task);
    setTask((prevState) => {
      return [data, ...task];
    });
  };


  return (
    <div>
      <h1>Task List</h1>
      <p>Task list management</p>
      <AddItemForm onGetItem={getItemHandler} />
      {task.map((m, index) => {
        <div key={index}>{m.itemName}</div>;
      })}

      <ShowItemList task={task} />
    </div>
  );
}
