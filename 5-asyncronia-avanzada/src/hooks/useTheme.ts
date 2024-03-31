import { useCallback, useState } from "react";
import { useEventListener } from "./useEventListener";

const STORAGE_KEY = "isDarkTheme";

export const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "false")
  );

  const handlerStorageListener = useCallback((event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      if (event.newValue === null) return;
      setIsDarkTheme(JSON.parse(event.newValue));
    }
  }, []);

  useEventListener({
    eventName: "storage",
    handler: handlerStorageListener,
  });

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTheme));
    setIsDarkTheme(newTheme);
  };

  return [isDarkTheme, toggleTheme];
};
