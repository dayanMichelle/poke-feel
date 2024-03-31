import { Counter } from "./components/Counter";
import { SimpleCounter } from "./components/SimpleCounter";

export const App = () => {
  return (
    <main>
      <h1>app</h1>
      <SimpleCounter />
      <Counter initialValue={10} step={2} />
    </main>
  );
};
