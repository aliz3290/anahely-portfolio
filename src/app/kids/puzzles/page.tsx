"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const emojiSets = {
  easy: ['🦄', '🌈', '⭐', '🎈', '🦋', '🌸', '🦁', '🐰'],
  medium: ['🦄', '🌈', '⭐', '🎈', '🦋', '🌸', '🦁', '🐰', '🐻', '🐸', '🐨', '🐷'],
  hard: ['🦄', '🌈', '⭐', '🎈', '🦋', '🌸', '🦁', '🐰', '🐻', '🐸', '🐨', '🐷', '🦉', '🐝', '🦊', '🐼', '🐯', '🐨']
};

type Difficulty = 'easy' | 'medium' | 'hard';

export default function PuzzlesPage() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const gridSizes = {
    easy: 4,
    medium: 4,
    hard: 6
  };

  const totalPairs = {
    easy: 8,
    medium: 12,
    hard: 18
  };

  const initializeGame = () => {
    const emojis = emojiSets[difficulty];
    const gridSize = gridSizes[difficulty];
    const pairs = totalPairs[difficulty];
    
    // Create pairs
    const emojiPairs = emojis.slice(0, pairs);
    const cardEmojis = [...emojiPairs, ...emojiPairs];
    
    // Shuffle
    for (let i = cardEmojis.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardEmojis[i], cardEmojis[j]] = [cardEmojis[j], cardEmojis[i]];
    }

    const newCards: Card[] = cardEmojis.map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false
    }));

    setCards(newCards);
    setFlippedCards([]);
    setMatches(0);
    setMoves(0);
    setTime(0);
    setIsPlaying(true);
    setGameWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, [difficulty]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !gameWon) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, gameWon]);

  const playWinSound = () => {
    try {
      // Try to play the yay sound file if it exists
      const audio = new Audio('/yay-sound.mp3');
      audio.volume = 0.7;
      audio.play().catch((error) => {
        // If file doesn't exist, fall back to generated sound
        console.log('Audio file not found, using generated sound');
        playGeneratedSound();
      });
    } catch (error) {
      // Fallback to generated sound
      playGeneratedSound();
    }
  };

  const playGeneratedSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator1 = audioContext.createOscillator();
      const oscillator2 = audioContext.createOscillator();
      const oscillator3 = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator1.connect(gainNode);
      oscillator2.connect(gainNode);
      oscillator3.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // Create a celebratory "yay" sound with multiple tones
      oscillator1.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
      oscillator2.frequency.setValueAtTime(659.25, audioContext.currentTime); // E5
      oscillator3.frequency.setValueAtTime(783.99, audioContext.currentTime); // G5

      oscillator1.type = 'sine';
      oscillator2.type = 'sine';
      oscillator3.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

      oscillator1.start(audioContext.currentTime);
      oscillator2.start(audioContext.currentTime);
      oscillator3.start(audioContext.currentTime);

      oscillator1.stop(audioContext.currentTime + 0.5);
      oscillator2.stop(audioContext.currentTime + 0.5);
      oscillator3.stop(audioContext.currentTime + 0.5);

      // Second part of the "yay"
      setTimeout(() => {
        const osc1 = audioContext.createOscillator();
        const osc2 = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(audioContext.destination);

        osc1.frequency.setValueAtTime(659.25, audioContext.currentTime); // E5
        osc2.frequency.setValueAtTime(783.99, audioContext.currentTime); // G5

        osc1.type = 'sine';
        osc2.type = 'sine';

        gain.gain.setValueAtTime(0.3, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

        osc1.start(audioContext.currentTime);
        osc2.start(audioContext.currentTime);
        osc1.stop(audioContext.currentTime + 0.3);
        osc2.stop(audioContext.currentTime + 0.3);
      }, 200);
    } catch (error) {
      console.log('Audio not available');
    }
  };

  useEffect(() => {
    if (matches === totalPairs[difficulty]) {
      setIsPlaying(false);
      setGameWon(true);
      playWinSound();
    }
  }, [matches, difficulty]);

  const handleCardClick = (cardId: number) => {
    if (isChecking || gameWon) return;
    
    const card = cards[cardId];
    if (card.isFlipped || card.isMatched || flippedCards.length >= 2) return;

    const newCards = [...cards];
    newCards[cardId].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setIsChecking(true);
      setMoves(prev => prev + 1);

      setTimeout(() => {
        checkMatch(newFlippedCards);
      }, 1000);
    }
  };

  const checkMatch = (flipped: number[]) => {
    const [firstId, secondId] = flipped;
    const firstCard = cards[firstId];
    const secondCard = cards[secondId];

    const newCards = [...cards];

    if (firstCard.emoji === secondCard.emoji) {
      // Match!
      newCards[firstId].isMatched = true;
      newCards[secondId].isMatched = true;
      setMatches(prev => prev + 1);
    } else {
      // No match, flip back
      newCards[firstId].isFlipped = false;
      newCards[secondId].isFlipped = false;
    }

    setCards(newCards);
    setFlippedCards([]);
    setIsChecking(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const gridSize = gridSizes[difficulty];
  const gridCols = gridSize === 4 ? 'grid-cols-4' : 'grid-cols-6';

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 mb-4">
            🧩 Puzzle Games 🧩
          </h1>
          <p className="text-2xl text-orange-700 font-bold">Match the pairs to win!</p>
        </div>

        {/* Difficulty Selection */}
        {!isPlaying && !gameWon && (
          <div className="mb-6 flex justify-center gap-4">
            {(['easy', 'medium', 'hard'] as Difficulty[]).map((diff) => (
              <button
                key={diff}
                onClick={() => setDifficulty(diff)}
                className={`px-6 py-3 rounded-full font-black text-white transition-all ${
                  difficulty === diff
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 scale-110 shadow-lg'
                    : 'bg-gradient-to-r from-orange-300 to-pink-300 hover:scale-105'
                }`}
              >
                {diff.charAt(0).toUpperCase() + diff.slice(1)}
              </button>
            ))}
          </div>
        )}

        {/* Game Stats */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-black text-orange-600">Moves</p>
              <p className="text-4xl font-black text-orange-500">{moves}</p>
            </div>
            <div>
              <p className="text-2xl font-black text-pink-600">Time</p>
              <p className="text-4xl font-black text-pink-500">{formatTime(time)}</p>
            </div>
            <div>
              <p className="text-2xl font-black text-yellow-600">Matches</p>
              <p className="text-4xl font-black text-yellow-500">{matches}/{totalPairs[difficulty]}</p>
            </div>
          </div>
        </div>

        {/* Win Celebration */}
        {gameWon && (
          <div className="mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-3xl p-8 text-center shadow-2xl animate-bounce">
            <div className="text-8xl mb-4">🎉</div>
            <h2 className="text-5xl font-black text-white mb-4">You Won!</h2>
            <p className="text-2xl text-white font-bold">
              You matched all pairs in {moves} moves and {formatTime(time)}!
            </p>
            <div className="mt-4 text-6xl">⭐🏆⭐</div>
          </div>
        )}

        {/* Game Board */}
        <div className={`bg-white rounded-3xl shadow-2xl p-6 mb-6 ${gridCols} grid gap-3`}>
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              disabled={card.isMatched || isChecking}
              className={`aspect-square rounded-2xl font-black text-4xl sm:text-5xl transition-all duration-300 ${
                card.isMatched
                  ? 'bg-gradient-to-br from-green-300 to-emerald-400 scale-95 cursor-default'
                  : card.isFlipped
                  ? 'bg-gradient-to-br from-yellow-300 to-orange-400 scale-95 shadow-lg'
                  : 'bg-gradient-to-br from-orange-200 to-pink-200 hover:scale-105 shadow-md'
              } ${isChecking && !card.isFlipped ? 'opacity-50' : ''}`}
            >
              {card.isFlipped || card.isMatched ? card.emoji : '?'}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={initializeGame}
            className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-orange-400 to-pink-400 hover:scale-110 shadow-2xl transition-all"
          >
            🔄 New Game
          </button>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <Link
            href="/kids"
            className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-orange-400 to-pink-400 hover:scale-110 shadow-2xl transition-all"
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

