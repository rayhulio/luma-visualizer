'use client';

import { useState } from 'react';
import MatrixGrid from './components/MatrixGrid';
import useAudioAnalyzer from './hooks/useAudioAnalyzer';
import useTime from './hooks/useTime';

export default function Home() {
  const [gridSize, setGridSize] = useState(16);
  const [speed, setSpeed] = useState(1);

  const { volume, start } = useAudioAnalyzer();
  const time = useTime(speed);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-black text-white">
      <div className="w-full flex-col max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <header className="text-center w-full py-8">
          <h1 className="text-6xl font-bold tracking-tighter text-white">
            LUMA
          </h1>
          <p className="text-xl text-gray-400 mt-2">Your Personal Music Visualizer</p>
        </header>

        <div className="w-full flex justify-center items-center my-8">
          <button onClick={start} className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300">
            Start Visualization
          </button>
        </div>

        <MatrixGrid
          key={gridSize}
          size={gridSize}
          volume={volume}
          time={time}
        />

        <div className="w-full max-w-md mx-auto my-8 space-y-6">
          {/* Grid Size Slider */}
          <div>
            <label htmlFor="gridSize" className="block text-center text-sm font-medium text-gray-400 mb-2">
              Grid Size ({gridSize}x{gridSize})
            </label>
            <input
              id="gridSize"
              type="range"
              min="4"
              max="48"
              value={gridSize}
              onChange={(e) => setGridSize(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          {/* Speed Slider */}
          <div>
            <label htmlFor="speed" className="block text-center text-sm font-medium text-gray-400 mb-2">
              Speed
            </label>
            <input
              id="speed"
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

      </div>

      <footer className="text-center text-gray-500 text-sm mt-8">
        &copy; 2025 Luma. All Rights Reserved.
      </footer>
    </main>
  );
}
