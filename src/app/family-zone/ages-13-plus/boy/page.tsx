"use client";

import Link from "next/link";
import { useState } from "react";

export default function Ages13PlusBoyPage() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState(0);
  const [skillCategory, setSkillCategory] = useState<string | null>(null);
  const [communityTopic, setCommunityTopic] = useState<string | null>(null);

  const activities = [
    {
      id: "music",
      title: "Music & Media",
      emoji: "🎵",
      description: "Discover music, videos, and creative content",
      content: "Explore music, videos, and creative media!"
    },
    {
      id: "skills",
      title: "Learning & Skills",
      emoji: "💡",
      description: "Build new skills and explore interests",
      content: "Learn new skills and develop your interests!"
    },
    {
      id: "community",
      title: "Community",
      emoji: "🌟",
      description: "Connect with others and share ideas",
      content: "Connect with the community and share your ideas!"
    },
    {
      id: "creative",
      title: "Creative Expression",
      emoji: "🎨",
      description: "Express yourself through art and creativity",
      content: "Express yourself through creative projects!"
    },
    {
      id: "explore",
      title: "Explore Interests",
      emoji: "🔍",
      description: "Discover new hobbies and passions",
      content: "Explore your interests and find new passions!"
    },
    {
      id: "challenges",
      title: "Challenges",
      emoji: "⚡",
      description: "Take on challenges and push yourself",
      content: "Challenge yourself and reach new heights!"
    }
  ];

  const playlists = [
    { name: "Chill Vibes", tracks: 24, genre: "Lo-fi, Ambient" },
    { name: "Energy Boost", tracks: 18, genre: "Pop, EDM" },
    { name: "Study Focus", tracks: 32, genre: "Classical, Instrumental" },
    { name: "Indie Mix", tracks: 28, genre: "Indie, Alternative" }
  ];

  const skillCategories = [
    {
      name: "Coding & Tech",
      skills: ["Web Development", "Python Programming", "App Design", "Game Development"]
    },
    {
      name: "Creative Arts",
      skills: ["Digital Art", "Photography", "Video Editing", "Music Production"]
    },
    {
      name: "Life Skills",
      skills: ["Cooking", "Financial Literacy", "Communication", "Time Management"]
    },
    {
      name: "Academic",
      skills: ["Study Techniques", "Research Skills", "Writing", "Critical Thinking"]
    }
  ];

  const communityTopics = [
    {
      name: "Tech Talk",
      description: "Discuss technology, coding, and digital innovation",
      members: "1.2K members"
    },
    {
      name: "Creative Corner",
      description: "Share art, music, and creative projects",
      members: "890 members"
    },
    {
      name: "Study Group",
      description: "Connect with others for learning and studying",
      members: "2.1K members"
    },
    {
      name: "Gaming Zone",
      description: "Talk about games, strategies, and gaming culture",
      members: "1.5K members"
    }
  ];

  return (
    <main className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-red-500">🔥 Ages 13+</h1>
          <p className="text-xl text-red-400">Welcome to the teen zone!</p>
        </div>

        <nav className="flex justify-center gap-4 mb-12">
          <Link
            href="/family-zone"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-black rounded-lg transition-all font-semibold"
          >
            ← Back to Family Zone
          </Link>
          <Link
            href="/home"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-black rounded-lg transition-all font-semibold"
          >
            ← Back to Home
          </Link>
        </nav>

        <div className="bg-black/80 rounded-lg p-8 backdrop-blur-sm shadow-2xl border-2 border-red-500/30 mb-8">
          <div className="text-center space-y-6">
            <div className="text-8xl mb-6 animate-pulse">🎸</div>
            <h2 className="text-3xl font-bold text-red-500">Teen Zone</h2>
            <p className="text-lg text-red-400 max-w-2xl mx-auto">
              A space for teens to explore, learn, and express themselves. Discover new interests and connect with your passions!
            </p>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              onClick={() => setSelectedActivity(selectedActivity === activity.id ? null : activity.id)}
              className={`bg-red-900/30 rounded-lg p-6 cursor-pointer transition-all hover:scale-105 shadow-lg border-2 ${
                selectedActivity === activity.id ? "border-red-500 ring-4 ring-red-500/50" : "border-red-500/20"
              }`}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">{activity.emoji}</div>
                <h3 className="font-bold text-red-500 mb-2 text-xl">{activity.title}</h3>
                <p className="text-red-400 text-sm mb-3">{activity.description}</p>
                {selectedActivity === activity.id && (
                  <div className="mt-4 p-4 bg-red-900/50 rounded-lg border border-red-500/30">
                    <p className="text-red-300 text-sm mb-3">{activity.content}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Music Player */}
        {selectedActivity === "music" && (
          <div className="bg-red-900/30 rounded-lg p-8 backdrop-blur-sm shadow-2xl border-2 border-red-500/30 mb-8">
            <h3 className="text-2xl font-bold text-red-500 mb-4 text-center">🎵 Music Player</h3>
            <div className="space-y-4">
              <div className="bg-black/50 rounded-lg p-6 border border-red-500/20">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🎧</div>
                  <h4 className="text-xl font-bold text-red-500">{playlists[currentPlaylist].name}</h4>
                  <p className="text-red-400 text-sm">{playlists[currentPlaylist].tracks} tracks • {playlists[currentPlaylist].genre}</p>
                </div>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => setCurrentPlaylist((prev) => (prev - 1 + playlists.length) % playlists.length)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-black rounded-lg font-bold"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setMusicPlaying(!musicPlaying)}
                    className="px-6 py-2 bg-red-500 hover:bg-red-600 text-black rounded-lg font-bold text-xl"
                  >
                    {musicPlaying ? "⏸️ Pause" : "▶️ Play"}
                  </button>
                  <button
                    onClick={() => setCurrentPlaylist((prev) => (prev + 1) % playlists.length)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-black rounded-lg font-bold"
                  >
                    Next →
                  </button>
                </div>
                {musicPlaying && (
                  <div className="mt-4 text-center text-red-400">🎶 Now playing...</div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {selectedActivity === "skills" && (
          <div className="bg-red-900/30 rounded-lg p-8 backdrop-blur-sm shadow-2xl border-2 border-red-500/30 mb-8">
            <h3 className="text-2xl font-bold text-red-500 mb-4 text-center">💡 Learn New Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSkillCategory(skillCategory === category.name ? null : category.name)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    skillCategory === category.name
                      ? "bg-red-900/50 border-red-500"
                      : "bg-black/30 border-red-500/20 hover:border-red-500/50"
                  }`}
                >
                  <h4 className="font-bold text-red-500 mb-2">{category.name}</h4>
                  <p className="text-red-400 text-sm">{category.skills.length} skills available</p>
                </button>
              ))}
            </div>
            {skillCategory && (
              <div className="bg-black/50 rounded-lg p-6 border border-red-500/20">
                <h4 className="font-bold text-red-500 mb-3 text-xl">{skillCategory}</h4>
                <ul className="space-y-2">
                  {skillCategories.find((c) => c.name === skillCategory)?.skills.map((skill, i) => (
                    <li key={i} className="text-red-400 flex items-center gap-2">
                      <span className="text-red-500">→</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Community Section */}
        {selectedActivity === "community" && (
          <div className="bg-red-900/30 rounded-lg p-8 backdrop-blur-sm shadow-2xl border-2 border-red-500/30 mb-8">
            <h3 className="text-2xl font-bold text-red-500 mb-4 text-center">🌟 Community</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {communityTopics.map((topic, index) => (
                <div
                  key={index}
                  onClick={() => setCommunityTopic(communityTopic === topic.name ? null : topic.name)}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                    communityTopic === topic.name
                      ? "bg-red-900/50 border-red-500"
                      : "bg-black/30 border-red-500/20 hover:border-red-500/50"
                  }`}
                >
                  <h4 className="font-bold text-red-500 mb-2">{topic.name}</h4>
                  <p className="text-red-400 text-sm mb-2">{topic.description}</p>
                  <p className="text-red-500 text-xs">{topic.members}</p>
                  {communityTopic === topic.name && (
                    <button className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-black rounded-lg font-bold text-sm">
                      Join Community →
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}






