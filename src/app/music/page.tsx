"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MusicPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentPlaylist, setCurrentPlaylist] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [likedPlaylists, setLikedPlaylists] = useState<Set<number>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>("Playlists");
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % featuredTracks.length);
    setProgress(0);
  };

  useEffect(() => {
    // Add class to body for scrollbar styling
    document.body.classList.add('music-page-active');
    return () => {
      // Remove class when component unmounts
      document.body.classList.remove('music-page-active');
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  // Simulate progress when playing
  useEffect(() => {
    if (isPlaying) {
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            // Auto-play next track when current finishes
            handleNextTrack();
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    } else {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPlaying]);

  const playlists = [
    {
      title: "Chill Vibes",
      artist: "Various Artists",
      description: "Perfect for relaxing and unwinding",
      emoji: "🌙",
      color: "from-blue-500/40 to-purple-500/40",
      hoverColor: "from-blue-500/60 to-purple-500/60",
      tracks: 24,
    },
    {
      title: "Y2K Throwbacks",
      artist: "Classic Hits",
      description: "Nostalgic bops from the 2000s",
      emoji: "💿",
      color: "from-pink-500/40 to-rose-500/40",
      hoverColor: "from-pink-500/60 to-rose-500/60",
      tracks: 18,
    },
    {
      title: "Indie Pop",
      artist: "Emerging Artists",
      description: "Fresh sounds and new discoveries",
      emoji: "🎤",
      color: "from-green-500/40 to-emerald-500/40",
      hoverColor: "from-green-500/60 to-emerald-500/60",
      tracks: 32,
    },
    {
      title: "Electronic Dreams",
      artist: "EDM Mix",
      description: "High energy electronic beats",
      emoji: "⚡",
      color: "from-yellow-500/40 to-orange-500/40",
      hoverColor: "from-yellow-500/60 to-orange-500/60",
      tracks: 28,
    },
    {
      title: "R&B Essentials",
      artist: "Soul Collection",
      description: "Smooth R&B and soul classics",
      emoji: "🎹",
      color: "from-purple-500/40 to-indigo-500/40",
      hoverColor: "from-purple-500/60 to-indigo-500/60",
      tracks: 22,
    },
    {
      title: "Alternative Rock",
      artist: "Rock Playlist",
      description: "Edgy alternative rock tracks",
      emoji: "🎸",
      color: "from-red-500/40 to-pink-500/40",
      hoverColor: "from-red-500/60 to-pink-500/60",
      tracks: 19,
    },
  ];

  const featuredTracks = [
    { title: "Midnight Dreams", artist: "Luna Echo", duration: "3:42", plays: "1.2M" },
    { title: "Electric Pulse", artist: "Neon Waves", duration: "4:15", plays: "890K" },
    { title: "Starlight Serenade", artist: "Cosmic Vibes", duration: "3:28", plays: "2.1M" },
    { title: "Neon Nights", artist: "Synth Dreams", duration: "4:02", plays: "1.5M" },
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePlayTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
    setProgress(0);
  };

  const handlePreviousTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + featuredTracks.length) % featuredTracks.length);
    setProgress(0);
  };

  const handlePlayPlaylist = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPlaylist(index);
    setIsPlaying(true);
    setProgress(0);
    // Show notification
    alert(`🎵 Now playing: ${playlists[index].title}`);
  };

  const handleToggleLike = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPlaylists((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handlePlaylistClick = (index: number) => {
    setSelectedPlaylist(index);
    setShowPlaylistModal(true);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    // Show different content based on category
    const messages: Record<string, string> = {
      "Playlists": "📚 Showing all playlists",
      "Favorites": "⭐ Showing your favorite tracks",
      "Hot Picks": "🔥 Showing trending tracks",
      "Discover": "🎶 Discovering new music"
    };
    alert(messages[category] || "🎵 Loading...");
  };

  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* Fixed Background - No Parallax */}
      <div 
        ref={backgroundRef}
        className="fixed inset-0 z-0"
      >
        <Image
          src="/music-background.jpg"
          alt="Music background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 animate-pulse"></div>
      </div>

      {/* Floating animated elements */}
      <div className="fixed inset-0 z-5 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              animationName: 'float',
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        {/* Enhanced Header with animation */}
        <header className="mb-16 text-center">
          <div className="mb-6 flex justify-center transform transition-all duration-500 hover:scale-105">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-blue-500/50 blur-2xl rounded-full animate-pulse"></div>
              <Image
                src="/world-header.png"
                alt="Music header"
                width={700}
                height={250}
                className="h-auto w-full max-w-5xl drop-shadow-2xl relative z-10"
                priority
              />
            </div>
          </div>
          <p className="mx-auto max-w-2xl text-xl text-white/90 sm:text-2xl font-light tracking-wide">
            🎵 My favorite tracks, playlists, and music recommendations 🎵
          </p>
        </header>

        {/* Enhanced Navigation */}
        <nav className="mb-16 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/home"
            className="group relative rounded-full border-2 border-white/50 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-md transition-all hover:border-white hover:bg-white/20 hover:scale-110 hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              ← Back to Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link
            href="/"
            className="group relative rounded-full border-2 border-white/50 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-md transition-all hover:border-white hover:bg-white/20 hover:scale-110 hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">Phone Splash</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
        </nav>

        {/* Mini Music Player */}
        <div className="mb-16 mx-auto max-w-2xl">
          <div className="relative rounded-3xl border-4 border-white/30 bg-gradient-to-br from-white/20 via-white/10 to-white/5 p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform hover:shadow-2xl"
                  >
                    {isPlaying ? "⏸" : "▶"}
                  </button>
                  <div>
                    <h3 className="text-xl font-bold text-white">Now Playing</h3>
                    <p className="text-white/70">{featuredTracks[currentTrack]?.title}</p>
                    <p className="text-sm text-white/60">{featuredTracks[currentTrack]?.artist}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/60">{featuredTracks[currentTrack]?.duration}</p>
                  <p className="text-xs text-white/50">{featuredTracks[currentTrack]?.plays} plays</p>
                </div>
              </div>
              {/* Waveform visualization */}
              <div className="flex items-end justify-center gap-1 h-12 mb-4">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full"
                    style={
                      isPlaying
                        ? {
                            height: `${Math.random() * 60 + 20}%`,
                            animationName: 'wave',
                            animationDuration: `${0.5 + Math.random() * 0.5}s`,
                            animationIterationCount: 'infinite',
                            animationTimingFunction: 'ease-in-out',
                            animationDelay: `${i * 0.1}s`,
                          }
                        : {
                            height: `${Math.random() * 60 + 20}%`,
                          }
                    }
                  />
                ))}
              </div>
              {/* Progress bar */}
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              {/* Player controls */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={handlePreviousTrack}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Previous track"
                >
                  ⏮
                </button>
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl hover:scale-110 transition-transform shadow-lg"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? "⏸" : "▶"}
                </button>
                <button
                  onClick={handleNextTrack}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Next track"
                >
                  ⏭
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Tracks Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-4xl font-bold text-white drop-shadow-2xl sm:text-5xl">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              ⭐ Featured Tracks ⭐
            </span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {featuredTracks.map((track, index) => (
              <div
                key={index}
                onClick={() => handlePlayTrack(index)}
                className={`group relative cursor-pointer rounded-2xl border-2 p-4 backdrop-blur-md transition-all hover:scale-105 hover:shadow-2xl overflow-hidden ${
                  index === currentTrack 
                    ? "border-purple-400 bg-gradient-to-br from-purple-500/30 to-pink-500/30" 
                    : "border-white/20 bg-gradient-to-br from-white/10 to-white/5 hover:border-white/50"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="mb-3 text-3xl">{index === currentTrack && isPlaying ? "🎵" : "🎶"}</div>
                  <h3 className="mb-1 text-lg font-bold text-white">{track.title}</h3>
                  <p className="mb-2 text-sm text-white/70">{track.artist}</p>
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>{track.duration}</span>
                    <span>{track.plays}</span>
                  </div>
                  {index === currentTrack && isPlaying && (
                    <div className="mt-2 text-xs text-purple-300 font-semibold animate-pulse">Now Playing</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Music Recommendations Grid */}
        <section className="mb-16">
          <h2 className="mb-10 text-center text-4xl font-bold text-white drop-shadow-2xl sm:text-5xl">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              ✨ Recommendations ✨
            </span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {playlists.map((playlist, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handlePlaylistClick(index)}
                className={`group relative overflow-hidden rounded-3xl border-4 p-8 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  currentPlaylist === index 
                    ? "border-purple-400 bg-gradient-to-br from-purple-500/20 to-pink-500/20" 
                    : "border-white/30 bg-gradient-to-br from-white/20 to-white/10 hover:border-white/70"
                }`}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${playlist.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Glow effect */}
                {hoveredCard === index && (
                  <div className={`absolute -inset-1 bg-gradient-to-br ${playlist.hoverColor} blur-xl opacity-50 animate-pulse`}></div>
                )}

                <div className="relative z-10">
                  {/* Animated emoji */}
                  <div className="mb-6 text-6xl transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                    {playlist.emoji}
                  </div>
                  
                  <h3 className="mb-3 text-2xl font-bold text-white drop-shadow-lg">{playlist.title}</h3>
                  <p className="mb-2 text-base font-semibold text-white/90">{playlist.artist}</p>
                  <p className="mb-4 text-sm text-white/80 leading-relaxed">{playlist.description}</p>
                  
                  {/* Track count */}
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse shadow-lg"></div>
                    <span className="text-xs font-medium text-white/70">{playlist.tracks} tracks</span>
                  </div>

                  {/* Play button */}
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={(e) => handlePlayPlaylist(index, e)}
                      className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm hover:scale-110 transition-transform shadow-lg hover:shadow-2xl"
                    >
                      {currentPlaylist === index && isPlaying ? "Playing →" : "Play →"}
                    </button>
                    <button
                      onClick={(e) => handleToggleLike(index, e)}
                      className={`transition-colors ${
                        likedPlaylists.has(index) 
                          ? "text-pink-400" 
                          : "text-white/60 group-hover:text-white"
                      }`}
                      aria-label={likedPlaylists.has(index) ? "Unlike playlist" : "Like playlist"}
                    >
                      <svg className="w-6 h-6" fill={likedPlaylists.has(index) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  {currentPlaylist === index && isPlaying && (
                    <div className="mt-3 text-xs text-purple-300 font-semibold animate-pulse text-center">
                      🎵 Now Playing
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Featured Section */}
        <section className="mb-16 rounded-3xl border-4 border-white/40 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 p-12 backdrop-blur-xl shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10 text-center">
            <div className="mb-6 text-7xl transform animate-bounce">🎧</div>
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl drop-shadow-2xl">
              Currently Listening
            </h2>
            <p className="mb-8 text-xl text-white/90 max-w-2xl mx-auto">
              Check back soon for my current favorite tracks and what I&apos;m vibing to!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["🎵 Playlists", "⭐ Favorites", "🔥 Hot Picks", "🎶 Discover"].map((item, index) => {
                const category = item.split(" ")[1]; // Extract category name
                const isActive = activeCategory === category;
                return (
                  <button
                    key={index}
                    onClick={() => handleCategoryClick(category)}
                    className={`group rounded-full px-8 py-4 backdrop-blur-sm border-2 hover:scale-110 transition-all cursor-pointer shadow-lg hover:shadow-2xl ${
                      isActive
                        ? "bg-gradient-to-r from-purple-500/40 to-pink-500/40 border-purple-400"
                        : "bg-white/20 border-white/30 hover:border-white/60 hover:bg-white/30"
                    }`}
                  >
                    <span className="text-base font-semibold text-white">{item}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Decorative Elements */}
        <div className="flex items-center justify-center gap-6 text-5xl mb-12">
          {["🎵", "🎶", "🎤", "🎧", "🎸", "🎹"].map((emoji, index) => (
            <span
              key={index}
              className="animate-bounce transform hover:scale-125 transition-transform cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>

      {/* Playlist Modal */}
      {showPlaylistModal && selectedPlaylist !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowPlaylistModal(false)}
        >
          <div 
            className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border-4 border-purple-500/50 p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto backdrop-blur-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPlaylistModal(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white text-xl transition-all"
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{playlists[selectedPlaylist].emoji}</div>
              <h2 className="text-3xl font-bold text-white mb-2">{playlists[selectedPlaylist].title}</h2>
              <p className="text-white/70">{playlists[selectedPlaylist].artist}</p>
              <p className="text-sm text-white/60 mt-2">{playlists[selectedPlaylist].tracks} tracks</p>
            </div>
            <div className="space-y-2 mb-6">
              {Array.from({ length: playlists[selectedPlaylist].tracks }, (_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
                  onClick={() => {
                    handlePlayTrack(0); // Play first featured track when clicking a playlist track
                    setIsPlaying(true);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-white/60 text-sm">{i + 1}</span>
                    <div>
                      <p className="text-white font-semibold">Track {i + 1}</p>
                      <p className="text-white/60 text-sm">{playlists[selectedPlaylist].artist}</p>
                    </div>
                  </div>
                  <span className="text-white/60 text-sm">3:{(Math.random() * 30 + 20).toFixed(0).padStart(2, '0')}</span>
                </div>
              ))}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePlayPlaylist(selectedPlaylist, e);
                setShowPlaylistModal(false);
              }}
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Play All →
            </button>
          </div>
        </div>
      )}

      {/* CSS Animations and Scrollbar Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-30px) translateX(20px);
          }
          66% {
            transform: translateY(30px) translateX(-20px);
          }
        }
        @keyframes wave {
          0%, 100% {
            height: 20%;
          }
          50% {
            height: 100%;
          }
        }
        /* Custom Scrollbar for Music Page Only */
        body.music-page-active {
          scrollbar-width: thin;
          scrollbar-color: rgba(168, 85, 247, 0.8) rgba(0, 0, 0, 0.3);
        }
        body.music-page-active::-webkit-scrollbar {
          width: 12px;
        }
        body.music-page-active::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }
        body.music-page-active::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.8), rgba(59, 130, 246, 0.8));
          border-radius: 10px;
          border: 2px solid rgba(0, 0, 0, 0.2);
        }
        body.music-page-active::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgba(168, 85, 247, 1), rgba(236, 72, 153, 1), rgba(59, 130, 246, 1));
        }
      `}</style>
    </main>
  );
}
