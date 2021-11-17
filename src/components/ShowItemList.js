import React from 'react';
import './ShowItemList.css';

const ShowItemList = (props) => {
  // console.log(props.task);
  if (props.task.length === 0) {
    return <div clssName="center">No data found</div>;
  }
  return (
    <ul clssName="nostyle">
      {props.task.map((t, index) => (
        <li className="li" key={index}>
          <span>#{index} </span>
          {t.itemName}
          <span>Edit</span>
          <span>Delete</span>
        </li>
      ))}
    </ul>
  );
};
export default ShowItemList;
