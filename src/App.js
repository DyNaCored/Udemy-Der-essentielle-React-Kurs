import React, { useState, useEffect } from "react";
import "./App.css";
import Counter from "./Counter";

import Greet from "./Greet";

function App() {
  const [counterList, setCounterList] = useState([
    {
      id: 1,
      count: 1,
    },
    {
      id: 2,
      count: 2,
    },
    {
      id: 3,
      count: 3,
    },
  ]);

  function handleCounterChange(counter) {
    setCounterList((prevCounterList) =>
      prevCounterList.map((c) => {
        if (c.id === counter.id) {
          return counter;
        } else {
          return c;
        }
      })
    );
  }

  return (
    <div className="App">
      <Greet name="Julian" />
      {/* <Counter /> */}
      {counterList.map((counter) => (
        <div style={{ margin: "5vh" }} /* className="hover-big" */>
          <Counter
            key={counter.id}
            count={counter.count}
            id={counter.id}
            handleCounterChange={handleCounterChange}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
