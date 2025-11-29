"use client";

import Link from "next/link";
import { useState } from "react";

export default function Ages10To13BoyPage() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [codeSnippet, setCodeSnippet] = useState(0);
  const [quizQuestion, setQuizQuestion] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [creativeProject, setCreativeProject] = useState<string | null>(null);

  const activities = [
    {
      id: "coding",
      title: "Tech & Coding",
      emoji: "💻",
      description: "Learn coding, design, and tech skills",
      content: "Start your coding journey with fun projects!"
    },
    {
      id: "creative",
      title: "Creative Projects",
      emoji: "🎨",
      description: "Art, music, and creative expression",
      content: "Express yourself through creative projects!"
    },
    {
      id: "quiz",
      title: "Challenges & Quizzes",
      emoji: "🏆",
      description: "Test your knowledge and skills",
      content: "Challenge yourself with fun quizzes!"
    },
    {
      id: "build",
      title: "Build & Create",
      emoji: "🔨",
      description: "Hands-on building projects",
      content: "Build amazing things with your hands!"
    },
    {
      id: "explore",
      title: "Explore & Discover",
      emoji: "🔍",
      description: "Discover new interests and hobbies",
      content: "Explore the world around you!"
    },
    {
      id: "connect",
      title: "Connect & Share",
      emoji: "🤝",
      description: "Connect with others and share ideas",
      content: "Share your ideas and connect with friends!"
    }
  ];

  const codeSnippets = [
    {
      title: "Hello World",
      code: `print("Hello, World!")`,
      language: "Python",
      description: "Your first program!"
    },
    {
      title: "Colorful Square",
      code: `fill(255, 0, 0);
rect(50, 50, 100, 100);`,
      language: "JavaScript",
      description: "Draw a red square"
    },
    {
      title: "Loop Fun",
      code: `for i in range(5):
    print("Number:", i)`,
      language: "Python",
      description: "Count from 0 to 4"
    }
  ];

  const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct: 1
    },
    {
      question: "What is 15 × 3?",
      options: ["35", "40", "45", "50"],
      correct: 2
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Venus", "Earth", "Mercury", "Mars"],
      correct: 2
    },
    {
      question: "What is the largest ocean?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: 3
    }
  ];

  const creativeProjects = [
    {
      name: "Digital Art",
      steps: ["Choose your canvas", "Pick your colors", "Start creating!", "Save your masterpiece"]
    },
    {
      name: "Music Mix",
      steps: ["Select your sounds", "Arrange the beats", "Add melodies", "Mix and master!"]
    },
    {
      name: "Story Writing",
      steps: ["Brainstorm ideas", "Create characters", "Write your story", "Share with others!"]
    }
  ];

  const handleQuizSubmit = () => {
    const currentQuiz = quizQuestions[quizQuestion];
    const selectedIndex = parseInt(quizAnswer);
    if (selectedIndex === currentQuiz.correct) {
      setQuizResult("✅ Correct! Great job!");
      setTimeout(() => {
        setQuizQuestion((prev) => (prev + 1) % quizQuestions.length);
        setQuizAnswer("");
        setQuizResult(null);
      }, 2000);
    } else {
      setQuizResult(`❌ Not quite right. Try again!`);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-200 via-cyan-200 to-indigo-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-indigo-800">🎯 Ages 10-13</h1>
          <p className="text-xl text-indigo-700">Welcome to the tween zone!</p>
        </div>

        <nav className="flex justify-center gap-4 mb-12">
          <Link
            href="/family-zone"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-all font-semibold"
          >
            ← Back to Family Zone
          </Link>
          <Link
            href="/home"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-all font-semibold"
          >
            ← Back to Home
          </Link>
        </nav>

        <div className="bg-white/90 rounded-lg p-8 backdrop-blur-sm shadow-2xl mb-8">
          <div className="text-center space-y-6">
            <div className="text-8xl mb-6 animate-bounce">🎮</div>
            <h2 className="text-3xl font-bold text-indigo-800">Tween Activities</h2>
            <p className="text-lg text-indigo-700 max-w-2xl mx-auto">
              Cool activities and resources for tweens. Learn new skills, explore interests, and connect with others!
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
                selectedActivity === activity.id ? "ring-4 ring-indigo-500" : ""
              }`}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">{activity.emoji}</div>
                <h3 className="font-bold text-indigo-800 mb-2 text-xl">{activity.title}</h3>
                <p className="text-indigo-700 text-sm mb-3">{activity.description}</p>
                {selectedActivity === activity.id && (
                  <div className="mt-4 p-4 bg-indigo-100 rounded-lg">
                    <p className="text-indigo-800 text-sm mb-3">{activity.content}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Coding Section */}
        {selectedActivity === "coding" && (
          <div className="bg-white/90 rounded-lg p-8 backdrop-blur-sm shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-indigo-800 mb-4 text-center">💻 Learn to Code</h3>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-6 text-left">
                <div className="text-cyan-400 text-sm mb-2">{codeSnippets[codeSnippet].language}</div>
                <pre className="text-green-400 text-sm font-mono">
                  {codeSnippets[codeSnippet].code}
                </pre>
              </div>
              <p className="text-indigo-800 text-center">{codeSnippets[codeSnippet].description}</p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setCodeSnippet((prev) => (prev - 1 + codeSnippets.length) % codeSnippets.length)}
                  className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-bold"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setCodeSnippet((prev) => (prev + 1) % codeSnippets.length)}
                  className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-bold"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quiz Section */}
        {selectedActivity === "quiz" && (
          <div className="bg-white/90 rounded-lg p-8 backdrop-blur-sm shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-indigo-800 mb-4 text-center">🏆 Quiz Challenge</h3>
            <div className="space-y-4">
              <div className="text-xl font-bold text-indigo-800 text-center mb-4">
                {quizQuestions[quizQuestion].question}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {quizQuestions[quizQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setQuizAnswer(index.toString())}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      quizAnswer === index.toString()
                        ? "bg-indigo-500 text-white border-indigo-600"
                        : "bg-white border-indigo-300 hover:border-indigo-500 text-indigo-800"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleQuizSubmit}
                  disabled={!quizAnswer}
                  className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-bold disabled:opacity-50"
                >
                  Submit Answer
                </button>
                <button
                  onClick={() => {
                    setQuizQuestion((prev) => (prev + 1) % quizQuestions.length);
                    setQuizAnswer("");
                    setQuizResult(null);
                  }}
                  className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-bold"
                >
                  Next Question
                </button>
              </div>
              {quizResult && (
                <div className="text-xl font-bold text-indigo-800 text-center">{quizResult}</div>
              )}
            </div>
          </div>
        )}

        {/* Creative Projects */}
        {selectedActivity === "creative" && (
          <div className="bg-white/90 rounded-lg p-8 backdrop-blur-sm shadow-2xl mb-8">
            <h3 className="text-2xl font-bold text-indigo-800 mb-4 text-center">🎨 Creative Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {creativeProjects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setCreativeProject(creativeProject === project.name ? null : project.name)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    creativeProject === project.name
                      ? "bg-indigo-100 border-indigo-500"
                      : "bg-white border-indigo-300 hover:border-indigo-500"
                  }`}
                >
                  <h4 className="font-bold text-indigo-800">{project.name}</h4>
                </button>
              ))}
            </div>
            {creativeProject && (
              <div className="bg-indigo-100 rounded-lg p-6">
                <h4 className="font-bold text-indigo-800 mb-3 text-xl">{creativeProject}</h4>
                <ol className="list-decimal list-inside space-y-2 text-indigo-800">
                  {creativeProjects.find((p) => p.name === creativeProject)?.steps.map((step, i) => (
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






