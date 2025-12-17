import { useEffect, useState, useRef } from "react";
import "./App.css";
import { createGrid } from "./utils/createGrid";
import { handleChangeSize } from "./utils/handleChangeSize";
import { handleSelect } from "./utils/handleSelection";

function App() {
  const [size, setSize] = useState<number>(5);
  const [selected, setSelected] = useState<number>(-1);

  const grid: number[][] = createGrid(size);
  const isActive = (index: number) =>
    /* if has Selected */
    selected != -1 &&
    /* and if is the Selected */
    (index == selected ||
      selected === index + size || // or the Selected is it Upper Neighbour
      selected === index - size || // or the Selected is it Lower Neighbour
      (selected == index + 1 && // or the Selected is it Right Neighbour
        (index + 1) % size != 0) ||
      (selected == index - 1 && // or the Selected is it Left Neighbour
        index - 1 >= 0 &&
        index % size != 0) ||
      /* ''       ''        '' Lower-right Neighbour*/
      (selected == index + size + 1 && (index + 1) % size != 0) ||
      /* ''       ''        '' Lower-left Neighbour*/
      (selected == index + size - 1 &&
        index - 1 >= 0 &&
        (index + size - 1) % size < size - 1) ||
      /* ''       ''       '' Upper-right Neighbour*/
      (selected === index - size + 1 &&
        index + 1 >= size &&
        (index - size + 1) % size > 0) ||
      /* ''       ''       '' Upper-left Neighbour*/
      (selected === index - size - 1 && (index - size - 1) % size < size - 1));
  let count = 0;

  const selectedInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    selectedInputRef.current?.classList.add("refreshing");
    setTimeout(() => {
      selectedInputRef.current?.classList.remove("refreshing");
    }, 850);
  }, [selected]);

  return (
    <>
      <h1>Grid</h1>
      <div className="main-row">
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
              onInput={(e) => handleChangeSize(e.currentTarget.value, setSize)}
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
            {grid.map((_, i) => (
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
                  {vector.map((_, j) => {
                    count++;
                    const index = i * size + j;
                    return (
                      <li
                        className={`grid-item 
                          ${isActive(index) && " active"}
                          ${index === selected && " selected"}`}
                        key={j}
                      >
                        <button
                          key={i * size + j}
                          id={`item-button-${i * size + j}`}
                          onClick={() =>
                            handleSelect(String(index), setSelected)
                          }
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
      </div>
    </>
  );
}

export default App;
