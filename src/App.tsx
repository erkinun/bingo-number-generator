import { useState } from "react";
import "./App.css";

function generateSeries(start: number, end: number, step = 1) {
  const length = Math.floor((end - start) / step) + 1;
  return Array.from({ length }, (_, i) => start + i * step);
}

function App() {
  const numbers = generateSeries(0, 75);
  const [pickedNumbers, setPickedNumbers] = useState<number[]>([]);

  function pickANumber() {
    const all = new Set(numbers);
    const picked = new Set(pickedNumbers);
    const remaining: Set<number> = all.difference(picked);

    const remArr = Array.from(remaining);

    const randomIndex = Math.floor(Math.random() * remArr.length);
    console.log({ all, picked, remaining, remArr, randomIndex });
    const number = remArr[randomIndex];

    setPickedNumbers((prev) => [...prev, number]);
  }

  return (
    <>
      <div>{JSON.stringify(pickedNumbers)}</div>
      <button onClick={pickANumber}>Pick a number</button>
    </>
  );
}

export default App;
