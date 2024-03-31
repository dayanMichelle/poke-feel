import { useState } from "react";

export const SimpleCounter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  console.count("render");

  return (
    <div className="flex flex-col items-center justify-center bg-gray-400 w-64 rounded-lg shadow-lg p-8 mx-auto mt-20">
      <h2 className="text-2xl font-bold text-center mb-10">{count}</h2>
      <div className="flex justify-center gap-2">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};
