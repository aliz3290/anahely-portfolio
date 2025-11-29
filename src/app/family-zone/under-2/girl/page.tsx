"use client";

import Link from "next/link";
import { useState } from "react";

export default function Under2GirlPage() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [soundPlaying, setSoundPlaying] = useState(false);

  const activities = [
    {
      id: "sensory",
      title: "Sensory Play",
      emoji: "🎨",
      description: "Safe, age-appropriate sensory activities",
      content: "Try these sensory activities: soft fabric textures, safe water play, gentle light patterns, and colorful soft toys."
    },
    {
      id: "stories",
      title: "Story Time",
      emoji: "📚",
      description: "Simple stories and picture books",
      content: "Read simple picture books with bright colors and large images. Point to objects and make sounds together!"
    },
    {
      id: "music",
      title: "Music & Sounds",
      emoji: "🎵",
      description: "Gentle music and sound exploration",
      content: "Play soft lullabies, nursery rhymes, and gentle sounds. Clap along and explore different rhythms together!"
    },
    {
      id: "colors",
      title: "Color Exploration",
      emoji: "🌈",
      description: "Bright colors and visual stimulation",
      content: "Show bright, contrasting colors. Use colorful toys, books, and objects to help develop visual recognition."
    },
    {
      id: "movement",
      title: "Movement & Play",
      emoji: "🤸",
      description: "Safe movement activities",
      content: "Gentle tummy time, reaching for toys, and supervised movement activities help develop motor skills."
    },
    {
      id: "bonding",
      title: "Bonding Time",
      emoji: "💕",
      description: "Special moments together",
      content: "Cuddle, sing, talk, and make eye contact. These moments are precious for bonding and development!"
    }
  ];

  const handleActivityClick = (id: string) => {
    setSelectedActivity(selectedActivity === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-50 to-pink-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-pink-800">👶 Under 2 Years</h1>
          <p className="text-xl text-pink-700">Welcome to the baby zone!</p>
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
            <div className="text-8xl mb-6 animate-bounce">🍼</div>
            <h2 className="text-3xl font-bold text-pink-800">Early Learning & Development</h2>
            <p className="text-lg text-pink-700 max-w-2xl mx-auto">
              This is a special space for babies under 2 years old. Content and activities designed for early development and sensory exploration.
            </p>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              onClick={() => handleActivityClick(activity.id)}
              className={`bg-white/90 rounded-lg p-6 cursor-pointer transition-all hover:scale-105 shadow-lg ${
                selectedActivity === activity.id ? "ring-4 ring-pink-500" : ""
              }`}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">{activity.emoji}</div>
                <h3 className="font-bold text-pink-800 mb-2 text-xl">{activity.title}</h3>
                <p className="text-pink-700 text-sm mb-3">{activity.description}</p>
                {selectedActivity === activity.id && (
                  <div className="mt-4 p-4 bg-pink-100 rounded-lg">
                    <p className="text-pink-800 text-sm">{activity.content}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Sound Section */}
        <div className="bg-white/90 rounded-lg p-8 backdrop-blur-sm shadow-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-pink-800 mb-4">🎵 Sound Play</h3>
            <button
              onClick={() => setSoundPlaying(!soundPlaying)}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-bold text-lg hover:from-pink-600 hover:to-pink-700 transition-all transform hover:scale-105"
            >
              {soundPlaying ? "⏸️ Pause Sounds" : "▶️ Play Gentle Sounds"}
            </button>
            {soundPlaying && (
              <p className="mt-4 text-pink-700">🎶 Playing gentle lullabies and soothing sounds...</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}






