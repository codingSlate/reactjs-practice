import React from 'react';
import './style.css';
import AddItemForm from './components/AddItemForm';

export default function App() {
  return (
    <div>
      <h1>Task List</h1>
      <p>Task list management</p>
      <AddItemForm />
    </div>
  );
}
