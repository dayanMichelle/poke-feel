import { useEffect, useRef } from "react";

type UseFocusProps = {
  triggerOnChange: unknown;
};

export const useFocus = ({ triggerOnChange }: UseFocusProps) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    elementRef?.current?.focus();
  }, [triggerOnChange]); // Fix: Pass dependencies as an array literal

  return [elementRef];
};
