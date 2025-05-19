import { useEffect, useState } from "react";

interface CountUpProps {
  to: number;
  duration?: number; // in ms
  formatter?: (n: number) => string;
}

const CountUp = ({ to, duration = 1500, formatter }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => { 
    const startTime = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * to);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [to, duration]);

  return <>{formatter ? formatter(count) : count.toLocaleString()}</>;
};

export default CountUp;
