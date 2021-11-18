import React from 'react';
import './ShowItemList.css';

const ShowItemList = (props) => {
  // console.log(props.task);
  if (props.task.length === 0) {
    return <div clssName="center">No data found</div>;
  }
  return (
    <ul className="nostyle">
      {props.task.map((t, index) => (
        <li className="li" key={index}>
          <div className="flexitem1">#{index+1} </div>
          <div className="flexitem2">{t.itemName}</div>
          <button type="button" className="btn flexitem3">Edit</button >
          <button type="button" className="btn flexitem4">Delete</button >
        </li>
      ))}
    </ul>
  );
};
export default ShowItemList;
