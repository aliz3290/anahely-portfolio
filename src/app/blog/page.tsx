"use client";

import Link from "next/link";
import Image from "next/image";
import NanoIcon from "@/components/NanoIcon";

export default function BlogPage() {
  return (
    <main className="min-h-screen velvet-texture py-6">
      {/* Fixed-width container centered */}
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Header Section */}
        <header className="relative mb-6 h-[200px] luxury-border rounded-lg overflow-hidden luxury-box-shadow" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0'
        }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#dc2626] via-[#b91c1c] to-[#991b1b] opacity-90"></div>
          <div className="luxury-ornate-top"></div>
          <div className="relative z-10 h-full flex items-center justify-between px-6">
            {/* Logo and Website Name */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 luxury-gold-gradient border-2 border-black rounded-full flex items-center justify-center text-2xl luxury-glow">
                <NanoIcon type="user" size={32} />
              </div>
              <h1 className="text-3xl elegant-serif metallic-text luxury-text-shadow">
                Anahely&apos;s Digital Diary
              </h1>
            </div>

            {/* Navigation and Search */}
            <div className="flex items-center gap-4">
              <nav className="flex gap-2">
                <Link href="/home" className="px-4 py-2 luxury-gold-gradient border-2 border-black rounded-full text-xs text-black shadow-lg hover:shadow-xl transition-all font-bold luxury-text-shadow">
                  Home
                </Link>
                <Link href="/blog" className="px-4 py-2 luxury-gold-gradient border-2 border-black rounded-full text-xs text-black shadow-lg hover:shadow-xl transition-all font-bold luxury-text-shadow">
                  Blog
                </Link>
                <Link href="/profile" className="px-4 py-2 luxury-gold-gradient border-2 border-black rounded-full text-xs text-black shadow-lg hover:shadow-xl transition-all font-bold luxury-text-shadow">
                  Profile
                </Link>
                <Link href="/social-club" className="px-4 py-2 luxury-gold-gradient border-2 border-black rounded-full text-xs text-black shadow-lg hover:shadow-xl transition-all font-bold luxury-text-shadow">
                  Social club
                </Link>
              </nav>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-1 border-2 border-black rounded-full text-xs bg-white/90"
                />
                <div className="w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center">
                  <NanoIcon type="user" size={16} />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Two-Column Layout */}
        <div className="flex gap-4">
          {/* Left Sidebar - 280-320px */}
          <aside className="w-[300px] flex-shrink-0 space-y-4">
            {/* Profile Card Box */}
            <div className="relative satin-texture luxury-border rounded-lg p-4 luxury-box-shadow crown-decoration">
              {/* Ornate top border */}
              <div className="absolute top-0 left-0 right-0 h-6 luxury-gold-gradient border-b-2 border-black" style={{
                clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
              }}></div>

              {/* Elegant decorative elements */}
              <div className="absolute top-2 right-2 text-xl luxury-text-shadow"><NanoIcon type="crown" size={20} /></div>
              <div className="absolute top-1 left-1 text-xs animate-pulse"><NanoIcon type="sparkle" size={12} /></div>

              <div className="relative z-10 pt-8">
                <div className="flex flex-col items-center gap-3 mb-4">
                  <div className="w-24 h-24 luxury-gold-gradient border-4 border-black rounded-full flex items-center justify-center text-4xl luxury-glow">
                    <NanoIcon type="user" size={48} />
                  </div>
                  <h3 className="text-base elegant-serif metallic-text luxury-text-shadow">@hime</h3>
                  <div className="luxury-divider w-24"></div>
                  <p className="text-xs text-gray-800 font-semibold">Status: Online</p>
                  <p className="text-xs text-gray-700">Last Active: Now</p>
                </div>

                {/* Mood image placeholder */}
                <div className="mt-4 p-3 satin-texture border-2 border-black rounded text-center luxury-box-shadow">
                  <p className="text-xs font-bold text-black elegant-serif"><NanoIcon type="star" size={12} /> Mood: Happy</p>
                </div>
              </div>
            </div>

            {/* Actions Box */}
            <div className="bg-white luxury-border rounded-lg p-4 luxury-box-shadow">
              <h4 className="text-sm elegant-serif metallic-text mb-3 luxury-text-shadow">Actions</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="flex items-center gap-2 text-xs text-black hover:text-[#dc2626] transition">
                    <span><NanoIcon type="heart" size={14} /></span> Add friend
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-2 text-xs text-black hover:text-[#dc2626] transition">
                    <span><NanoIcon type="mail" size={14} /></span> Message
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-2 text-xs text-black hover:text-[#dc2626] transition">
                    <span><NanoIcon type="group" size={14} /></span> Add to group
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-2 text-xs text-black hover:text-[#dc2626] transition">
                    <span><NanoIcon type="warning" size={14} /></span> Report
                  </Link>
                </li>
              </ul>
            </div>

            {/* General Info Text Box */}
            <div className="satin-texture luxury-border rounded-lg p-4 luxury-box-shadow">
              <h4 className="text-sm elegant-serif metallic-text mb-3 luxury-text-shadow">General Info</h4>
              <div className="luxury-divider mb-3"></div>
              <p className="text-xs text-gray-800 leading-relaxed">
                Welcome to my blog! This is a placeholder for general information about me.
              </p>
            </div>

            {/* Links Box */}
            <div className="bg-white luxury-border rounded-lg p-4 luxury-box-shadow">
              <h4 className="text-sm elegant-serif metallic-text mb-3 luxury-text-shadow">Links</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="text-xs text-[#dc2626] hover:text-[#b91c1c] transition font-bold">
                    <NanoIcon type="camera" size={14} /> Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-xs text-[#dc2626] hover:text-[#b91c1c] transition font-bold">
                    <NanoIcon type="music" size={14} /> TikTok
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Right Column - Main Content - 600-700px */}
          <div className="flex-1 space-y-4 min-w-0">
            {/* Blog Header Box */}
            <div className="relative satin-texture luxury-border rounded-lg p-6 luxury-box-shadow crown-decoration">
              {/* Luxury gold top border */}
              <div className="absolute top-0 left-0 right-0 h-8 luxury-gold-gradient border-b-4 border-black"></div>

              {/* Elegant decorative elements */}
              <div className="absolute top-3 right-4 flex items-center gap-2">
                <div className="w-10 h-10 luxury-gold-gradient border-2 border-black rounded-full flex items-center justify-center text-sm luxury-glow">
                  <NanoIcon type="crown" size={16} />
                </div>
              </div>

              {/* Luxury sparkles */}
              <div className="absolute top-2 left-4 flex gap-2">
                <span className="text-sm luxury-text-shadow"><NanoIcon type="sparkle" size={14} /></span>
                <span className="text-sm luxury-text-shadow" style={{ animationDelay: '0.3s' }}><NanoIcon type="star" size={14} /></span>
              </div>

              <div className="absolute top-1 right-12 text-xs animate-pulse luxury-text-shadow"><NanoIcon type="sparkle" size={12} /></div>
              <div className="absolute top-4 left-12 text-xs animate-pulse luxury-text-shadow" style={{ animationDelay: '0.5s' }}><NanoIcon type="sparkle" size={12} /></div>

              <div className="relative z-10 pt-12">
                <h2 className="text-2xl elegant-serif metallic-text mb-3 luxury-text-shadow">
                  nice to meet you
                </h2>
                <div className="luxury-divider"></div>
              </div>
            </div>

            {/* Blog Content Area */}
            <div className="relative satin-texture luxury-border rounded-lg p-8 luxury-box-shadow" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(251,191,36,0.15) 10px, rgba(251,191,36,0.15) 20px)'
            }}>
              {/* Quilted pattern overlay */}
              <div className="absolute inset-0 opacity-15 y2k-quilted"></div>

              {/* Elegant decorative stars around edges */}
              <div className="absolute top-3 left-3 text-sm luxury-text-shadow"><NanoIcon type="star" size={14} /></div>
              <div className="absolute top-3 right-3 text-sm luxury-text-shadow"><NanoIcon type="star" size={14} /></div>
              <div className="absolute bottom-3 left-3 text-sm luxury-text-shadow"><NanoIcon type="star" size={14} /></div>
              <div className="absolute bottom-3 right-3 text-sm luxury-text-shadow"><NanoIcon type="star" size={14} /></div>

              {/* Luxury ribbon decoration */}
              <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="luxury-gold-gradient border-2 border-black px-3 py-1 rounded-full text-xs text-black font-bold luxury-text-shadow"><NanoIcon type="star" size={12} /></div>
              </div>

              <div className="relative z-10 text-center py-10 fade-in">
                {/* Center illustration placeholder */}
                <div className="mb-8 text-5xl luxury-text-shadow animate-pulse"><NanoIcon type="phone" size={48} /></div>
                <p className="text-base elegant-serif text-gray-900 mb-4 font-semibold">
                  There are no blog entries yet.
                </p>
                <div className="luxury-divider w-32 mx-auto mb-4"></div>
                <p className="text-sm text-gray-800 font-semibold">
                  Check back soon for updates! <span className="inline-block luxury-text-shadow"><NanoIcon type="star" size={14} /></span>
                </p>

                {/* Add Blog Entry Button */}
                <div className="mt-8">
                  <button className="px-8 py-3 luxury-gold-gradient border-2 border-black rounded-full text-sm text-black font-bold luxury-text-shadow luxury-glow hover:shadow-xl transition-all luxury-button-hover">
                    <NanoIcon type="sparkle" size={14} /> Create Your First Post
                  </button>
                </div>
              </div>
            </div>

            {/* Dress-Up Widget Box */}
            <div className="relative bg-white luxury-border rounded-lg overflow-hidden luxury-box-shadow">
              {/* Mini Window Header */}
              <div className="bg-gradient-to-r from-[#dc2626] to-[#b91c1c] border-b-4 border-black px-4 py-3 flex items-center justify-between luxury-glow">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-white border border-black rounded-full"></div>
                    <div className="w-3 h-3 bg-white border border-black rounded-full"></div>
                    <div className="w-3 h-3 bg-white border border-black rounded-full"></div>
                  </div>
                  <div className="ml-2 px-2 py-0.5 bg-white/80 border border-black rounded text-xs text-black">
                    dress-up.app
                  </div>
                </div>
              </div>

              {/* Top button */}
              <div className="satin-texture border-b-4 border-black p-3 text-center relative">
                <button className="px-6 py-2 luxury-gold-gradient border-2 border-black rounded-full text-sm text-black hover:shadow-xl transition-all font-bold luxury-text-shadow luxury-glow">
                  let&apos;s dress up <span className="ml-1"><NanoIcon type="crown" size={14} /></span>
                </button>
                {/* Elegant sparkles around button */}
                <span className="absolute top-2 left-1/4 text-xs animate-pulse luxury-text-shadow"><NanoIcon type="sparkle" size={12} /></span>
                <span className="absolute top-2 right-1/4 text-xs animate-pulse luxury-text-shadow" style={{ animationDelay: '0.3s' }}><NanoIcon type="sparkle" size={12} /></span>
              </div>

              {/* Main Widget Box - Two Panels */}
              <div className="flex" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(251,191,36,0.1) 10px, rgba(251,191,36,0.1) 20px)'
              }}>
                {/* Left Panel - Paper Doll */}
                <div className="w-[380px] p-5 border-r-4 border-black satin-texture">
                  <div className="relative">
                    {/* Paper doll placeholder */}
                    <div className="flex flex-col items-center gap-3 mb-5">
                      <div className="w-36 h-52 bg-white luxury-border rounded flex items-center justify-center text-5xl luxury-box-shadow">
                        <NanoIcon type="dress" size={48} />
                      </div>
                      <div className="text-sm elegant-serif metallic-text luxury-text-shadow">@hime welcome.</div>
                    </div>

                    {/* Elegant decorative stars */}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-3">
                      <span className="text-xl luxury-text-shadow"><NanoIcon type="star" size={20} /></span>
                      <span className="text-xl luxury-text-shadow"><NanoIcon type="sparkle" size={20} /></span>
                      <span className="text-xl luxury-text-shadow"><NanoIcon type="star" size={20} /></span>
                      <span className="text-xl luxury-text-shadow"><NanoIcon type="sparkle" size={20} /></span>
                      <span className="text-xl luxury-text-shadow"><NanoIcon type="star" size={20} /></span>
                    </div>

                    {/* Crown decoration */}
                    <div className="absolute top-3 right-3 text-xl luxury-text-shadow"><NanoIcon type="crown" size={20} /></div>
                  </div>
                </div>

                {/* Right Panel - About Me */}
                <div className="flex-1 p-5 bg-white">
                  <h3 className="text-base elegant-serif metallic-text mb-3 luxury-text-shadow">about me</h3>
                  <div className="luxury-divider mb-4"></div>
                  <p className="text-xs text-gray-800 mb-5 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  {/* Elegant icons with sparkles */}
                  <div className="flex gap-3 mb-5 relative">
                    <span className="text-xl luxury-text-shadow"><NanoIcon type="lipstick" size={20} /></span>
                    <span className="text-xl luxury-text-shadow"><NanoIcon type="mirror" size={20} /></span>
                    <span className="text-xl luxury-text-shadow"><NanoIcon type="kiss" size={20} /></span>
                    <span className="absolute -top-1 -right-1 text-xs animate-pulse luxury-text-shadow"><NanoIcon type="sparkle" size={12} /></span>
                  </div>

                  {/* Fashion item preview box */}
                  <div className="luxury-border rounded p-3 satin-texture luxury-box-shadow">
                    <div className="w-full h-28 bg-white luxury-border rounded flex items-center justify-center text-3xl luxury-glow">
                      <NanoIcon type="tie" size={32} />
                    </div>
                    <p className="text-xs text-center mt-2 text-black elegant-serif font-semibold">Fashion Item</p>
                  </div>
                </div>
              </div>

              {/* Frame with polka dots */}
              <div className="absolute inset-0 pointer-events-none" style={{
                border: '2px solid black',
                borderRadius: '8px',
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '8px 8px',
                opacity: 0.3
              }}></div>
            </div>

            {/* Navigation Links */}
            <nav className="flex gap-3 text-sm">
              <Link
                href="/"
                className="px-5 py-2 luxury-gold-gradient border-2 border-black rounded-full text-sm text-black hover:shadow-xl transition-all font-bold luxury-text-shadow luxury-glow"
              >
                Back to phone splash <span className="ml-1"><NanoIcon type="crown" size={14} /></span>
              </Link>
              <Link
                href="/home"
                className="px-5 py-2 luxury-gold-gradient border-2 border-black rounded-full text-sm text-black hover:shadow-xl transition-all font-bold luxury-text-shadow luxury-glow"
              >
                Go to home <span className="ml-1"><NanoIcon type="crown" size={14} /></span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
