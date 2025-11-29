"use client";

import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-8 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Page Title - Magazine Style */}
        <div className="text-center mb-8 relative">
          <h1 
            className="text-5xl font-black mb-2"
            style={{
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706, #fbbf24)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '4px 4px 0px rgba(0,0,0,0.5), 0 0 20px rgba(251,191,36,0.5)',
              fontFamily: 'Arial Black, sans-serif',
              letterSpacing: '2px',
              transform: 'rotate(-2deg)'
            }}
          >
            NANA&apos;S PORTFOLIO
          </h1>
          <div className="absolute top-0 right-0 text-4xl animate-bounce" style={{ filter: 'drop-shadow(0 0 10px #fbbf24)' }}>⭐</div>
          <div className="absolute top-4 left-0 text-3xl animate-pulse" style={{ filter: 'drop-shadow(0 0 8px #10b981)' }}>💚</div>
        </div>

        {/* 3x3 Grid of Magazine-Style Panels */}
        <div className="grid grid-cols-3 gap-4">
          {/* Panel 1: Magazine Cover - "Who I Am" */}
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-4 border-[#fbbf24] rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-transform" style={{ transform: 'rotate(-1deg)', boxShadow: '8px 8px 0px 0px rgba(251,191,36,0.3), inset 0 0 30px rgba(251,191,36,0.1)' }}>
            {/* Starburst decoration */}
            <div className="absolute -top-2 -right-2 text-3xl" style={{ filter: 'drop-shadow(0 0 8px #fbbf24)' }}>✨</div>
            <div className="absolute top-2 left-2 text-2xl" style={{ filter: 'drop-shadow(0 0 6px #10b981)' }}>💚</div>
            
            {/* Magazine Cover Header */}
            <div className="mb-4">
              <div className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] border-2 border-black px-3 py-1 inline-block transform -rotate-2 mb-2 shadow-lg">
                <span className="text-xs font-black text-black">COVER STORY</span>
              </div>
              <h2 
                className="text-2xl font-black mb-2"
                style={{
                  background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 15px rgba(251,191,36,0.5)',
                  fontFamily: 'Arial Black, sans-serif'
                }}
              >
                WHO I AM
              </h2>
            </div>
            
            {/* Polaroid-style photo frame */}
            <div className="bg-white border-4 border-black p-2 mb-3 shadow-lg transform rotate-1">
              <div className="bg-gray-200 border-2 border-black h-32 flex items-center justify-center text-4xl">
                📸
              </div>
              <p className="text-xs text-center mt-2 font-bold text-black">me!</p>
            </div>
            
            {/* Speech bubble */}
            <div className="relative bg-white border-2 border-black rounded-lg p-3 mb-2">
              <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
              <div className="absolute -bottom-1 left-5 w-0 h-0 border-l-7 border-r-7 border-t-7 border-transparent border-t-white"></div>
              <p className="text-xs text-black font-bold">hey bestie! 👋</p>
            </div>
            
            <p className="text-xs text-gray-300 leading-relaxed">
              Creative designer, Y2K enthusiast, and lover of all things gold! Welcome to my world ✨
            </p>
          </div>

          {/* Panel 2: Editorial Spread - "My Skills" */}
          <div className="relative bg-gradient-to-br from-gray-800 via-black to-gray-800 border-4 border-[#fbbf24] rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-transform" style={{ transform: 'rotate(1deg)', boxShadow: '8px 8px 0px 0px rgba(251,191,36,0.3), inset 0 0 30px rgba(251,191,36,0.1)' }}>
            {/* Sticker decorations */}
            <div className="absolute top-2 right-2 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] border-2 border-black rounded-full w-12 h-12 flex items-center justify-center text-xl transform rotate-12 shadow-lg">
              ⭐
            </div>
            
            <h2 
              className="text-2xl font-black mb-4"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 15px rgba(251,191,36,0.5)',
                fontFamily: 'Arial Black, sans-serif',
                transform: 'rotate(-2deg)'
              }}
            >
              MY SKILLS
            </h2>
            
            {/* Checklist style */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-white border-2 border-black p-2 rounded">
                <span className="text-lg">✅</span>
                <span className="text-xs font-bold text-black">Web Design</span>
              </div>
              <div className="flex items-center gap-2 bg-white border-2 border-black p-2 rounded">
                <span className="text-lg">✅</span>
                <span className="text-xs font-bold text-black">UI/UX</span>
              </div>
              <div className="flex items-center gap-2 bg-white border-2 border-black p-2 rounded">
                <span className="text-lg">✅</span>
                <span className="text-xs font-bold text-black">Branding</span>
              </div>
              <div className="flex items-center gap-2 bg-white border-2 border-black p-2 rounded">
                <span className="text-lg">✅</span>
                <span className="text-xs font-bold text-black">Illustration</span>
              </div>
            </div>
            
            {/* Rotated text box */}
            <div className="mt-4 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] border-2 border-black p-2 transform rotate-2 shadow-lg">
              <p className="text-xs font-black text-black text-center">100% TALENTED</p>
            </div>
          </div>

          {/* Panel 3: Tutorial Style - "My Services" */}
          <div className="relative bg-gradient-to-br from-black via-gray-900 to-black border-4 border-[#fbbf24] rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-transform" style={{ transform: 'rotate(-1.5deg)', boxShadow: '8px 8px 0px 0px rgba(251,191,36,0.3), inset 0 0 30px rgba(16,185,129,0.1)' }}>
            {/* Arrow decoration */}
            <div className="absolute top-1 right-1 text-2xl transform rotate-45" style={{ filter: 'drop-shadow(0 0 6px #fbbf24)' }}>➡️</div>
            
            <div className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] border-2 border-black px-2 py-1 inline-block transform rotate-2 mb-3 shadow-lg">
              <span className="text-xs font-black text-black">HOW-TO GUIDE</span>
            </div>
            
            <h2 
              className="text-2xl font-black mb-4"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 15px rgba(251,191,36,0.5)',
                fontFamily: 'Arial Black, sans-serif'
              }}
            >
              WHAT I OFFER
            </h2>
            
            <ul className="space-y-2">
              <li className="bg-white border-2 border-black p-2 rounded text-xs font-bold text-black">
                1. Brand Identity Design
              </li>
              <li className="bg-white border-2 border-black p-2 rounded text-xs font-bold text-black">
                2. Website Development
              </li>
              <li className="bg-white border-2 border-black p-2 rounded text-xs font-bold text-black">
                3. Social Media Graphics
              </li>
              <li className="bg-white border-2 border-black p-2 rounded text-xs font-bold text-black">
                4. Creative Consulting
              </li>
            </ul>
            
            {/* Green accent */}
            <div className="absolute bottom-2 left-2 text-xl" style={{ filter: 'drop-shadow(0 0 6px #10b981)' }}>💚</div>
          </div>

          {/* Panel 4: Collage Style - "My Projects" */}
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-4 border-[#fbbf24] rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-transform" style={{ transform: 'rotate(1.5deg)', boxShadow: '8px 8px 0px 0px rgba(251,191,36,0.3), inset 0 0 30px rgba(251,191,36,0.1)' }}>
            {/* Sticky note */}
            <div className="absolute top-2 right-2 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] border-2 border-black p-2 transform -rotate-6 shadow-lg">
              <p className="text-xs font-black text-black">NEW!</p>
            </div>
            
            <h2 
              className="text-2xl font-black mb-4"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 15px rgba(251,191,36,0.5)',
                fontFamily: 'Arial Black, sans-serif',
                transform: 'rotate(-1deg)'
              }}
            >
              MY PROJECTS
            </h2>
            
            {/* Collage of project thumbnails */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-white border-2 border-black p-2 transform rotate-1 shadow-md">
                <div className="bg-gray-300 border border-black h-16 flex items-center justify-center text-2xl mb-1">
                  🎨
                </div>
                <p className="text-xs text-center font-bold text-black">Project 1</p>
              </div>
              <div className="bg-white border-2 border-black p-2 transform -rotate-1 shadow-md">
                <div className="bg-gray-300 border border-black h-16 flex items-center justify-center text-2xl mb-1">
                  💻
                </div>
                <p className="text-xs text-center font-bold text-black">Project 2</p>
              </div>
              <div className="bg-white border-2 border-black p-2 transform rotate-1 shadow-md">
                <div className="bg-gray-300 border border-black h-16 flex items-center justify-center text-2xl mb-1">
                  📱
                </div>
                <p className="text-xs text-center font-bold text-black">Project 3</p>
              </div>
              <div className="bg-white border-2 border-black p-2 transform -rotate-1 shadow-md">
                <div className="bg-gray-300 border border-black h-16 flex items-center justify-center text-2xl mb-1">
                  ✨
                </div>
                <p className="text-xs text-center font-bold text-black">Project 4</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] border-2 border-black p-2 rounded text-center shadow-lg">
              <p className="text-xs font-black text-black">MORE COMING SOON!</p>
            </div>
          </div>

          {/* Panel 5: Bratz Mailbag Style - "Testimonials" */}
          <div className="relative bg-gradient-to-br from-gray-800 via-black to-gray-800 border-4 border-[#fbbf24] rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-transform" style={{ transform: 'rotate(-1deg)', boxShadow: '8px 8px 0px 0px rgba(251,191,36,0.3), inset 0 0 30px rgba(16,185,129,0.15)' }}>
            {/* Mail icon */}
            <div className="absolute top-2 left-2 text-2xl" style={{ filter: 'drop-shadow(0 0 6px #fbbf24)' }}>✉️</div>
            
            <div className="bg-gradient-to-r from-[#10b981] to-[#059669] border-2 border-black px-3 py-1 inline-block transform rotate-1 mb-3 shadow-lg">
              <span className="text-xs font-black text-white">FAN MAIL</span>
            </div>
            
            <h2 
              className="text-2xl font-black mb-4"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 15px rgba(251,191,36,0.5)',
                fontFamily: 'Arial Black, sans-serif'
              }}
            >
              WHAT PEOPLE SAY
            </h2>
            
            {/* Quote bubbles */}
            <div className="space-y-3">
              <div className="bg-white border-2 border-black rounded-lg p-3 relative">
                <div className="absolute -top-1 -left-1 text-lg">💬</div>
                <p className="text-xs text-black italic">&quot;Amazing work!&quot;</p>
                <p className="text-xs text-gray-600 mt-1">- Client A</p>
              </div>
              <div className="bg-white border-2 border-black rounded-lg p-3 relative">
                <div className="absolute -top-1 -right-1 text-lg">💬</div>
                <p className="text-xs text-black italic">&quot;So creative!&quot;</p>
                <p className="text-xs text-gray-600 mt-1">- Client B</p>
              </div>
            </div>
          </div>

          {/* Panel 6: Editorial Spread - "My Story" */}
          <div className="relative bg-gradient-to-br from-black via-gray-900 to-black border-4 border-[#fbbf24] rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-transform" style={{ transform: 'rotate(1deg)', boxShadow: '8px 8px 0px 0px rgba(251,191,36,0.3), inset 0 0 30px rgba(251,191,36,0.1)' }}>
            {/* Magazine column layout */}
            <div className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] border-2 border-black px-2 py-1 inline-block transform -rotate-1 mb-3 shadow-lg">
              <span className="text-xs font-black text-black">EXCLUSIVE INTERVIEW</span>
            </div>
            
            <h2 
              className="text-2xl font-black mb-4"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 15px rgba(251,191,36,0.5)',
                fontFamily: 'Arial Black, sans-serif'
              }}
            >
              MY STORY
            </h2>
            
            <div className="bg-white border-2 border-black p-3 mb-3">
              <p className="text-xs text-black leading-relaxed mb-2">
                Started my creative journey in 2020, fell in love with Y2K aesthetics, and never looked back!
              </p>
            </div>
            
            {/* Cut-out style photo */}
            <div className="bg-white border-4 border-black p-2 transform rotate-2 shadow-lg">
              <div className="bg-gray-200 border-2 border-black h-20 flex items-center justify-center text-2xl">
                📷
              </div>
            </div>
            
            {/* Floating caption */}
            <div className="absolute bottom-2 right-2 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] border-2 border-black px-2 py-1 transform -rotate-3 shadow-lg">
              <p className="text-xs font-black text-black">me in 2020</p>
            </div>
          </div>

          {/* Panel 7: Aesthetic Moodboard */}
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-4 border-[#fbbf24] rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-transform" style={{ transform: 'rotate(-1deg)', boxShadow: '8px 8px 0px 0px rgba(251,191,36,0.3), inset 0 0 30px rgba(16,185,129,0.1)' }}>
            {/* Sparkle decorations */}
            <div className="absolute top-1 right-1 text-xl" style={{ filter: 'drop-shadow(0 0 6px #fbbf24)' }}>✨</div>
            <div className="absolute bottom-1 left-1 text-xl" style={{ filter: 'drop-shadow(0 0 6px #10b981)' }}>💚</div>
            
            <h2 
              className="text-2xl font-black mb-4"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 15px rgba(251,191,36,0.5)',
                fontFamily: 'Arial Black, sans-serif',
                transform: 'rotate(1deg)'
              }}
            >
              MY AESTHETIC
            </h2>
            
            {/* Moodboard grid */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-white border-2 border-black p-1 transform rotate-1">
                <div className="bg-pink-200 border border-black h-12 flex items-center justify-center text-lg">💖</div>
              </div>
              <div className="bg-white border-2 border-black p-1 transform -rotate-1">
                <div className="bg-purple-200 border border-black h-12 flex items-center justify-center text-lg">🦄</div>
              </div>
              <div className="bg-white border-2 border-black p-1 transform rotate-1">
                <div className="bg-yellow-200 border border-black h-12 flex items-center justify-center text-lg">⭐</div>
              </div>
              <div className="bg-white border-2 border-black p-1 transform -rotate-1">
                <div className="bg-blue-200 border border-black h-12 flex items-center justify-center text-lg">💎</div>
              </div>
              <div className="bg-white border-2 border-black p-1 transform rotate-1">
                <div className="bg-green-200 border border-black h-12 flex items-center justify-center text-lg">🌙</div>
              </div>
              <div className="bg-white border-2 border-black p-1 transform -rotate-1">
                <div className="bg-orange-200 border border-black h-12 flex items-center justify-center text-lg">🌈</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] border-2 border-black p-2 rounded text-center shadow-lg">
              <p className="text-xs font-black text-black">BLACK & GOLD VIBES</p>
            </div>
          </div>

          {/* Panel 8: Contact Info */}
          <div className="relative bg-gradient-to-br from-black via-gray-900 to-black border-4 border-[#fbbf24] rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-transform" style={{ transform: 'rotate(1.5deg)', boxShadow: '8px 8px 0px 0px rgba(251,191,36,0.3), inset 0 0 30px rgba(16,185,129,0.15)' }}>
            {/* Phone icon */}
            <div className="absolute top-2 right-2 text-2xl" style={{ filter: 'drop-shadow(0 0 6px #fbbf24)' }}>📞</div>
            
            <div className="bg-gradient-to-r from-[#10b981] to-[#059669] border-2 border-black px-2 py-1 inline-block transform -rotate-2 mb-3 shadow-lg">
              <span className="text-xs font-black text-white">CONTACT ME</span>
            </div>
            
            <h2 
              className="text-2xl font-black mb-4"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 15px rgba(251,191,36,0.5)',
                fontFamily: 'Arial Black, sans-serif'
              }}
            >
              LET&apos;S TALK!
            </h2>
            
            <div className="space-y-2">
              <div className="bg-white border-2 border-black p-2 rounded flex items-center gap-2">
                <span className="text-lg">📧</span>
                <span className="text-xs font-bold text-black">hello@nana.com</span>
              </div>
              <div className="bg-white border-2 border-black p-2 rounded flex items-center gap-2">
                <span className="text-lg">📱</span>
                <span className="text-xs font-bold text-black">@nana.designs</span>
              </div>
              <div className="bg-white border-2 border-black p-2 rounded flex items-center gap-2">
                <span className="text-lg">💌</span>
                <span className="text-xs font-bold text-black">DM me!</span>
              </div>
            </div>
            
            {/* Green accent decoration */}
            <div className="absolute bottom-2 left-2 text-xl animate-pulse" style={{ filter: 'drop-shadow(0 0 6px #10b981)' }}>💚</div>
          </div>

          {/* Panel 9: Highlights/Achievements */}
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-4 border-[#fbbf24] rounded-lg p-6 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.3)] transform hover:scale-105 transition-transform" style={{ transform: 'rotate(-1deg)', boxShadow: '8px 8px 0px 0px rgba(251,191,36,0.3), inset 0 0 30px rgba(251,191,36,0.1)' }}>
            {/* Trophy icon */}
            <div className="absolute top-2 right-2 text-2xl" style={{ filter: 'drop-shadow(0 0 8px #fbbf24)' }}>🏆</div>
            
            <h2 
              className="text-2xl font-black mb-4"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 15px rgba(251,191,36,0.5)',
                fontFamily: 'Arial Black, sans-serif',
                transform: 'rotate(1deg)'
              }}
            >
              ACHIEVEMENTS
            </h2>
            
            {/* Star badges */}
            <div className="space-y-2 mb-3">
              <div className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] border-2 border-black p-2 rounded flex items-center gap-2 shadow-lg">
                <span className="text-xl">⭐</span>
                <span className="text-xs font-black text-black">5+ Years Experience</span>
              </div>
              <div className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] border-2 border-black p-2 rounded flex items-center gap-2 shadow-lg">
                <span className="text-xl">⭐</span>
                <span className="text-xs font-black text-black">50+ Happy Clients</span>
              </div>
              <div className="bg-gradient-to-r from-[#10b981] to-[#059669] border-2 border-black p-2 rounded flex items-center gap-2 shadow-lg">
                <span className="text-xl">💚</span>
                <span className="text-xs font-black text-white">Featured Designer</span>
              </div>
            </div>
            
            {/* Celebration emoji */}
            <div className="text-center text-2xl">🎉</div>
          </div>
        </div>

        {/* Navigation Links - Magazine Style */}
        <nav className="flex justify-center gap-4 mt-8">
          <Link
            href="/"
            className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] border-4 border-black px-6 py-3 rounded-full text-black font-black text-sm hover:from-[#f59e0b] hover:to-[#d97706] transition shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transform hover:scale-105"
            style={{
              textShadow: '0 0 10px rgba(251,191,36,0.5)',
              fontFamily: 'Arial Black, sans-serif',
              boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.3), 0 0 20px rgba(251,191,36,0.4)'
            }}
          >
            ← Back to Splash
          </Link>
          <Link
            href="/home"
            className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] border-4 border-black px-6 py-3 rounded-full text-black font-black text-sm hover:from-[#f59e0b] hover:to-[#d97706] transition shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transform hover:scale-105"
            style={{
              textShadow: '0 0 10px rgba(251,191,36,0.5)',
              fontFamily: 'Arial Black, sans-serif',
              boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.3), 0 0 20px rgba(251,191,36,0.4)'
            }}
          >
            Go to Home →
          </Link>
        </nav>
      </div>
    </main>
  );
}
