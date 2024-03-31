import { useEffect } from "react";

type UseEventListenerProps = {
  eventName: string;
  handler: (event: StorageEvent) => void;
};
export const useEventListener = ({
  eventName,
  handler,
}: UseEventListenerProps) => {
  useEffect(() => {
    window.addEventListener(eventName, (event: Event) => {
      handler(event as StorageEvent);
    });

    return () => {
      window.removeEventListener(eventName, () => {});
    };
  }, [eventName, handler]);

  return null;
};
