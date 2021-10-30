import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ title: value }));
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Todo Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add your content here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};
export default AddTodoForm;
