'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';

// A collection of beautiful, pre-designed color palettes
const PALETTES: Record<string, string[]> = {
  purple: [
    '#000000',       // Black
    '#1a0033',       // Deep Purple
    '#330066',       // Purple
    '#4d0099',       // Bright Purple
    '#6633cc',       // Lighter Purple
    '#8066ff',       // Lavender
    '#e6e6ff',       // White-Lavender
    '#ffffff',       // White
  ],
  ocean: [
    '#000000',       // Black
    '#001f3f',       // Navy
    '#003366',       // Dark Blue
    '#005b96',       // Steel Blue
    '#00aaff',       // Bright Blue
    '#66ccff',       // Sky Blue
    '#cceeff',       // Light Blue
    '#ffffff',       // White
  ],
  sunset: [
    '#000000',       // Black
    '#5D4157',       // Deep Mauve
    '#A84364',       // Dark Magenta
    '#F87995',       // Vibrant Pink
    '#F99185',       // Coral
    '#FBAB75',       // Warm Orange
    '#FFDDAA',       // Pale Yellow
    '#FFFFFF',       // White
  ],
  forest: [
    '#000000',       // Black
    '#003300',       // Dark Green
    '#006400',       // Green
    '#228b22',       // Forest Green
    '#32cd32',       // Lime Green
    '#9acd32',       // Yellow-Green
    '#d9ead3',       // Pale Green
    '#ffffff',       // White
  ],
};

const Cell = memo(({ color, intensity }: { color: string; intensity: number }) => {
  return (
    <motion.div
      className="w-full h-full"
      style={{
        backgroundColor: color,
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
  palette = 'purple',
}: { 
  size: number;
  volume: number;
  time: number;
  palette?: string;
}) => {
  const centerX = (size - 1) / 2;
  const centerY = (size - 1) / 2;
  const colors = PALETTES[palette] || PALETTES.purple;

  const cells = useMemo(() => {
    const waveAmplitude = Math.min(1.5, volume / 100);

    return Array.from({ length: size * size }).map((_, i) => {
      const x = i % size;
      const y = Math.floor(i / size);
      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      const wave = Math.sin(distance / 2.5 - time / 300) * waveAmplitude;
      const intensity = Math.pow(Math.max(0, (wave + 1) / 2), 2);
      const colorIndex = Math.min(colors.length - 1, Math.floor(intensity * colors.length));
      const color = colors[colorIndex] || colors[0];

      return <Cell key={i} color={color} intensity={intensity} />;
    });
  }, [size, volume, time, centerX, centerY, colors]);

  return (
    <div
      className="grid aspect-square max-h-[80vh] w-full max-w-2xl bg-black p-1 shadow-2xl shadow-purple-500/50"
      style={{ gridTemplateColumns: `repeat(${size}, 1fr)`, gap: '2px' }}
    >
      {cells}
    </div>
  );
};

export default MatrixGrid;
