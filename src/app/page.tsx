"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Splash() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Sync all videos to play together
    const syncVideos = () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.currentTime = 0;
          video.play();
        }
      });
    };

    // Sync videos when they're ready
    videoRefs.current.forEach((video) => {
      if (video) {
        video.addEventListener('loadeddata', syncVideos);
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.removeEventListener('loadeddata', syncVideos);
        }
      });
    };
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-black px-0 md:px-4 overflow-y-auto" style={{ minHeight: '100dvh' }}>
      {/* Seamless Video Background - Multiple instances for infinite scroll */}
      <div className="fixed inset-0 w-full h-[300vh] pointer-events-none" style={{ zIndex: 0 }}>
        {[0, 1, 2].map((index) => (
          <div key={index}>
            {/* Mobile Video */}
            <video
              ref={(el) => {
                if (index < 3) videoRefs.current[index] = el;
              }}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute w-full h-screen object-contain md:hidden"
              style={{ 
                filter: 'blur(0.5px)',
                objectPosition: 'center',
                top: `${index * 100}vh`,
                width: '100%',
                height: '100vh'
              }}
            >
              <source src="/splash-background-mobile.mp4" type="video/mp4" />
            </video>
            {/* Desktop Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="hidden md:block absolute w-full h-screen object-cover"
              style={{ 
                filter: 'blur(0.5px)',
                objectPosition: 'center',
                top: `${index * 100}vh`,
                width: '100%',
                height: '100vh'
              }}
            >
              <source src="/splash-background.mp4" type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
      {/* Background overlay - Silver for mobile, black for desktop */}
      <div className="fixed inset-0 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 md:bg-black pointer-events-none" style={{ zIndex: -1 }}></div>
      
      {/* Content Container - Scrollable */}
      <div className="relative z-10 mx-auto flex min-h-[300vh] w-full items-center justify-center" style={{ minHeight: '300vh' }}>
        {/* First Screen Content */}
        <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
          <div className="relative flex items-center justify-center h-full w-full md:h-auto md:w-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl md:max-h-[98vh] md:mx-auto pointer-events-none">
            <Image
              src="/phone-splash.png"
              alt="Retro phone with buttons for Projects, Blog, Camera, and Games"
              width={768}
              height={1144}
              priority
              className="h-full w-full object-contain select-none drop-shadow-[0_18px_60px_rgba(0,0,0,0.9)] md:max-h-[98vh] pointer-events-none"
            />

            {/* Projects / Portfolio (top-left key) */}
            <Link
              href="/portfolio"
              aria-label="Go to Projects and Portfolio"
              className="absolute left-[28%] top-[41.5%] h-[6%] w-[12%] rounded-full outline-none ring-indigo-400/80 ring-offset-2 ring-offset-black transition focus-visible:ring hover:bg-white/10 pointer-events-auto z-20"
            />

            {/* Blog (top-right key) */}
            <Link
              href="/blog"
              aria-label="Go to Blog"
              className="absolute right-[19%] top-[41.5%] h-[6%] w-[18%] rounded-full outline-none ring-indigo-400/80 ring-offset-2 ring-offset-black transition focus-visible:ring hover:bg-white/10 pointer-events-auto z-20"
            />

            {/* Camera (bottom-left key) */}
            <Link
              href="/camera"
              aria-label="Go to Camera"
              className="absolute left-[28%] top-[53%] h-[6%] w-[12%] rounded-full outline-none ring-indigo-400/80 ring-offset-2 ring-offset-black transition focus-visible:ring hover:bg-white/10 pointer-events-auto z-20"
            />

            {/* Games (bottom-right key) */}
            <Link
              href="/games"
              aria-label="Go to Games"
              className="absolute right-[19%] top-[53%] h-[6%] w-[18%] rounded-full outline-none ring-indigo-400/80 ring-offset-2 ring-offset-black transition focus-visible:ring hover:bg-white/10 pointer-events-auto z-20"
            />

            {/* Center Home button */}
            <Link
              href="/home"
              aria-label="Go to Home"
              className="absolute left-1/2 top-[46.8%] h-[9%] w-[14%] -translate-x-1/2 rounded-full outline-none ring-indigo-400/80 ring-offset-2 ring-offset-black transition focus-visible:ring hover:bg-white/10 pointer-events-auto z-20"
            />
          </div>
        </div>
        
        {/* Additional scrollable sections for seamless video experience */}
        <div className="absolute top-[100vh] left-0 right-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 10 }}>
          <div className="relative flex items-center justify-center h-screen w-full md:h-auto md:w-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl md:max-h-[98vh] md:mx-auto">
            <Image
              src="/phone-splash.png"
              alt="Retro phone with buttons for Projects, Blog, Camera, and Games"
              width={768}
              height={1144}
              priority
              className="h-full w-full object-contain select-none drop-shadow-[0_18px_60px_rgba(0,0,0,0.9)] md:max-h-[98vh] opacity-50"
            />
          </div>
        </div>
        
        <div className="absolute top-[200vh] left-0 right-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 10 }}>
          <div className="relative flex items-center justify-center h-screen w-full md:h-auto md:w-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl md:max-h-[98vh] md:mx-auto">
            <Image
              src="/phone-splash.png"
              alt="Retro phone with buttons for Projects, Blog, Camera, and Games"
              width={768}
              height={1144}
              priority
              className="h-full w-full object-contain select-none drop-shadow-[0_18px_60px_rgba(0,0,0,0.9)] md:max-h-[98vh] opacity-30"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

