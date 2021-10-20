import React from "react";

const TodoItem = ({ id, title, completed }) => {
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <input type="checkbox" checked={completed} className="mr-3" />
        <span>{title}</span>
        <button className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};
export default TodoItem;
