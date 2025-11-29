"use client";

import Link from "next/link";
import { useState } from "react";

export default function Ages6To9BoyPage() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [mathAnswer, setMathAnswer] = useState("");
  const [mathResult, setMathResult] = useState<string | null>(null);
  const [currentMathProblem, setCurrentMathProblem] = useState({ num1: 5, num2: 3 });
  const [readingStory, setReadingStory] = useState(0);
  const [scienceExperiment, setScienceExperiment] = useState<string | null>(null);

  const activities = [
    {
      id: "science",
      title: "Science & Discovery",
      emoji: "🔬",
      description: "Fun science experiments and activities",
      content: "Explore the world of science with safe, fun experiments!"
    },
    {
      id: "reading",
      title: "Reading & Writing",
      emoji: "✏️",
      description: "Stories, writing prompts, and literacy games",
      content: "Read amazing stories and practice your writing skills!"
    },
    {
      id: "math",
      title: "Math Games",
      emoji: "🧮",
      description: "Interactive math activities and puzzles",
      content: "Practice math with fun games and puzzles!"
    },
    {
      id: "art",
      title: "Art & Creativity",
      emoji: "🎨",
      description: "Creative art projects and crafts",
      content: "Express yourself through art and creativity!"
    },
    {
      id: "puzzles",
      title: "Puzzles & Brain Games",
      emoji: "🧩",
      description: "Challenge your brain with puzzles",
      content: "Solve puzzles and train your brain!"
    },
    {
      id: "adventure",
      title: "Adventure Stories",
      emoji: "🗺️",
      description: "Interactive adventure stories",
      content: "Go on exciting adventures through stories!"
    }
  ];

  const stories = [
    "Once upon a time, there was a brave explorer who discovered a magical forest...",
    "In a faraway kingdom, a young knight set out on a quest to find a lost treasure...",
    "A group of friends found a mysterious map that led to an amazing adventure...",
    "Deep in the ocean, a friendly dolphin helped a lost fish find its way home..."
  ];

  const experiments = [
    {
      name: "Rainbow in a Glass",
      steps: ["Fill a glass with water", "Add food coloring drops", "Watch the colors mix!", "Learn about density"]
    },
    {
      name: "Growing Seeds",
      steps: ["Plant a seed in soil", "Water it daily", "Watch it grow!", "Learn about plants"]
    },
    {
      name: "Static Electricity",
      steps: ["Rub a balloon on your hair", "See it stick to the wall!", "Learn about static charge"]
    }
  ];

  const generateNewMathProblem = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCurrentMathProblem({ num1, num2 });
    setMathAnswer("");
    setMathResult(null);
  };

  const checkMathAnswer = () => {
    const correct = currentMathProblem.num1 + currentMathProblem.num2;
    const userAnswer = parseInt(mathAnswer);
    if (userAnswer === correct) {
      setMathResult("✅ Correct! Great job!");
      setTimeout(generateNewMathProblem, 2000);
    } else {
      setMathResult(`❌ Not quite. Try again! The answer is ${correct}`);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-200 via-green-200 to-blue-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-blue-800">🚀 Ages 6-9</h1>
          <p className="text-xl text-blue-700">Welcome to the elementary zone!</p>
        </div>

        <nav className="flex justify-center gap-4 mb-12">
          <Link
            href="/family-zone"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all font-semibold"
          >
            ← Back to Family Zone
          </Link>
          <Link
            href="/home"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all font-semibold"
          >
            ← Back to Home
          </Link>
        </nav>

        <div className="bg-white/90 rounded-lg p-8 backdrop-blur-sm shadow-2xl mb-8">
          <div className="text-center space-y-6">
            <div className="text-8xl mb-6 animate-bounce">📚</div>
            <h2 className="text-3xl font-bold text-blue-800">Elementary Learning</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Engaging activities and learning resources for elementary school kids. Explore, learn, and have fun!
            </p>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              onClick={() => setSelectedActivity(selectedActivity === activity.id ? null : activity.id)}
              className={`bg-white/90 rounded-lg p-6 cursor-pointer transition-all hover:scale-105 shadow-lg ${
                selectedActivity === activity.id ? "ring-4 ring-blue-500" : ""
              }`}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">{activity.emoji}</div>
                <h3 className="font-bold text-blue-800 mb-2 text-xl">{activity.title}</h3>
                <p className="text-blue-700 text-sm mb-3">{activity.description}</p>
                {selectedActivity === activity.id && (
                  <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                    <p className="text-blue-800 text-sm mb-3">{activity.content}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Math Game */}
        {selectedActivity === "math" && (
          <div className="bg-white/90 rounded-lg p-8 backdrop-blur-sm shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">🧮 Math Practice</h3>
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-blue-600">
                {currentMathProblem.num1} + {currentMathProblem.num2} = ?
              </div>
              <div className="flex gap-4 justify-center items-center">
                <input
                  type="number"
                  value={mathAnswer}
                  onChange={(e) => setMathAnswer(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") checkMathAnswer();
                  }}
                  className="px-4 py-2 border-2 border-blue-300 rounded-lg text-xl text-center w-24"
                  placeholder="?"
                />
                <button
                  onClick={checkMathAnswer}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold"
                >
                  Check Answer
                </button>
                <button
                  onClick={generateNewMathProblem}
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold"
                >
                  New Problem
                </button>
              </div>
              {mathResult && (
                <div className="text-xl font-bold text-blue-800">{mathResult}</div>
              )}
            </div>
          </div>
        )}

        {/* Reading Stories */}
        {selectedActivity === "reading" && (
          <div className="bg-white/90 rounded-lg p-8 backdrop-blur-sm shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">📖 Story Time</h3>
            <div className="space-y-4">
              <p className="text-lg text-blue-800 text-center">{stories[readingStory]}</p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setReadingStory((prev) => (prev - 1 + stories.length) % stories.length)}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setReadingStory((prev) => (prev + 1) % stories.length)}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Science Experiments */}
        {selectedActivity === "science" && (
          <div className="bg-white/90 rounded-lg p-8 backdrop-blur-sm shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">🔬 Science Experiments</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {experiments.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setScienceExperiment(scienceExperiment === exp.name ? null : exp.name)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    scienceExperiment === exp.name
                      ? "bg-blue-100 border-blue-500"
                      : "bg-white border-blue-300 hover:border-blue-500"
                  }`}
                >
                  <h4 className="font-bold text-blue-800">{exp.name}</h4>
                </button>
              ))}
            </div>
            {scienceExperiment && (
              <div className="bg-blue-100 rounded-lg p-6">
                <h4 className="font-bold text-blue-800 mb-3 text-xl">{scienceExperiment}</h4>
                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                  {experiments.find((e) => e.name === scienceExperiment)?.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}






