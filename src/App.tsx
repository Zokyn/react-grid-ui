import { useState } from "react";
import "./App.css";

function createGrid(size: number = 3): number[][] {
  const rows = size;
  const columns = size;

  const grid = Array.from({ length: rows }, () => Array(columns).fill(0));
  return grid;
}

function App() {
  const [size, setSize] = useState(5);
  const grid: number[][] = createGrid(size);

  return (
    <>
      <h1>Grid</h1>
      <div className="flex-row">
        <div>
          <h3>Info Panel</h3>
          <div>
            Size:{" "}
            <input
              value={size}
              type="number"
              onInput={(e) => setSize(parseInt(e.currentTarget.value))}
            />
          </div>
        </div>
        <div className="container">
          <ul className="grid-header">
            {grid.map((index, i) => (
              <li>
                <strong>{i}</strong>
              </li>
            ))}
          </ul>
          {grid.map((vector, i) => (
            <div id="grid-row" key={i}>
              <strong>{i + 1}</strong>
              <ul className="grid-vector">
                {vector.map((value, j) => (
                  <li className="grid-item" key={j}>
                    <button>
                      <b>{i * 4 + j}</b>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3>End Turn</h3>
          <button>Selecionar</button>
        </div>
      </div>
    </>
  );
}

export default App;
