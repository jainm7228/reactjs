import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(Counter + 1);
  };

  const removeValue = () => {
    setCounter(Counter - 1);
  };
  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value:{Counter}</h2>

      <button onClick={addValue}>Add value {Counter} </button>
      <br />
      <button onClick={removeValue}>remove value {Counter} </button>
    </>
  );
}

export default App;
