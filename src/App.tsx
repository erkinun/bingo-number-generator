import { useState } from "react";
import "./App.css";

function generateSeries(start: number, end: number, step = 1) {
  const length = Math.floor((end - start) / step) + 1;
  return Array.from({ length }, (_, i) => start + i * step);
}

function App() {
  const numbers = generateSeries(1, 75);
  const [pickedNumbers, setPickedNumbers] = useState<number[]>([]);
  const lastNumber = pickedNumbers[pickedNumbers.length - 1];

  // TODO add different range options like 90 etc
  // TODO add game state to localstorage etc

  function pickANumber() {
    const all = new Set(numbers);
    const picked = new Set(pickedNumbers);
    const remaining = numbers.filter((n) => !picked.has(n));

    const randomIndex = Math.floor(Math.random() * remaining.length);
    console.log({ all, picked, remaining, randomIndex });
    const number = remaining[randomIndex];

    setPickedNumbers((prev) => [...prev, number]);
  }

  return (
    <>
      <div>Erkin's greatest bingo generator</div>
      <button onClick={pickANumber}>Pick a number</button>

      <div className="board">
        {numbers.map((n) => {
          const classNames = `tile ${
            pickedNumbers.some((p) => p === n) ? "picked" : ""
          } ${lastNumber === n ? "last" : ""}`;
          return (
            <div className={classNames} key={n}>
              {n}
            </div>
          );
        })}
      </div>

      <div>{JSON.stringify(pickedNumbers)}</div>
    </>
  );
}

export default App;
