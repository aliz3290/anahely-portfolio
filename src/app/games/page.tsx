"use client";

import { useState } from "react";
import Link from "next/link";

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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <div className="relative h-full w-full max-w-7xl">
            {/* Close Button */}
            <button
              onClick={closeGame}
              className="absolute right-4 top-4 z-10 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-white transition hover:border-indigo-400 hover:bg-slate-800"
              aria-label="Close game"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Game Container */}
            <div className="flex h-full flex-col items-center justify-center rounded-lg border border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/20">
              <div className="mb-4 text-center">
                <h3 className="mb-2 text-2xl font-bold text-purple-300">
                  {games.find((g) => g.id === selectedGame)?.title}
                </h3>
                <p className="text-slate-400">Game loading...</p>
              </div>
              <div className="flex h-[80vh] w-full max-w-6xl items-center justify-center rounded-lg border-2 border-dashed border-purple-500/30 bg-slate-900/50">
                <div className="text-center">
                  <div className="mb-4 text-6xl">🎮</div>
                  <p className="mb-2 text-lg font-semibold text-purple-300">Game Placeholder</p>
                  <p className="text-sm text-slate-400">
                    The game iframe/component will be loaded here
                  </p>
                  <p className="mt-4 text-xs text-slate-500">
                    Game ID: {selectedGame}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
