'use client';

import React, { useState, useEffect, useCallback } from 'react';

const MatrixGrid = ({ size = 16, brightness = 1, speed = 1000 }) => {
  const [grid, setGrid] = useState<string[][]>([]);

  // Function to generate a random RGB color
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

  // Function to initialize and update the grid
  const updateGrid = useCallback(() => {
    const newGrid = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => getRandomColor())
    );
    setGrid(newGrid);
  }, [size]);

  // Initialize and set up interval for animation
  useEffect(() => {
    updateGrid(); // Initial grid
    const intervalId = setInterval(updateGrid, speed);
    return () => clearInterval(intervalId);
  }, [size, speed, updateGrid]);

  const ledStyle = (color: string) => ({
    backgroundColor: color,
    boxShadow: `0 0 2px ${color}, 0 0 5px ${color}, 0 0 10px ${color}`,
    opacity: brightness,
  });

  return (
    <div className="flex justify-center items-center">
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${size}, 1fr)`,
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((color, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="w-6 h-6 rounded-sm transition-colors duration-500 ease-in-out"
              style={ledStyle(color)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MatrixGrid;