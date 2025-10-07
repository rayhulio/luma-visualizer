'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

const useAudioAnalyzer = () => {
  const [amplitude, setAmplitude] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const processAudio = useCallback((dataArray: Uint8Array) => {
    // A broader frequency range for a more stable and responsive amplitude
    const fullFrequencyRange = { start: 0, end: dataArray.length };

    const currentVolume = dataArray
      .slice(fullFrequencyRange.start, fullFrequencyRange.end)
      .reduce((acc, val) => acc + val, 0);

    // A simple smoothing algorithm to prevent jittery brightness changes
    setAmplitude(prev => (prev * 0.8) + (currentVolume * 0.2));

  }, []);

  const start = useCallback(async () => {
    if (isInitialized || !navigator.mediaDevices) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const context = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioContextRef.current = context;

      const analyser = context.createAnalyser();
      analyser.fftSize = 256; // A good balance of performance and detail
      analyser.smoothingTimeConstant = 0.8; // A higher value for smoother amplitude readings
      analyserRef.current = analyser;

      const source = context.createMediaStreamSource(stream);
      source.connect(analyser);

      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const animate = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getByteFrequencyData(dataArray);
        processAudio(dataArray);
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();
      setIsInitialized(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      if (typeof alert !== 'undefined') {
        alert('Microphone access denied. Please allow microphone access in your browser settings.');
      }
    }
  }, [isInitialized, processAudio]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(console.error);
      }
    };
  }, []);

  return { amplitude, start, isInitialized };
};

export default useAudioAnalyzer;
