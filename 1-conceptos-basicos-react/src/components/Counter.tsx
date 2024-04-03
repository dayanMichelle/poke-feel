import { useState } from "react";
import { Button } from "./Button";

type CounterProps = {
  initialValue: number;
  step: number;
};

export const Counter = ({ initialValue, step }: CounterProps) => {
  const [count, setCount] = useState(initialValue);

  // TODO: 1. incrementar o decrementar según la prop step el contador `Counter.tsx`
  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-400 w-64 rounded-lg shadow-lg p-8 mx-auto mt-20">
      <h2 className="text-2xl font-bold text-center mb-10 text-white">{count}</h2>
      <div className="flex justify-center gap-2">
        <Button label="Decrement" handleClick={decrement} />
        <Button label="Increment" handleClick={increment} />
      </div>
    </div>
  );
};
