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
  const [selected, setSelected] = useState(-1);
  const grid: number[][] = createGrid(size);
  let count = 0;
  return (
    <>
      <h1>Grid</h1>
      <div className="flex-row">
        <div>
          <h3>Info Panel</h3>
          <div>
            Size:
            <input
              value={size}
              type="number"
              onInput={(e) => setSize(parseInt(e.currentTarget.value))}
            />
          </div>
          <div>Selected: {selected}</div>
        </div>
        <div className="container">
          <ul className="grid-header">
            {grid.map((index, i) => (
              <li>
                <strong>{i + 1}</strong>
              </li>
            ))}
          </ul>
          {grid.map((vector, i) => {
            return (
              <div className="grid-row" key={i}>
                <strong>{i + 1}</strong>
                <ul className="vector">
                  {vector.map((value, j) => {
                    count++;
                    const index = i * size + j;
                    return (
                      <li
                        className={
                          index == selected ? "grid-item active" : "grid-item"
                        }
                        key={j}
                      >
                        <button
                          key={i * size + j}
                          id={`item-button-${i * size + j}`}
                          onClick={() => setSelected(index)}
                        >
                          <b>{count}</b>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
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
