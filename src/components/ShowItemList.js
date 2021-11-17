import React from 'react';
import './ShowItemList.css';
const ShowItemList = (props) => {
  console.log(props.task);
  if (props.task.length === 0) {
    return <div clssName="center">No data found</div>;
  }
  return (
    <ul clssName="nostyle">
      {props.task.map((t) => (
        <li className="" key={t.id}>
          {t.itemName}
        </li>
      ))}
      {/* {props.task[0].name} */}
      {/* {props.task.map((t, index) => {
        <li key={index}>{t.itemName}</li>;
      })} */}
    </ul>
  );
};
export default ShowItemList;
