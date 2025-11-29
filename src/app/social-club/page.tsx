"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { validateEmail, validateUsername, validatePassword, sanitizeInput } from "@/lib/security";
import { checkRateLimit, getRateLimitResetTime, clearAllRateLimits } from "@/lib/rateLimiter";
import DOMPurify from "dompurify";

export default function SocialClubPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(!isLoggedIn);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rateLimited, setRateLimited] = useState(false);
  const [rateLimitTime, setRateLimitTime] = useState(0);
  const [postContent, setPostContent] = useState("");

  // Check rate limit status
  useEffect(() => {
    if (rateLimited) {
      const interval = setInterval(() => {
        const remaining = getRateLimitResetTime(isSignUp ? "signup" : "signin");
        setRateLimitTime(remaining);
        if (remaining <= 0) {
          setRateLimited(false);
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [rateLimited, isSignUp]);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Rate limiting
    if (!checkRateLimit("signin", 5, 60000)) {
      setRateLimited(true);
      setRateLimitTime(getRateLimitResetTime("signin"));
      setErrors({ general: "Too many login attempts. Please try again later." });
      return;
    }

    // Validate and sanitize inputs
    const sanitizedEmail = sanitizeInput(email, 254);
    const sanitizedPassword = sanitizeInput(password, 128);

    if (!sanitizedEmail || !sanitizedPassword) {
      setErrors({ general: "Please fill in all fields." });
      return;
    }

    if (!validateEmail(sanitizedEmail)) {
      setErrors({ email: "Please enter a valid email address." });
      return;
    }

    // In a real app, this would call an API
    // For now, simulate successful login
    setIsLoggedIn(true);
    setShowSignIn(false);
    setUsername(sanitizedEmail.split("@")[0] || "User");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Rate limiting
    if (!checkRateLimit("signup", 3, 300000)) { // 3 attempts per 5 minutes
      setRateLimited(true);
      setRateLimitTime(getRateLimitResetTime("signup"));
      setErrors({ general: "Too many signup attempts. Please try again later." });
      return;
    }

    // Validate and sanitize inputs
    const sanitizedUsername = sanitizeInput(username, 20);
    const sanitizedEmail = sanitizeInput(email, 254);
    const sanitizedPassword = sanitizeInput(password, 128);

    if (!sanitizedUsername || !sanitizedEmail || !sanitizedPassword) {
      setErrors({ general: "Please fill in all fields." });
      return;
    }

    if (!validateUsername(sanitizedUsername)) {
      setErrors({ username: "Username must be 3-20 characters (letters, numbers, _, -)" });
      return;
    }

    if (!validateEmail(sanitizedEmail)) {
      setErrors({ email: "Please enter a valid email address." });
      return;
    }

    const passwordValidation = validatePassword(sanitizedPassword);
    if (!passwordValidation.valid) {
      setErrors({ password: passwordValidation.errors.join(" ") });
      return;
    }

    // In a real app, this would call an API
    setIsLoggedIn(true);
    setShowSignIn(false);
    setUsername(sanitizedUsername);
    setEmail("");
    setPassword("");
    setErrors({});
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowSignIn(true);
    setUsername("");
    setEmail("");
    setPassword("");
    setPostContent("");
    clearAllRateLimits();
  };

  const handleOAuthSignIn = async (provider: string) => {
    // Simulate OAuth sign-in flow
    // In a real app, this would redirect to the OAuth provider
    
    // Generate a mock username based on provider
    const providerUsernames: Record<string, string> = {
      google: "Google User",
      apple: "Apple User",
      facebook: "Facebook User",
      github: "GitHub User",
      twitter: "Twitter User"
    };
    
    const mockEmail = `${provider}@example.com`;
    const mockUsername = providerUsernames[provider] || `${provider}_user`;
    
    // Simulate OAuth callback delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoggedIn(true);
    setShowSignIn(false);
    setUsername(mockUsername);
    setEmail(mockEmail);
  };

  // Sample feed posts
  const feedPosts = [
    {
      id: 1,
      username: "fashionista_queen",
      avatar: "👑",
      time: "2h ago",
      content: "Just finished my latest Y2K inspired design! Loving the pink and gold vibes ✨ #Y2K #Fashion #Design",
      likes: 42,
      comments: 8,
      shares: 3,
      image: "🎨"
    },
    {
      id: 2,
      username: "digital_dreamer",
      avatar: "💫",
      time: "5h ago",
      content: "Working on something special for the blog... Can't wait to share it with you all! 💖",
      likes: 67,
      comments: 12,
      shares: 5,
      image: "📱"
    },
    {
      id: 3,
      username: "creative_soul",
      avatar: "🌟",
      time: "1d ago",
      content: "The luxury aesthetic is everything! Red, black, and gold never looked so good 🎯",
      likes: 89,
      comments: 15,
      shares: 7,
      image: "✨"
    },
    {
      id: 4,
      username: "style_icon",
      avatar: "💎",
      time: "2d ago",
      content: "New blog post is up! Check out my latest thoughts on digital design trends 📝",
      likes: 124,
      comments: 23,
      shares: 9,
      image: "📖"
    }
  ];

  return (
    <main className="min-h-screen velvet-texture py-6">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header with Navigation */}
        <header className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl elegant-serif metallic-text luxury-text-shadow">
              Social Club
            </h1>
            {isLoggedIn && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 luxury-gold-gradient border-2 border-black rounded-full flex items-center justify-center text-xl luxury-glow">
                    {username.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-bold text-gray-800">{username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gray-200 border-2 border-black rounded-full text-xs text-black hover:bg-gray-300 transition font-bold"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          
          <nav className="flex gap-2 flex-wrap">
            <Link
              href="/home"
              className="px-4 py-2 luxury-gold-gradient border-2 border-black rounded-full text-xs text-black shadow-lg hover:shadow-xl transition-all font-bold luxury-text-shadow"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 luxury-gold-gradient border-2 border-black rounded-full text-xs text-black shadow-lg hover:shadow-xl transition-all font-bold luxury-text-shadow"
            >
              Blog
            </Link>
            <Link
              href="/profile"
              className="px-4 py-2 luxury-gold-gradient border-2 border-black rounded-full text-xs text-black shadow-lg hover:shadow-xl transition-all font-bold luxury-text-shadow"
            >
              Profile
            </Link>
            <Link
              href="/social-club"
              className="px-4 py-2 luxury-gold-gradient border-2 border-black rounded-full text-xs text-black shadow-lg hover:shadow-xl transition-all font-bold luxury-text-shadow"
            >
              Social club
            </Link>
          </nav>
        </header>

        {/* Sign In/Sign Up Modal */}
        {showSignIn && !isLoggedIn && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white luxury-border rounded-lg p-8 max-w-md w-full luxury-box-shadow">
              <div className="text-center mb-6">
                <h2 className="text-2xl elegant-serif metallic-text luxury-text-shadow mb-2">
                  {isSignUp ? "Join Social Club" : "Welcome Back"}
                </h2>
                <p className="text-sm text-gray-600">
                  {isSignUp ? "Create your account to get started" : "Sign in to your account"}
                </p>
              </div>

              {/* OAuth Sign-In Options */}
              <div className="mb-6">
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500 font-bold">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button
                    onClick={() => handleOAuthSignIn("google")}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-black rounded-lg text-sm font-bold hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </button>

                  <button
                    onClick={() => handleOAuthSignIn("apple")}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-black border-2 border-black rounded-lg text-sm font-bold text-white hover:bg-gray-900 transition-all shadow-sm hover:shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    Apple
                  </button>

                  <button
                    onClick={() => handleOAuthSignIn("facebook")}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1877F2] border-2 border-black rounded-lg text-sm font-bold text-white hover:bg-[#166FE5] transition-all shadow-sm hover:shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </button>

                  <button
                    onClick={() => handleOAuthSignIn("github")}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 border-2 border-black rounded-lg text-sm font-bold text-white hover:bg-gray-800 transition-all shadow-sm hover:shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </button>
                </div>
              </div>

              {errors.general && (
                <div className="mb-4 p-3 bg-red-100 border-2 border-red-500 rounded-lg text-sm text-red-800">
                  {errors.general}
                  {rateLimited && rateLimitTime > 0 && (
                    <div className="mt-1 text-xs">Try again in {rateLimitTime} seconds</div>
                  )}
                </div>
              )}

              <form onSubmit={isSignUp ? handleSignUp : handleSignIn} className="space-y-4">
                {isSignUp && (
                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => {
                        const sanitized = sanitizeInput(e.target.value, 20);
                        setUsername(sanitized);
                        if (errors.username) setErrors(prev => ({ ...prev, username: "" }));
                      }}
                      className={`w-full px-4 py-2 border-2 rounded-lg text-sm focus:outline-none focus:ring-2 ${
                        errors.username 
                          ? "border-red-500 focus:ring-red-500" 
                          : "border-black focus:ring-[#fbbf24]"
                      }`}
                      placeholder="Choose a username (3-20 chars)"
                      required={isSignUp}
                      maxLength={20}
                      pattern="[a-zA-Z0-9_-]{3,20}"
                    />
                    {errors.username && (
                      <p className="mt-1 text-xs text-red-600">{errors.username}</p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">3-20 characters, letters, numbers, _, -</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      const sanitized = sanitizeInput(e.target.value, 254);
                      setEmail(sanitized);
                      if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                    }}
                    className={`w-full px-4 py-2 border-2 rounded-lg text-sm focus:outline-none focus:ring-2 ${
                      errors.email 
                        ? "border-red-500 focus:ring-red-500" 
                        : "border-black focus:ring-[#fbbf24]"
                    }`}
                    placeholder="your@email.com"
                    required
                    maxLength={254}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      const sanitized = sanitizeInput(e.target.value, 128);
                      setPassword(sanitized);
                      if (errors.password) setErrors(prev => ({ ...prev, password: "" }));
                    }}
                    className={`w-full px-4 py-2 border-2 rounded-lg text-sm focus:outline-none focus:ring-2 ${
                      errors.password 
                        ? "border-red-500 focus:ring-red-500" 
                        : "border-black focus:ring-[#fbbf24]"
                    }`}
                    placeholder="••••••••"
                    required
                    maxLength={128}
                    minLength={8}
                  />
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-600">{errors.password}</p>
                  )}
                  {isSignUp && !errors.password && (
                    <p className="mt-1 text-xs text-gray-500">
                      Min 8 chars, uppercase, lowercase, number
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={rateLimited}
                  className={`w-full px-6 py-3 luxury-gold-gradient border-2 border-black rounded-full text-sm text-black font-bold luxury-text-shadow luxury-glow hover:shadow-xl transition-all ${
                    rateLimited ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {rateLimited ? `Please wait ${rateLimitTime}s` : (isSignUp ? "Sign Up" : "Sign In")}
                </button>
              </form>

              <div className="mt-4 text-center">
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-sm text-gray-600 hover:text-gray-800 underline"
                >
                  {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Feed Content */}
        {isLoggedIn ? (
          <div className="space-y-6">
            {/* Create Post Section */}
            <div className="bg-white luxury-border rounded-lg p-6 luxury-box-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 luxury-gold-gradient border-2 border-black rounded-full flex items-center justify-center text-xl luxury-glow">
                  {username.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{username}</h3>
                  <p className="text-xs text-gray-500">What's on your mind?</p>
                </div>
              </div>
              <textarea
                value={postContent}
                onChange={(e) => {
                  const sanitized = sanitizeInput(e.target.value, 1000);
                  setPostContent(sanitized);
                }}
                className="w-full px-4 py-3 border-2 border-black rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#fbbf24] resize-none"
                rows={3}
                placeholder="Share your thoughts..."
                maxLength={1000}
              />
              <div className="text-xs text-gray-500 mt-1 text-right">
                {postContent.length}/1000
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-gray-100 border border-black rounded-lg text-xs font-bold hover:bg-gray-200 transition">
                    📷 Photo
                  </button>
                  <button className="px-4 py-2 bg-gray-100 border border-black rounded-lg text-xs font-bold hover:bg-gray-200 transition">
                    🎨 GIF
                  </button>
                  <button className="px-4 py-2 bg-gray-100 border border-black rounded-lg text-xs font-bold hover:bg-gray-200 transition">
                    😊 Emoji
                  </button>
                </div>
                <button className="px-6 py-2 luxury-gold-gradient border-2 border-black rounded-full text-xs text-black font-bold luxury-text-shadow hover:shadow-lg transition">
                  Post
                </button>
              </div>
            </div>

            {/* Feed Posts */}
            {feedPosts.map((post) => (
              <div key={post.id} className="bg-white luxury-border rounded-lg p-6 luxury-box-shadow">
                {/* Post Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 luxury-gold-gradient border-2 border-black rounded-full flex items-center justify-center text-xl luxury-glow">
                      {post.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{post.username}</h3>
                      <p className="text-xs text-gray-500">{post.time}</p>
                    </div>
                  </div>
                  <button className="text-gray-500 hover:text-gray-800">⋯</button>
                </div>

                {/* Post Content - Sanitized */}
                <p 
                  className="text-sm text-gray-800 mb-4 leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: DOMPurify.sanitize(post.content, { 
                      ALLOWED_TAGS: [], 
                      ALLOWED_ATTR: [] 
                    }) 
                  }}
                />

                {/* Post Image/Media */}
                {post.image && (
                  <div className="mb-4 bg-gray-100 border-2 border-black rounded-lg p-8 flex items-center justify-center text-6xl">
                    {post.image}
                  </div>
                )}

                {/* Post Actions */}
                <div className="flex items-center justify-between pt-4 border-t-2 border-gray-200">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-[#dc2626] transition">
                      <span className="text-lg">❤️</span>
                      {post.likes}
                    </button>
                    <button className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-[#fbbf24] transition">
                      <span className="text-lg">💬</span>
                      {post.comments}
                    </button>
                    <button className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-[#dc2626] transition">
                      <span className="text-lg">🔁</span>
                      {post.shares}
                    </button>
                  </div>
                  <button className="text-sm font-bold text-gray-700 hover:text-[#fbbf24] transition">
                    🔖 Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔒</div>
            <h2 className="text-2xl elegant-serif metallic-text luxury-text-shadow mb-2">
              Join the Social Club
            </h2>
            <p className="text-gray-600 mb-6">
              Sign in or create an account to see the feed and connect with others!
            </p>
            <button
              onClick={() => setShowSignIn(true)}
              className="px-8 py-3 luxury-gold-gradient border-2 border-black rounded-full text-sm text-black font-bold luxury-text-shadow luxury-glow hover:shadow-xl transition-all"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
