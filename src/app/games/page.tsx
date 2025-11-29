"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { secureSetItem, secureGetItem } from "@/lib/security";

interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
}

const games: Game[] = [
  {
    id: "dress-up",
    title: "Style Studio",
    description: "Create stunning looks and express your fashion sense in this interactive dress-up game.",
    category: "Dress-Up / Styling",
  },
  {
    id: "memory-match",
    title: "Memory Master",
    description: "Test your memory skills by matching pairs of cards. How many levels can you complete?",
    category: "Memory Match",
  },
  {
    id: "mystery-story",
    title: "Mystery Tales",
    description: "Unravel secrets and solve puzzles in this interactive story-driven adventure game.",
    category: "Mystery / Story",
  },
  {
    id: "word-quest",
    title: "Word Quest",
    description: "Guess the 5-letter word in 6 attempts. Color-coded feedback guides your path to victory!",
    category: "Word / Puzzle",
  },
  {
    id: "number-slide",
    title: "Number Slide",
    description: "Slide numbered tiles to merge and reach 2048! Can you master this addictive puzzle game?",
    category: "Puzzle / Strategy",
  },
  {
    id: "snake-classic",
    title: "Snake Classic",
    description: "The legendary arcade game returns! Grow your snake by eating food. Don't hit the walls!",
    category: "Arcade / Action",
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe Pro",
    description: "Challenge the AI in this classic game of X's and O's. Think strategically to win!",
    category: "Strategy / Classic",
  },
  {
    id: "trivia-challenge",
    title: "Trivia Challenge",
    description: "Test your knowledge across multiple categories. Can you answer all questions correctly?",
    category: "Trivia / Knowledge",
  },
  {
    id: "hangman-hero",
    title: "Hangman Hero",
    description: "Save the hangman by guessing letters! Use your word knowledge to solve the puzzle.",
    category: "Word / Classic",
  },
  {
    id: "sudoku-solver",
    title: "Sudoku Solver",
    description: "Fill the 9x9 grid with numbers 1-9. Each row, column, and box must contain all digits.",
    category: "Puzzle / Logic",
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    description: "The ultimate tournament mode! Best of 5 rounds. Can you outsmart the computer?",
    category: "Classic / Fun",
  },
  {
    id: "simon-says",
    title: "Simon Says",
    description: "Watch the sequence and repeat it! Each level adds more colors. How far can you go?",
    category: "Memory / Arcade",
  },
  {
    id: "whack-a-mole",
    title: "Whack-a-Mole",
    description: "Whack those moles as fast as you can! Score points before time runs out.",
    category: "Arcade / Reaction",
  },
];

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const openGame = (gameId: string) => {
    setSelectedGame(gameId);
  };

  const closeGame = () => {
    setSelectedGame(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 text-slate-50">
      {/* Hero Header */}
      <header className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-r from-purple-900/30 via-pink-900/20 to-indigo-900/30 py-16 px-4">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-purple-400">Nana&apos;s Arcade</p>
          <h1 className="mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-7xl">
            Games Hub
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl">
            Step into the arcade and discover a world of fun, challenges, and endless entertainment!
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -left-4 top-10 h-72 w-72 rounded-full bg-purple-500 blur-3xl"></div>
          <div className="absolute -right-4 top-20 h-72 w-72 rounded-full bg-pink-500 blur-3xl"></div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Navigation */}
        <nav className="mb-8 flex flex-wrap items-center gap-3 text-sm" aria-label="Primary navigation">
          <Link
            href="/"
            className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 font-medium text-slate-100 shadow-sm transition hover:border-indigo-400 hover:bg-slate-900"
          >
            ← Back to splash
          </Link>
          <Link
            href="/home"
            className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-slate-300 transition hover:border-indigo-400 hover:bg-slate-900"
          >
            Home
          </Link>
        </nav>

        {/* Games Grid */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-purple-300 sm:text-3xl">Available Games</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <div
                key={game.id}
                className="group relative overflow-hidden rounded-xl border border-purple-500/30 bg-gradient-to-br from-slate-900/90 to-purple-900/30 p-6 shadow-lg transition-all hover:border-purple-400/50 hover:shadow-purple-500/20"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300">
                    {game.category}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{game.title}</h3>
                <p className="mb-4 text-sm text-slate-300">{game.description}</p>
                <button
                  onClick={() => openGame(game.id)}
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white transition-all hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/50 active:scale-95"
                >
                  Play Now →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Leaderboards Section */}
        <section className="mb-16 rounded-xl border border-indigo-500/30 bg-gradient-to-br from-slate-900/90 to-indigo-900/30 p-8">
          <h2 className="mb-6 text-2xl font-bold text-indigo-300 sm:text-3xl">🏆 Leaderboards</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-indigo-500/20 bg-slate-900/50 p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-lg font-bold text-slate-900">
                  1
                </div>
                <div>
                  <p className="font-semibold text-white">Top Player</p>
                  <p className="text-sm text-slate-400">Memory Master</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-indigo-300">9,999 pts</p>
                <p className="text-xs text-slate-500">Level 50</p>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-indigo-500/20 bg-slate-900/50 p-4 opacity-75">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-400 to-slate-600 text-lg font-bold text-white">
                  2
                </div>
                <div>
                  <p className="font-semibold text-white">Player Two</p>
                  <p className="text-sm text-slate-400">Style Studio</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-indigo-300">7,500 pts</p>
                <p className="text-xs text-slate-500">Level 35</p>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-indigo-500/20 bg-slate-900/50 p-4 opacity-60">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-amber-800 text-lg font-bold text-white">
                  3
                </div>
                <div>
                  <p className="font-semibold text-white">Player Three</p>
                  <p className="text-sm text-slate-400">Mystery Tales</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-indigo-300">5,200 pts</p>
                <p className="text-xs text-slate-500">Level 25</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-slate-400">
            Play games to climb the leaderboard and compete with friends!
          </p>
        </section>

        {/* Achievements & Rewards Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Achievements Section */}
          <section className="rounded-xl border border-pink-500/30 bg-gradient-to-br from-slate-900/90 to-pink-900/30 p-8">
            <h2 className="mb-6 text-2xl font-bold text-pink-300 sm:text-3xl">🎖️ Achievements</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { name: "First Win", icon: "⭐", locked: false },
                { name: "Speed Demon", icon: "⚡", locked: false },
                { name: "Memory Master", icon: "🧠", locked: false },
                { name: "Style Icon", icon: "👗", locked: true },
                { name: "Mystery Solver", icon: "🔍", locked: true },
                { name: "Perfect Score", icon: "💯", locked: true },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center rounded-lg border p-4 transition-all ${
                    achievement.locked
                      ? "border-slate-700 bg-slate-900/50 opacity-50"
                      : "border-pink-500/30 bg-pink-500/10 hover:border-pink-400/50"
                  }`}
                >
                  <div className="mb-2 text-3xl">{achievement.icon}</div>
                  <p className={`text-center text-xs font-medium ${achievement.locked ? "text-slate-500" : "text-pink-300"}`}>
                    {achievement.name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Rewards Section */}
          <section className="rounded-xl border border-yellow-500/30 bg-gradient-to-br from-slate-900/90 to-yellow-900/30 p-8">
            <h2 className="mb-6 text-2xl font-bold text-yellow-300 sm:text-3xl">🎁 Rewards</h2>
            <div className="space-y-4">
              {[
                { name: "Daily Login Bonus", reward: "+100 coins", available: true },
                { name: "Weekly Challenge", reward: "Special Badge", available: true },
                { name: "Monthly Tournament", reward: "Exclusive Skin", available: false },
              ].map((reward, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between rounded-lg border p-4 ${
                    reward.available
                      ? "border-yellow-500/30 bg-yellow-500/10"
                      : "border-slate-700 bg-slate-900/50 opacity-50"
                  }`}
                >
                  <div>
                    <p className={`font-semibold ${reward.available ? "text-yellow-200" : "text-slate-500"}`}>
                      {reward.name}
                    </p>
                    <p className={`text-sm ${reward.available ? "text-yellow-300" : "text-slate-600"}`}>
                      {reward.reward}
                    </p>
                  </div>
                  {reward.available ? (
                    <button className="rounded-full bg-yellow-500 px-4 py-2 text-xs font-bold text-slate-900 transition hover:bg-yellow-400">
                      Claim
                    </button>
                  ) : (
                    <span className="text-xs text-slate-500">Coming Soon</span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-slate-400">
              Complete challenges and earn amazing rewards!
            </p>
          </section>
        </div>
      </div>

      {/* Fullscreen Game Modal */}
      {selectedGame && (
        <GameModal
          gameId={selectedGame}
          gameTitle={games.find((g) => g.id === selectedGame)?.title || ""}
          onClose={closeGame}
        />
      )}
    </main>
  );
}

// Game Modal Component
function GameModal({ gameId, gameTitle, onClose }: { gameId: string; gameTitle: string; onClose: () => void }) {
  if (gameId === "dress-up") {
    return <StyleStudioGame title={gameTitle} onClose={onClose} />;
  }
  if (gameId === "memory-match") {
    return <MemoryMasterGame title={gameTitle} onClose={onClose} />;
  }
  if (gameId === "mystery-story") {
    return <MysteryTalesGame title={gameTitle} onClose={onClose} />;
  }
  if (gameId === "word-quest") {
    return <WordQuestGame title={gameTitle} onClose={onClose} />;
  }
  if (gameId === "number-slide") {
    return <NumberSlideGame title={gameTitle} onClose={onClose} />;
  }
  if (gameId === "snake-classic") {
    return <SnakeClassicGame title={gameTitle} onClose={onClose} />;
  }
  if (gameId === "tic-tac-toe") {
    return <TicTacToeProGame title={gameTitle} onClose={onClose} />;
  }
  if (gameId === "trivia-challenge") {
    return <TriviaChallengeGame title={gameTitle} onClose={onClose} />;
  }
  if (gameId === "hangman-hero") {
    return <HangmanHeroGame title={gameTitle} onClose={onClose} />;
  }
  if (gameId === "sudoku-solver") {
    return <SudokuSolverGame title={gameTitle} onClose={onClose} />;
  }
  if (gameId === "rock-paper-scissors") {
    return <RockPaperScissorsGame title={gameTitle} onClose={onClose} />;
  }
  if (gameId === "simon-says") {
    return <SimonSaysGame title={gameTitle} onClose={onClose} />;
  }
  if (gameId === "whack-a-mole") {
    return <WhackAMoleGame title={gameTitle} onClose={onClose} />;
  }
  return null;
}

// Style Studio (Dress-Up Game)
function StyleStudioGame({ title, onClose }: { title: string; onClose: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("tops");
  const [outfit, setOutfit] = useState<Record<string, string>>({
    tops: "",
    bottoms: "",
    shoes: "",
    accessories: "",
    hairstyles: "",
  });
  const [savedOutfits, setSavedOutfits] = useState<Array<Record<string, string>>>([]);
  const [characterColor, setCharacterColor] = useState("#FFDBAC");

  const clothingItems = {
    tops: [
      { id: "top1", name: "Classic Tee", emoji: "👕" },
      { id: "top2", name: "Elegant Blouse", emoji: "👔" },
      { id: "top3", name: "Crop Top", emoji: "🎽" },
      { id: "top4", name: "Hoodie", emoji: "🧥" },
      { id: "top5", name: "Dress", emoji: "👗" },
      { id: "top6", name: "Tank Top", emoji: "🩱" },
    ],
    bottoms: [
      { id: "bottom1", name: "Jeans", emoji: "👖" },
      { id: "bottom2", name: "Shorts", emoji: "🩳" },
      { id: "bottom3", name: "Skirt", emoji: "👗" },
      { id: "bottom4", name: "Leggings", emoji: "🦵" },
      { id: "bottom5", name: "Sweatpants", emoji: "👖" },
      { id: "bottom6", name: "Palazzo", emoji: "👘" },
    ],
    shoes: [
      { id: "shoe1", name: "Sneakers", emoji: "👟" },
      { id: "shoe2", name: "Heels", emoji: "👠" },
      { id: "shoe3", name: "Boots", emoji: "🥾" },
      { id: "shoe4", name: "Sandals", emoji: "👡" },
      { id: "shoe5", name: "Flats", emoji: "🥿" },
      { id: "shoe6", name: "Slippers", emoji: "🩴" },
    ],
    accessories: [
      { id: "acc1", name: "Sunglasses", emoji: "🕶️" },
      { id: "acc2", name: "Hat", emoji: "👒" },
      { id: "acc3", name: "Bag", emoji: "👜" },
      { id: "acc4", name: "Watch", emoji: "⌚" },
      { id: "acc5", name: "Necklace", emoji: "💎" },
      { id: "acc6", name: "Earrings", emoji: "👂" },
    ],
    hairstyles: [
      { id: "hair1", name: "Short", emoji: "💇" },
      { id: "hair2", name: "Long", emoji: "💇‍♀️" },
      { id: "hair3", name: "Curly", emoji: "👩‍🦱" },
      { id: "hair4", name: "Ponytail", emoji: "👱‍♀️" },
      { id: "hair5", name: "Braids", emoji: "👩‍🦱" },
      { id: "hair6", name: "Bun", emoji: "👱" },
    ],
  };

  const categories = [
    { id: "tops", name: "Tops", emoji: "👕" },
    { id: "bottoms", name: "Bottoms", emoji: "👖" },
    { id: "shoes", name: "Shoes", emoji: "👟" },
    { id: "accessories", name: "Accessories", emoji: "👜" },
    { id: "hairstyles", name: "Hair", emoji: "💇" },
  ];

  const selectItem = (itemId: string) => {
    setOutfit({ ...outfit, [selectedCategory]: itemId });
  };

  const clearOutfit = () => {
    setOutfit({
      tops: "",
      bottoms: "",
      shoes: "",
      accessories: "",
      hairstyles: "",
    });
  };

  const saveOutfit = () => {
    if (Object.values(outfit).some((item) => item !== "")) {
      setSavedOutfits([...savedOutfits, { ...outfit }]);
    }
  };

  const loadOutfit = (outfitToLoad: Record<string, string>) => {
    setOutfit({ ...outfitToLoad });
  };

  return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="relative h-full w-full max-w-7xl flex flex-col">
            <button
          onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition hover:border-indigo-400 hover:bg-slate-800"
              aria-label="Close game"
            >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-1 gap-4 overflow-hidden rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-4">
          {/* Character Display Area */}
          <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-purple-500/20 bg-slate-900/50 p-8">
            <h3 className="mb-4 text-2xl font-bold text-purple-300">{title}</h3>
            <div className="relative mb-4 flex h-96 w-64 items-center justify-center rounded-lg bg-gradient-to-b from-sky-200 to-sky-400">
              {/* Character Base */}
              <div className="relative flex h-full w-full flex-col items-center justify-center">
                {/* Hair */}
                {outfit.hairstyles && (
                  <div className="absolute top-16 text-6xl">{clothingItems.hairstyles.find((h) => h.id === outfit.hairstyles)?.emoji}</div>
                )}
                {/* Head */}
                <div className="relative z-10 mb-4 flex h-32 w-32 items-center justify-center rounded-full" style={{ backgroundColor: characterColor }}>
                  <div className="text-4xl">👤</div>
                </div>
                {/* Top */}
                {outfit.tops && (
                  <div className="mb-2 text-5xl">{clothingItems.tops.find((t) => t.id === outfit.tops)?.emoji}</div>
                )}
                {/* Bottom */}
                {outfit.bottoms && (
                  <div className="mb-2 text-5xl">{clothingItems.bottoms.find((b) => b.id === outfit.bottoms)?.emoji}</div>
                )}
                {/* Shoes */}
                {outfit.shoes && (
                  <div className="text-4xl">{clothingItems.shoes.find((s) => s.id === outfit.shoes)?.emoji}</div>
                )}
                {/* Accessories */}
                {outfit.accessories && (
                  <div className="absolute top-24 text-4xl">{clothingItems.accessories.find((a) => a.id === outfit.accessories)?.emoji}</div>
                )}
              </div>
            </div>
            {/* Character Color Picker */}
            <div className="mb-4">
              <label className="mb-2 block text-sm text-purple-300">Skin Tone:</label>
              <div className="flex gap-2">
                {["#FFDBAC", "#F1C27D", "#E0AC69", "#C68642", "#8D5524"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setCharacterColor(color)}
                    className={`h-8 w-8 rounded-full border-2 ${characterColor === color ? "border-purple-400" : "border-slate-600"}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex gap-2">
              <button onClick={clearOutfit} className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500">
                Clear
              </button>
              <button onClick={saveOutfit} className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-500">
                Save Outfit
              </button>
            </div>
          </div>

          {/* Clothing Selection Panel */}
          <div className="flex w-80 flex-col gap-4 overflow-hidden rounded-lg border border-purple-500/20 bg-slate-900/50 p-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
                    selectedCategory === cat.id
                      ? "bg-purple-600 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Items Grid */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-2 gap-2">
                {clothingItems[selectedCategory as keyof typeof clothingItems].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => selectItem(item.id)}
                    className={`flex flex-col items-center gap-1 rounded-lg border p-3 transition ${
                      outfit[selectedCategory] === item.id
                        ? "border-purple-400 bg-purple-500/20"
                        : "border-slate-700 bg-slate-800 hover:border-purple-500/50"
                    }`}
                  >
                    <span className="text-3xl">{item.emoji}</span>
                    <span className="text-xs text-slate-300">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Saved Outfits */}
            {savedOutfits.length > 0 && (
              <div className="border-t border-slate-700 pt-4">
                <h4 className="mb-2 text-sm font-bold text-purple-300">Saved Outfits:</h4>
                <div className="space-y-2">
                  {savedOutfits.map((savedOutfit, index) => (
                    <button
                      key={index}
                      onClick={() => loadOutfit(savedOutfit)}
                      className="w-full rounded-lg border border-purple-500/30 bg-purple-500/10 px-3 py-2 text-left text-xs text-purple-300 hover:bg-purple-500/20"
                    >
                      Outfit #{index + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Memory Master Game
function MemoryMasterGame({ title, onClose }: { title: string; onClose: () => void }) {
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard" | null>(null);
  const [cards, setCards] = useState<Array<{ id: number; value: number; flipped: boolean; matched: boolean }>>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(null);

  const gridSizes = { easy: 16, medium: 36, hard: 64 };
  const cardThemes = ["🎯", "⭐", "💎", "🔥", "🌟", "💫", "✨", "🎨", "🎭", "🎪", "🎬", "🎸", "🎹", "🎺", "🎻", "🥁"];

  useEffect(() => {
    if (gameStarted && !gameWon) {
      const timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameStarted, gameWon]);

  useEffect(() => {
    if (difficulty) {
      initializeGame();
    }
  }, [difficulty]);

  const initializeGame = () => {
    const size = gridSizes[difficulty!];
    const pairs = size / 2;
    const values = Array.from({ length: pairs }, (_, i) => i % cardThemes.length);
    const shuffled = [...values, ...values].sort(() => Math.random() - 0.5);

    setCards(
      shuffled.map((value, index) => ({
        id: index,
        value,
        flipped: false,
        matched: false,
      }))
    );
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setTime(0);
    setGameStarted(true);
    setGameWon(false);
  };

  const handleCardClick = (cardId: number) => {
    if (!gameStarted || gameWon) return;
    const card = cards[cardId];
    if (card.flipped || card.matched || flippedCards.length >= 2) return;

    const newCards = [...cards];
    newCards[cardId].flipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, cardId]);

    if (flippedCards.length === 1) {
      setMoves((prev) => prev + 1);
      const firstCard = cards[flippedCards[0]];
      if (firstCard.value === card.value) {
        setTimeout(() => {
          const updatedCards = [...newCards];
          updatedCards[flippedCards[0]].matched = true;
          updatedCards[cardId].matched = true;
          setCards(updatedCards);
          setFlippedCards([]);
          setMatches((prev) => {
            const newMatches = prev + 1;
            if (newMatches === cards.length / 2) {
              setGameWon(true);
              const score = Math.max(0, 10000 - moves * 50 - time * 5);
              const currentBest = bestScore || 0;
              if (score > currentBest) {
                setBestScore(score);
                secureSetItem("memoryMasterBest", score.toString());
              }
            }
            return newMatches;
          });
        }, 500);
      } else {
        setTimeout(() => {
          const updatedCards = [...newCards];
          updatedCards[flippedCards[0]].flipped = false;
          updatedCards[cardId].flipped = false;
          setCards(updatedCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    const loadBestScore = async () => {
      const saved = await secureGetItem("memoryMasterBest");
      if (saved) setBestScore(parseInt(saved));
    };
    loadBestScore();
  }, []);

  if (!difficulty) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
        <div className="relative rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-8">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-900/90 p-2 text-white transition hover:border-indigo-400 hover:bg-slate-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          <h3 className="mb-6 text-3xl font-bold text-purple-300">{title}</h3>
          <p className="mb-6 text-slate-300">Choose your difficulty level:</p>
          <div className="space-y-3">
            <button
              onClick={() => setDifficulty("easy")}
              className="w-full rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white hover:bg-green-500"
            >
              Easy (4x4 Grid) - 8 Pairs
            </button>
            <button
              onClick={() => setDifficulty("medium")}
              className="w-full rounded-lg bg-yellow-600 px-6 py-3 text-lg font-semibold text-white hover:bg-yellow-500"
            >
              Medium (6x6 Grid) - 18 Pairs
            </button>
            <button
              onClick={() => setDifficulty("hard")}
              className="w-full rounded-lg bg-red-600 px-6 py-3 text-lg font-semibold text-white hover:bg-red-500"
            >
              Hard (8x8 Grid) - 32 Pairs
            </button>
          </div>
          {bestScore !== null && (
            <p className="mt-6 text-center text-sm text-purple-300">🏆 Best Score: {bestScore.toLocaleString()} pts</p>
          )}
        </div>
      </div>
    );
  }

  if (gameWon) {
    const score = Math.max(0, 10000 - moves * 50 - time * 5);
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
        <div className="relative rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-8 text-center">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-900/90 p-2 text-white transition hover:border-indigo-400 hover:bg-slate-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="mb-4 text-6xl">🎉</div>
          <h3 className="mb-4 text-3xl font-bold text-purple-300">Congratulations!</h3>
          <p className="mb-6 text-slate-300">You completed the game!</p>
          <div className="mb-6 space-y-2 rounded-lg bg-slate-800/50 p-4">
            <p className="text-purple-300">Final Score: <span className="font-bold text-white">{score.toLocaleString()}</span> pts</p>
            <p className="text-slate-400">Moves: {moves}</p>
            <p className="text-slate-400">Time: {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, "0")}</p>
              </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setDifficulty(null);
                setGameWon(false);
              }}
              className="flex-1 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500"
            >
              Play Again
            </button>
            <button onClick={onClose} className="flex-1 rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-600">
              Close
            </button>
                </div>
              </div>
            </div>
    );
  }

  const gridCols = difficulty === "easy" ? "grid-cols-4" : difficulty === "medium" ? "grid-cols-6" : "grid-cols-8";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="relative h-full w-full max-w-5xl flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition hover:border-indigo-400 hover:bg-slate-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full flex-col rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
            <div className="flex gap-4 text-sm text-slate-300">
              <div>⏱️ {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, "0")}</div>
              <div>👆 Moves: {moves}</div>
              <div>✅ Matches: {matches}/{cards.length / 2}</div>
            </div>
          </div>
          <div className={`${gridCols} grid flex-1 gap-2 overflow-auto rounded-lg bg-slate-900/50 p-4`}>
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`aspect-square rounded-lg border-2 transition-all ${
                  card.matched
                    ? "border-green-500 bg-green-500/20 opacity-50"
                    : card.flipped
                    ? "border-purple-400 bg-purple-500/20"
                    : "border-slate-700 bg-slate-800 hover:border-purple-500/50"
                } flex items-center justify-center text-3xl`}
                disabled={card.flipped || card.matched}
              >
                {card.flipped || card.matched ? cardThemes[card.value] : "❓"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Mystery Tales Game
function MysteryTalesGame({ title, onClose }: { title: string; onClose: () => void }) {
  const [currentScene, setCurrentScene] = useState(0);
  const [inventory, setInventory] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [ending, setEnding] = useState<string | null>(null);

  const story = [
    {
      id: 0,
      title: "The Mysterious Letter",
      text: "You receive an old letter with a strange symbol. It speaks of a hidden treasure in the abandoned mansion on the hill. Do you investigate?",
      choices: [
        { text: "Go to the mansion immediately", nextScene: 1 },
        { text: "Research the symbol first", nextScene: 2 },
        { text: "Ignore the letter", nextScene: 3 },
      ],
      background: "🌙",
    },
    {
      id: 1,
      title: "At the Mansion",
      text: "You arrive at the mansion at midnight. The door creaks open. Inside, you find a locked chest and a key on the table. What do you do?",
      choices: [
        { text: "Take the key and open the chest", nextScene: 4, addItem: "Ancient Key" },
        { text: "Search for more clues", nextScene: 5 },
        { text: "Leave immediately", nextScene: 6 },
      ],
      background: "🏚️",
    },
    {
      id: 2,
      title: "Library Research",
      text: "You discover the symbol represents an ancient family. In an old book, you find a map to the treasure. The map shows a secret passage behind the library bookshelf.",
      choices: [
        { text: "Follow the map", nextScene: 7 },
        { text: "Take the map to the mansion", nextScene: 1, addItem: "Treasure Map" },
        { text: "Share your findings", nextScene: 8 },
      ],
      background: "📚",
      addItem: "Treasure Map",
    },
    {
      id: 3,
      title: "A Normal Day",
      text: "You decide to ignore the letter and continue with your normal life. Years pass, and you always wonder what might have been...",
      choices: [{ text: "The End", nextScene: -1 }],
      background: "😔",
      ending: "The Curious Ending",
    },
    {
      id: 4,
      title: "The Treasure",
      text: "You unlock the chest and find ancient jewels worth a fortune! The treasure is real, and it's yours now.",
      choices: [{ text: "The End", nextScene: -1 }],
      background: "💎",
      ending: "The Treasure Hunter Ending",
    },
    {
      id: 5,
      title: "The Hidden Room",
      text: "While searching, you discover a hidden room with old portraits. One portrait's eyes seem to follow you. Behind it, you find another clue.",
      choices: [
        { text: "Investigate the clue", nextScene: 9 },
        { text: "Take a portrait", nextScene: 10, addItem: "Mysterious Portrait" },
      ],
      background: "🖼️",
    },
    {
      id: 6,
      title: "Safe Escape",
      text: "You leave the mansion quickly. Later, you hear it burned down that night. You're safe, but the mystery remains unsolved.",
      choices: [{ text: "The End", nextScene: -1 }],
      background: "🔥",
      ending: "The Safe Ending",
    },
    {
      id: 7,
      title: "Secret Passage",
      text: "You find the secret passage behind the bookshelf. Inside, you discover a hidden laboratory with strange experiments and a journal.",
      choices: [
        { text: "Read the journal", nextScene: 11, addItem: "Scientist's Journal" },
        { text: "Explore further", nextScene: 12 },
      ],
      background: "🔬",
    },
    {
      id: 8,
      title: "Shared Knowledge",
      text: "You share your findings with a friend. Together, you solve the mystery and find that the treasure was actually knowledge all along.",
      choices: [{ text: "The End", nextScene: -1 }],
      background: "🤝",
      ending: "The Friendship Ending",
    },
    {
      id: 9,
      title: "The Final Puzzle",
      text: "The clue leads you to a puzzle. You solve it using your intelligence and the items you've collected. The treasure chamber opens!",
      choices: [{ text: "Enter the chamber", nextScene: 13 }],
      background: "🧩",
    },
    {
      id: 10,
      title: "Portrait's Secret",
      text: "As you take the portrait, you notice it has a hidden compartment containing a code. This might be important...",
      choices: [
        { text: "Use the code", nextScene: 14 },
        { text: "Continue exploring", nextScene: 5 },
      ],
      background: "🔐",
    },
    {
      id: 11,
      title: "The Discovery",
      text: "The journal reveals the scientist's life work. It's not about treasure, but about finding immortality. The real treasure is this knowledge.",
      choices: [{ text: "The End", nextScene: -1 }],
      background: "📖",
      ending: "The Scholar Ending",
    },
    {
      id: 12,
      title: "The Laboratory",
      text: "In the depths of the laboratory, you find the scientist's final experiment - a time capsule with messages from the past.",
      choices: [{ text: "Open the capsule", nextScene: 15 }],
      background: "⏰",
    },
    {
      id: 13,
      title: "The Chamber",
      text: "Inside the treasure chamber, you find not gold or jewels, but the legacy of those who came before - wisdom, stories, and history preserved for eternity.",
      choices: [{ text: "The End", nextScene: -1 }],
      background: "📜",
      ending: "The Wisdom Seeker Ending",
    },
    {
      id: 14,
      title: "Code Unlocked",
      text: "You use the code from the portrait. A hidden door opens, revealing a room filled with beautiful artifacts and the true story of the mansion.",
      choices: [{ text: "The End", nextScene: -1 }],
      background: "🗝️",
      ending: "The Art Collector Ending",
    },
    {
      id: 15,
      title: "Messages from the Past",
      text: "The time capsule contains letters from people throughout history, all sharing their wisdom. This is the greatest treasure - human connection across time.",
      choices: [{ text: "The End", nextScene: -1 }],
      background: "💌",
      ending: "The Time Traveler Ending",
    },
  ];

  const handleChoice = (choice: { text: string; nextScene: number; addItem?: string }) => {
    if (choice.addItem && !inventory.includes(choice.addItem)) {
      setInventory([...inventory, choice.addItem]);
    }
    if (choice.nextScene === -1) {
      setGameOver(true);
      return;
    }
    setCurrentScene(choice.nextScene);
  };

  const currentStoryScene = story[currentScene];

  if (gameOver && currentStoryScene.ending) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
        <div className="relative rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-8 text-center max-w-2xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-900/90 p-2 text-white transition hover:border-indigo-400 hover:bg-slate-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="mb-4 text-6xl">{currentStoryScene.background}</div>
          <h3 className="mb-4 text-3xl font-bold text-purple-300">{currentStoryScene.ending}</h3>
          <p className="mb-6 text-slate-300">{currentStoryScene.text}</p>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setCurrentScene(0);
                setInventory([]);
                setGameOver(false);
                setEnding(null);
              }}
              className="flex-1 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500"
            >
              Play Again
            </button>
            <button onClick={onClose} className="flex-1 rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-600">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="relative h-full w-full max-w-4xl flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition hover:border-indigo-400 hover:bg-slate-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full flex-col rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-6">
          <h3 className="mb-4 text-2xl font-bold text-purple-300">{title}</h3>
          
          {/* Story Display */}
          <div className="mb-6 flex-1 rounded-lg border border-purple-500/20 bg-slate-900/50 p-6">
            <div className="mb-4 text-center text-6xl">{currentStoryScene.background}</div>
            <h4 className="mb-4 text-xl font-bold text-purple-300">{currentStoryScene.title}</h4>
            <p className="mb-6 text-slate-300 leading-relaxed">{currentStoryScene.text}</p>
            
            {/* Choices */}
            <div className="space-y-3">
              {currentStoryScene.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(choice)}
                  className="w-full rounded-lg border border-purple-500/30 bg-purple-500/10 px-6 py-3 text-left text-slate-300 transition hover:border-purple-400 hover:bg-purple-500/20"
                >
                  {choice.text}
                </button>
              ))}
            </div>
          </div>

          {/* Inventory */}
          {inventory.length > 0 && (
            <div className="rounded-lg border border-purple-500/20 bg-slate-900/50 p-4">
              <h5 className="mb-2 text-sm font-bold text-purple-300">📦 Inventory:</h5>
              <div className="flex flex-wrap gap-2">
                {inventory.map((item, index) => (
                  <span key={index} className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-300">
                    {item}
                  </span>
                ))}
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
}

// Word Quest Game (Wordle-style)
function WordQuestGame({ title, onClose }: { title: string; onClose: () => void }) {
  const words = ["APPLE", "BEACH", "CHAIR", "DANCE", "EARTH", "FLUTE", "GRAPE", "HEART", "IMAGE", "JAZZY", "KNEAD", "LEMON", "MUSIC", "OCEAN", "PEACE", "QUART", "RIVER", "STONE", "TIGER", "UNITY", "VALUE", "WATER", "YELLS", "ZEBRA"];
  const [targetWord, setTargetWord] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [stats, setStats] = useState({ games: 0, wins: 0 });

  useEffect(() => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setTargetWord(newWord);
    setGuesses([]);
    setCurrentGuess("");
    setGameWon(false);
    setGameOver(false);
    
    const loadStats = async () => {
      const savedStats = await secureGetItem("wordQuestStats");
      if (savedStats) setStats(JSON.parse(savedStats));
    };
    loadStats();
  }, []);

  useEffect(() => {
    if (guesses.length === 6 && !gameWon) {
      setGameOver(true);
      setStats((prevStats) => {
        const newStats = { ...prevStats, games: prevStats.games + 1 };
        secureSetItem("wordQuestStats", JSON.stringify(newStats));
        return newStats;
      });
    }
    if (gameWon) {
      setStats((prevStats) => {
        const newStats = { ...prevStats, games: prevStats.games + 1, wins: prevStats.wins + 1 };
        secureSetItem("wordQuestStats", JSON.stringify(newStats));
        return newStats;
      });
    }
  }, [guesses, gameWon]);

  const handleKeyPress = (letter: string) => {
    if (currentGuess.length < 5 && !gameWon && !gameOver) {
      setCurrentGuess(currentGuess + letter);
    }
  };

  const handleBackspace = () => {
    if (currentGuess.length > 0) {
      setCurrentGuess(currentGuess.slice(0, -1));
    }
  };

  const handleEnter = () => {
    if (currentGuess.length === 5 && !gameWon && !gameOver) {
      if (words.includes(currentGuess.toUpperCase())) {
        const newGuesses = [...guesses, currentGuess.toUpperCase()];
        setGuesses(newGuesses);
        if (currentGuess.toUpperCase() === targetWord) {
          setGameWon(true);
        }
        setCurrentGuess("");
      } else {
        alert("Not a valid word!");
      }
    }
  };

  const getLetterColor = (letter: string, index: number, guess: string) => {
    if (targetWord[index] === letter) return "bg-green-600";
    if (targetWord.includes(letter)) return "bg-yellow-600";
    return "bg-slate-700";
  };

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  if (gameWon || gameOver) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
        <div className="relative rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-8 text-center max-w-md">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-900/90 p-2 text-white transition hover:border-indigo-400 hover:bg-slate-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="mb-4 text-6xl">{gameWon ? "🎉" : "😔"}</div>
          <h3 className="mb-4 text-3xl font-bold text-purple-300">{gameWon ? "Congratulations!" : "Game Over"}</h3>
          <p className="mb-4 text-slate-300">{gameWon ? `You guessed it in ${guesses.length} tries!` : `The word was: ${targetWord}`}</p>
          <div className="mb-6 space-y-2 rounded-lg bg-slate-800/50 p-4">
            <p className="text-purple-300">Games Played: <span className="font-bold text-white">{stats.games}</span></p>
            <p className="text-purple-300">Games Won: <span className="font-bold text-white">{stats.wins}</span></p>
            <p className="text-purple-300">Win Rate: <span className="font-bold text-white">{stats.games > 0 ? Math.round((stats.wins / stats.games) * 100) : 0}%</span></p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                const newWord = words[Math.floor(Math.random() * words.length)];
                setTargetWord(newWord);
                setGuesses([]);
                setCurrentGuess("");
                setGameWon(false);
                setGameOver(false);
              }}
              className="flex-1 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500"
            >
              Play Again
            </button>
            <button onClick={onClose} className="flex-1 rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-600">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="relative h-full w-full max-w-2xl flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition hover:border-indigo-400 hover:bg-slate-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full flex-col rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-6">
          <h3 className="mb-4 text-2xl font-bold text-purple-300">{title}</h3>
          
          {/* Game Board */}
          <div className="mb-6 flex-1 space-y-2">
            {Array.from({ length: 6 }).map((_, row) => (
              <div key={row} className="flex gap-2 justify-center">
                {Array.from({ length: 5 }).map((_, col) => {
                  const guess = guesses[row];
                  const letter = guess ? guess[col] : row === guesses.length && currentGuess[col] ? currentGuess[col] : "";
                  const color = guess ? getLetterColor(letter, col, guess) : "bg-slate-800";
                  return (
                    <div
                      key={col}
                      className={`flex h-12 w-12 items-center justify-center rounded-lg border-2 border-purple-500/30 ${color} text-xl font-bold text-white`}
                    >
                      {letter}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Keyboard */}
          <div className="space-y-2">
            <div className="flex gap-1 justify-center">
              {alphabet.slice(0, 10).map((letter) => (
                <button
                  key={letter}
                  onClick={() => handleKeyPress(letter)}
                  className="h-10 w-10 rounded-lg bg-slate-700 text-sm font-bold text-white transition hover:bg-slate-600"
                >
                  {letter}
                </button>
              ))}
            </div>
            <div className="flex gap-1 justify-center">
              {alphabet.slice(10, 19).map((letter) => (
                <button
                  key={letter}
                  onClick={() => handleKeyPress(letter)}
                  className="h-10 w-10 rounded-lg bg-slate-700 text-sm font-bold text-white transition hover:bg-slate-600"
                >
                  {letter}
                </button>
              ))}
            </div>
            <div className="flex gap-1 justify-center">
              {alphabet.slice(19).map((letter) => (
                <button
                  key={letter}
                  onClick={() => handleKeyPress(letter)}
                  className="h-10 w-10 rounded-lg bg-slate-700 text-sm font-bold text-white transition hover:bg-slate-600"
                >
                  {letter}
                </button>
              ))}
            </div>
            <div className="flex gap-2 justify-center">
              <button
                onClick={handleBackspace}
                className="h-10 rounded-lg bg-red-600 px-4 text-sm font-bold text-white transition hover:bg-red-500"
              >
                ⌫ Back
              </button>
              <button
                onClick={handleEnter}
                className="h-10 rounded-lg bg-green-600 px-6 text-sm font-bold text-white transition hover:bg-green-500"
              >
                Enter
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 text-center text-sm text-slate-400">
            Games: {stats.games} | Wins: {stats.wins} | Win Rate: {stats.games > 0 ? Math.round((stats.wins / stats.games) * 100) : 0}%
          </div>
        </div>
      </div>
    </div>
  );
}

// Number Slide Game (2048)
function NumberSlideGame({ title, onClose }: { title: string; onClose: () => void }) {
  const [grid, setGrid] = useState<number[][]>([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    const loadBestScore = async () => {
      const saved = await secureGetItem("numberSlideBest");
      if (saved) setBestScore(parseInt(saved));
    };
    loadBestScore();
    initializeGame();
  }, []);

  const initializeGame = () => {
    const newGrid = Array(4).fill(null).map(() => Array(4).fill(0));
    addRandomTile(newGrid);
    addRandomTile(newGrid);
    setGrid(newGrid);
    setScore(0);
    setGameOver(false);
    setGameWon(false);
  };

  const addRandomTile = (grid: number[][]) => {
    const emptyCells: [number, number][] = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (grid[i][j] === 0) emptyCells.push([i, j]);
      }
    }
    if (emptyCells.length > 0) {
      const [row, col] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      grid[row][col] = Math.random() < 0.9 ? 2 : 4;
    }
  };

  const move = (direction: "up" | "down" | "left" | "right") => {
    if (gameOver) return;
    const newGrid = grid.map(row => [...row]);
    let moved = false;
    let newScore = score;

    const rotate = (grid: number[][]) => {
      return grid[0].map((_, i) => grid.map(row => row[i]).reverse());
    };

    let rotated = newGrid;
    if (direction === "right") rotated = newGrid.map(row => [...row].reverse());
    if (direction === "down") rotated = rotate(newGrid);
    if (direction === "up") rotated = rotate(newGrid.map(row => [...row].reverse())).reverse();

    for (let i = 0; i < 4; i++) {
      const row = rotated[i].filter(cell => cell !== 0);
      for (let j = 0; j < row.length - 1; j++) {
        if (row[j] === row[j + 1]) {
          row[j] *= 2;
          newScore += row[j];
          if (row[j] === 2048 && !gameWon) setGameWon(true);
          row[j + 1] = 0;
        }
      }
      const merged = row.filter(cell => cell !== 0);
      while (merged.length < 4) merged.push(0);
      if (JSON.stringify(rotated[i]) !== JSON.stringify(merged)) moved = true;
      rotated[i] = merged;
    }

    let finalGrid = rotated;
    if (direction === "right") finalGrid = finalGrid.map(row => [...row].reverse());
    if (direction === "down") finalGrid = rotate(finalGrid).map(row => [...row].reverse());
    if (direction === "up") finalGrid = rotate(finalGrid.map(row => [...row].reverse()));

    if (moved) {
      addRandomTile(finalGrid);
      setGrid(finalGrid);
      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
        secureSetItem("numberSlideBest", newScore.toString());
      }
      if (isGameOver(finalGrid)) setGameOver(true);
    }
  };

  const isGameOver = (grid: number[][]) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (grid[i][j] === 0) return false;
        if (j < 3 && grid[i][j] === grid[i][j + 1]) return false;
        if (i < 3 && grid[i][j] === grid[i + 1][j]) return false;
      }
    }
    return true;
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") move("up");
      if (e.key === "ArrowDown") move("down");
      if (e.key === "ArrowLeft") move("left");
      if (e.key === "ArrowRight") move("right");
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [grid, gameOver]);

  const getTileColor = (value: number) => {
    const colors: Record<number, string> = {
      2: "bg-slate-700",
      4: "bg-slate-600",
      8: "bg-purple-600",
      16: "bg-purple-500",
      32: "bg-pink-600",
      64: "bg-pink-500",
      128: "bg-indigo-600",
      256: "bg-indigo-500",
      512: "bg-yellow-600",
      1024: "bg-yellow-500",
      2048: "bg-green-500",
    };
    return colors[value] || "bg-green-400";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="relative h-full w-full max-w-md flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition hover:border-indigo-400 hover:bg-slate-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full flex-col rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
            <div className="text-right">
              <div className="text-sm text-slate-300">Score: <span className="font-bold text-white">{score}</span></div>
              <div className="text-xs text-slate-400">Best: {bestScore}</div>
            </div>
          </div>

          {gameWon && (
            <div className="mb-4 rounded-lg bg-green-600/20 border border-green-500/50 p-3 text-center">
              <p className="text-green-300 font-bold">🎉 You reached 2048!</p>
            </div>
          )}

          {gameOver && (
            <div className="mb-4 rounded-lg bg-red-600/20 border border-red-500/50 p-3 text-center">
              <p className="text-red-300 font-bold">Game Over!</p>
              <button
                onClick={initializeGame}
                className="mt-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-500"
              >
                Play Again
              </button>
            </div>
          )}

          {/* Grid */}
          <div className="mb-4 rounded-lg bg-slate-800 p-2">
            <div className="grid grid-cols-4 gap-2">
              {grid.flat().map((value, index) => (
                <div
                  key={index}
                  className={`flex aspect-square items-center justify-center rounded-lg ${getTileColor(value)} text-xl font-bold ${value > 4 ? "text-white" : "text-slate-300"}`}
                >
                  {value > 0 ? value : ""}
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-2">
            <div className="flex justify-center gap-2">
              <button onClick={() => move("up")} className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white hover:bg-purple-500">
                ↑ Up
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <button onClick={() => move("left")} className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white hover:bg-purple-500">
                ← Left
              </button>
              <button onClick={() => move("right")} className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white hover:bg-purple-500">
                Right →
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <button onClick={() => move("down")} className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white hover:bg-purple-500">
                ↓ Down
              </button>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-slate-400">Use arrow keys or buttons to move</p>
        </div>
      </div>
    </div>
  );
}

// Snake Classic Game
function SnakeClassicGame({ title, onClose }: { title: string; onClose: () => void }) {
  const GRID_SIZE = 20;
  const [snake, setSnake] = useState<Array<{ x: number; y: number }>>([{ x: 10, y: 10 }]);
  const [direction, setDirection] = useState<"up" | "down" | "left" | "right">("right");
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const loadBestScore = async () => {
      const saved = await secureGetItem("snakeBest");
      if (saved) setBestScore(parseInt(saved));
    };
    loadBestScore();
  }, []);

  useEffect(() => {
    if (gameOver) return;
    const gameLoop = setInterval(() => {
      setSnake((prev) => {
        const head = { ...prev[0] };
        if (direction === "up") head.y -= 1;
        if (direction === "down") head.y += 1;
        if (direction === "left") head.x -= 1;
        if (direction === "right") head.x += 1;

        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
          setGameOver(true);
          if (score > bestScore) {
            setBestScore(score);
            secureSetItem("snakeBest", score.toString());
          }
          return prev;
        }

        if (prev.some((segment) => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          if (score > bestScore) {
            setBestScore(score);
            secureSetItem("snakeBest", score.toString());
          }
          return prev;
        }

        const newSnake = [head, ...prev];
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => s + 10);
          setFood({ x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) });
          return newSnake;
        }
        return newSnake.slice(0, -1);
      });
    }, 150);
    return () => clearInterval(gameLoop);
  }, [direction, food, gameOver, score, bestScore]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" && direction !== "down") setDirection("up");
      if (e.key === "ArrowDown" && direction !== "up") setDirection("down");
      if (e.key === "ArrowLeft" && direction !== "right") setDirection("left");
      if (e.key === "ArrowRight" && direction !== "left") setDirection("right");
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction]);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection("right");
    setFood({ x: 15, y: 15 });
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="relative h-full w-full max-w-lg flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition hover:border-indigo-400 hover:bg-slate-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full flex-col rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
            <div className="text-right">
              <div className="text-sm text-slate-300">Score: <span className="font-bold text-white">{score}</span></div>
              <div className="text-xs text-slate-400">Best: {bestScore}</div>
            </div>
          </div>

          {gameOver && (
            <div className="mb-4 rounded-lg bg-red-600/20 border border-red-500/50 p-4 text-center">
              <p className="text-red-300 font-bold text-xl mb-2">Game Over!</p>
              <button
                onClick={resetGame}
                className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white hover:bg-purple-500"
              >
                Play Again
              </button>
            </div>
          )}

          {/* Game Board */}
          <div className="mb-4 flex-1 flex items-center justify-center rounded-lg bg-slate-800 p-4">
            <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`, width: "100%", maxWidth: "400px" }}>
              {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
                const x = index % GRID_SIZE;
                const y = Math.floor(index / GRID_SIZE);
                const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
                const isHead = snake[0]?.x === x && snake[0]?.y === y;
                const isFood = food.x === x && food.y === y;

                return (
                  <div
                    key={index}
                    className={`aspect-square rounded ${
                      isHead ? "bg-green-400" : isSnake ? "bg-green-600" : isFood ? "bg-red-500" : "bg-slate-700"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-2">
            <div className="flex justify-center gap-2">
              <button onClick={() => direction !== "down" && setDirection("up")} className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white hover:bg-purple-500">
                ↑
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <button onClick={() => direction !== "right" && setDirection("left")} className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white hover:bg-purple-500">
                ←
              </button>
              <button onClick={() => direction !== "left" && setDirection("right")} className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white hover:bg-purple-500">
                →
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <button onClick={() => direction !== "up" && setDirection("down")} className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white hover:bg-purple-500">
                ↓
              </button>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-slate-400">Use arrow keys or buttons to control</p>
        </div>
      </div>
    </div>
  );
}

// Tic-Tac-Toe Pro Game
function TicTacToeProGame({ title, onClose }: { title: string; onClose: () => void }) {
  const [board, setBoard] = useState<Array<"X" | "O" | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<"X" | "O" | "Tie" | null>(null);
  const [stats, setStats] = useState({ wins: 0, losses: 0, ties: 0 });

  useEffect(() => {
    const loadStats = async () => {
      const saved = await secureGetItem("tictactoeStats");
      if (saved) setStats(JSON.parse(saved));
    };
    loadStats();
  }, []);

  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      setGameOver(true);
      setWinner(winner);
      const newStats = { ...stats };
      if (winner === "X") newStats.wins++;
      else if (winner === "O") newStats.losses++;
      else newStats.ties++;
      setStats(newStats);
      secureSetItem("tictactoeStats", JSON.stringify(newStats));
    } else if (!board.includes(null)) {
      setGameOver(true);
      setWinner("Tie");
      const newStats = { ...stats, ties: stats.ties + 1 };
      setStats(newStats);
      secureSetItem("tictactoeStats", JSON.stringify(newStats));
    } else if (!isXNext) {
      setTimeout(() => {
        const bestMove = getBestMove([...board]);
        if (bestMove !== -1) {
          const newBoard = [...board];
          newBoard[bestMove] = "O";
          setBoard(newBoard);
          setIsXNext(true);
        }
      }, 500);
    }
  }, [board, isXNext]);

  const calculateWinner = (squares: Array<"X" | "O" | null>): "X" | "O" | "Tie" | null => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a] as "X" | "O";
      }
    }
    return null;
  };

  const getBestMove = (squares: Array<"X" | "O" | null>): number => {
    let bestScore = -Infinity;
    let bestMove = -1;

    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) {
        squares[i] = "O";
        const score = minimax(squares, 0, false);
        squares[i] = null;
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    return bestMove;
  };

  const minimax = (squares: Array<"X" | "O" | null>, depth: number, isMaximizing: boolean): number => {
    const winner = calculateWinner(squares);
    if (winner === "O") return 10 - depth;
    if (winner === "X") return depth - 10;
    if (!squares.includes(null)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (squares[i] === null) {
          squares[i] = "O";
          const score = minimax(squares, depth + 1, false);
          squares[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (squares[i] === null) {
          squares[i] = "X";
          const score = minimax(squares, depth + 1, true);
          squares[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const handleClick = (index: number) => {
    if (board[index] || gameOver || !isXNext) return;
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsXNext(false);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
    setWinner(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="relative h-full w-full max-w-md flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition hover:border-indigo-400 hover:bg-slate-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full flex-col rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
            <div className="text-right text-sm text-slate-300">
              {gameOver ? (
                <div>
                  {winner === "X" && <span className="font-bold text-green-400">You Win! 🎉</span>}
                  {winner === "O" && <span className="font-bold text-red-400">AI Wins!</span>}
                  {winner === "Tie" && <span className="font-bold text-yellow-400">Tie Game!</span>}
                </div>
              ) : (
                <div>Turn: <span className="font-bold text-white">{isXNext ? "X (You)" : "O (AI)"}</span></div>
              )}
            </div>
          </div>

          {/* Board */}
          <div className="mb-4 flex-1 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-2">
              {board.map((cell, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  disabled={!!cell || gameOver || !isXNext}
                  className={`flex h-20 w-20 items-center justify-center rounded-lg border-2 text-4xl font-bold transition ${
                    cell === "X"
                      ? "border-green-400 bg-green-500/20 text-green-400"
                      : cell === "O"
                      ? "border-red-400 bg-red-500/20 text-red-400"
                      : "border-purple-500/30 bg-slate-800 text-slate-400 hover:border-purple-400"
                  } ${!cell && !gameOver && isXNext ? "cursor-pointer" : "cursor-not-allowed"}`}
                >
                  {cell}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mb-4 rounded-lg bg-slate-800/50 p-4 text-center text-sm">
            <div className="flex justify-around">
              <div>
                <div className="text-purple-300">Wins</div>
                <div className="text-xl font-bold text-white">{stats.wins}</div>
              </div>
              <div>
                <div className="text-purple-300">Losses</div>
                <div className="text-xl font-bold text-white">{stats.losses}</div>
              </div>
              <div>
                <div className="text-purple-300">Ties</div>
                <div className="text-xl font-bold text-white">{stats.ties}</div>
              </div>
            </div>
          </div>

          <button
            onClick={resetGame}
            className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500"
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
}

// Trivia Challenge Game
function TriviaChallengeGame({ title, onClose }: { title: string; onClose: () => void }) {
  const questions = [
    { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], correct: 2, category: "Geography" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: 1, category: "Literature" },
    { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "NaCl"], correct: 0, category: "Science" },
    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1, category: "Science" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: 1, category: "Math" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"], correct: 1, category: "Art" },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3, category: "Geography" },
    { question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], correct: 2, category: "History" },
    { question: "What is the speed of light?", options: ["299,792,458 m/s", "300,000,000 m/s", "150,000,000 m/s", "200,000,000 m/s"], correct: 0, category: "Science" },
    { question: "Who invented the telephone?", options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"], correct: 1, category: "History" },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameOver(true);
      }
    }, 1500);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
        <div className="relative rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-8 text-center max-w-md">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-900/90 p-2 text-white transition hover:border-indigo-400 hover:bg-slate-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="mb-4 text-6xl">🎉</div>
          <h3 className="mb-4 text-3xl font-bold text-purple-300">Quiz Complete!</h3>
          <p className="mb-6 text-slate-300">Your Score: <span className="font-bold text-white">{score}/{questions.length}</span></p>
          <p className="mb-6 text-slate-400">Percentage: <span className="font-bold text-purple-300">{Math.round((score / questions.length) * 100)}%</span></p>
          <div className="flex gap-3">
            <button
              onClick={resetGame}
              className="flex-1 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500"
            >
              Play Again
            </button>
            <button onClick={onClose} className="flex-1 rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-600">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="relative h-full w-full max-w-2xl flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition hover:border-indigo-400 hover:bg-slate-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full flex-col rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
            <div className="text-sm text-slate-300">
              Question <span className="font-bold text-white">{currentQuestion + 1}/{questions.length}</span> | Score: <span className="font-bold text-white">{score}</span>
            </div>
          </div>

          <div className="mb-4 rounded-lg bg-slate-800/50 p-4">
            <div className="mb-2 text-xs text-purple-400">{q.category}</div>
            <h4 className="mb-4 text-xl font-bold text-white">{q.question}</h4>
          </div>

          <div className="mb-4 space-y-3 flex-1">
            {q.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={`w-full rounded-lg border-2 p-4 text-left transition ${
                  showResult
                    ? index === q.correct
                      ? "border-green-500 bg-green-500/20 text-green-300"
                      : index === selectedAnswer
                      ? "border-red-500 bg-red-500/20 text-red-300"
                      : "border-slate-700 bg-slate-800/50 text-slate-400"
                    : "border-purple-500/30 bg-purple-500/10 text-slate-300 hover:border-purple-400 hover:bg-purple-500/20"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Hangman Hero Game
function HangmanHeroGame({ title, onClose }: { title: string; onClose: () => void }) {
  const words = ["APPLE", "BANANA", "COMPUTER", "DANCING", "ELEPHANT", "FLOWER", "GARDEN", "HAPPINESS", "JOURNEY", "KEYBOARD", "LANGUAGE", "MUSIC", "OCEAN", "PYTHON", "QUIZZES", "RAINBOW", "SUNSHINE", "TIGER", "UNIVERSE", "VICTORY", "WIZARD", "YELLOW", "ZEBRA"];
  const [word, setWord] = useState("");
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [stats, setStats] = useState({ games: 0, wins: 0 });

  useEffect(() => {
    const loadStats = async () => {
      const saved = await secureGetItem("hangmanStats");
      if (saved) setStats(JSON.parse(saved));
    };
    loadStats();
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWord(newWord);
  }, []);

  useEffect(() => {
    if (word && word.split("").every((letter) => guessed.has(letter))) {
      setGameWon(true);
      setGameOver(true);
      const newStats = { ...stats, games: stats.games + 1, wins: stats.wins + 1 };
      setStats(newStats);
      secureSetItem("hangmanStats", JSON.stringify(newStats));
    }
    if (wrongGuesses >= 6) {
      setGameOver(true);
      const newStats = { ...stats, games: stats.games + 1 };
      setStats(newStats);
      secureSetItem("hangmanStats", JSON.stringify(newStats));
    }
  }, [guessed, wrongGuesses, word]);

  const handleGuess = (letter: string) => {
    if (guessed.has(letter) || gameOver) return;
    setGuessed(new Set([...guessed, letter]));
    if (!word.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  const resetGame = () => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWord(newWord);
    setGuessed(new Set());
    setWrongGuesses(0);
    setGameWon(false);
    setGameOver(false);
  };

  const hangmanParts = [
    <line key="gallows1" x1="50" y1="20" x2="50" y2="180" stroke="white" strokeWidth="3" />,
    <line key="gallows2" x1="50" y1="20" x2="150" y2="20" stroke="white" strokeWidth="3" />,
    <line key="rope" x1="150" y1="20" x2="150" y2="50" stroke="white" strokeWidth="2" />,
    <circle key="head" cx="150" cy="70" r="20" stroke="white" strokeWidth="2" fill="none" style={{ display: wrongGuesses >= 1 ? "block" : "none" }} />,
    <line key="body" x1="150" y1="90" x2="150" y2="150" stroke="white" strokeWidth="2" style={{ display: wrongGuesses >= 2 ? "block" : "none" }} />,
    <line key="leftArm" x1="150" y1="110" x2="130" y2="130" stroke="white" strokeWidth="2" style={{ display: wrongGuesses >= 3 ? "block" : "none" }} />,
    <line key="rightArm" x1="150" y1="110" x2="170" y2="130" stroke="white" strokeWidth="2" style={{ display: wrongGuesses >= 4 ? "block" : "none" }} />,
    <line key="leftLeg" x1="150" y1="150" x2="130" y2="170" stroke="white" strokeWidth="2" style={{ display: wrongGuesses >= 5 ? "block" : "none" }} />,
    <line key="rightLeg" x1="150" y1="150" x2="170" y2="170" stroke="white" strokeWidth="2" style={{ display: wrongGuesses >= 6 ? "block" : "none" }} />,
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="relative h-full w-full max-w-2xl flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition hover:border-indigo-400 hover:bg-slate-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full flex-col rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
            <div className="text-sm text-slate-300">
              Wrong: <span className="font-bold text-red-400">{wrongGuesses}/6</span>
            </div>
          </div>

          {gameOver && (
            <div className={`mb-4 rounded-lg border p-4 text-center ${gameWon ? "bg-green-600/20 border-green-500/50" : "bg-red-600/20 border-red-500/50"}`}>
              <p className={`font-bold text-xl ${gameWon ? "text-green-300" : "text-red-300"}`}>
                {gameWon ? "🎉 You Win!" : "😔 Game Over!"}
              </p>
              {!gameWon && <p className="mt-2 text-slate-300">The word was: <span className="font-bold text-white">{word}</span></p>}
              <button
                onClick={resetGame}
                className="mt-4 rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white hover:bg-purple-500"
              >
                Play Again
              </button>
            </div>
          )}

          <div className="mb-4 flex flex-1 items-center justify-between gap-8">
            {/* Hangman Drawing */}
            <div className="flex-1 flex items-center justify-center">
              <svg width="200" height="200" className="rounded-lg bg-slate-800">
                {hangmanParts}
              </svg>
            </div>

            {/* Word Display */}
            <div className="flex-1 text-center">
              <div className="mb-4 flex gap-2 justify-center">
                {word.split("").map((letter, index) => (
                  <div
                    key={index}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-purple-500/30 bg-slate-800 text-2xl font-bold text-white"
                  >
                    {guessed.has(letter) ? letter : "_"}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Keyboard */}
          <div className="space-y-2">
            {["ABCDEFGHIJKLM", "NOPQRSTUVWXYZ"].map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-1 justify-center">
                {row.split("").map((letter) => (
                  <button
                    key={letter}
                    onClick={() => handleGuess(letter)}
                    disabled={guessed.has(letter) || gameOver}
                    className={`h-10 w-10 rounded-lg text-sm font-bold transition ${
                      guessed.has(letter)
                        ? word.includes(letter)
                          ? "bg-green-600 text-white"
                          : "bg-red-600 text-white opacity-50"
                        : gameOver
                        ? "bg-slate-700 text-slate-500"
                        : "bg-purple-600 text-white hover:bg-purple-500"
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-4 text-center text-sm text-slate-400">
            Games: {stats.games} | Wins: {stats.wins} | Win Rate: {stats.games > 0 ? Math.round((stats.wins / stats.games) * 100) : 0}%
          </div>
        </div>
      </div>
    </div>
  );
}

// Sudoku Solver Game
function SudokuSolverGame({ title, onClose }: { title: string; onClose: () => void }) {
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard" | null>(null);
  const [grid, setGrid] = useState<number[][]>([]);
  const [initialGrid, setInitialGrid] = useState<boolean[][]>([]);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [gameWon, setGameWon] = useState(false);

  const generateSudoku = useCallback((difficulty: "easy" | "medium" | "hard"): { grid: number[][]; initial: boolean[][] } => {
    const grid = Array(9).fill(null).map(() => Array(9).fill(0));
    const initial = Array(9).fill(null).map(() => Array(9).fill(false));
    const clues = difficulty === "easy" ? 35 : difficulty === "medium" ? 28 : 20;
    
    const solveSudoku = (grid: number[][]): boolean => {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (grid[row][col] === 0) {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
            for (const num of numbers) {
              if (isValid(grid, row, col, num)) {
                grid[row][col] = num;
                if (solveSudoku(grid)) return true;
                grid[row][col] = 0;
              }
            }
            return false;
          }
        }
      }
      return true;
    };

    const isValid = (grid: number[][], row: number, col: number, num: number): boolean => {
      for (let i = 0; i < 9; i++) {
        if (grid[row][i] === num || grid[i][col] === num) return false;
      }
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
          if (grid[i][j] === num) return false;
        }
      }
      return true;
    };

    solveSudoku(grid);
    const cells = Array.from({ length: 81 }, (_, i) => ({ row: Math.floor(i / 9), col: i % 9 }));
    cells.sort(() => Math.random() - 0.5);
    
    for (let i = clues; i < 81; i++) {
      grid[cells[i].row][cells[i].col] = 0;
    }
    
    for (let i = 0; i < 81; i++) {
      if (grid[Math.floor(i / 9)][i % 9] !== 0) {
        initial[Math.floor(i / 9)][i % 9] = true;
      }
    }
    
    return { grid, initial };
  }, []);

  const isValid = (grid: number[][], row: number, col: number, num: number): boolean => {
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === num || grid[i][col] === num) return false;
    }
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (grid[i][j] === num) return false;
      }
    }
    return true;
  };

  const handleCellClick = (row: number, col: number) => {
    if (!initialGrid[row] || !initialGrid[row][col]) {
      setSelectedCell({ row, col });
    }
  };

  const handleNumberInput = (num: number) => {
    if (!selectedCell || !initialGrid[selectedCell.row] || initialGrid[selectedCell.row][selectedCell.col]) return;
    const newGrid = grid.map(row => [...row]);
    if (isValid(newGrid, selectedCell.row, selectedCell.col, num)) {
      newGrid[selectedCell.row][selectedCell.col] = num;
      setGrid(newGrid);
      
      if (isComplete(newGrid)) {
        setGameWon(true);
      }
    } else {
      alert("Invalid number!");
    }
  };

  const isComplete = (grid: number[][]): boolean => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) return false;
      }
    }
    return true;
  };

  const handleDifficultySelect = (difficulty: "easy" | "medium" | "hard") => {
    setDifficulty(difficulty);
    const { grid: newGrid, initial: newInitial } = generateSudoku(difficulty);
    setGrid(newGrid);
    setInitialGrid(newInitial);
    setSelectedCell(null);
    setGameWon(false);
  };

  if (!difficulty) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
        <div className="relative rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-8">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-900/90 p-2 text-white transition hover:border-indigo-400 hover:bg-slate-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h3 className="mb-6 text-3xl font-bold text-purple-300">{title}</h3>
          <p className="mb-6 text-slate-300">Choose difficulty:</p>
          <div className="space-y-3">
            <button onClick={() => handleDifficultySelect("easy")} className="w-full rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white hover:bg-green-500">
              Easy
            </button>
            <button onClick={() => handleDifficultySelect("medium")} className="w-full rounded-lg bg-yellow-600 px-6 py-3 text-lg font-semibold text-white hover:bg-yellow-500">
              Medium
            </button>
            <button onClick={() => handleDifficultySelect("hard")} className="w-full rounded-lg bg-red-600 px-6 py-3 text-lg font-semibold text-white hover:bg-red-500">
              Hard
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameWon) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
        <div className="relative rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-8 text-center">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-900/90 p-2 text-white transition hover:border-indigo-400 hover:bg-slate-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="mb-4 text-6xl">🎉</div>
          <h3 className="mb-4 text-3xl font-bold text-purple-300">Congratulations!</h3>
          <p className="mb-6 text-slate-300">You solved the Sudoku!</p>
          <div className="flex gap-3">
            <button onClick={() => handleDifficultySelect(difficulty)} className="flex-1 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500">
              Play Again
            </button>
            <button onClick={onClose} className="flex-1 rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white hover:bg-slate-600">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="relative h-full w-full max-w-2xl flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition hover:border-indigo-400 hover:bg-slate-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full flex-col rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
            <div className="text-sm text-slate-300 capitalize">Difficulty: <span className="font-bold text-white">{difficulty}</span></div>
          </div>

          {/* Sudoku Grid */}
          <div className="mb-4 flex-1 flex items-center justify-center overflow-auto">
            <div className="grid grid-cols-9 gap-0 border-2 border-purple-500/50">
              {Array.from({ length: 81 }).map((_, index) => {
                const row = Math.floor(index / 9);
                const col = index % 9;
                const value = grid[row]?.[col] || 0;
                const isInitial = initialGrid[row]?.[col] || false;
                const isSelected = selectedCell?.row === row && selectedCell?.col === col;
                const isThickBorder = col % 3 === 0 || row % 3 === 0;

                return (
                  <button
                    key={index}
                    onClick={() => handleCellClick(row, col)}
                    className={`h-10 w-10 border border-slate-600 text-center text-lg font-bold transition ${
                      isSelected ? "bg-purple-600 text-white" : isInitial ? "bg-slate-800 text-slate-300" : "bg-slate-900 text-white hover:bg-slate-800"
                    } ${isThickBorder ? "border-purple-500/50" : ""}`}
                  >
                    {value > 0 ? value : ""}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Number Input */}
          <div className="mb-4 flex justify-center gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberInput(num)}
                className="h-12 w-12 rounded-lg bg-purple-600 text-xl font-bold text-white transition hover:bg-purple-500"
              >
                {num}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              const { grid: newGrid, initial: newInitial } = generateSudoku(difficulty);
              setGrid(newGrid);
              setInitialGrid(newInitial);
              setSelectedCell(null);
              setGameWon(false);
            }}
            className="rounded-lg bg-slate-700 px-6 py-2 font-semibold text-white hover:bg-slate-600"
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
}

// Rock Paper Scissors Game
function RockPaperScissorsGame({ title, onClose }: { title: string; onClose: () => void }) {
  const [playerChoice, setPlayerChoice] = useState<"rock" | "paper" | "scissors" | null>(null);
  const [computerChoice, setComputerChoice] = useState<"rock" | "paper" | "scissors" | null>(null);
  const [result, setResult] = useState<"win" | "lose" | "tie" | null>(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [round, setRound] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<"player" | "computer" | null>(null);

  const choices: Array<"rock" | "paper" | "scissors"> = ["rock", "paper", "scissors"];

  const handleChoice = (choice: "rock" | "paper" | "scissors") => {
    if (gameOver) return;
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computer);

    let gameResult: "win" | "lose" | "tie";
    if (choice === computer) {
      gameResult = "tie";
    } else if (
      (choice === "rock" && computer === "scissors") ||
      (choice === "paper" && computer === "rock") ||
      (choice === "scissors" && computer === "paper")
    ) {
      gameResult = "win";
      setPlayerScore((prev) => prev + 1);
    } else {
      gameResult = "lose";
      setComputerScore((prev) => prev + 1);
    }

    setResult(gameResult);
    const newRound = round + 1;
    setRound(newRound);

    if (newRound >= 5) {
      setGameOver(true);
      setTimeout(() => {
        setPlayerScore((currentPlayerScore) => {
          setComputerScore((currentComputerScore) => {
            if (currentPlayerScore + (gameResult === "win" ? 1 : 0) > currentComputerScore + (gameResult === "lose" ? 1 : 0)) {
              setWinner("player");
            } else if (currentComputerScore + (gameResult === "lose" ? 1 : 0) > currentPlayerScore + (gameResult === "win" ? 1 : 0)) {
              setWinner("computer");
            }
            return currentComputerScore;
          });
          return currentPlayerScore;
        });
      }, 100);
    }

    setTimeout(() => {
      if (newRound < 5) {
        setPlayerChoice(null);
        setComputerChoice(null);
        setResult(null);
      }
    }, 2000);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setPlayerScore(0);
    setComputerScore(0);
    setRound(0);
    setGameOver(false);
    setWinner(null);
  };

  const getEmoji = (choice: "rock" | "paper" | "scissors" | null) => {
    if (!choice) return "❓";
    if (choice === "rock") return "🪨";
    if (choice === "paper") return "📄";
    return "✂️";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="relative h-full w-full max-w-2xl flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition hover:border-indigo-400 hover:bg-slate-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full flex-col rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
            <div className="text-sm text-slate-300">
              Round: <span className="font-bold text-white">{round}/5</span>
            </div>
          </div>

          {gameOver && (
            <div className={`mb-4 rounded-lg border p-4 text-center ${winner === "player" ? "bg-green-600/20 border-green-500/50" : winner === "computer" ? "bg-red-600/20 border-red-500/50" : "bg-yellow-600/20 border-yellow-500/50"}`}>
              <p className={`font-bold text-xl ${winner === "player" ? "text-green-300" : winner === "computer" ? "text-red-300" : "text-yellow-300"}`}>
                {winner === "player" ? "🎉 You Win the Tournament!" : winner === "computer" ? "😔 Computer Wins!" : "🤝 It's a Tie!"}
              </p>
              <p className="mt-2 text-slate-300">Final Score: You {playerScore} - {computerScore} Computer</p>
              <button
                onClick={resetGame}
                className="mt-4 rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white hover:bg-purple-500"
              >
                Play Again
              </button>
                </div>
          )}

          {/* Score Display */}
          <div className="mb-6 flex justify-around rounded-lg bg-slate-800/50 p-4">
            <div className="text-center">
              <div className="text-sm text-slate-400">You</div>
              <div className="text-3xl font-bold text-purple-300">{playerScore}</div>
              </div>
            <div className="text-center">
              <div className="text-sm text-slate-400">VS</div>
              <div className="text-2xl text-slate-500">-</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-slate-400">Computer</div>
              <div className="text-3xl font-bold text-pink-300">{computerScore}</div>
          </div>
          </div>

          {/* Choices Display */}
          <div className="mb-6 flex justify-around">
            <div className="text-center">
              <div className="mb-2 text-4xl">{getEmoji(playerChoice)}</div>
              <div className="text-sm text-slate-400">You</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl">{getEmoji(computerChoice)}</div>
              <div className="text-sm text-slate-400">Computer</div>
            </div>
          </div>

          {result && (
            <div className={`mb-6 rounded-lg border p-4 text-center ${result === "win" ? "bg-green-600/20 border-green-500/50 text-green-300" : result === "lose" ? "bg-red-600/20 border-red-500/50 text-red-300" : "bg-yellow-600/20 border-yellow-500/50 text-yellow-300"}`}>
              <p className="font-bold text-xl">
                {result === "win" ? "🎉 You Win!" : result === "lose" ? "😔 You Lose!" : "🤝 Tie!"}
              </p>
        </div>
      )}

          {/* Player Choices */}
          <div className="mb-4 flex justify-center gap-4">
            <button
              onClick={() => handleChoice("rock")}
              disabled={gameOver || !!playerChoice}
              className="h-24 w-24 rounded-lg bg-slate-700 text-6xl transition hover:bg-slate-600 disabled:opacity-50"
            >
              🪨
            </button>
            <button
              onClick={() => handleChoice("paper")}
              disabled={gameOver || !!playerChoice}
              className="h-24 w-24 rounded-lg bg-slate-700 text-6xl transition hover:bg-slate-600 disabled:opacity-50"
            >
              📄
            </button>
            <button
              onClick={() => handleChoice("scissors")}
              disabled={gameOver || !!playerChoice}
              className="h-24 w-24 rounded-lg bg-slate-700 text-6xl transition hover:bg-slate-600 disabled:opacity-50"
            >
              ✂️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simon Says Game
function SimonSaysGame({ title, onClose }: { title: string; onClose: () => void }) {
  const colors = ["red", "green", "blue", "yellow"];
  const [sequence, setSequence] = useState<string[]>([]);
  const [playerSequence, setPlayerSequence] = useState<string[]>([]);
  const [level, setLevel] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [bestLevel, setBestLevel] = useState(0);

  useEffect(() => {
    const loadBestScore = async () => {
      const saved = await secureGetItem("simonBest");
      if (saved) setBestLevel(parseInt(saved));
    };
    loadBestScore();
    startGame();
  }, []);

  const startGame = () => {
    setSequence([]);
    setPlayerSequence([]);
    setLevel(1);
    setIsPlaying(false);
    setGameOver(false);
    nextRound();
  };

  const nextRound = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    const newSequence = [...sequence, newColor];
    setSequence(newSequence);
    playSequence(newSequence);
  };

  const playSequence = async (seq: string[]) => {
    setIsPlaying(true);
    setPlayerSequence([]);
    for (let i = 0; i < seq.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 600));
      highlightColor(seq[i]);
      await new Promise((resolve) => setTimeout(resolve, 400));
    }
    setIsPlaying(false);
  };

  const highlightColor = (color: string) => {
    const element = document.getElementById(`simon-${color}`);
    if (element) {
      element.classList.add("opacity-50", "scale-110");
      setTimeout(() => {
        element.classList.remove("opacity-50", "scale-110");
      }, 300);
    }
  };

  const handleColorClick = (color: string) => {
    if (isPlaying || gameOver) return;
    const newPlayerSequence = [...playerSequence, color];
    setPlayerSequence(newPlayerSequence);
    highlightColor(color);

    if (newPlayerSequence[newPlayerSequence.length - 1] !== sequence[newPlayerSequence.length - 1]) {
      setGameOver(true);
      setLevel((currentLevel) => {
        if (currentLevel > bestLevel) {
          setBestLevel(currentLevel);
          secureSetItem("simonBest", currentLevel.toString());
        }
        return currentLevel;
      });
    } else if (newPlayerSequence.length === sequence.length) {
      setLevel((prevLevel) => {
        const newLevel = prevLevel + 1;
        setTimeout(() => {
          nextRound();
        }, 1000);
        return newLevel;
      });
    }
  };

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      red: "bg-red-500 hover:bg-red-600",
      green: "bg-green-500 hover:bg-green-600",
      blue: "bg-blue-500 hover:bg-blue-600",
      yellow: "bg-yellow-500 hover:bg-yellow-600",
    };
    return colors[color] || "";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="relative h-full w-full max-w-md flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition hover:border-indigo-400 hover:bg-slate-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full flex-col rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
            <div className="text-right text-sm text-slate-300">
              Level: <span className="font-bold text-white">{level}</span><br />
              Best: <span className="font-bold text-white">{bestLevel}</span>
            </div>
          </div>

          {gameOver && (
            <div className="mb-4 rounded-lg bg-red-600/20 border border-red-500/50 p-4 text-center">
              <p className="font-bold text-xl text-red-300 mb-2">Game Over!</p>
              <p className="text-slate-300 mb-4">You reached level {level}!</p>
              <button
                onClick={startGame}
                className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white hover:bg-purple-500"
              >
                Play Again
              </button>
            </div>
          )}

          {/* Simon Grid */}
          <div className="mb-4 flex-1 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {colors.map((color) => (
                <button
                  key={color}
                  id={`simon-${color}`}
                  onClick={() => handleColorClick(color)}
                  disabled={isPlaying || gameOver}
                  className={`h-32 w-32 rounded-lg ${getColorClass(color)} transition-all disabled:opacity-50`}
                />
              ))}
            </div>
          </div>

          {isPlaying && (
            <div className="mb-4 text-center text-purple-300 font-bold">
              Watch the sequence...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Whack-a-Mole Game
function WhackAMoleGame({ title, onClose }: { title: string; onClose: () => void }) {
  const GRID_SIZE = 9;
  const GAME_TIME = 30;
  const [moles, setMoles] = useState<boolean[]>(Array(GRID_SIZE).fill(false));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);
  const [gameOver, setGameOver] = useState(false);
  const [bestScore, setBestScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const loadBestScore = async () => {
      const saved = await secureGetItem("whackAMoleBest");
      if (saved) setBestScore(parseInt(saved));
    };
    loadBestScore();
  }, []);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameOver(true);
          setScore((currentScore) => {
            if (currentScore > bestScore) {
              const newBest = currentScore;
              setBestScore(newBest);
              secureSetItem("whackAMoleBest", newBest.toString());
            }
            return currentScore;
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const moleInterval = setInterval(() => {
      setTimeLeft((currentTime) => {
        if (currentTime <= 0) {
          clearInterval(moleInterval);
          return 0;
        }
        const randomIndex = Math.floor(Math.random() * GRID_SIZE);
        setMoles((prev) => {
          const newMoles = [...prev];
          newMoles[randomIndex] = true;
          setTimeout(() => {
            setMoles((m) => {
              const updated = [...m];
              updated[randomIndex] = false;
              return updated;
            });
          }, 1500 - Math.min(currentTime * 10, 1000));
          return newMoles;
        });
        return currentTime;
      });
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(moleInterval);
    };
  }, [gameStarted, gameOver, bestScore]);

  const handleMoleClick = (index: number) => {
    if (moles[index] && !gameOver && timeLeft > 0) {
      setMoles((prev) => {
        const newMoles = [...prev];
        newMoles[index] = false;
        return newMoles;
      });
      setScore((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    setMoles(Array(GRID_SIZE).fill(false));
    setScore(0);
    setTimeLeft(GAME_TIME);
    setGameOver(false);
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setTimeLeft(GAME_TIME);
    setMoles(Array(GRID_SIZE).fill(false));
  };

  if (!gameStarted && !gameOver) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
        <div className="relative rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-8 text-center">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-900/90 p-2 text-white transition hover:border-indigo-400 hover:bg-slate-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h3 className="mb-6 text-3xl font-bold text-purple-300">{title}</h3>
          <p className="mb-6 text-slate-300">Click as many moles as you can in 30 seconds!</p>
          <button
            onClick={startGame}
            className="rounded-lg bg-purple-600 px-8 py-4 text-lg font-semibold text-white hover:bg-purple-500"
          >
            Start Game
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="relative h-full w-full max-w-lg flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition hover:border-indigo-400 hover:bg-slate-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex h-full flex-col rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
            <div className="text-right text-sm text-slate-300">
              Score: <span className="font-bold text-white">{score}</span><br />
              Time: <span className="font-bold text-white">{timeLeft}s</span><br />
              Best: <span className="font-bold text-white">{bestScore}</span>
            </div>
          </div>

          {gameOver && (
            <div className="mb-4 rounded-lg bg-red-600/20 border border-red-500/50 p-4 text-center">
              <p className="font-bold text-xl text-red-300 mb-2">Time's Up!</p>
              <p className="text-slate-300 mb-4">Final Score: {score}</p>
              {score > bestScore && (
                <p className="text-green-300 mb-4 font-bold">🎉 New Best Score!</p>
              )}
              <button
                onClick={resetGame}
                className="rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white hover:bg-purple-500"
              >
                Play Again
              </button>
            </div>
          )}

          {/* Game Grid */}
          <div className="mb-4 flex-1 flex items-center justify-center rounded-lg bg-slate-800 p-4">
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: GRID_SIZE }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleMoleClick(index)}
                  disabled={gameOver}
                  className={`h-24 w-24 rounded-lg border-2 transition-all ${
                    moles[index]
                      ? "border-green-500 bg-green-600 hover:bg-green-500 text-6xl"
                      : "border-slate-700 bg-slate-900 hover:bg-slate-800"
                  } disabled:opacity-50`}
                >
                  {moles[index] ? "🕳️" : ""}
                </button>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-slate-400">Click the moles to score points!</p>
        </div>
      </div>
    </div>
  );
}
