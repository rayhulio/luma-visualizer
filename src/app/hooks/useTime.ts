'use client';

import { useState, useEffect, useRef } from 'react';

const useTime = (speed: number) => {
  const [time, setTime] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      setTime(timestamp * speed);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [speed]);

  return time;
};

export default useTime;
