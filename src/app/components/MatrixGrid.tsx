'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';

// Expanded color palette for a richer, more vibrant wave
const COLORS = [
  '#000000',       // Black
  '#1a0033',       // Deep Purple
  '#330066',       // Purple
  '#4d0099',       // Bright Purple
  '#6633cc',       // Lighter Purple
  '#8066ff',       // Lavender
  '#e6e6ff',       // White-Lavender
  '#ffffff',       // White
];

const Cell = memo(({ color, intensity }: { color: string; intensity: number }) => {
  return (
    <motion.div
      className="w-full h-full"
      style={{
        backgroundColor: color,
        // The boxShadow creates the "glow" effect, tied to the wave's intensity
        boxShadow: `0 0 ${intensity * 20}px ${color}`,
        transition: 'background-color 0.05s ease-out, box-shadow 0.05s ease-out',
      }}
    />
  );
});

Cell.displayName = 'Cell';

const MatrixGrid = ({
  size,
  volume,
  time,
}: { 
  size: number;
  volume: number;
  time: number;
}) => {
  const centerX = (size - 1) / 2;
  const centerY = (size - 1) / 2;

  const cells = useMemo(() => {
    // The audio volume now controls the amplitude of the wave itself, making it pulse
    const waveAmplitude = Math.min(1.5, volume / 100);

    return Array.from({ length: size * size }).map((_, i) => {
      const x = i % size;
      const y = Math.floor(i / size);

      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

      // The wave's height is now directly tied to the music's volume
      const wave = Math.sin(distance / 2.5 - time / 300) * waveAmplitude;

      // Normalize wave value to an intensity (0 to 1)
      const intensity = Math.pow(Math.max(0, (wave + 1) / 2), 2);

      const colorIndex = Math.min(
        COLORS.length - 1,
        Math.floor(intensity * COLORS.length)
      );
      const color = COLORS[colorIndex] || COLORS[0];

      return <Cell key={i} color={color} intensity={intensity} />;
    });
  }, [size, volume, time, centerX, centerY]);

  return (
    <div
      className="grid aspect-square max-h-[80vh] w-full max-w-2xl bg-black p-1 shadow-2xl shadow-purple-500/50"
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gap: '2px',
      }}
    >
      {cells}
    </div>
  );
};

export default MatrixGrid;
