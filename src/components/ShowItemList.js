import React from 'react';
import './ShowItemList.css';

const ShowItemList = (props) => {
  // console.log(props.task);
  if (props.task.length === 0) {
    return <div clssName="center">No data found</div>;
  }
  const onClickDelete = (e) => {
    e.preventDefault();
    // console.log(e.target.parentElement);
  };
  const onClickEdit = (e) => {
    e.preventDefault();
    // console.log(e.target.parentElement);
  };

  return (
    <ul className="nostyle">
      {props.task.map((t, index) => (
        <li className="li" key={index}>
          <div className="flexitem1">#{index + 1} </div>
          <div className="flexitem2">{t.itemName}</div>
          <button
            type="button"
            className="btn flexitem3"
            onClick={onClickDelete}
          >
            Edit
          </button>
          <button type="button" className="btn flexitem4" onClick={onClickEdit}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ShowItemList;
