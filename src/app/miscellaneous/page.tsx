"use client";

import Link from "next/link";
import { useState } from "react";

export default function MiscellaneousPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl animate-bounce" style={{ animationDuration: '3s' }}>✨</div>
        <div className="absolute top-32 right-20 text-5xl animate-pulse" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute bottom-20 left-1/4 text-4xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>💫</div>
        <div className="absolute top-1/2 right-10 text-5xl animate-pulse" style={{ animationDelay: '1.5s' }}>🌟</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with Mixed Aesthetics */}
        <header className="text-center mb-12 relative">
          {/* Y2K Bubble Text */}
          <h1 
            className="text-6xl md:text-8xl font-black mb-4 relative inline-block"
            style={{
              textShadow: '4px 4px 0px #ff69b4, 8px 8px 0px #ff1493, 12px 12px 0px rgba(0,0,0,0.3)',
              fontFamily: 'Arial Black, sans-serif',
              background: 'linear-gradient(135deg, #ff69b4, #ff1493, #ff69b4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(255,105,180,0.5))'
            }}
          >
            MISCELLANEOUS
          </h1>
          
          {/* Academic Quote */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-white/80 backdrop-blur-sm border-4 border-amber-600 rounded-lg p-6 shadow-2xl transform rotate-1" style={{
              boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)'
            }}>
              <p className="text-lg italic text-gray-800 font-serif">
                &quot;In the realm of chaos, beauty finds its form.&quot;
              </p>
              <p className="text-sm text-gray-600 mt-2">— Anonymous Scholar</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/home"
              className="px-5 py-2 bg-gradient-to-r from-pink-400 to-purple-500 border-3 border-black rounded-full text-sm text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              style={{ borderWidth: '3px' }}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="px-5 py-2 bg-gradient-to-r from-amber-400 to-orange-500 border-3 border-black rounded-full text-sm text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              style={{ borderWidth: '3px' }}
            >
              Blog
            </Link>
            <Link
              href="/portfolio"
              className="px-5 py-2 bg-gradient-to-r from-blue-400 to-cyan-500 border-3 border-black rounded-full text-sm text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              style={{ borderWidth: '3px' }}
            >
              Portfolio
            </Link>
          </nav>
        </header>

        {/* Mixed Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Y2K Aesthetic */}
          <div 
            className="relative bg-gradient-to-br from-pink-300 via-purple-300 to-pink-400 border-4 border-black rounded-2xl p-6 shadow-2xl transform transition-all hover:scale-105 hover:rotate-1"
            style={{
              boxShadow: '0 15px 35px rgba(255,105,180,0.4), inset 0 1px 0 rgba(255,255,255,0.5)'
            }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute -top-3 -right-3 text-4xl animate-pulse">💖</div>
            <h2 className="text-2xl font-black text-white mb-3" style={{
              textShadow: '3px 3px 0px rgba(0,0,0,0.3)',
              fontFamily: 'Arial Black, sans-serif'
            }}>
              Y2K VIBES
            </h2>
            <p className="text-gray-800 font-semibold mb-4">
              Pink glitter, bubble text, and all things early 2000s! ✨
            </p>
            <div className="flex gap-2 text-2xl">
              <span className="animate-bounce">💕</span>
              <span className="animate-pulse">⭐</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
            </div>
          </div>

          {/* Card 2: Academia Aesthetic */}
          <div 
            className="relative bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100 border-4 border-amber-800 rounded-2xl p-6 shadow-2xl transform transition-all hover:scale-105 hover:-rotate-1"
            style={{
              boxShadow: '0 15px 35px rgba(139,69,19,0.3), inset 0 1px 0 rgba(255,255,255,0.5)'
            }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute -top-3 -left-3 text-4xl">📚</div>
            <h2 className="text-2xl font-bold text-amber-900 mb-3 font-serif">
              Academia
            </h2>
            <p className="text-amber-800 mb-4 leading-relaxed">
              Classic literature, vintage books, and scholarly pursuits. Knowledge is power.
            </p>
            <div className="text-amber-700 text-sm italic">
              &quot;The more you know, the more you realize you don't know.&quot;
            </div>
          </div>

          {/* Card 3: Luxury Aesthetic */}
          <div 
            className="relative bg-gradient-to-br from-yellow-200 via-yellow-100 to-amber-200 border-4 border-yellow-600 rounded-2xl p-6 shadow-2xl transform transition-all hover:scale-105 hover:rotate-1"
            style={{
              boxShadow: '0 15px 35px rgba(255,215,0,0.4), inset 0 1px 0 rgba(255,255,255,0.6)',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #d97706 50%, #fbbf24 75%, #fef3c7 100%)',
              backgroundSize: '200% 200%',
              animation: hoveredCard === 3 ? 'luxuryShimmer 3s ease-in-out infinite' : 'none'
            }}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute -top-3 -right-3 text-4xl">👑</div>
            <h2 className="text-2xl font-bold text-black mb-3 font-serif">
              Luxury
            </h2>
            <p className="text-gray-900 mb-4 font-semibold">
              Gold accents, premium textures, and elegant sophistication.
            </p>
            <div className="flex gap-2 text-xl">
              <span>💎</span>
              <span>✨</span>
              <span>⭐</span>
            </div>
          </div>

          {/* Card 4: Random/Chaos Aesthetic */}
          <div 
            className="relative bg-gradient-to-br from-green-300 via-blue-300 to-purple-300 border-4 border-black rounded-2xl p-6 shadow-2xl transform transition-all hover:scale-105 hover:-rotate-2"
            style={{
              boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
              clipPath: 'polygon(0 0, 95% 0, 100% 10%, 100% 90%, 95% 100%, 0 100%)'
            }}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-2 right-2 text-3xl transform rotate-12">🎲</div>
            <div className="absolute bottom-2 left-2 text-2xl transform -rotate-12">🎪</div>
            <h2 className="text-2xl font-black text-white mb-3" style={{
              textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
              transform: 'rotate(-1deg)'
            }}>
              RANDOM CHAOS
            </h2>
            <p className="text-gray-900 font-bold mb-4" style={{ transform: 'rotate(1deg)' }}>
              Organized chaos, unexpected combinations, and delightful randomness!
            </p>
            <div className="flex gap-1 text-xl">
              <span className="transform rotate-12">🎨</span>
              <span className="transform -rotate-6">🌈</span>
              <span className="transform rotate-12">🎭</span>
              <span className="transform -rotate-6">🎪</span>
            </div>
          </div>

          {/* Card 5: Mixed Media Collage */}
          <div 
            className="relative bg-white border-4 border-black rounded-2xl p-6 shadow-2xl transform transition-all hover:scale-105"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,182,193,0.1) 10px, rgba(255,182,193,0.1) 20px)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
            }}
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute -top-2 -left-2 bg-yellow-300 border-2 border-black px-3 py-1 rounded-full transform -rotate-12 text-xs font-black">
              NEW!
            </div>
            <h2 className="text-2xl font-black text-black mb-3" style={{
              fontFamily: 'Arial Black, sans-serif',
              transform: 'rotate(1deg)'
            }}>
              COLLAGE
            </h2>
            <p className="text-gray-800 mb-4">
              A mix of everything - stickers, photos, memories, and dreams all in one place.
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-pink-200 border-2 border-black rounded p-2 text-center text-2xl">📸</div>
              <div className="bg-blue-200 border-2 border-black rounded p-2 text-center text-2xl">🎨</div>
              <div className="bg-purple-200 border-2 border-black rounded p-2 text-center text-2xl">💌</div>
            </div>
          </div>

          {/* Card 6: Digital Aesthetic */}
          <div 
            className="relative bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 border-4 border-black rounded-2xl p-6 shadow-2xl transform transition-all hover:scale-105 hover:rotate-1"
            style={{
              boxShadow: '0 15px 35px rgba(0,150,255,0.4), 0 0 30px rgba(0,150,255,0.2)',
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)'
            }}
            onMouseEnter={() => setHoveredCard(6)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-2 right-2 text-3xl animate-pulse">💻</div>
            <h2 className="text-2xl font-black text-white mb-3" style={{
              textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
              fontFamily: 'monospace'
            }}>
              DIGITAL
            </h2>
            <p className="text-white/90 mb-4 font-semibold">
              Cyber aesthetics, neon glows, and futuristic vibes.
            </p>
            <div className="flex gap-2">
              <div className="bg-black/30 border border-white/50 rounded px-3 py-1 text-xs font-mono text-white">
                01001000 01101001
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements Section */}
        <div className="relative mb-12">
          <div className="bg-white/90 backdrop-blur-md border-4 border-black rounded-3xl p-8 shadow-2xl">
            <h2 className="text-4xl font-black text-center mb-8" style={{
              fontFamily: 'Arial Black, sans-serif',
              background: 'linear-gradient(135deg, #ff69b4, #ff1493, #8b5cf6, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              A COLLECTION OF EVERYTHING
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Sticker-style items */}
              <div className="bg-pink-200 border-3 border-black rounded-full p-4 text-center transform rotate-6 hover:rotate-12 transition-transform">
                <div className="text-3xl mb-2">🎀</div>
                <div className="text-xs font-black">CUTE</div>
              </div>
              <div className="bg-yellow-200 border-3 border-black rounded-full p-4 text-center transform -rotate-6 hover:-rotate-12 transition-transform">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-xs font-black">STAR</div>
              </div>
              <div className="bg-blue-200 border-3 border-black rounded-full p-4 text-center transform rotate-6 hover:rotate-12 transition-transform">
                <div className="text-3xl mb-2">💎</div>
                <div className="text-xs font-black">GEM</div>
              </div>
              <div className="bg-purple-200 border-3 border-black rounded-full p-4 text-center transform -rotate-6 hover:-rotate-12 transition-transform">
                <div className="text-3xl mb-2">🌈</div>
                <div className="text-xs font-black">RAINBOW</div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Quote Section with Luxury Frame */}
        <div className="relative mb-12">
          <div className="bg-gradient-to-br from-amber-100 to-amber-50 border-4 border-amber-800 rounded-2xl p-8 shadow-2xl relative" style={{
            boxShadow: '0 20px 40px rgba(139,69,19,0.4), inset 0 1px 0 rgba(255,255,255,0.6)'
          }}>
            {/* Ornate corners */}
            <div className="absolute top-4 left-4 text-amber-700 text-2xl">✦</div>
            <div className="absolute top-4 right-4 text-amber-700 text-2xl">✦</div>
            <div className="absolute bottom-4 left-4 text-amber-700 text-2xl">✦</div>
            <div className="absolute bottom-4 right-4 text-amber-700 text-2xl">✦</div>
            
            <div className="text-center">
              <h3 className="text-3xl font-serif text-amber-900 mb-4 italic">
                &quot;In diversity lies beauty, in chaos lies creativity.&quot;
              </h3>
              <p className="text-amber-700 font-semibold">— The Miscellaneous Collection</p>
            </div>
          </div>
        </div>

        {/* Y2K Sticker Wall */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
          {['💖', '⭐', '✨', '💕', '🌟', '💫', '🎀', '🌈', '💎', '👑', '🎨', '🎪'].map((emoji, index) => (
            <div
              key={index}
              className="bg-white border-3 border-black rounded-lg p-4 text-center text-4xl transform hover:scale-110 hover:rotate-12 transition-all cursor-pointer"
              style={{
                borderWidth: '3px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/home"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 border-4 border-black rounded-full text-white font-black text-lg shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110"
            style={{
              textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
              boxShadow: '0 10px 30px rgba(255,105,180,0.5)'
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes luxuryShimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </main>
  );
}
