"use client";

import Link from "next/link";

export default function EnterIfYouDarePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold mb-4 text-purple-400">⚠️ Enter if you dare</h1>
          <p className="text-xl text-purple-200">Welcome to the mysterious zone...</p>
        </div>

        <nav className="flex justify-center gap-4 mb-12">
          <Link
            href="/home"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all font-semibold"
          >
            ← Back to Home
          </Link>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Diondray Header */}
          <div className="bg-black/40 rounded-lg p-8 backdrop-blur-sm shadow-2xl border-2 border-purple-500/30 hover:border-purple-400 transition-all">
            <div className="text-center space-y-6">
              <div className="text-6xl mb-4 animate-pulse">👤</div>
              <h2 className="text-4xl font-bold text-purple-400 mb-4">Diondray</h2>
              <div className="h-px bg-purple-500/30 mb-4"></div>
              <p className="text-purple-200 text-sm">
                Mysterious and intriguing...
              </p>
            </div>
          </div>

          {/* Anahely Header */}
          <div className="bg-black/40 rounded-lg p-8 backdrop-blur-sm shadow-2xl border-2 border-pink-500/30 hover:border-pink-400 transition-all">
            <div className="text-center space-y-6">
              <div className="text-6xl mb-4 animate-pulse">✨</div>
              <h2 className="text-4xl font-bold text-pink-400 mb-4">Anahely</h2>
              <div className="h-px bg-pink-500/30 mb-4"></div>
              <p className="text-pink-200 text-sm">
                Creative and inspiring...
              </p>
            </div>
          </div>

          {/* Jesse Header */}
          <div className="bg-black/40 rounded-lg p-8 backdrop-blur-sm shadow-2xl border-2 border-cyan-500/30 hover:border-cyan-400 transition-all">
            <div className="text-center space-y-6">
              <div className="text-6xl mb-4 animate-pulse">🌟</div>
              <h2 className="text-4xl font-bold text-cyan-400 mb-4">Jesse</h2>
              <div className="h-px bg-cyan-500/30 mb-4"></div>
              <p className="text-cyan-200 text-sm">
                Bold and adventurous...
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}






