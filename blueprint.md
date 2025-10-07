# LUMA Music Visualizer

## Overview

LUMA is an interactive music visualizer that generates a dynamic grid of pulsating, glowing cells that react to the volume of music from the user's microphone.

## Core Features

*   **Audio-Reactive Visualization:** The grid pulsates in sync with the bass frequencies of the audio input.
*   **Wave Ripple Effect:** A mesmerizing wave of light ripples outwards from the center of the grid, with its brightness and speed controlled by the music's volume.
*   **Dynamic Color Scheme:** The color of the glow changes based on its intensity, creating a vibrant and energetic look.
*   **Customizable Grid Size, Brightness, and Speed:** Sliders allow the user to change the size of the grid, the brightness of the waves, and the speed of the animation.
*   **Modern & Simple UI:** A sleek, dark-themed interface with intuitive controls.

## Technical Implementation

*   **Framework:** Next.js with React (App Router)
*   **Styling:** Tailwind CSS for utility-first styling.
*   **Animation:** Framer Motion for smooth, performant animations.
*   **Audio Analysis:** A custom React hook (`useAudioAnalyzer`) utilizes the Web Audio API (`AnalyserNode`) to capture and process real-time frequency data from the user's microphone. It focuses on bass frequencies to drive the visualization.

## Current State

The application is now fully functional and visually stunning. The "grey box" bug has been resolved by giving the grid cells a default black background, ensuring the wave animation is always visible on a solid canvas.
