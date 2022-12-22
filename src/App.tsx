import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState<Array<string>>([
    "TodoA",
    "TodoB",
    "TodoC",
    "TodoD",
  ]);

  useEffect(() => {
    // Fetch users name
    // Store the name in a useState
  }, []);

  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: any) => {
    // Getting the todo written so far from the event
    const newTodoValue = e.target.value;
    setNewTodo(newTodoValue);
  };

  const handleTodoSubmit = () => {
    // Save the todo
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);

    // Remove the input
    setNewTodo("");
  };

  const removeTodo = (todoIdx: number) => {
    var newTodos = [...todos];
    newTodos.splice(todoIdx, 1);
    setTodos(newTodos);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ width: "40vw" }}>
        {todos.map((todo, idx) => (
          <Todo
            key={idx}
            todo={todo}
            handleRemove={removeTodo}
            todoIndex={idx}
          />
        ))}
      </div>

      <input value={newTodo} onChange={handleChange}></input>
      <button onClick={handleTodoSubmit}>Submit Todo</button>
    </div>
  );
}

export default App;

// Buy a google domain
// Find out what you want to put on website
// SpeedRun http://flexboxfroggy.com/
// Buidl something simple with DaisyUI components on a fresh Create React App
