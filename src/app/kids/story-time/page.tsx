"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface Story {
  title: string;
  emoji: string;
  pages: StoryPage[];
}

interface StoryPage {
  text: string;
  illustration: string;
  character?: string;
}

const stories: Story[] = [
  {
    title: "The Magic Unicorn",
    emoji: "🦄",
    pages: [
      {
        text: "Once upon a time, in a magical forest, there lived a beautiful unicorn named Sparkle.",
        illustration: "🦄✨",
        character: "Sparkle the Unicorn"
      },
      {
        text: "Sparkle loved to help all the forest animals. She would use her magical horn to make flowers bloom.",
        illustration: "🌸🌺🌼",
        character: "Sparkle"
      },
      {
        text: "One day, Sparkle found a lost bunny who couldn't find its way home.",
        illustration: "🐰",
        character: "Little Bunny"
      },
      {
        text: "Sparkle used her magic to create a rainbow path that led the bunny safely home!",
        illustration: "🌈",
        character: "Sparkle & Bunny"
      },
      {
        text: "The bunny was so happy and thanked Sparkle. From that day on, they became the best of friends!",
        illustration: "🦄🐰💕",
        character: "Friends Forever"
      }
    ]
  },
  {
    title: "The Brave Little Star",
    emoji: "⭐",
    pages: [
      {
        text: "High up in the night sky, there was a little star who was afraid of the dark.",
        illustration: "⭐",
        character: "Little Star"
      },
      {
        text: "All the other stars laughed at her, but she didn't give up. She decided to shine brighter!",
        illustration: "✨✨✨",
        character: "Little Star"
      },
      {
        text: "She practiced every night, and soon she became the brightest star in the whole sky!",
        illustration: "🌟",
        character: "Little Star"
      },
      {
        text: "The other stars learned that being brave means facing your fears, and they all became friends.",
        illustration: "⭐✨🌟💫",
        character: "All Stars"
      },
      {
        text: "Now, whenever you look up at night, you can see the brave little star shining the brightest!",
        illustration: "🌙⭐",
        character: "The Night Sky"
      }
    ]
  },
  {
    title: "The Rainbow Adventure",
    emoji: "🌈",
    pages: [
      {
        text: "Emma loved rainbows more than anything. One day, she wished she could visit one!",
        illustration: "👧🌈",
        character: "Emma"
      },
      {
        text: "To her surprise, a magical rainbow appeared and invited her to climb up!",
        illustration: "🌈✨",
        character: "Magic Rainbow"
      },
      {
        text: "Emma climbed up the rainbow and discovered a land made entirely of colors!",
        illustration: "🎨",
        character: "Color Land"
      },
      {
        text: "She met friendly color creatures who showed her how to paint the sky with beautiful colors.",
        illustration: "🦋🐛🦄",
        character: "Color Friends"
      },
      {
        text: "When it was time to go home, the rainbow promised to visit Emma again whenever she needed color in her life!",
        illustration: "👧🌈💕",
        character: "Emma & Rainbow"
      }
    ]
  },
  {
    title: "The Dancing Butterfly",
    emoji: "🦋",
    pages: [
      {
        text: "Bella was a tiny caterpillar who dreamed of dancing in the sky.",
        illustration: "🐛",
        character: "Bella"
      },
      {
        text: "She spun herself a cozy cocoon and waited patiently, knowing something magical was about to happen.",
        illustration: "🫧",
        character: "Bella's Cocoon"
      },
      {
        text: "When she emerged, she had beautiful wings! Bella had become a butterfly!",
        illustration: "🦋",
        character: "Bella Butterfly"
      },
      {
        text: "She flew up into the sky and danced with the flowers, spreading joy everywhere she went.",
        illustration: "🦋🌸",
        character: "Dancing Bella"
      },
      {
        text: "Bella learned that patience and believing in yourself can make your dreams come true!",
        illustration: "🦋✨",
        character: "Dreams Come True"
      }
    ]
  }
];

export default function StoryTimePage() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleNextPage = () => {
    if (!selectedStory) return;
    if (currentPage < selectedStory.pages.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const selectStory = (story: Story) => {
    setSelectedStory(story);
    setCurrentPage(0);
  };

  const goBackToMenu = () => {
    setSelectedStory(null);
    setCurrentPage(0);
  };

  if (!selectedStory) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-purple-200 via-indigo-200 to-pink-200 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mb-4">
              📚 Story Time 📚
            </h1>
            <p className="text-2xl text-purple-700 font-bold">Choose your magical adventure!</p>
          </div>

          {/* Story Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stories.map((story, index) => (
              <button
                key={index}
                onClick={() => selectStory(story)}
                className="bg-gradient-to-br from-purple-300 to-indigo-400 rounded-3xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 border-4 border-white"
              >
                <div className="text-center space-y-4">
                  <div className="text-8xl mb-4 animate-bounce" style={{ animationDuration: "2s" }}>
                    {story.emoji}
                  </div>
                  <h2 className="text-3xl font-black text-white drop-shadow-lg">
                    {story.title}
                  </h2>
                  <p className="text-white/90 text-lg font-semibold">
                    {story.pages.length} pages
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/kids"
              className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-purple-400 to-pink-400 hover:scale-110 shadow-2xl transition-all"
            >
              ← Back to Games
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const page = selectedStory.pages[currentPage];
  const progress = ((currentPage + 1) / selectedStory.pages.length) * 100;

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-200 via-indigo-200 to-pink-200 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
            {selectedStory.emoji} {selectedStory.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-purple-700 font-semibold">
            <span>Page {currentPage + 1} of {selectedStory.pages.length}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 bg-white rounded-full h-4 overflow-hidden shadow-lg">
          <div
            className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Story Book */}
        <div className={`bg-white rounded-3xl shadow-2xl p-8 mb-6 min-h-[500px] flex flex-col items-center justify-center transition-all duration-300 ${
          isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}>
          {/* Illustration */}
          <div className="text-9xl mb-8 animate-bounce" style={{ animationDuration: "3s" }}>
            {page.illustration}
          </div>

          {/* Character Name */}
          {page.character && (
            <div className="mb-4 px-4 py-2 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full">
              <p className="text-xl font-black text-white">{page.character}</p>
            </div>
          )}

          {/* Story Text */}
          <div className="text-center max-w-2xl">
            <p className="text-2xl sm:text-3xl font-bold text-purple-800 leading-relaxed">
              {page.text}
            </p>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center gap-4 mb-6">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className={`px-6 py-3 rounded-full font-black text-white transition-all ${
              currentPage === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-400 to-indigo-400 hover:scale-110 shadow-lg'
            }`}
          >
            ← Previous
          </button>

          <button
            onClick={goBackToMenu}
            className="px-6 py-3 rounded-full font-black text-white bg-gradient-to-r from-pink-400 to-purple-400 hover:scale-110 shadow-lg transition-all"
          >
            📚 Stories
          </button>

          <button
            onClick={handleNextPage}
            disabled={currentPage === selectedStory.pages.length - 1}
            className={`px-6 py-3 rounded-full font-black text-white transition-all ${
              currentPage === selectedStory.pages.length - 1
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-400 to-purple-400 hover:scale-110 shadow-lg'
            }`}
          >
            Next →
          </button>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center gap-2 mb-6">
          {selectedStory.pages.map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full transition-all ${
                index === currentPage
                  ? 'w-8 bg-gradient-to-r from-purple-400 to-pink-400'
                  : 'w-3 bg-purple-300'
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <Link
            href="/kids"
            className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-purple-400 to-pink-400 hover:scale-110 shadow-2xl transition-all"
          >
            ← Back to Games
          </Link>
          <Link
            href="/home"
            className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-blue-400 to-cyan-400 hover:scale-110 shadow-2xl transition-all"
          >
            🏠 Home
          </Link>
        </div>
      </div>
    </main>
  );
}


