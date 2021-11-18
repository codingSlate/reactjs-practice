import React, { useState } from 'react';
import './style.css';
import AddItemForm from './components/AddItemForm';
import ShowItemList from './components/ShowItemList';
const taskList = [
  { itemName: "Kunal"},
  { itemName: "Ravi"},
];

export default function App() {
  const [task, setTask] = useState(taskList);
  const getItemHandler = (data) => {
    // task.push(data);
    // console.log(task);
    setTask((prevState) => {
      return [data, ...task];
    });
  };
const ClickDeleteHandler=(data)=>{
  console.log(data)
}
const ClickEditHandler=(data)=>{
  console.log(data)
}

  return (
    <div>
      <h1>Task List</h1>
      <p>Task list management</p>
      <AddItemForm onGetItem={getItemHandler} />
      {task.map((m, index) => {
        <div key={index}>{m.itemName}</div>;
      })}

      <ShowItemList 
      task={task} 
      onClickDelete={ClickDeleteHandler}
      onClickEdit={ClickEditHandler} />
    </div>
  );
}
