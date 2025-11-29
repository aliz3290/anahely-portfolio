"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen velvet-texture py-6">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl elegant-serif metallic-text luxury-text-shadow mb-4">
            Profile
          </h1>
          <p className="text-gray-800">This is the Profile page skeleton.</p>
        </div>
        
        <nav className="flex justify-center gap-4">
          <Link
            href="/home"
            className="px-5 py-2 luxury-gold-gradient border-2 border-black rounded-full text-sm text-black hover:shadow-xl transition-all font-bold luxury-text-shadow luxury-glow"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="px-5 py-2 luxury-gold-gradient border-2 border-black rounded-full text-sm text-black hover:shadow-xl transition-all font-bold luxury-text-shadow luxury-glow"
          >
            Blog
          </Link>
          <Link
            href="/profile"
            className="px-5 py-2 luxury-gold-gradient border-2 border-black rounded-full text-sm text-black hover:shadow-xl transition-all font-bold luxury-text-shadow luxury-glow"
          >
            Profile
          </Link>
          <Link
            href="/social-club"
            className="px-5 py-2 luxury-gold-gradient border-2 border-black rounded-full text-sm text-black hover:shadow-xl transition-all font-bold luxury-text-shadow luxury-glow"
          >
            Social club
          </Link>
        </nav>
      </div>
    </main>
  );
}



