"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ThirstyPage() {
  const [hoveredDrink, setHoveredDrink] = useState<number | null>(null);

  const tropicalDrinks = [
    {
      name: "Piña Colada",
      description: "Creamy coconut and pineapple paradise",
      color: "from-yellow-200 to-yellow-400",
      emoji: "🍍",
    },
    {
      name: "Mango Tango",
      description: "Fresh mango with a tropical twist",
      color: "from-orange-300 to-orange-500",
      emoji: "🥭",
    },
    {
      name: "Coconut Breeze",
      description: "Refreshing coconut water delight",
      color: "from-green-200 to-green-400",
      emoji: "🥥",
    },
    {
      name: "Tropical Sunrise",
      description: "Orange, pineapple, and passion fruit",
      color: "from-pink-300 to-orange-400",
      emoji: "🌅",
    },
    {
      name: "Strawberry Daiquiri",
      description: "Sweet strawberry tropical blend",
      color: "from-pink-400 to-red-400",
      emoji: "🍓",
    },
    {
      name: "Blue Lagoon",
      description: "Cool blue tropical paradise",
      color: "from-cyan-300 to-blue-400",
      emoji: "🌊",
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-cyan-400 via-blue-300 to-emerald-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-8xl opacity-20 animate-bounce" style={{ animationDuration: "3s" }}>
          🍹
        </div>
        <div className="absolute top-40 right-20 text-6xl opacity-20 animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>
          🥥
        </div>
        <div className="absolute bottom-40 left-20 text-7xl opacity-20 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>
          🌴
        </div>
        <div className="absolute bottom-20 right-10 text-9xl opacity-20 animate-bounce" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}>
          🍍
        </div>
        <div className="absolute top-1/2 left-1/4 text-5xl opacity-20 animate-bounce" style={{ animationDuration: "3s", animationDelay: "2s" }}>
          🌺
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-8 pb-4 px-4 sm:px-8 text-center">
          <div className="inline-block">
            <h1 className="text-5xl sm:text-7xl font-bold text-white drop-shadow-2xl mb-2">
              Thirsty?
            </h1>
            <div className="flex items-center justify-center gap-2 text-3xl sm:text-4xl mb-4">
              <span className="animate-bounce" style={{ animationDuration: "2s" }}>🌴</span>
              <span className="text-2xl sm:text-3xl font-semibold text-white drop-shadow-lg">
                Tropical Paradise
              </span>
              <span className="animate-bounce" style={{ animationDuration: "2s", animationDelay: "0.5s" }}>🌺</span>
            </div>
            <p className="text-lg sm:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
              Quench your thirst with these refreshing tropical delights
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 px-4 sm:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Featured Drinks Grid */}
            <section className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg mb-8 text-center">
                🍹 Tropical Drink Menu 🍹
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tropicalDrinks.map((drink, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${drink.color} p-6 shadow-2xl transform transition-all duration-300 cursor-pointer ${
                      hoveredDrink === index ? "scale-105 rotate-1" : "hover:scale-102"
                    }`}
                    onMouseEnter={() => setHoveredDrink(index)}
                    onMouseLeave={() => setHoveredDrink(null)}
                  >
                    <div className="text-center space-y-3">
                      <div className="text-6xl mb-2 animate-bounce" style={{ animationDuration: "2s" }}>
                        {drink.emoji}
                      </div>
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {drink.name}
                      </h3>
                      <p className="text-white/90 text-sm drop-shadow-md">
                        {drink.description}
                      </p>
                    </div>
                    {/* Decorative waves */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/20 backdrop-blur-sm"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quote Section */}
            <section className="mb-12 text-center">
              <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 sm:p-12 border-2 border-white/50 shadow-2xl">
                <p className="text-2xl sm:text-3xl font-semibold text-white drop-shadow-lg mb-4">
                  "Life is better with a tropical drink in hand"
                </p>
                <div className="flex items-center justify-center gap-3 text-4xl">
                  <span>🌴</span>
                  <span>🍹</span>
                  <span>🌺</span>
                </div>
              </div>
            </section>

            {/* Fun Facts Section */}
            <section className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg mb-6 text-center">
                🌊 Tropical Trivia 🌊
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/25 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/40">
                  <div className="text-3xl mb-2">🥥</div>
                  <h3 className="text-xl font-bold text-white mb-2">Coconut Water</h3>
                  <p className="text-white/90 text-sm">
                    Natural electrolytes make it the perfect tropical hydrator!
                  </p>
                </div>
                <div className="bg-white/25 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/40">
                  <div className="text-3xl mb-2">🍍</div>
                  <h3 className="text-xl font-bold text-white mb-2">Pineapple Power</h3>
                  <p className="text-white/90 text-sm">
                    Rich in vitamin C and bromelain for a healthy tropical boost!
                  </p>
                </div>
                <div className="bg-white/25 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/40">
                  <div className="text-3xl mb-2">🌴</div>
                  <h3 className="text-xl font-bold text-white mb-2">Palm Trees</h3>
                  <p className="text-white/90 text-sm">
                    Over 2,600 species of palm trees exist worldwide!
                  </p>
                </div>
                <div className="bg-white/25 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/40">
                  <div className="text-3xl mb-2">🌺</div>
                  <h3 className="text-xl font-bold text-white mb-2">Hibiscus</h3>
                  <p className="text-white/90 text-sm">
                    Beautiful tropical flowers that make refreshing teas!
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative z-20 pb-8 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/home"
              className="rounded-full border-2 border-white/60 bg-white/30 backdrop-blur-md px-6 py-3 font-semibold text-white shadow-xl transition-all hover:bg-white/40 hover:scale-105 hover:border-white"
            >
              🏠 Back to Home
            </Link>
            <Link
              href="/"
              className="rounded-full border-2 border-white/60 bg-white/30 backdrop-blur-md px-6 py-3 font-semibold text-white shadow-xl transition-all hover:bg-white/40 hover:scale-105 hover:border-white"
            >
              📱 Phone Splash
            </Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
