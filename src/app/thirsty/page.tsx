"use client";

import Link from "next/link";
import { useState } from "react";

export default function ThirstyPage() {
  const [hoveredDrink, setHoveredDrink] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const luxuryDrinks = [
    {
      name: "Midnight Martini",
      description: "Elegant gin with a touch of violet",
      category: "classic",
      emoji: "🍸",
      color: "from-purple-900/40 to-indigo-900/40",
      border: "border-purple-500/30",
    },
    {
      name: "Gold Rush",
      description: "Premium whiskey with honey and lemon",
      category: "premium",
      emoji: "🥃",
      color: "from-yellow-900/40 to-amber-900/40",
      border: "border-yellow-500/30",
    },
    {
      name: "Champagne Dreams",
      description: "Sparkling elegance with berries",
      category: "premium",
      emoji: "🍾",
      color: "from-pink-900/40 to-rose-900/40",
      border: "border-pink-500/30",
    },
    {
      name: "Velvet Cosmo",
      description: "Smooth vodka with cranberry and lime",
      category: "classic",
      emoji: "🍷",
      color: "from-red-900/40 to-pink-900/40",
      border: "border-red-500/30",
    },
    {
      name: "Diamond Fizz",
      description: "Premium gin with elderflower and prosecco",
      category: "signature",
      emoji: "🥂",
      color: "from-blue-900/40 to-cyan-900/40",
      border: "border-cyan-500/30",
    },
    {
      name: "Royal Negroni",
      description: "Bold gin, vermouth, and Campari blend",
      category: "classic",
      emoji: "🍹",
      color: "from-orange-900/40 to-red-900/40",
      border: "border-orange-500/30",
    },
    {
      name: "Black Pearl",
      description: "Dark rum with vanilla and espresso",
      category: "signature",
      emoji: "☕",
      color: "from-slate-900/50 to-black/50",
      border: "border-slate-500/30",
    },
    {
      name: "Platinum Sour",
      description: "Bourbon with fresh citrus and egg white",
      category: "premium",
      emoji: "🥃",
      color: "from-amber-900/40 to-yellow-900/40",
      border: "border-amber-500/30",
    },
    {
      name: "Crystal Mule",
      description: "Vodka with ginger beer and lime",
      category: "classic",
      emoji: "🥤",
      color: "from-green-900/40 to-emerald-900/40",
      border: "border-green-500/30",
    },
  ];

  const categories = [
    { id: "all", name: "All Drinks", icon: "🍹" },
    { id: "classic", name: "Classics", icon: "🍸" },
    { id: "premium", name: "Premium", icon: "✨" },
    { id: "signature", name: "Signature", icon: "💎" },
  ];

  const filteredDrinks =
    selectedCategory === "all"
      ? luxuryDrinks
      : luxuryDrinks.filter((drink) => drink.category === selectedCategory);

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/10 blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 50 + 10}px`,
              height: `${Math.random() * 50 + 10}px`,
              animationName: "float",
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-12 pb-8 px-4 sm:px-8 text-center border-b border-purple-500/20">
          <div className="inline-block">
            <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mb-4 drop-shadow-2xl">
              Thirsty?
            </h1>
            <div className="flex items-center justify-center gap-3 text-2xl sm:text-3xl mb-4">
              <span className="text-4xl animate-pulse">💎</span>
              <span className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-gold-400 to-yellow-400 bg-clip-text text-transparent">
                Luxury Cocktail Bar
              </span>
              <span className="text-4xl animate-pulse" style={{ animationDelay: "0.5s" }}>✨</span>
            </div>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Sip on elegance with our curated selection of premium cocktails
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 px-4 sm:px-8 pb-16 pt-8">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <section className="mb-12">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 scale-105"
                        : "bg-slate-800/50 text-slate-300 border border-slate-700 hover:bg-slate-700/50 hover:border-purple-500/50"
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </section>

            {/* Featured Drinks Grid */}
            <section className="mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDrinks.map((drink, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${drink.color} border-2 ${drink.border} p-6 shadow-2xl backdrop-blur-sm transform transition-all duration-300 cursor-pointer group ${
                      hoveredDrink === index
                        ? "scale-105 shadow-purple-500/50"
                        : "hover:scale-102 hover:shadow-purple-500/30"
                    }`}
                    onMouseEnter={() => setHoveredDrink(index)}
                    onMouseLeave={() => setHoveredDrink(null)}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    
                    <div className="relative text-center space-y-4">
                      <div className="text-6xl mb-3 filter drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                        {drink.emoji}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-2">
                          {drink.name}
                        </h3>
                        <div className="inline-block px-3 py-1 rounded-full bg-black/30 text-xs font-medium text-purple-300 mb-3">
                          {drink.category.toUpperCase()}
                        </div>
                        <p className="text-slate-300 text-sm drop-shadow-md">
                          {drink.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative shine effect */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quote Section */}
            <section className="mb-12 text-center">
              <div className="relative bg-gradient-to-br from-slate-900/80 to-purple-900/40 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border-2 border-purple-500/30 shadow-2xl overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20 blur-2xl"></div>
                <div className="relative z-10">
                  <p className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent mb-6 drop-shadow-lg">
                    "Elegance is the only beauty that never fades"
                  </p>
                  <div className="flex items-center justify-center gap-4 text-4xl">
                    <span className="animate-pulse">💎</span>
                    <span className="animate-bounce" style={{ animationDuration: "2s" }}>🍸</span>
                    <span className="animate-pulse" style={{ animationDelay: "0.5s" }}>✨</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Fun Facts Section */}
            <section className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 text-center">
                🥂 Cocktail Knowledge
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative bg-gradient-to-br from-slate-900/60 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 group hover:border-purple-500/60 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">🍸</div>
                    <h3 className="text-xl font-bold text-purple-300 mb-2">The Martini</h3>
                    <p className="text-slate-300 text-sm">
                      Originated in the 1860s, the martini is considered the epitome of cocktail elegance.
                    </p>
                  </div>
                </div>
                <div className="relative bg-gradient-to-br from-slate-900/60 to-pink-900/30 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30 group hover:border-pink-500/60 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600/0 via-pink-600/10 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">🥃</div>
                    <h3 className="text-xl font-bold text-pink-300 mb-2">Premium Spirits</h3>
                    <p className="text-slate-300 text-sm">
                      Aged spirits develop complex flavors that elevate any cocktail to perfection.
                    </p>
                  </div>
                </div>
                <div className="relative bg-gradient-to-br from-slate-900/60 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30 group hover:border-indigo-500/60 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-600/10 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">🥂</div>
                    <h3 className="text-xl font-bold text-indigo-300 mb-2">Champagne</h3>
                    <p className="text-slate-300 text-sm">
                      The bubbles in champagne create a unique texture that enhances any drink.
                    </p>
                  </div>
                </div>
                <div className="relative bg-gradient-to-br from-slate-900/60 to-amber-900/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30 group hover:border-amber-500/60 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 via-amber-600/10 to-amber-600/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">💎</div>
                    <h3 className="text-xl font-bold text-amber-300 mb-2">Presentation</h3>
                    <p className="text-slate-300 text-sm">
                      Beautiful glassware and garnishes transform a drink into an experience.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative z-20 pb-8 px-4 sm:px-8 border-t border-purple-500/20 pt-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/home"
              className="rounded-full border-2 border-purple-500/50 bg-slate-900/60 backdrop-blur-md px-6 py-3 font-semibold text-purple-300 shadow-xl transition-all hover:bg-purple-600/20 hover:scale-105 hover:border-purple-400 hover:shadow-purple-500/50"
            >
              🏠 Back to Home
            </Link>
            <Link
              href="/"
              className="rounded-full border-2 border-purple-500/50 bg-slate-900/60 backdrop-blur-md px-6 py-3 font-semibold text-purple-300 shadow-xl transition-all hover:bg-purple-600/20 hover:scale-105 hover:border-purple-400 hover:shadow-purple-500/50"
            >
              📱 Phone Splash
            </Link>
          </div>
        </nav>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </main>
  );
}
