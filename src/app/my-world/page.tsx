"use client";

import Link from "next/link";

export default function MyWorldPage() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-gradient-to-b from-pink-100 via-pink-50 to-white">
      <div className="h-full w-full flex flex-col">
        {/* Header Navigation */}
        <header className="flex-shrink-0 p-2 md:p-4">
          <nav className="flex gap-2 flex-wrap justify-center">
            <Link
              href="/home"
              className="px-3 py-1 md:px-4 md:py-2 bg-pink-300 border-2 border-black rounded-full text-xs text-black shadow-md hover:shadow-lg transition font-bold"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="px-3 py-1 md:px-4 md:py-2 bg-pink-300 border-2 border-black rounded-full text-xs text-black shadow-md hover:shadow-lg transition font-bold"
            >
              Blog
            </Link>
            <Link
              href="/profile"
              className="px-3 py-1 md:px-4 md:py-2 bg-pink-300 border-2 border-black rounded-full text-xs text-black shadow-md hover:shadow-lg transition font-bold"
            >
              Profile
            </Link>
            <Link
              href="/social-club"
              className="px-3 py-1 md:px-4 md:py-2 bg-pink-300 border-2 border-black rounded-full text-xs text-black shadow-md hover:shadow-lg transition font-bold"
            >
              Social club
            </Link>
          </nav>
        </header>

        {/* Main Three-Column Layout */}
        <div className="flex flex-col md:flex-row gap-0 relative flex-1 overflow-hidden">
          {/* LEFT COLUMN - Magazine Cover Style */}
          <div className="flex-1 relative bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 p-2 md:p-6 lg:p-8 overflow-auto" style={{
            backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,182,193,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,192,203,0.2) 0%, transparent 50%)',
            boxShadow: 'inset 0 0 100px rgba(255,182,193,0.1)'
          }}>
            {/* Magazine Title - "Seventeen" Style */}
            <div className="relative mb-6">
              <h1 
                className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600"
                style={{
                  textShadow: '4px 4px 0px rgba(0,0,0,0.2), 0 0 20px rgba(255,182,193,0.5), 0 0 40px rgba(255,182,193,0.3)',
                  fontFamily: 'Arial Black, sans-serif',
                  WebkitTextStroke: '2px rgba(255,255,255,0.8)',
                  filter: 'drop-shadow(0 0 10px rgba(255,182,193,0.6))'
                }}
              >
                SEVENTEEN
              </h1>
              <div className="absolute -top-2 -right-4 text-3xl animate-pulse">✨</div>
            </div>

            {/* Stickers Layer */}
            <div className="absolute top-20 right-8 text-4xl transform rotate-12">💖</div>
            <div className="absolute top-32 left-4 text-3xl transform -rotate-12">⭐</div>
            <div className="absolute top-48 right-12 text-2xl transform rotate-6">💕</div>
            <div className="absolute bottom-40 left-8 text-3xl transform rotate-12">✨</div>

            {/* ID Badge Section */}
            <div className="relative bg-white border-3 border-black rounded-lg p-4 mb-6 shadow-lg transform -rotate-2" style={{
              boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
              borderWidth: '3px'
            }}>
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-black text-black">KISSTELL PASS</div>
                <div className="text-xs text-gray-600">ID #2024</div>
              </div>
              <div className="border-t-2 border-dashed border-gray-400 my-2"></div>
              <div className="space-y-1 text-xs mb-2">
                <div className="flex justify-between">
                  <span className="font-bold">Name:</span>
                  <span className="text-gray-700">Anahely</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Birth:</span>
                  <span className="text-gray-700">2003</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Height:</span>
                  <span className="text-gray-700">5&apos;4&quot;</span>
                </div>
              </div>
              <div className="bg-gray-200 h-8 border border-black rounded flex items-center justify-center mb-2">
                <div className="text-xs font-mono text-gray-600">||| || || ||| || |||</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-black mb-1">SIGN</div>
                <div className="border-b-2 border-black w-24 mx-auto"></div>
              </div>
            </div>

            {/* Cutout Text - "STEAL ANAHELY'S CLOSET" */}
            <div className="relative mb-6">
              <div 
                className="text-3xl font-black text-white inline-block px-4 py-2 transform rotate-2"
                style={{
                  textShadow: '3px 3px 0px rgba(0,0,0,0.8), 0 0 10px rgba(255,182,193,0.5)',
                  background: 'linear-gradient(135deg, #ff69b4, #ff1493)',
                  clipPath: 'polygon(0 0, 95% 0, 100% 10%, 100% 90%, 95% 100%, 0 100%)',
                  fontFamily: 'Arial Black, sans-serif',
                  filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,0.3))'
                }}
              >
                ⭐ STEAL ANAHELY&apos;S CLOSET ⭐
              </div>
            </div>

            {/* Polaroid Frame */}
            <div className="relative bg-white p-3 shadow-2xl transform rotate-1 mb-4 inline-block" style={{
              boxShadow: '0 10px 30px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,255,255,0.3)',
              border: '8px solid white'
            }}>
              <div className="bg-gray-200 border-2 border-black w-48 h-64 flex items-center justify-center text-5xl">
                👗
              </div>
              <div className="mt-2 text-xs text-center text-gray-700 font-bold">Anahely&apos;s Style ✨</div>
            </div>

            {/* Mini Icons */}
            <div className="absolute bottom-20 right-16 flex flex-col gap-2">
              <div className="text-2xl transform rotate-12">📷</div>
              <div className="text-xl transform -rotate-6">💄</div>
              <div className="text-lg transform rotate-12">✨</div>
            </div>

            {/* "WHAT'S IN ANAHELY'S BAG?" Caption */}
            <div className="absolute bottom-8 left-4">
              <div 
                className="text-xl font-bold text-black transform -rotate-1"
                style={{
                  textShadow: '2px 2px 0px rgba(255,255,255,0.8), 0 0 10px rgba(255,182,193,0.5)',
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic'
                }}
              >
                WHAT&apos;S IN ANAHELY&apos;S BAG?
              </div>
            </div>
          </div>

          {/* CENTER - Denim Strip */}
          <div 
            className="relative flex-shrink-0 hidden md:block h-full"
            style={{
              backgroundImage: 'url(/denim-strip.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '120px',
              boxShadow: 'inset -2px 0 10px rgba(0,0,0,0.3), inset 2px 0 10px rgba(0,0,0,0.3)'
            }}
          >
            {/* Pink Stitching Lines */}
            <div className="absolute top-0 left-0 bottom-0 w-1 border-l-2 border-dashed border-pink-300 opacity-70"></div>
            <div className="absolute top-0 right-0 bottom-0 w-1 border-r-2 border-dashed border-pink-300 opacity-70"></div>
            
            {/* Optional Dark Overlay on Edges */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.1) 100%)'
            }}></div>
          </div>
          
          {/* Mobile Denim Strip - Horizontal */}
          <div 
            className="relative w-full h-16 md:hidden my-4"
            style={{
              backgroundImage: 'url(/denim-strip.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: 'inset 0 -2px 10px rgba(0,0,0,0.3), inset 0 2px 10px rgba(0,0,0,0.3)'
            }}
          >
            {/* Pink Stitching Lines - Horizontal */}
            <div className="absolute top-0 left-0 right-0 h-1 border-t-2 border-dashed border-pink-300 opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 border-b-2 border-dashed border-pink-300 opacity-70"></div>
          </div>

          {/* RIGHT COLUMN - "What's In Her Bag?" Spread */}
          <div className="flex-1 relative bg-gradient-to-br from-pink-100 via-pink-50 to-white p-2 md:p-4 lg:p-6 overflow-auto" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,182,193,0.2) 0%, transparent 70%)',
            boxShadow: 'inset 0 0 100px rgba(255,182,193,0.1)'
          }}>
            {/* Header Text */}
            <div className="mb-6 relative">
              <h2 
                className="text-3xl font-bold text-pink-600 mb-2"
                style={{
                  fontFamily: 'Brush Script MT, cursive',
                  textShadow: '2px 2px 0px rgba(255,255,255,0.8), 0 0 15px rgba(255,182,193,0.4)',
                  transform: 'rotate(-1deg)'
                }}
              >
                What&apos;s in Anahely&apos;s bag?
              </h2>
              
              {/* Sparkles around title */}
              <div className="absolute -top-2 -right-2 text-xl">✨</div>
              <div className="absolute top-4 -left-2 text-lg">⭐</div>
            </div>

            {/* Sub-Header Labels */}
            <div className="space-y-3 mb-6">
              <div className="bg-yellow-200 border-2 border-black px-3 py-1 rounded-full inline-block transform -rotate-1">
                <span className="text-xs font-black text-black">girl power! 💪</span>
              </div>
              <div className="block mt-2">
                <div className="bg-pink-200 border-2 border-black px-3 py-1 rounded-lg inline-block transform rotate-1">
                  <span className="text-xs font-bold text-black">Anahely&apos;s fav song: Kiss & Tell 🎵</span>
                </div>
              </div>
              <div className="block mt-2">
                <div className="bg-purple-200 border-2 border-black px-2 py-1 rounded-full inline-block transform -rotate-1">
                  <span className="text-xs font-bold text-black">bubble gum lip gloss 💋</span>
                </div>
              </div>
            </div>

            {/* Stickers & Icons */}
            <div className="relative mb-6">
              <div className="absolute top-0 right-0 text-3xl transform rotate-12">💄</div>
              <div className="absolute top-8 left-0 text-2xl transform -rotate-6">⭐</div>
              <div className="absolute top-16 right-4 text-xl transform rotate-12">💖</div>
              <div className="absolute top-24 left-8 text-2xl transform -rotate-12">✨</div>
            </div>

            {/* Fashion Items Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Sunglasses */}
              <div className="bg-white border-3 border-black rounded-lg p-4 shadow-lg transform rotate-1" style={{
                boxShadow: '0 6px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
                borderWidth: '3px'
              }}>
                <div className="text-4xl mb-2 text-center">🕶️</div>
                <div className="text-xs text-center font-bold text-black">Sunglasses</div>
              </div>

              {/* AirPods */}
              <div className="bg-white border-3 border-black rounded-lg p-4 shadow-lg transform -rotate-1" style={{
                boxShadow: '0 6px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
                borderWidth: '3px'
              }}>
                <div className="text-4xl mb-2 text-center">🎧</div>
                <div className="text-xs text-center font-bold text-black">AirPods</div>
              </div>

              {/* Lip Gloss */}
              <div className="bg-white border-3 border-black rounded-lg p-4 shadow-lg transform rotate-1" style={{
                boxShadow: '0 6px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
                borderWidth: '3px'
              }}>
                <div className="text-4xl mb-2 text-center">💄</div>
                <div className="text-xs text-center font-bold text-black">Lip Gloss</div>
              </div>

              {/* Glitter Stars */}
              <div className="bg-white border-3 border-black rounded-lg p-4 shadow-lg transform -rotate-1" style={{
                boxShadow: '0 6px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
                borderWidth: '3px'
              }}>
                <div className="text-4xl mb-2 text-center">✨</div>
                <div className="text-xs text-center font-bold text-black">Glitter</div>
              </div>
            </div>

            {/* Girl Power Sticker */}
            <div className="bg-pink-300 border-3 border-black rounded-full px-4 py-2 text-center transform rotate-2 shadow-lg" style={{
              boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
              borderWidth: '3px'
            }}>
              <span className="text-sm font-black text-black">💖 GIRL POWER 💖</span>
            </div>

            {/* Pink Arrows */}
            <div className="absolute bottom-8 right-4 text-2xl transform rotate-45">➡️</div>
            <div className="absolute bottom-12 left-4 text-xl transform -rotate-45">⬅️</div>

            {/* Cute Scribbles */}
            <div className="absolute bottom-4 right-8 text-lg transform rotate-12">💕</div>
            <div className="absolute bottom-6 left-8 text-base transform -rotate-12">💗</div>
          </div>
        </div>

        {/* Additional Decorative Elements - Removed to fill page */}
      </div>
    </main>
  );
}
