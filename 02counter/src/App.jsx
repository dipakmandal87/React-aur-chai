import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // NOTE: useState(15) is the initial value of counter and setCounter is the function to update the value of counter

  let [counter, setCounter] = useState(0);
  // let counter = 15

  const addValue = () => {
    if (counter >= 20) {
      counter = 0;
      setCounter(counter);
      alert("Counter value can't be greater than 20");
      return;
    }
    counter = counter + 1;
    setCounter(counter);
  };
  const RemoveValue = () => {
    if (counter <= 0) {
      alert("Counter value can't be less than 0");
      return;
    }
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={RemoveValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
