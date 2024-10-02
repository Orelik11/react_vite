import "./App.css";
import { useState, setHistory } from "react";
import classNames from "classnames";

export const App = () => {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState("0");

  return (
    <div className="App">
      <h1>Value is {value}</h1>
      <p>History is {history}</p>
      {[1, 2, 3].map((item) => (
        <button
          className={`btnClass ${classNames({ active: item === value })}`}
          key={item}
          onClick={() => {
            setValue(item), setHistory(history + ", " + item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
