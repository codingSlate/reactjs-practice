import React from 'react';
const ShowItemList = (props) => {
  // console.log(props.task);
  return (
    <div>
      <ul>
        {props.task.map((t, index) => {
          <li key={index}>{t.itemName}</li>;
        })}
      </ul>
    </div>
  );
};
export default ShowItemList;
