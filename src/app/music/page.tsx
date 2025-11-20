"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MusicPage() {
  const [scrollY, setScrollY] = useState(0);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen text-white">
      {/* Parallax Background Image */}
      <div 
        ref={backgroundRef}
        className="fixed inset-0 z-0 h-[200vh]"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="/music-background.jpg"
          alt="Music background"
          fill
          className="object-cover object-top"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full border-4 border-white/50 bg-white/20 px-6 py-2 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-white">Y2K Vibes</p>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-6xl font-black text-transparent drop-shadow-2xl sm:text-7xl md:text-8xl">
            MUSIC
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl">
            🎵 My favorite tracks, playlists, and music recommendations 🎵
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/home"
            className="rounded-full border-2 border-white/50 bg-white/20 px-6 py-2 font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/30 hover:scale-105"
          >
            ← Back to Home
          </Link>
          <Link
            href="/"
            className="rounded-full border-2 border-white/50 bg-white/20 px-6 py-2 font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/30 hover:scale-105"
          >
            Phone Splash
          </Link>
        </nav>

        {/* Music Recommendations Grid */}
        <section className="mb-12">
          <h2 className="mb-6 text-center text-3xl font-bold text-white drop-shadow-lg sm:text-4xl">
            ✨ Recommendations ✨
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Chill Vibes",
                artist: "Various Artists",
                description: "Perfect for relaxing and unwinding",
                emoji: "🌙",
              },
              {
                title: "Y2K Throwbacks",
                artist: "Classic Hits",
                description: "Nostalgic bops from the 2000s",
                emoji: "💿",
              },
              {
                title: "Indie Pop",
                artist: "Emerging Artists",
                description: "Fresh sounds and new discoveries",
                emoji: "🎤",
              },
              {
                title: "Electronic Dreams",
                artist: "EDM Mix",
                description: "High energy electronic beats",
                emoji: "⚡",
              },
              {
                title: "R&B Essentials",
                artist: "Soul Collection",
                description: "Smooth R&B and soul classics",
                emoji: "🎹",
              },
              {
                title: "Alternative Rock",
                artist: "Rock Playlist",
                description: "Edgy alternative rock tracks",
                emoji: "🎸",
              },
            ].map((playlist, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border-4 border-white/30 bg-gradient-to-br from-white/20 to-white/10 p-6 backdrop-blur-md transition-all hover:border-white/60 hover:scale-105 hover:shadow-2xl"
              >
                <div className="mb-4 text-5xl">{playlist.emoji}</div>
                <h3 className="mb-2 text-xl font-bold text-white">{playlist.title}</h3>
                <p className="mb-2 text-sm font-semibold text-white/80">{playlist.artist}</p>
                <p className="text-sm text-white/70">{playlist.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-pink-400 animate-pulse"></div>
                  <span className="text-xs font-medium text-white/60">Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Section */}
        <section className="mb-12 rounded-3xl border-4 border-white/40 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-indigo-500/30 p-8 backdrop-blur-md">
          <div className="text-center">
            <div className="mb-4 text-6xl">🎧</div>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Currently Listening</h2>
            <p className="mb-6 text-lg text-white/90">
              Check back soon for my current favorite tracks and what I&apos;m vibing to!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm">
                <span className="text-sm font-semibold text-white">🎵 Playlists</span>
              </div>
              <div className="rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm">
                <span className="text-sm font-semibold text-white">⭐ Favorites</span>
              </div>
              <div className="rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm">
                <span className="text-sm font-semibold text-white">🔥 Hot Picks</span>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Elements */}
        <div className="flex items-center justify-center gap-4 text-4xl">
          <span className="animate-bounce">🎵</span>
          <span className="animate-bounce delay-150">🎶</span>
          <span className="animate-bounce delay-300">🎤</span>
          <span className="animate-bounce delay-500">🎧</span>
          <span className="animate-bounce delay-700">🎸</span>
        </div>
      </div>
    </main>
  );
}

