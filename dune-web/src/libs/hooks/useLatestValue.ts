import { useRef, useEffect } from 'react';

export function useLatestValue<T>(value: T) {
  const latestValueRef = useRef(value);

  useEffect(() => {
    latestValueRef.current = value;
  }, [value]);

  return latestValueRef
}