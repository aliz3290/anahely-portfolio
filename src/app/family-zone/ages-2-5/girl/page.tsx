"use client";

import Link from "next/link";
import { useState } from "react";

export default function Ages2To5GirlPage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const numbers = Array.from({ length: 10 }, (_, i) => i);

  const games = [
    {
      id: "coloring",
      title: "Coloring Fun",
      emoji: "🖍️",
      description: "Colorful drawing activities",
      content: "Click the colors below to start coloring! Use your imagination!"
    },
    {
      id: "abc",
      title: "ABC Learning",
      emoji: "🔤",
      description: "Learn letters and sounds",
      content: "Let's learn the alphabet together!"
    },
    {
      id: "counting",
      title: "Counting Numbers",
      emoji: "🔢",
      description: "Count from 1 to 10",
      content: "Let's count together!"
    },
    {
      id: "shapes",
      title: "Shapes & Colors",
      emoji: "🔷",
      description: "Learn shapes and colors",
      content: "Can you find the circle? What color is the square?"
    },
    {
      id: "animals",
      title: "Animal Sounds",
      emoji: "🐶",
      description: "Learn about animals",
      content: "What sound does a cow make? Moo! What about a cat? Meow!"
    },
    {
      id: "songs",
      title: "Sing Along",
      emoji: "🎤",
      description: "Fun songs and rhymes",
      content: "Let's sing together! Twinkle, twinkle, little star..."
    }
  ];

  const colors = ["🔴 Red", "🟡 Yellow", "🔵 Blue", "🟢 Green", "🟣 Purple", "🟠 Orange"];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-200 via-orange-200 to-pink-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-pink-800">🌟 Ages 2-5</h1>
          <p className="text-xl text-pink-700">Welcome to the preschool zone!</p>
        </div>

        <nav className="flex justify-center gap-4 mb-12">
          <Link
            href="/family-zone"
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-all font-semibold"
          >
            ← Back to Family Zone
          </Link>
          <Link
            href="/home"
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-all font-semibold"
          >
            ← Back to Home
          </Link>
        </nav>

        <div className="bg-white/90 rounded-lg p-8 backdrop-blur-sm shadow-2xl mb-8">
          <div className="text-center space-y-6">
            <div className="text-8xl mb-6 animate-bounce">🎨</div>
            <h2 className="text-3xl font-bold text-pink-800">Preschool Adventures</h2>
            <p className="text-lg text-pink-700 max-w-2xl mx-auto">
              Fun and educational activities designed for toddlers and preschoolers. Learn through play!
            </p>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {games.map((game) => (
            <div
              key={game.id}
              onClick={() => setSelectedGame(selectedGame === game.id ? null : game.id)}
              className={`bg-white/90 rounded-lg p-6 cursor-pointer transition-all hover:scale-105 shadow-lg ${
                selectedGame === game.id ? "ring-4 ring-pink-500" : ""
              }`}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">{game.emoji}</div>
                <h3 className="font-bold text-pink-800 mb-2 text-xl">{game.title}</h3>
                <p className="text-pink-700 text-sm mb-3">{game.description}</p>
                {selectedGame === game.id && (
                  <div className="mt-4 p-4 bg-pink-100 rounded-lg">
                    <p className="text-pink-800 text-sm mb-3">{game.content}</p>
                    {game.id === "abc" && (
                      <div className="space-y-2">
                        <div className="text-6xl font-bold text-pink-600">{alphabet[currentLetter]}</div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentLetter((prev) => (prev + 1) % alphabet.length);
                          }}
                          className="px-4 py-2 bg-pink-500 text-white rounded-lg text-sm"
                        >
                          Next Letter →
                        </button>
                      </div>
                    )}
                    {game.id === "counting" && (
                      <div className="space-y-2">
                        <div className="text-6xl font-bold text-pink-600">{currentNumber + 1}</div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentNumber((prev) => (prev + 1) % 10);
                          }}
                          className="px-4 py-2 bg-pink-500 text-white rounded-lg text-sm"
                        >
                          Count Next →
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Color Picker */}
        {selectedGame === "coloring" && (
          <div className="bg-white/90 rounded-lg p-8 backdrop-blur-sm shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-pink-800 mb-4 text-center">Choose Your Colors!</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className="p-4 bg-white rounded-lg border-2 border-pink-300 hover:border-pink-500 transition-all hover:scale-110 text-lg"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}






