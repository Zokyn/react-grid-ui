import { useState } from "react";
import "./App.css";

function App() {
  const grid: number[][] = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Grid</h1>
      <div className="container">
        {grid.map((vector, i) => (
          <div id="grid" key={i}>
            {/* <strong>Vetor {i + 1}:</strong> */}
            <ul className="grid-vector">
              {vector.map((value, j) => (
                <li className="grid-item" key={j}>
                  <button>
                    <b>{i + 1 + j}</b>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
