"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ExperiencePage() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [selectedAcademic, setSelectedAcademic] = useState<number | null>(null);
  const [showAcademicModal, setShowAcademicModal] = useState(false);
  const [favoriteExperiences, setFavoriteExperiences] = useState<Set<number>>(new Set());
  const [favoriteAcademics, setFavoriteAcademics] = useState<Set<number>>(new Set());
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const experiences = [
    {
      title: "Literary Journeys",
      description: "Exploring worlds through pages and prose",
      icon: "📚",
      color: "from-amber-900/80 to-amber-950/80",
      content: {
        books: [
          "The Great Gatsby by F. Scott Fitzgerald",
          "Pride and Prejudice by Jane Austen",
          "1984 by George Orwell",
          "To Kill a Mockingbird by Harper Lee",
          "The Catcher in the Rye by J.D. Salinger"
        ],
        quote: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
        author: "George R.R. Martin",
        insights: [
          "Classic literature provides timeless insights into human nature",
          "Each book is a journey to a different time and place",
          "Reading expands our understanding of the world"
        ]
      }
    },
    {
      title: "Academic Pursuits",
      description: "The pursuit of knowledge and wisdom",
      icon: "✍️",
      color: "from-slate-800/80 to-slate-900/80",
      content: {
        subjects: [
          "Philosophy and Ethics",
          "History and Civilization",
          "Literature and Language",
          "Mathematics and Logic",
          "Science and Discovery"
        ],
        quote: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela",
        insights: [
          "Learning is a lifelong journey",
          "Knowledge empowers us to make informed decisions",
          "Academic rigor develops critical thinking"
        ]
      }
    },
    {
      title: "Artistic Expressions",
      description: "Where creativity meets tradition",
      icon: "🎨",
      color: "from-rose-900/80 to-rose-950/80",
      content: {
        forms: [
          "Classical Painting Techniques",
          "Poetry and Verse",
          "Calligraphy and Lettering",
          "Sculpture and Form",
          "Musical Composition"
        ],
        quote: "Art is the lie that enables us to realize the truth.",
        author: "Pablo Picasso",
        insights: [
          "Art transcends language barriers",
          "Creative expression is essential to human experience",
          "Tradition and innovation coexist in art"
        ]
      }
    },
    {
      title: "Philosophical Musings",
      description: "Contemplating life's deeper meanings",
      icon: "💭",
      color: "from-emerald-900/80 to-emerald-950/80",
      content: {
        topics: [
          "Existentialism and Being",
          "Ethics and Morality",
          "Metaphysics and Reality",
          "Logic and Reasoning",
          "Eastern and Western Philosophy"
        ],
        quote: "The unexamined life is not worth living.",
        author: "Socrates",
        insights: [
          "Philosophy helps us understand fundamental questions",
          "Critical thinking is essential for personal growth",
          "Different philosophical traditions offer unique perspectives"
        ]
      }
    },
    {
      title: "Historical Discoveries",
      description: "Uncovering stories from the past",
      icon: "🏛️",
      color: "from-amber-800/80 to-amber-900/80",
      content: {
        periods: [
          "Ancient Civilizations",
          "Medieval Times",
          "Renaissance Era",
          "Modern History",
          "Contemporary Events"
        ],
        quote: "Those who cannot remember the past are condemned to repeat it.",
        author: "George Santayana",
        insights: [
          "History teaches us valuable lessons",
          "Understanding the past informs the present",
          "Historical context enriches our perspective"
        ]
      }
    },
    {
      title: "Cultural Immersions",
      description: "Experiencing the richness of tradition",
      icon: "🌙",
      color: "from-indigo-900/80 to-indigo-950/80",
      content: {
        aspects: [
          "Language and Communication",
          "Traditions and Customs",
          "Art and Aesthetics",
          "Food and Cuisine",
          "Religious and Spiritual Practices"
        ],
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
        insights: [
          "Cultural diversity enriches our understanding",
          "Respect for different traditions fosters unity",
          "Immersion leads to deeper appreciation"
        ]
      }
    },
  ];

  const academicElements = [
    {
      title: "Ancient Texts",
      icon: "📜",
      description: "Delving into classical literature and philosophical works that have shaped human thought for centuries.",
      content: {
        examples: [
          "The Iliad and The Odyssey by Homer",
          "The Republic by Plato",
          "Meditations by Marcus Aurelius",
          "The Art of War by Sun Tzu",
          "The Analects by Confucius"
        ],
        significance: "Ancient texts provide foundational knowledge that continues to influence modern thought and culture.",
        studyTips: [
          "Read with historical context in mind",
          "Compare translations for deeper understanding",
          "Join study groups for discussion",
          "Take notes on key themes and concepts"
        ]
      }
    },
    {
      title: "Evening Studies",
      icon: "🕯️",
      description: "Late-night reading sessions by candlelight, where knowledge meets contemplation.",
      content: {
        benefits: [
          "Quiet environment enhances focus",
          "Reflective atmosphere promotes deeper thinking",
          "Uninterrupted time for complex topics",
          "Connection with historical study traditions"
        ],
        recommendations: [
          "Create a dedicated study space",
          "Use warm, soft lighting",
          "Keep a journal for insights",
          "Take breaks to reflect"
        ],
        significance: "Evening studies create a meditative space for learning and reflection."
      }
    },
    {
      title: "Fountain Pens",
      icon: "✒️",
      description: "The art of handwritten notes and journaling with traditional writing instruments.",
      content: {
        advantages: [
          "Enhances memory retention through writing",
          "Creates a personal connection with words",
          "Slows down thinking for deeper reflection",
          "Produces beautiful, lasting records"
        ],
        practices: [
          "Practice calligraphy and lettering",
          "Maintain a daily journal",
          "Take handwritten notes during reading",
          "Create personal manuscripts"
        ],
        significance: "The physical act of writing deepens our engagement with ideas and knowledge."
      }
    },
    {
      title: "Library Collections",
      icon: "📖",
      description: "Curated collections of books that tell stories of knowledge, adventure, and discovery.",
      content: {
        organization: [
          "Organize by subject and theme",
          "Create reading lists for different interests",
          "Maintain a personal catalog",
          "Share recommendations with others"
        ],
        categories: [
          "Classic Literature",
          "Philosophy and Ethics",
          "History and Biography",
          "Science and Nature",
          "Art and Aesthetics"
        ],
        significance: "A well-curated library is a gateway to infinite knowledge and inspiration."
      }
    },
  ];

  const handleExperienceClick = (index: number) => {
    setSelectedExperience(index);
    setShowExperienceModal(true);
  };

  const handleAcademicClick = (index: number) => {
    setSelectedAcademic(index);
    setShowAcademicModal(true);
  };

  const handleToggleFavoriteExperience = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavoriteExperiences((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleToggleFavoriteAcademic = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavoriteAcademics((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const filteredExperiences = activeFilter === "All" 
    ? experiences 
    : activeFilter === "Favorites"
    ? experiences.filter((_, index) => favoriteExperiences.has(index))
    : experiences;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-amber-950/20 to-slate-950 text-amber-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 text-8xl">📜</div>
        <div className="absolute top-40 right-20 text-7xl">🕯️</div>
        <div className="absolute bottom-40 left-20 text-9xl">📖</div>
        <div className="absolute bottom-20 right-10 text-6xl">✒️</div>
        <div className="absolute top-1/2 left-1/4 text-5xl">🦉</div>
      </div>

      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMCA0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptLTQtNHYyaC0ydi0yaDJ6bTAgNHYyaC0ydi0yaDJ6bTAgNHYyaC0ydi0yaDJ6bTQtNHYyaC0ydi0yaDJ6bTAgNHYyaC0ydi0yaDJ6bTAgNHYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-12 pb-8 px-4 sm:px-8 text-center border-b border-amber-900/30">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-5xl sm:text-6xl">🦉</span>
              <h1 className="text-4xl sm:text-6xl font-serif font-bold text-amber-100 drop-shadow-lg">
                The Experience
              </h1>
              <span className="text-5xl sm:text-6xl">📚</span>
            </div>
            <p className="text-lg sm:text-xl text-amber-200/80 font-serif italic max-w-2xl mx-auto">
              "Not all those who wander are lost; some are seeking knowledge"
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-amber-800/60">
              <span className="text-2xl">✒️</span>
              <span className="text-sm font-serif">A Collection of Intellectual Pursuits</span>
              <span className="text-2xl">🕯️</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 px-4 sm:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Filter Buttons */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
              {["All", "Favorites"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-lg border-2 font-serif font-semibold transition-all ${
                    activeFilter === filter
                      ? "border-amber-800/60 bg-amber-900/40 text-amber-100 shadow-lg scale-105"
                      : "border-amber-900/40 bg-amber-950/20 text-amber-200/80 hover:border-amber-800/50 hover:scale-105"
                  }`}
                >
                  {filter === "Favorites" ? `⭐ ${filter}` : filter}
                </button>
              ))}
            </div>

            {/* Experiences Grid */}
            <section className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100 mb-8 text-center border-b border-amber-900/30 pb-4">
                Intellectual Pursuits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExperiences.map((experience, index) => {
                  const originalIndex = experiences.indexOf(experience);
                  return (
                    <div
                      key={originalIndex}
                      onClick={() => handleExperienceClick(originalIndex)}
                      className={`relative overflow-hidden rounded-lg border-2 border-amber-900/40 bg-gradient-to-br ${experience.color} p-6 shadow-2xl transform transition-all duration-300 cursor-pointer backdrop-blur-sm ${
                        hoveredItem === originalIndex ? "scale-105 shadow-amber-900/50 border-amber-800/60" : "hover:scale-102"
                      }`}
                      onMouseEnter={() => setHoveredItem(originalIndex)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <button
                        onClick={(e) => handleToggleFavoriteExperience(originalIndex, e)}
                        className={`absolute top-3 right-3 text-2xl transition-all z-10 ${
                          favoriteExperiences.has(originalIndex) ? "text-amber-300" : "text-amber-900/40 hover:text-amber-300"
                        }`}
                        aria-label={favoriteExperiences.has(originalIndex) ? "Remove from favorites" : "Add to favorites"}
                      >
                        {favoriteExperiences.has(originalIndex) ? "⭐" : "☆"}
                      </button>
                      <div className="text-center space-y-4">
                        <div className="text-5xl mb-3">{experience.icon}</div>
                        <h3 className="text-xl font-serif font-bold text-amber-100 drop-shadow-lg">
                          {experience.title}
                        </h3>
                        <p className="text-amber-200/80 text-sm font-serif italic">
                          {experience.description}
                        </p>
                        <div className="pt-2">
                          <span className="text-xs text-amber-300/70 font-serif">Click to explore →</span>
                        </div>
                      </div>
                      {/* Decorative corner elements */}
                      <div className="absolute top-2 left-2 text-amber-900/30 text-xl">❦</div>
                      <div className="absolute bottom-2 right-2 text-amber-900/30 text-xl">❦</div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Quote Section */}
            <section className="mb-16 text-center">
              <div className="bg-gradient-to-r from-amber-950/60 via-slate-900/80 to-amber-950/60 rounded-lg p-8 sm:p-12 border-2 border-amber-900/40 shadow-2xl backdrop-blur-sm">
                <div className="text-4xl mb-4 text-amber-800/40">"</div>
                <p className="text-2xl sm:text-3xl font-serif italic text-amber-100 mb-4 leading-relaxed">
                  The only true wisdom is in knowing you know nothing
                </p>
                <div className="text-4xl mb-4 text-amber-800/40">"</div>
                <p className="text-amber-300/70 font-serif text-sm">— Socrates</p>
              </div>
            </section>

            {/* Academic Elements Section */}
            <section className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100 mb-8 text-center border-b border-amber-900/30 pb-4">
                Academic Elements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {academicElements.map((academic, index) => (
                  <div
                    key={index}
                    onClick={() => handleAcademicClick(index)}
                    className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 rounded-lg p-6 border-2 border-amber-900/30 backdrop-blur-sm cursor-pointer transition-all hover:scale-105 hover:border-amber-800/50 hover:shadow-xl"
                  >
                    <button
                      onClick={(e) => handleToggleFavoriteAcademic(index, e)}
                      className={`absolute top-3 right-3 text-xl transition-all z-10 ${
                        favoriteAcademics.has(index) ? "text-amber-300" : "text-amber-900/40 hover:text-amber-300"
                      }`}
                      aria-label={favoriteAcademics.has(index) ? "Remove from favorites" : "Add to favorites"}
                    >
                      {favoriteAcademics.has(index) ? "⭐" : "☆"}
                    </button>
                    <div className="text-4xl mb-3">{academic.icon}</div>
                    <h3 className="text-xl font-serif font-bold text-amber-100 mb-2">{academic.title}</h3>
                    <p className="text-amber-200/70 text-sm font-serif mb-3">
                      {academic.description}
                    </p>
                    <div className="pt-2">
                      <span className="text-xs text-amber-300/70 font-serif">Click to learn more →</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Final Quote */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-slate-900/80 to-amber-950/60 rounded-lg p-6 border-2 border-amber-900/40 backdrop-blur-sm">
                <p className="text-lg font-serif italic text-amber-200/90">
                  "Live as if you were to die tomorrow. Learn as if you were to live forever."
                </p>
                <p className="text-amber-300/60 font-serif text-sm mt-2">— Mahatma Gandhi</p>
              </div>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative z-20 pb-8 px-4 sm:px-8 border-t border-amber-900/30 pt-8">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/home"
              className="rounded-lg border-2 border-amber-900/40 bg-gradient-to-r from-amber-950/60 to-slate-900/80 px-6 py-3 font-serif font-semibold text-amber-100 shadow-xl transition-all hover:bg-amber-900/40 hover:scale-105 hover:border-amber-800/60 backdrop-blur-sm"
            >
              🏠 Back to Home
            </Link>
            <Link
              href="/"
              className="rounded-lg border-2 border-amber-900/40 bg-gradient-to-r from-slate-900/80 to-amber-950/60 px-6 py-3 font-serif font-semibold text-amber-100 shadow-xl transition-all hover:bg-amber-900/40 hover:scale-105 hover:border-amber-800/60 backdrop-blur-sm"
            >
              📱 Phone Splash
            </Link>
          </div>
        </nav>
      </div>

      {/* Experience Modal */}
      {showExperienceModal && selectedExperience !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowExperienceModal(false)}
        >
          <div
            className="relative bg-gradient-to-br from-slate-900 via-amber-950/80 to-slate-900 rounded-lg border-4 border-amber-900/50 p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowExperienceModal(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-amber-900/40 hover:bg-amber-900/60 flex items-center justify-center text-amber-100 text-xl transition-all"
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{experiences[selectedExperience].icon}</div>
              <h2 className="text-3xl font-serif font-bold text-amber-100 mb-2">
                {experiences[selectedExperience].title}
              </h2>
              <p className="text-amber-200/80 font-serif italic">
                {experiences[selectedExperience].description}
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-amber-950/40 rounded-lg p-6 border-2 border-amber-900/30">
                <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">Featured Quote</h3>
                <p className="text-lg font-serif italic text-amber-200/90 mb-2">
                  "{experiences[selectedExperience].content.quote}"
                </p>
                <p className="text-amber-300/70 font-serif text-sm">— {experiences[selectedExperience].content.author}</p>
              </div>
              <div className="bg-slate-900/60 rounded-lg p-6 border-2 border-amber-900/30">
                <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">
                  {experiences[selectedExperience].title === "Literary Journeys" ? "Recommended Books" :
                   experiences[selectedExperience].title === "Academic Pursuits" ? "Subject Areas" :
                   experiences[selectedExperience].title === "Artistic Expressions" ? "Art Forms" :
                   experiences[selectedExperience].title === "Philosophical Musings" ? "Philosophical Topics" :
                   experiences[selectedExperience].title === "Historical Discoveries" ? "Historical Periods" :
                   "Cultural Aspects"}
                </h3>
                <ul className="space-y-2">
                  {(experiences[selectedExperience].content.books ||
                    experiences[selectedExperience].content.subjects ||
                    experiences[selectedExperience].content.forms ||
                    experiences[selectedExperience].content.topics ||
                    experiences[selectedExperience].content.periods ||
                    experiences[selectedExperience].content.aspects)?.map((item, i) => (
                    <li key={i} className="text-amber-200/80 font-serif flex items-start gap-2">
                      <span className="text-amber-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-rose-950/40 rounded-lg p-6 border-2 border-amber-900/30">
                <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">Key Insights</h3>
                <ul className="space-y-2">
                  {experiences[selectedExperience].content.insights.map((insight, i) => (
                    <li key={i} className="text-amber-200/80 font-serif flex items-start gap-2">
                      <span className="text-amber-600">✧</span>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Academic Modal */}
      {showAcademicModal && selectedAcademic !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowAcademicModal(false)}
        >
          <div
            className="relative bg-gradient-to-br from-slate-900 via-amber-950/80 to-slate-900 rounded-lg border-4 border-amber-900/50 p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAcademicModal(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-amber-900/40 hover:bg-amber-900/60 flex items-center justify-center text-amber-100 text-xl transition-all"
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{academicElements[selectedAcademic].icon}</div>
              <h2 className="text-3xl font-serif font-bold text-amber-100 mb-2">
                {academicElements[selectedAcademic].title}
              </h2>
              <p className="text-amber-200/80 font-serif italic">
                {academicElements[selectedAcademic].description}
              </p>
            </div>
            <div className="space-y-6">
              {academicElements[selectedAcademic].content.examples && (
                <div className="bg-amber-950/40 rounded-lg p-6 border-2 border-amber-900/30">
                  <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">Examples</h3>
                  <ul className="space-y-2">
                    {academicElements[selectedAcademic].content.examples.map((example, i) => (
                      <li key={i} className="text-amber-200/80 font-serif flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {academicElements[selectedAcademic].content.benefits && (
                <div className="bg-slate-900/60 rounded-lg p-6 border-2 border-amber-900/30">
                  <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">Benefits</h3>
                  <ul className="space-y-2">
                    {academicElements[selectedAcademic].content.benefits.map((benefit, i) => (
                      <li key={i} className="text-amber-200/80 font-serif flex items-start gap-2">
                        <span className="text-amber-600">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {academicElements[selectedAcademic].content.advantages && (
                <div className="bg-slate-900/60 rounded-lg p-6 border-2 border-amber-900/30">
                  <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">Advantages</h3>
                  <ul className="space-y-2">
                    {academicElements[selectedAcademic].content.advantages.map((advantage, i) => (
                      <li key={i} className="text-amber-200/80 font-serif flex items-start gap-2">
                        <span className="text-amber-600">✓</span>
                        <span>{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {academicElements[selectedAcademic].content.recommendations && (
                <div className="bg-rose-950/40 rounded-lg p-6 border-2 border-amber-900/30">
                  <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">Recommendations</h3>
                  <ul className="space-y-2">
                    {academicElements[selectedAcademic].content.recommendations.map((rec, i) => (
                      <li key={i} className="text-amber-200/80 font-serif flex items-start gap-2">
                        <span className="text-amber-600">→</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {academicElements[selectedAcademic].content.organization && (
                <div className="bg-rose-950/40 rounded-lg p-6 border-2 border-amber-900/30">
                  <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">Organization Tips</h3>
                  <ul className="space-y-2">
                    {academicElements[selectedAcademic].content.organization.map((tip, i) => (
                      <li key={i} className="text-amber-200/80 font-serif flex items-start gap-2">
                        <span className="text-amber-600">→</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {academicElements[selectedAcademic].content.practices && (
                <div className="bg-rose-950/40 rounded-lg p-6 border-2 border-amber-900/30">
                  <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">Best Practices</h3>
                  <ul className="space-y-2">
                    {academicElements[selectedAcademic].content.practices.map((practice, i) => (
                      <li key={i} className="text-amber-200/80 font-serif flex items-start gap-2">
                        <span className="text-amber-600">→</span>
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {academicElements[selectedAcademic].content.categories && (
                <div className="bg-emerald-950/40 rounded-lg p-6 border-2 border-amber-900/30">
                  <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {academicElements[selectedAcademic].content.categories.map((category, i) => (
                      <li key={i} className="text-amber-200/80 font-serif flex items-start gap-2">
                        <span className="text-amber-600">•</span>
                        <span>{category}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {(academicElements[selectedAcademic].content.significance || academicElements[selectedAcademic].content.studyTips) && (
                <div className="bg-indigo-950/40 rounded-lg p-6 border-2 border-amber-900/30">
                  <h3 className="text-xl font-serif font-bold text-amber-100 mb-4">
                    {academicElements[selectedAcademic].content.significance ? "Significance" : "Study Tips"}
                  </h3>
                  {academicElements[selectedAcademic].content.significance && (
                    <p className="text-amber-200/80 font-serif mb-4">
                      {academicElements[selectedAcademic].content.significance}
                    </p>
                  )}
                  {academicElements[selectedAcademic].content.studyTips && (
                    <ul className="space-y-2">
                      {academicElements[selectedAcademic].content.studyTips.map((tip, i) => (
                        <li key={i} className="text-amber-200/80 font-serif flex items-start gap-2">
                          <span className="text-amber-600">✧</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
