import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);
  const inputRef = React.createRef();

  const addToList = () => {
    const input = inputRef.current;
    const value = input?.value;

    if (!value) return;

    setList([...list, value]);

    input.value = "";
  };

  const clearList = () => {
    setList([]);
  };

  const removeFirstElement = () => {
    const newList = [...list];
    newList.shift();
    setList(newList);
  };

  const removeLastElement = () => {
    const newList = [...list];
    newList.pop();
    setList(newList);
  };

  window.addEventListener("keydown", (e) => {
    const key = e.key;

    if (key === "Enter") {
      addToList();
    }
    if (key === "Delete") {
      clearList();
    }
  });

  return (
    <div className="App">
      <div className="header">
        <input ref={inputRef} type="text" placeholder="TO DO" />
        <button onClick={addToList}>Add to list</button>
        <button onClick={removeFirstElement}>Remove first elem</button>
        <button onClick={removeLastElement}>Remove last elem</button>
        <button onClick={clearList}>Clear list</button>
      </div>
      <div className="list">
        <ul>
          {list.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
