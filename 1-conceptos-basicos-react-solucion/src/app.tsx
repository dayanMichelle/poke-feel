import { Counter } from "./components/Counter";
import { SimpleCounter } from "./components/SimpleCounter";

export const App = () => {
  return (
    <main>
      <SimpleCounter />
      {/* // TODO: 2. cambiar el valor inicial del contador `Counter.tsx` en 20 */}
      <Counter initialValue={20} step={2} />
    </main>
  );
};
