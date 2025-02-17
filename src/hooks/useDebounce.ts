import { useState, useEffect } from "react";

/**
 * Debounce the value
 * @param value - value to debounce
 * @param {number} delay - delay in milliseconds (default is 1000ms)
 * @returns - the debounced value
 *
 * @example
 * const debouncedValue = useDebounce(value, 1000);
 */
function useDebounce<T>(value: T, delay: number = 1000): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
