'use client';

import { useState } from 'react';
import MatrixGrid from './components/MatrixGrid';

export default function Home() {
  const [gridSize, setGridSize] = useState(16);
  const [brightness, setBrightness] = useState(1);
  const [speed, setSpeed] = useState(1000);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center font-sans p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-wider">LUMA</h1>
        <p className="text-lg text-gray-400">Your Personal Music Visualizer</p>
      </header>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Control Panel */}
        <div className="w-full md:w-1/4 bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Controls</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="gridSize" className="block text-sm font-medium text-gray-300 mb-2">
                Grid Size ({gridSize}x{gridSize})
              </label>
              <input
                type="range"
                id="gridSize"
                min="4"
                max="32"
                value={gridSize}
                onChange={(e) => setGridSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label htmlFor="brightness" className="block text-sm font-medium text-gray-300 mb-2">
                Brightness
              </label>
              <input
                type="range"
                id="brightness"
                min="0.1"
                max="1"
                step="0.1"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label htmlFor="speed" className="block text-sm font-medium text-gray-300 mb-2">
                Animation Speed (ms)
              </label>
              <input
                type="range"
                id="speed"
                min="100"
                max="2000"
                step="100"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Matrix Grid Display */}
        <main className="w-full md:w-3/4 flex justify-center items-center bg-gray-800 rounded-lg p-6 shadow-lg">
          <MatrixGrid size={gridSize} brightness={brightness} speed={speed} />
        </main>
      </div>

      <footer className="text-center text-gray-500 mt-8">
        <p>&copy; {new Date().getFullYear()} Luma. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
