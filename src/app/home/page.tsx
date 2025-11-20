"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function HomePage() {
  // Music icon state
  const [musicPosition, setMusicPosition] = useState({ x: 16, y: 100 }); // Under header (80px header + 20px padding)
  const [isDraggingMusic, setIsDraggingMusic] = useState(false);
  const [hasMovedMusic, setHasMovedMusic] = useState(false);
  const [dragStartMusic, setDragStartMusic] = useState({ x: 0, y: 0 });
  const musicIconRef = useRef<HTMLDivElement>(null);
  const musicLinkRef = useRef<HTMLAnchorElement>(null);

  // Favorite Places icon state
  const [placesPosition, setPlacesPosition] = useState({ x: 200, y: 100 }); // Under header
  const [isDraggingPlaces, setIsDraggingPlaces] = useState(false);
  const [hasMovedPlaces, setHasMovedPlaces] = useState(false);
  const [dragStartPlaces, setDragStartPlaces] = useState({ x: 0, y: 0 });
  const placesIconRef = useRef<HTMLDivElement>(null);
  const placesLinkRef = useRef<HTMLAnchorElement>(null);

  // Thirsty icon state
  const [thirstyPosition, setThirstyPosition] = useState({ x: 384, y: 100 }); // Under header, to the right
  const [isDraggingThirsty, setIsDraggingThirsty] = useState(false);
  const [hasMovedThirsty, setHasMovedThirsty] = useState(false);
  const [dragStartThirsty, setDragStartThirsty] = useState({ x: 0, y: 0 });
  const thirstyIconRef = useRef<HTMLDivElement>(null);
  const thirstyLinkRef = useRef<HTMLAnchorElement>(null);

  // Kids icon state
  const [kidsPosition, setKidsPosition] = useState({ x: 568, y: 100 }); // Under header, further to the right
  const [isDraggingKids, setIsDraggingKids] = useState(false);
  const [hasMovedKids, setHasMovedKids] = useState(false);
  const [dragStartKids, setDragStartKids] = useState({ x: 0, y: 0 });
  const kidsIconRef = useRef<HTMLDivElement>(null);
  const kidsLinkRef = useRef<HTMLAnchorElement>(null);

  // Music icon handlers
  const handleMusicMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDraggingMusic(true);
    setHasMovedMusic(false);
    setDragStartMusic({
      x: e.clientX - musicPosition.x,
      y: e.clientY - musicPosition.y,
    });
  };

  const handleMusicTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    setIsDraggingMusic(true);
    setHasMovedMusic(false);
    setDragStartMusic({
      x: touch.clientX - musicPosition.x,
      y: touch.clientY - musicPosition.y,
    });
  };

  // Favorite Places icon handlers
  const handlePlacesMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDraggingPlaces(true);
    setHasMovedPlaces(false);
    setDragStartPlaces({
      x: e.clientX - placesPosition.x,
      y: e.clientY - placesPosition.y,
    });
  };

  const handlePlacesTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    setIsDraggingPlaces(true);
    setHasMovedPlaces(false);
    setDragStartPlaces({
      x: touch.clientX - placesPosition.x,
      y: touch.clientY - placesPosition.y,
    });
  };

  // Thirsty icon handlers
  const handleThirstyMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDraggingThirsty(true);
    setHasMovedThirsty(false);
    setDragStartThirsty({
      x: e.clientX - thirstyPosition.x,
      y: e.clientY - thirstyPosition.y,
    });
  };

  const handleThirstyTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    setIsDraggingThirsty(true);
    setHasMovedThirsty(false);
    setDragStartThirsty({
      x: touch.clientX - thirstyPosition.x,
      y: touch.clientY - thirstyPosition.y,
    });
  };

  // Kids icon handlers
  const handleKidsMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDraggingKids(true);
    setHasMovedKids(false);
    setDragStartKids({
      x: e.clientX - kidsPosition.x,
      y: e.clientY - kidsPosition.y,
    });
  };

  const handleKidsTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    setIsDraggingKids(true);
    setHasMovedKids(false);
    setDragStartKids({
      x: touch.clientX - kidsPosition.x,
      y: touch.clientY - kidsPosition.y,
    });
  };

  // Music icon drag effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingMusic) {
        const newX = e.clientX - dragStartMusic.x;
        const newY = e.clientY - dragStartMusic.y;
        
        const deltaX = Math.abs(newX - musicPosition.x);
        const deltaY = Math.abs(newY - musicPosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedMusic(true);
        }
        
        const maxX = window.innerWidth - (musicIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (musicIconRef.current?.offsetHeight || 200);
        
        setMusicPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingMusic) {
        e.preventDefault();
        const touch = e.touches[0];
        const newX = touch.clientX - dragStartMusic.x;
        const newY = touch.clientY - dragStartMusic.y;
        
        const deltaX = Math.abs(newX - musicPosition.x);
        const deltaY = Math.abs(newY - musicPosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedMusic(true);
        }
        
        const maxX = window.innerWidth - (musicIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (musicIconRef.current?.offsetHeight || 200);
        
        setMusicPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDraggingMusic(false);
      setTimeout(() => setHasMovedMusic(false), 100);
    };

    if (isDraggingMusic) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDraggingMusic, dragStartMusic, musicPosition]);

  // Favorite Places icon drag effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingPlaces) {
        const newX = e.clientX - dragStartPlaces.x;
        const newY = e.clientY - dragStartPlaces.y;
        
        const deltaX = Math.abs(newX - placesPosition.x);
        const deltaY = Math.abs(newY - placesPosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedPlaces(true);
        }
        
        const maxX = window.innerWidth - (placesIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (placesIconRef.current?.offsetHeight || 200);
        
        setPlacesPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingPlaces) {
        e.preventDefault();
        const touch = e.touches[0];
        const newX = touch.clientX - dragStartPlaces.x;
        const newY = touch.clientY - dragStartPlaces.y;
        
        const deltaX = Math.abs(newX - placesPosition.x);
        const deltaY = Math.abs(newY - placesPosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedPlaces(true);
        }
        
        const maxX = window.innerWidth - (placesIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (placesIconRef.current?.offsetHeight || 200);
        
        setPlacesPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDraggingPlaces(false);
      setTimeout(() => setHasMovedPlaces(false), 100);
    };

    if (isDraggingPlaces) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDraggingPlaces, dragStartPlaces, placesPosition]);

  // Thirsty icon drag effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingThirsty) {
        const newX = e.clientX - dragStartThirsty.x;
        const newY = e.clientY - dragStartThirsty.y;
        
        const deltaX = Math.abs(newX - thirstyPosition.x);
        const deltaY = Math.abs(newY - thirstyPosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedThirsty(true);
        }
        
        const maxX = window.innerWidth - (thirstyIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (thirstyIconRef.current?.offsetHeight || 200);
        
        setThirstyPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingThirsty) {
        e.preventDefault();
        const touch = e.touches[0];
        const newX = touch.clientX - dragStartThirsty.x;
        const newY = touch.clientY - dragStartThirsty.y;
        
        const deltaX = Math.abs(newX - thirstyPosition.x);
        const deltaY = Math.abs(newY - thirstyPosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedThirsty(true);
        }
        
        const maxX = window.innerWidth - (thirstyIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (thirstyIconRef.current?.offsetHeight || 200);
        
        setThirstyPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDraggingThirsty(false);
      setTimeout(() => setHasMovedThirsty(false), 100);
    };

    if (isDraggingThirsty) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDraggingThirsty, dragStartThirsty, thirstyPosition]);

  // Kids icon drag effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingKids) {
        const newX = e.clientX - dragStartKids.x;
        const newY = e.clientY - dragStartKids.y;
        
        const deltaX = Math.abs(newX - kidsPosition.x);
        const deltaY = Math.abs(newY - kidsPosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedKids(true);
        }
        
        const maxX = window.innerWidth - (kidsIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (kidsIconRef.current?.offsetHeight || 200);
        
        setKidsPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingKids) {
        e.preventDefault();
        const touch = e.touches[0];
        const newX = touch.clientX - dragStartKids.x;
        const newY = touch.clientY - dragStartKids.y;
        
        const deltaX = Math.abs(newX - kidsPosition.x);
        const deltaY = Math.abs(newY - kidsPosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedKids(true);
        }
        
        const maxX = window.innerWidth - (kidsIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (kidsIconRef.current?.offsetHeight || 200);
        
        setKidsPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDraggingKids(false);
      setTimeout(() => setHasMovedKids(false), 100);
    };

    if (isDraggingKids) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDraggingKids, dragStartKids, kidsPosition]);

  const handleMusicLinkClick = (e: React.MouseEvent) => {
    if (hasMovedMusic || isDraggingMusic) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handlePlacesLinkClick = (e: React.MouseEvent) => {
    if (hasMovedPlaces || isDraggingPlaces) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleThirstyLinkClick = (e: React.MouseEvent) => {
    if (hasMovedThirsty || isDraggingThirsty) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleKidsLinkClick = (e: React.MouseEvent) => {
    if (hasMovedKids || isDraggingKids) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <main className="fixed inset-0 h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/home-background.jpg"
        alt="Home background"
        fill
        className="object-cover blur-sm"
        priority
        quality={90}
      />
      
      {/* Silver Header */}
      <header className="absolute top-0 left-0 right-0 z-20 h-20 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 border-b border-slate-400/50 shadow-lg"></header>
      
      {/* Music Icon */}
      <div
        ref={musicIconRef}
        className="absolute z-10 flex flex-col items-center gap-2 cursor-move select-none"
        style={{
          left: `${musicPosition.x}px`,
          top: `${musicPosition.y}px`,
          transition: isDraggingMusic ? "none" : "left 0.2s ease, top 0.2s ease",
        }}
        onMouseDown={handleMusicMouseDown}
        onTouchStart={handleMusicTouchStart}
      >
        <Link
          ref={musicLinkRef}
          href="/music"
          onClick={handleMusicLinkClick}
          className="flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        >
          <div className="relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl sm:h-40 sm:w-40">
            <Image
              src="/music-icon.jpg"
              alt="Music app icon"
              fill
              className="object-cover"
              quality={90}
              draggable={false}
            />
          </div>
          <p className="text-xs font-medium text-white drop-shadow-lg sm:text-sm">Music</p>
        </Link>
      </div>

      {/* Favorite Places Icon */}
      <div
        ref={placesIconRef}
        className="absolute z-10 flex flex-col items-center gap-2 cursor-move select-none"
        style={{
          left: `${placesPosition.x}px`,
          top: `${placesPosition.y}px`,
          transition: isDraggingPlaces ? "none" : "left 0.2s ease, top 0.2s ease",
        }}
        onMouseDown={handlePlacesMouseDown}
        onTouchStart={handlePlacesTouchStart}
      >
        <Link
          ref={placesLinkRef}
          href="/favorite-places"
          onClick={handlePlacesLinkClick}
          className="flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        >
          <div className="relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl sm:h-40 sm:w-40">
            <Image
              src="/favorite-places-icon.png"
              alt="Favorite Places app icon"
              fill
              className="object-cover"
              quality={90}
              draggable={false}
            />
          </div>
          <p className="text-xs font-medium text-white drop-shadow-lg sm:text-sm">Favorite Places</p>
        </Link>
      </div>

      {/* Thirsty Icon */}
      <div
        ref={thirstyIconRef}
        className="absolute z-10 flex flex-col items-center gap-2 cursor-move select-none"
        style={{
          left: `${thirstyPosition.x}px`,
          top: `${thirstyPosition.y}px`,
          transition: isDraggingThirsty ? "none" : "left 0.2s ease, top 0.2s ease",
        }}
        onMouseDown={handleThirstyMouseDown}
        onTouchStart={handleThirstyTouchStart}
      >
        <Link
          ref={thirstyLinkRef}
          href="/thirsty"
          onClick={handleThirstyLinkClick}
          className="flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        >
          <div className="relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl sm:h-40 sm:w-40">
            <Image
              src="/thirsty-icon.png"
              alt="Thirsty app icon"
              fill
              className="object-cover"
              quality={90}
              draggable={false}
            />
          </div>
          <p className="text-xs font-medium text-white drop-shadow-lg sm:text-sm">Thirsty?</p>
        </Link>
      </div>

      {/* Kids Icon */}
      <div
        ref={kidsIconRef}
        className="absolute z-10 flex flex-col items-center gap-2 cursor-move select-none"
        style={{
          left: `${kidsPosition.x}px`,
          top: `${kidsPosition.y}px`,
          transition: isDraggingKids ? "none" : "left 0.2s ease, top 0.2s ease",
        }}
        onMouseDown={handleKidsMouseDown}
        onTouchStart={handleKidsTouchStart}
      >
        <Link
          ref={kidsLinkRef}
          href="/kids"
          onClick={handleKidsLinkClick}
          className="flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        >
          <div className="relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl sm:h-40 sm:w-40">
            <Image
              src="/kids-icon.png"
              alt="Kids app icon"
              fill
              className="object-cover"
              quality={90}
              draggable={false}
            />
          </div>
          <p className="text-xs font-medium text-white drop-shadow-lg sm:text-sm">Kids</p>
        </Link>
      </div>
    </main>
  );
}

