import React from "react";

interface ITodo {
  todo: string;
  handleRemove: (idx: number) => void;
  todoIndex: number;
}

const Todo = ({ todo, handleRemove, todoIndex }: ITodo) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>{todo}</div>
      <button onClick={() => handleRemove(todoIndex)}>Remove</button>
    </div>
  );
};

export default Todo;
