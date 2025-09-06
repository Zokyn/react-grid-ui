import { useEffect, useState, useRef } from "react";
import "./App.css";
import { createGrid } from "./utils/createGrid";

function App() {
  const [size, setSize] = useState<number>(5);
  const [selected, setSelected] = useState<number>(-1);

  const grid: number[][] = createGrid(size);
  let count = 0;

  const selectedInputRef = useRef<HTMLInputElement>(null);

  function handleChangeSize(value: string) {
    const size = parseInt(value);
    if (size <= 0) setSize(3);
    else if (size > 6) setSize(6);
    else setSize(size);
  }

  function handleSelect(value: string) {
    const index = parseInt(value); // string -> number;
    setSelected(index);
  }

  useEffect(() => {
    selectedInputRef.current?.classList.add("refreshing");
    setTimeout(() => {
      selectedInputRef.current?.classList.remove("refreshing");
    }, 850);
  }, [selected]);

  return (
    <>
      <h1>Grid</h1>
      <div className="flex-row">
        <div id="info-panel">
          <h3>Info Panel</h3>
          <div className="panel-row">
            <div style={{ alignItems: "center" }}>
              <label>Size</label>
              <sub>
                {size}x{size}
              </sub>
            </div>
            <input
              value={size}
              className="selected-size-input"
              type="number"
              onInput={(e) => handleChangeSize(e.currentTarget.value)}
            />
          </div>

          <div className="panel-row">
            <label>Selected</label>
            <input
              type="text"
              className="selected-item-input"
              ref={selectedInputRef}
              value={selected >= 0 ? selected + 1 : "0"}
              disabled
            />
          </div>
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
                          onClick={() => handleSelect(index)}
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
