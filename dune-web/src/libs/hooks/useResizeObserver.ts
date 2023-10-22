import { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash'; 

interface Dimensions {
  width: number;
  height: number;
}

export function useResizeObserver() {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });
  const targetRef = useRef<any | null>(null);

  const updateDimensions = (target: any) => {
    const { clientWidth, clientHeight } = target;
    setDimensions({ width: clientWidth, height: clientHeight });
  };

  const throttledUpdateDimensions = useRef(throttle(updateDimensions, 500))

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === target) {
          throttledUpdateDimensions.current(target); // 调用节流包装的函数
        }
      }
    });

    resizeObserver.observe(target);

    // Cleanup function
    return () => {
      resizeObserver.unobserve(target);
      resizeObserver.disconnect();
    };
  }, []);

  return { ref: targetRef, width: dimensions.width, height: dimensions.height };
}
