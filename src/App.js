import React, { useState } from "react";
import "./App.css";

const App = () => {
  // storing todos
  const [Todos, setTodos] = useState([
    {
      id: 1,
      title: "Demo Title 1",
      content: "Demo Content 1",
    },
    {
      id: 2,
      title: "Demo Title 2",
      content: "Demo Content 2",
    },
  ]);

  // storing input change
  const [input, setInput] = useState({
    id: Todos.length + 1,
    title: "",
    content: "",
  });

  // handling input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  // adding todo
  const handleAdd = () => {
    setTodos([...Todos, input]);
    setInput({
      title: "",
      content: "",
    });
  };

  // deleting todo
  const handleDelete = (id) => {
    setTodos((prev) => Todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="app">
      {/* input compnent */}
      <div className="todo-text-input">
        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleInputChange}
          value={input.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          spellCheck="false"
          onChange={handleInputChange}
          value={input.content}
        ></textarea>
        <button
          disabled={!(input.content || input.title)}
          style={
            !(input.content || input.title) ? { background: "#ec7171" } : {}
          }
          onClick={handleAdd}
        >
          +
        </button>
      </div>

      {/* todo list */}
      <div className="todo-list">
        {Todos.map((todo) => (
          <div className="todo-element" key={todo.id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              onClick={() => handleDelete(todo.id)}
            >
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
            <h1>{todo.title}</h1>
            <p>{todo.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;
