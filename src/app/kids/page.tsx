"use client";

import Link from "next/link";
import { useState } from "react";
import NanoIcon from "@/components/NanoIcon";

export default function KidsPage() {
  const [hoveredActivity, setHoveredActivity] = useState<number | null>(null);

  const activities = [
    {
      name: "Coloring Fun",
      emoji: <NanoIcon type="palette" size={64} />,
      color: "from-pink-300 to-rose-400",
      description: "Color your world with rainbows!",
      href: "/kids/coloring",
    },
    {
      name: "Story Time",
      emoji: <NanoIcon type="book" size={64} />,
      color: "from-purple-300 to-indigo-400",
      description: "Magical stories await!",
      href: "/kids/story-time",
    },
    {
      name: "Puzzle Games",
      emoji: <NanoIcon type="puzzle" size={64} />,
      color: "from-yellow-300 to-orange-400",
      description: "Solve fun puzzles!",
      href: "/kids/puzzles",
    },
    {
      name: "Sing Along",
      emoji: <NanoIcon type="music" size={64} />,
      color: "from-green-300 to-emerald-400",
      description: "Sing your favorite songs!",
      href: "/kids/sing-along",
    },
    {
      name: "Dance Party",
      emoji: <NanoIcon type="dress" size={64} />,
      color: "from-blue-300 to-cyan-400",
      description: "Dance and have fun!",
      href: "/kids/dance-party",
    },
    {
      name: "Art & Crafts",
      emoji: <NanoIcon type="sparkle" size={64} />,
      color: "from-red-300 to-pink-400",
      description: "Create amazing art!",
      href: "/kids/art-crafts",
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 opacity-30 animate-bounce" style={{ animationDuration: "2s" }}>
          <NanoIcon type="sparkle" size={72} />
        </div>
        <div className="absolute top-20 right-20 opacity-30 animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.3s" }}>
          <NanoIcon type="star" size={96} />
        </div>
        <div className="absolute bottom-20 left-20 opacity-30 animate-bounce" style={{ animationDuration: "2.2s", animationDelay: "0.6s" }}>
          <NanoIcon type="heart" size={128} />
        </div>
        <div className="absolute bottom-10 right-10 opacity-30 animate-bounce" style={{ animationDuration: "2.8s", animationDelay: "0.9s" }}>
          <NanoIcon type="crown" size={64} />
        </div>
        <div className="absolute top-1/3 left-1/3 opacity-30 animate-bounce" style={{ animationDuration: "2.3s", animationDelay: "1.2s" }}>
          <NanoIcon type="palette" size={48} />
        </div>
        <div className="absolute top-1/2 right-1/4 opacity-30 animate-bounce" style={{ animationDuration: "2.6s", animationDelay: "1.5s" }}>
          <NanoIcon type="music" size={72} />
        </div>
        <div className="absolute bottom-1/3 right-1/3 opacity-30 animate-bounce" style={{ animationDuration: "2.4s", animationDelay: "1.8s" }}>
          <NanoIcon type="mask" size={64} />
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-blue-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-8 pb-6 px-4 sm:px-8 text-center">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="animate-bounce" style={{ animationDuration: "1.5s" }}><NanoIcon type="user" size={64} /></span>
              <h1 className="text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-2xl">
                KIDS!
              </h1>
              <span className="animate-bounce" style={{ animationDuration: "1.5s", animationDelay: "0.3s" }}><NanoIcon type="sparkle" size={64} /></span>
            </div>
            <div className="flex items-center justify-center gap-2 text-4xl sm:text-5xl mb-4">
              <span className="animate-spin" style={{ animationDuration: "3s" }}><NanoIcon type="sparkle" size={48} /></span>
              <span className="text-2xl sm:text-3xl font-bold text-purple-600 drop-shadow-lg">
                Fun Zone
              </span>
              <span className="animate-spin" style={{ animationDuration: "3s", animationDirection: "reverse" }}><NanoIcon type="star" size={48} /></span>
            </div>
            <p className="text-xl sm:text-2xl font-semibold text-purple-700 drop-shadow-md max-w-2xl mx-auto">
              Where fun and learning come together! <span className="inline-flex align-middle"><NanoIcon type="heart" size={24} /></span> <span className="inline-flex align-middle"><NanoIcon type="sparkle" size={24} /></span>
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 px-4 sm:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Activities Grid */}
            <section className="mb-12">
              <h2 className="text-4xl sm:text-5xl font-black text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 drop-shadow-lg">
                <span className="inline-flex align-middle mr-2"><NanoIcon type="game" size={40} /></span> Fun Activities <span className="inline-flex align-middle ml-2"><NanoIcon type="game" size={40} /></span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map((activity, index) => (
                  <Link
                    key={index}
                    href={activity.href}
                    className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${activity.color} p-8 shadow-2xl transform transition-all duration-300 cursor-pointer border-4 border-white block ${hoveredActivity === index ? "scale-110 rotate-2 shadow-3xl" : "hover:scale-105"
                      }`}
                    onMouseEnter={() => setHoveredActivity(index)}
                    onMouseLeave={() => setHoveredActivity(null)}
                  >
                    <div className="text-center space-y-4">
                      <div className="flex justify-center mb-3 animate-bounce" style={{ animationDuration: "2s" }}>
                        {activity.emoji}
                      </div>
                      <h3 className="text-3xl font-black text-white drop-shadow-lg">
                        {activity.name}
                      </h3>
                      <p className="text-white/95 text-base font-semibold drop-shadow-md">
                        {activity.description}
                      </p>
                    </div>
                    {/* Decorative stars */}
                    <div className="absolute top-2 right-2 opacity-50"><NanoIcon type="sparkle" size={24} /></div>
                    <div className="absolute bottom-2 left-2 opacity-50"><NanoIcon type="star" size={24} /></div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Fun Quote Section */}
            <section className="mb-12 text-center">
              <div className="bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 rounded-3xl p-8 sm:p-12 border-4 border-white shadow-2xl">
                <p className="text-3xl sm:text-4xl font-black text-white drop-shadow-lg mb-4">
                  "Play is the highest form of research!" <span className="inline-flex align-middle"><NanoIcon type="palette" size={32} /></span>
                </p>
                <div className="flex items-center justify-center gap-4 text-5xl">
                  <span className="animate-bounce" style={{ animationDuration: "1.5s" }}><NanoIcon type="heart" size={48} /></span>
                  <span className="animate-bounce" style={{ animationDuration: "1.5s", animationDelay: "0.2s" }}><NanoIcon type="music" size={48} /></span>
                  <span className="animate-bounce" style={{ animationDuration: "1.5s", animationDelay: "0.4s" }}><NanoIcon type="mask" size={48} /></span>
                  <span className="animate-bounce" style={{ animationDuration: "1.5s", animationDelay: "0.6s" }}><NanoIcon type="palette" size={48} /></span>
                </div>
              </div>
            </section>

            {/* Fun Facts Section */}
            <section className="mb-12">
              <h2 className="text-4xl sm:text-5xl font-black text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg">
                <span className="inline-flex align-middle mr-2"><NanoIcon type="star" size={40} /></span> Cool Facts for Kids <span className="inline-flex align-middle ml-2"><NanoIcon type="star" size={40} /></span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-yellow-300 to-orange-300 rounded-3xl p-6 border-4 border-white shadow-xl">
                  <div className="flex justify-center mb-3"><NanoIcon type="crown" size={48} /></div>
                  <h3 className="text-2xl font-black text-white mb-2 drop-shadow-lg">Unicorns!</h3>
                  <p className="text-white/95 text-base font-semibold drop-shadow-md">
                    Unicorns are magical creatures that love rainbows and sparkles! <span className="inline-flex align-middle"><NanoIcon type="sparkle" size={16} /></span>
                  </p>
                </div>
                <div className="bg-gradient-to-br from-pink-300 to-rose-300 rounded-3xl p-6 border-4 border-white shadow-xl">
                  <div className="flex justify-center mb-3"><NanoIcon type="sparkle" size={48} /></div>
                  <h3 className="text-2xl font-black text-white mb-2 drop-shadow-lg">Rainbows!</h3>
                  <p className="text-white/95 text-base font-semibold drop-shadow-md">
                    Rainbows have 7 beautiful colors: red, orange, yellow, green, blue, indigo, and violet!
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-300 to-cyan-300 rounded-3xl p-6 border-4 border-white shadow-xl">
                  <div className="flex justify-center mb-3"><NanoIcon type="star" size={48} /></div>
                  <h3 className="text-2xl font-black text-white mb-2 drop-shadow-lg">Stars!</h3>
                  <p className="text-white/95 text-base font-semibold drop-shadow-md">
                    There are more stars in the sky than grains of sand on all the beaches! <span className="inline-flex align-middle"><NanoIcon type="star" size={16} /></span>
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-300 to-indigo-300 rounded-3xl p-6 border-4 border-white shadow-xl">
                  <div className="flex justify-center mb-3"><NanoIcon type="heart" size={48} /></div>
                  <h3 className="text-2xl font-black text-white mb-2 drop-shadow-lg">Balloons!</h3>
                  <p className="text-white/95 text-base font-semibold drop-shadow-md">
                    Balloons can float because they're filled with helium, which is lighter than air!
                  </p>
                </div>
              </div>
            </section>

            {/* Colorful Banner */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 rounded-3xl p-6 border-4 border-white shadow-2xl text-center">
                <p className="text-2xl sm:text-3xl font-black text-white drop-shadow-lg flex items-center justify-center gap-2">
                  <NanoIcon type="sparkle" size={32} /> Always remember: You are AMAZING! <NanoIcon type="sparkle" size={32} />
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative z-20 pb-8 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/home"
              className="rounded-full border-4 border-white bg-gradient-to-r from-pink-400 to-purple-400 px-8 py-4 font-black text-white text-lg shadow-2xl transition-all hover:scale-110 hover:shadow-3xl hover:from-pink-500 hover:to-purple-500"
            >
              <span className="flex items-center gap-2"><NanoIcon type="star" size={24} /> Back to Home</span>
            </Link>
            <Link
              href="/"
              className="rounded-full border-4 border-white bg-gradient-to-r from-blue-400 to-cyan-400 px-8 py-4 font-black text-white text-lg shadow-2xl transition-all hover:scale-110 hover:shadow-3xl hover:from-blue-500 hover:to-cyan-500"
            >
              <span className="flex items-center gap-2"><NanoIcon type="phone" size={24} /> Phone Splash</span>
            </Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
