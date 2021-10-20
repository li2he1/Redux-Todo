import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = [
    { id: 1, title: "breakfast", completed: true },
    { id: 2, title: "lunch", completed: false },
    { id: 3, title: "dinner", completed: false }
  ];
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
