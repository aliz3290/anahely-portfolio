"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

type Direction = '↑' | '↓' | '←' | '→';

interface Arrow {
  id: number;
  direction: Direction;
  y: number;
  speed: number;
}

interface Song {
  name: string;
  emoji: string;
  difficulty: 'easy' | 'medium' | 'hard';
  duration: number;
}

const songs: Song[] = [
  { name: "Happy Dance", emoji: "🎉", difficulty: "easy", duration: 30 },
  { name: "Party Time", emoji: "🎊", difficulty: "medium", duration: 45 },
  { name: "Super Dance", emoji: "💃", difficulty: "hard", duration: 60 }
];

const arrowColors = {
  '↑': 'from-red-400 to-pink-500',
  '↓': 'from-blue-400 to-cyan-500',
  '←': 'from-yellow-400 to-orange-500',
  '→': 'from-green-400 to-emerald-500'
};

export default function DancePartyPage() {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [arrows, setArrows] = useState<Arrow[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [danceAnimation, setDanceAnimation] = useState(0);
  const arrowIdRef = useRef(0);
  const gameIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const arrowIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying && selectedSong && !gameOver) {
      setTimeLeft(selectedSong.duration);

      // Spawn arrows
      const spawnRate = selectedSong.difficulty === 'easy' ? 1500 : selectedSong.difficulty === 'medium' ? 1000 : 700;
      
      arrowIntervalRef.current = setInterval(() => {
        const directions: Direction[] = ['↑', '↓', '←', '→'];
        const direction = directions[Math.floor(Math.random() * directions.length)];
        
        setArrows(prev => [...prev, {
          id: arrowIdRef.current++,
          direction,
          y: 0,
          speed: selectedSong.difficulty === 'easy' ? 2 : selectedSong.difficulty === 'medium' ? 3 : 4
        }]);
      }, spawnRate);

      // Game timer
      gameIntervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            endGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Dance animation
      const danceInterval = setInterval(() => {
        setDanceAnimation(prev => (prev + 1) % 4);
      }, 300);

      return () => {
        if (arrowIntervalRef.current) clearInterval(arrowIntervalRef.current);
        if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
        clearInterval(danceInterval);
      };
    }
  }, [isPlaying, selectedSong, gameOver]);

  useEffect(() => {
    if (isPlaying && !gameOver) {
      const moveInterval = setInterval(() => {
        setArrows(prev => {
          const updated = prev.map(arrow => ({
            ...arrow,
            y: arrow.y + arrow.speed
          })).filter(arrow => arrow.y < 600);
          return updated;
        });
      }, 16);

      return () => clearInterval(moveInterval);
    }
  }, [isPlaying, gameOver]);

  const handleKeyPress = (direction: Direction) => {
    if (!isPlaying || gameOver) return;

    const hitZone = 500;
    const tolerance = 30;

    const hitArrow = arrows.find(arrow => 
      arrow.direction === direction &&
      arrow.y >= hitZone - tolerance &&
      arrow.y <= hitZone + tolerance
    );

    if (hitArrow) {
      // Hit!
      setArrows(prev => prev.filter(arrow => arrow.id !== hitArrow.id));
      setCombo(prev => prev + 1);
      const points = 10 * (combo + 1);
      setScore(prev => prev + points);
    } else {
      // Miss
      setCombo(0);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          handleKeyPress('↑');
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          handleKeyPress('↓');
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          handleKeyPress('←');
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          handleKeyPress('→');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [arrows, isPlaying, gameOver, combo]);

  const startGame = (song: Song) => {
    setSelectedSong(song);
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
    setCombo(0);
    setArrows([]);
    setTimeLeft(song.duration);
    arrowIdRef.current = 0;
  };

  const endGame = () => {
    setIsPlaying(false);
    setGameOver(true);
    if (arrowIntervalRef.current) clearInterval(arrowIntervalRef.current);
    if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
  };

  const resetGame = () => {
    setSelectedSong(null);
    setIsPlaying(false);
    setGameOver(false);
    setScore(0);
    setCombo(0);
    setArrows([]);
    setTimeLeft(0);
  };

  const danceEmojis = ['💃', '🕺', '👯', '🎊'];

  if (!selectedSong || (!isPlaying && !gameOver)) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-purple-200 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 mb-4">
              💃 Dance Party 💃
            </h1>
            <p className="text-2xl text-blue-700 font-bold">Press the arrows to dance!</p>
          </div>

          {/* Song Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {songs.map((song, index) => (
              <button
                key={index}
                onClick={() => startGame(song)}
                className="bg-gradient-to-br from-blue-300 to-cyan-400 rounded-3xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 border-4 border-white"
              >
                <div className="text-center space-y-4">
                  <div className="text-8xl mb-4 animate-bounce" style={{ animationDuration: "2s" }}>
                    {song.emoji}
                  </div>
                  <h2 className="text-3xl font-black text-white drop-shadow-lg">
                    {song.name}
                  </h2>
                  <p className="text-white/90 text-lg font-semibold capitalize">
                    {song.difficulty}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-white rounded-3xl shadow-2xl p-6">
            <h3 className="text-2xl font-black text-blue-600 mb-4 text-center">How to Play</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-4xl mb-2">↑</div>
                <p className="font-bold text-blue-600">Arrow Up</p>
              </div>
              <div>
                <div className="text-4xl mb-2">↓</div>
                <p className="font-bold text-blue-600">Arrow Down</p>
              </div>
              <div>
                <div className="text-4xl mb-2">←</div>
                <p className="font-bold text-blue-600">Arrow Left</p>
              </div>
              <div>
                <div className="text-4xl mb-2">→</div>
                <p className="font-bold text-blue-600">Arrow Right</p>
              </div>
            </div>
            <p className="text-center mt-4 text-lg font-semibold text-gray-700">
              Press the matching arrow when it reaches the hit zone!
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/kids"
              className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-blue-400 to-cyan-400 hover:scale-110 shadow-2xl transition-all"
            >
              ← Back to Games
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-200 to-purple-200 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">
            {selectedSong.emoji} {selectedSong.name}
          </h1>
          <div className="flex justify-center gap-6 text-xl font-bold text-blue-700">
            <span>Time: {timeLeft}s</span>
            <span>Score: {score}</span>
            <span>Combo: {combo}x</span>
          </div>
        </div>

        {/* Game Over Screen */}
        {gameOver && (
          <div className="mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-3xl p-8 text-center shadow-2xl animate-bounce">
            <div className="text-8xl mb-4">🎉</div>
            <h2 className="text-5xl font-black text-white mb-4">Game Over!</h2>
            <p className="text-3xl text-white font-bold mb-2">Final Score: {score}</p>
            <p className="text-2xl text-white font-semibold">Max Combo: {combo}x</p>
            <div className="mt-4 text-6xl">⭐🏆⭐</div>
          </div>
        )}

        {/* Game Area */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6 relative" style={{ height: '600px' }}>
          {/* Arrows falling */}
          {arrows.map(arrow => (
            <div
              key={arrow.id}
              className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${arrowColors[arrow.direction]} flex items-center justify-center text-4xl font-black text-white shadow-lg`}
              style={{ top: `${arrow.y}px` }}
            >
              {arrow.direction}
            </div>
          ))}

          {/* Hit Zone */}
          <div className="absolute left-0 right-0 top-[500px] h-[60px] border-4 border-dashed border-blue-400 bg-blue-100/50 flex items-center justify-center">
            <div className="text-2xl font-black text-blue-600">HIT ZONE</div>
          </div>

          {/* Dancing Character */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-8xl animate-bounce">
            {danceEmojis[danceAnimation]}
          </div>

          {/* Control Buttons (for mobile) */}
          <div className="absolute bottom-4 left-0 right-0 grid grid-cols-4 gap-2 px-4">
            {(['↑', '↓', '←', '→'] as Direction[]).map((dir, index) => (
              <button
                key={index}
                onClick={() => handleKeyPress(dir)}
                className={`h-16 rounded-full bg-gradient-to-br ${arrowColors[dir]} text-3xl font-black text-white shadow-lg active:scale-90 transition-all`}
              >
                {dir}
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-6">
          {!gameOver && (
            <button
              onClick={endGame}
              className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-red-400 to-pink-400 hover:scale-110 shadow-2xl transition-all"
            >
              ⏹️ Stop
            </button>
          )}
          <button
            onClick={resetGame}
            className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-blue-400 to-cyan-400 hover:scale-110 shadow-2xl transition-all"
          >
            🔄 New Game
          </button>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <Link
            href="/kids"
            className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-blue-400 to-cyan-400 hover:scale-110 shadow-2xl transition-all"
          >
            ← Back to Games
          </Link>
          <Link
            href="/home"
            className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-purple-400 to-pink-400 hover:scale-110 shadow-2xl transition-all"
          >
            🏠 Home
          </Link>
        </div>
      </div>
    </main>
  );
}


