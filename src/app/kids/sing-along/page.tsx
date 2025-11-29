"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface Song {
  title: string;
  emoji: string;
  artist: string;
  lyrics: string[];
  duration: number; // in seconds
}

const songs: Song[] = [
  {
    title: "Twinkle Twinkle",
    emoji: "⭐",
    artist: "Classic",
    lyrics: [
      "Twinkle, twinkle, little star",
      "How I wonder what you are",
      "Up above the world so high",
      "Like a diamond in the sky",
      "Twinkle, twinkle, little star",
      "How I wonder what you are"
    ],
    duration: 30
  },
  {
    title: "Rainbow Song",
    emoji: "🌈",
    artist: "Kids Classic",
    lyrics: [
      "Red and orange, yellow and green",
      "Blue and indigo, violet too",
      "Rainbow colors, bright and true",
      "Shining in the sky so blue",
      "Red and orange, yellow and green",
      "Blue and indigo, violet too"
    ],
    duration: 35
  },
  {
    title: "Happy Friends",
    emoji: "🎉",
    artist: "Fun Song",
    lyrics: [
      "We are happy, we are friends",
      "Playing together, never ends",
      "Laughing, singing, having fun",
      "Under the bright, shining sun",
      "We are happy, we are friends",
      "Playing together, never ends"
    ],
    duration: 32
  },
  {
    title: "Animal Dance",
    emoji: "🦁",
    artist: "Dance Song",
    lyrics: [
      "Lions roar and tigers jump",
      "Elephants trumpet, thump, thump, thump",
      "Monkeys swing from tree to tree",
      "Dancing animals, wild and free",
      "Lions roar and tigers jump",
      "Elephants trumpet, thump, thump, thump"
    ],
    duration: 40
  }
];

export default function SingAlongPage() {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(100);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying && selectedSong) {
      const lineDuration = selectedSong.duration / selectedSong.lyrics.length;
      
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (100 / (selectedSong.duration * 10));
          if (newProgress >= 100) {
            setIsPlaying(false);
            setCurrentLine(0);
            return 0;
          }
          return newProgress;
        });

        setCurrentLine(prev => {
          const lineProgress = Math.floor((progress / 100) * selectedSong.lyrics.length);
          return Math.min(lineProgress, selectedSong.lyrics.length - 1);
        });
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, selectedSong, progress]);

  const handlePlayPause = () => {
    if (!selectedSong) return;
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentLine(0);
    setProgress(0);
  };

  const selectSong = (song: Song) => {
    setSelectedSong(song);
    handleReset();
  };

  const goBackToMenu = () => {
    setSelectedSong(null);
    handleReset();
  };

  if (!selectedSong) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-green-200 via-emerald-200 to-cyan-200 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 mb-4">
              🎵 Sing Along 🎵
            </h1>
            <p className="text-2xl text-green-700 font-bold">Choose your favorite song!</p>
          </div>

          {/* Song Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {songs.map((song, index) => (
              <button
                key={index}
                onClick={() => selectSong(song)}
                className="bg-gradient-to-br from-green-300 to-emerald-400 rounded-3xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 border-4 border-white"
              >
                <div className="text-center space-y-4">
                  <div className="text-8xl mb-4 animate-bounce" style={{ animationDuration: "2s" }}>
                    {song.emoji}
                  </div>
                  <h2 className="text-3xl font-black text-white drop-shadow-lg">
                    {song.title}
                  </h2>
                  <p className="text-white/90 text-lg font-semibold">
                    {song.artist}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/kids"
              className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-green-400 to-emerald-400 hover:scale-110 shadow-2xl transition-all"
            >
              ← Back to Games
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-200 via-emerald-200 to-cyan-200 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 mb-2">
            {selectedSong.emoji} {selectedSong.title}
          </h1>
          <p className="text-xl text-green-700 font-semibold">by {selectedSong.artist}</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 bg-white rounded-full h-4 overflow-hidden shadow-lg">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-100 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Lyrics Display */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6 min-h-[400px] flex flex-col justify-center">
          <div className="space-y-6">
            {selectedSong.lyrics.map((line, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${
                  index === currentLine
                    ? 'text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 scale-110'
                    : index < currentLine
                    ? 'text-2xl sm:text-3xl font-bold text-green-300'
                    : 'text-2xl sm:text-3xl font-semibold text-gray-400'
                }`}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6">
          {/* Play/Pause/Reset */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-full font-black text-white bg-gradient-to-r from-gray-400 to-gray-500 hover:scale-110 shadow-lg transition-all"
            >
              ⏮️ Reset
            </button>
            <button
              onClick={handlePlayPause}
              className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-green-400 to-emerald-400 hover:scale-110 shadow-lg transition-all text-2xl"
            >
              {isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
            <button
              onClick={goBackToMenu}
              className="px-6 py-3 rounded-full font-black text-white bg-gradient-to-r from-purple-400 to-pink-400 hover:scale-110 shadow-lg transition-all"
            >
              📚 Songs
            </button>
          </div>

          {/* Volume Control */}
          <div>
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-2xl">🔊</span>
              <span className="text-xl font-bold text-green-600">Volume: {volume}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full h-4 bg-gradient-to-r from-green-300 to-emerald-300 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {isPlaying && (
            <>
              <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{ animationDuration: "1s" }}>
                🎵
              </div>
              <div className="absolute top-40 right-20 text-7xl opacity-20 animate-bounce" style={{ animationDuration: "1.2s" }}>
                🎶
              </div>
              <div className="absolute bottom-40 left-20 text-8xl opacity-20 animate-bounce" style={{ animationDuration: "0.8s" }}>
                🎤
              </div>
              <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-bounce" style={{ animationDuration: "1.1s" }}>
                🎹
              </div>
            </>
          )}
        </div>

        {/* Navigation */}
        <div className="relative z-10 flex justify-center gap-4">
          <Link
            href="/kids"
            className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-green-400 to-emerald-400 hover:scale-110 shadow-2xl transition-all"
          >
            ← Back to Games
          </Link>
          <Link
            href="/home"
            className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-blue-400 to-cyan-400 hover:scale-110 shadow-2xl transition-all"
          >
            🏠 Home
          </Link>
        </div>
      </div>
    </main>
  );
}


