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
  const [placesPosition, setPlacesPosition] = useState({ x: 568, y: 100 }); // Swapped with Kids
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
  const [kidsPosition, setKidsPosition] = useState({ x: 200, y: 100 }); // Swapped with Favorite Places
  const [isDraggingKids, setIsDraggingKids] = useState(false);
  const [hasMovedKids, setHasMovedKids] = useState(false);
  const [dragStartKids, setDragStartKids] = useState({ x: 0, y: 0 });
  const kidsIconRef = useRef<HTMLDivElement>(null);
  const kidsLinkRef = useRef<HTMLAnchorElement>(null);

  // Experience icon state
  const [experiencePosition, setExperiencePosition] = useState({ x: 16, y: 280 }); // Second row, left side
  const [isDraggingExperience, setIsDraggingExperience] = useState(false);
  const [hasMovedExperience, setHasMovedExperience] = useState(false);
  const [dragStartExperience, setDragStartExperience] = useState({ x: 0, y: 0 });
  const experienceIconRef = useRef<HTMLDivElement>(null);
  const experienceLinkRef = useRef<HTMLAnchorElement>(null);

  // Miscellaneous icon state
  const [miscPosition, setMiscPosition] = useState({ x: 200, y: 280 }); // Second row, right side
  const [isDraggingMisc, setIsDraggingMisc] = useState(false);
  const [hasMovedMisc, setHasMovedMisc] = useState(false);
  const [dragStartMisc, setDragStartMisc] = useState({ x: 0, y: 0 });
  const miscIconRef = useRef<HTMLDivElement>(null);
  const miscLinkRef = useRef<HTMLAnchorElement>(null);

  // My World icon state
  const [myWorldPosition, setMyWorldPosition] = useState({ x: 384, y: 280 }); // Second row, center-right
  const [isDraggingMyWorld, setIsDraggingMyWorld] = useState(false);
  const [hasMovedMyWorld, setHasMovedMyWorld] = useState(false);
  const [dragStartMyWorld, setDragStartMyWorld] = useState({ x: 0, y: 0 });
  const myWorldIconRef = useRef<HTMLDivElement>(null);
  const myWorldLinkRef = useRef<HTMLAnchorElement>(null);

  // Family Zone icon state
  const [familyZonePosition, setFamilyZonePosition] = useState({ x: 568, y: 280 }); // Second row, right side
  const [isDraggingFamilyZone, setIsDraggingFamilyZone] = useState(false);
  const [hasMovedFamilyZone, setHasMovedFamilyZone] = useState(false);
  const [dragStartFamilyZone, setDragStartFamilyZone] = useState({ x: 0, y: 0 });
  const familyZoneIconRef = useRef<HTMLDivElement>(null);
  const familyZoneLinkRef = useRef<HTMLAnchorElement>(null);

  // Enter if you dare icon state
  const [enterIfYouDarePosition, setEnterIfYouDarePosition] = useState({ x: 752, y: 100 }); // First row, right side next to Favorite Places
  const [isDraggingEnterIfYouDare, setIsDraggingEnterIfYouDare] = useState(false);
  const [hasMovedEnterIfYouDare, setHasMovedEnterIfYouDare] = useState(false);
  const [dragStartEnterIfYouDare, setDragStartEnterIfYouDare] = useState({ x: 0, y: 0 });
  const enterIfYouDareIconRef = useRef<HTMLDivElement>(null);
  const enterIfYouDareLinkRef = useRef<HTMLAnchorElement>(null);

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

  // Experience icon handlers
  const handleExperienceMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDraggingExperience(true);
    setHasMovedExperience(false);
    setDragStartExperience({
      x: e.clientX - experiencePosition.x,
      y: e.clientY - experiencePosition.y,
    });
  };

  const handleExperienceTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    setIsDraggingExperience(true);
    setHasMovedExperience(false);
    setDragStartExperience({
      x: touch.clientX - experiencePosition.x,
      y: touch.clientY - experiencePosition.y,
    });
  };

  // Miscellaneous icon handlers
  const handleMiscMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDraggingMisc(true);
    setHasMovedMisc(false);
    setDragStartMisc({
      x: e.clientX - miscPosition.x,
      y: e.clientY - miscPosition.y,
    });
  };

  const handleMiscTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    setIsDraggingMisc(true);
    setHasMovedMisc(false);
    setDragStartMisc({
      x: touch.clientX - miscPosition.x,
      y: touch.clientY - miscPosition.y,
    });
  };

  // My World icon handlers
  const handleMyWorldMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDraggingMyWorld(true);
    setHasMovedMyWorld(false);
    setDragStartMyWorld({
      x: e.clientX - myWorldPosition.x,
      y: e.clientY - myWorldPosition.y,
    });
  };

  const handleMyWorldTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    setIsDraggingMyWorld(true);
    setHasMovedMyWorld(false);
    setDragStartMyWorld({
      x: touch.clientX - myWorldPosition.x,
      y: touch.clientY - myWorldPosition.y,
    });
  };

  // Family Zone icon handlers
  const handleFamilyZoneMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDraggingFamilyZone(true);
    setHasMovedFamilyZone(false);
    setDragStartFamilyZone({
      x: e.clientX - familyZonePosition.x,
      y: e.clientY - familyZonePosition.y,
    });
  };

  const handleFamilyZoneTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    setIsDraggingFamilyZone(true);
    setHasMovedFamilyZone(false);
    setDragStartFamilyZone({
      x: touch.clientX - familyZonePosition.x,
      y: touch.clientY - familyZonePosition.y,
    });
  };

  // Enter if you dare icon handlers
  const handleEnterIfYouDareMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDraggingEnterIfYouDare(true);
    setHasMovedEnterIfYouDare(false);
    setDragStartEnterIfYouDare({
      x: e.clientX - enterIfYouDarePosition.x,
      y: e.clientY - enterIfYouDarePosition.y,
    });
  };

  const handleEnterIfYouDareTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    setIsDraggingEnterIfYouDare(true);
    setHasMovedEnterIfYouDare(false);
    setDragStartEnterIfYouDare({
      x: touch.clientX - enterIfYouDarePosition.x,
      y: touch.clientY - enterIfYouDarePosition.y,
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

  // Experience icon drag effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingExperience) {
        const newX = e.clientX - dragStartExperience.x;
        const newY = e.clientY - dragStartExperience.y;
        
        const deltaX = Math.abs(newX - experiencePosition.x);
        const deltaY = Math.abs(newY - experiencePosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedExperience(true);
        }
        
        const maxX = window.innerWidth - (experienceIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (experienceIconRef.current?.offsetHeight || 200);
        
        setExperiencePosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingExperience) {
        e.preventDefault();
        const touch = e.touches[0];
        const newX = touch.clientX - dragStartExperience.x;
        const newY = touch.clientY - dragStartExperience.y;
        
        const deltaX = Math.abs(newX - experiencePosition.x);
        const deltaY = Math.abs(newY - experiencePosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedExperience(true);
        }
        
        const maxX = window.innerWidth - (experienceIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (experienceIconRef.current?.offsetHeight || 200);
        
        setExperiencePosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDraggingExperience(false);
      setTimeout(() => setHasMovedExperience(false), 100);
    };

    if (isDraggingExperience) {
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
  }, [isDraggingExperience, dragStartExperience, experiencePosition]);

  // Miscellaneous icon drag effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingMisc) {
        const newX = e.clientX - dragStartMisc.x;
        const newY = e.clientY - dragStartMisc.y;
        
        const deltaX = Math.abs(newX - miscPosition.x);
        const deltaY = Math.abs(newY - miscPosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedMisc(true);
        }
        
        const maxX = window.innerWidth - (miscIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (miscIconRef.current?.offsetHeight || 200);
        
        setMiscPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingMisc) {
        e.preventDefault();
        const touch = e.touches[0];
        const newX = touch.clientX - dragStartMisc.x;
        const newY = touch.clientY - dragStartMisc.y;
        
        const deltaX = Math.abs(newX - miscPosition.x);
        const deltaY = Math.abs(newY - miscPosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedMisc(true);
        }
        
        const maxX = window.innerWidth - (miscIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (miscIconRef.current?.offsetHeight || 200);
        
        setMiscPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDraggingMisc(false);
      setTimeout(() => setHasMovedMisc(false), 100);
    };

    if (isDraggingMisc) {
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
  }, [isDraggingMisc, dragStartMisc, miscPosition]);

  // My World icon drag effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingMyWorld) {
        const newX = e.clientX - dragStartMyWorld.x;
        const newY = e.clientY - dragStartMyWorld.y;
        
        const deltaX = Math.abs(newX - myWorldPosition.x);
        const deltaY = Math.abs(newY - myWorldPosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedMyWorld(true);
        }
        
        const maxX = window.innerWidth - (myWorldIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (myWorldIconRef.current?.offsetHeight || 200);
        
        setMyWorldPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingMyWorld) {
        e.preventDefault();
        const touch = e.touches[0];
        const newX = touch.clientX - dragStartMyWorld.x;
        const newY = touch.clientY - dragStartMyWorld.y;
        
        const deltaX = Math.abs(newX - myWorldPosition.x);
        const deltaY = Math.abs(newY - myWorldPosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedMyWorld(true);
        }
        
        const maxX = window.innerWidth - (myWorldIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (myWorldIconRef.current?.offsetHeight || 200);
        
        setMyWorldPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDraggingMyWorld(false);
      setTimeout(() => setHasMovedMyWorld(false), 100);
    };

    if (isDraggingMyWorld) {
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
  }, [isDraggingMyWorld, dragStartMyWorld, myWorldPosition]);

  // Family Zone icon drag effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingFamilyZone) {
        const newX = e.clientX - dragStartFamilyZone.x;
        const newY = e.clientY - dragStartFamilyZone.y;
        
        const deltaX = Math.abs(newX - familyZonePosition.x);
        const deltaY = Math.abs(newY - familyZonePosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedFamilyZone(true);
        }
        
        const maxX = window.innerWidth - (familyZoneIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (familyZoneIconRef.current?.offsetHeight || 200);
        
        setFamilyZonePosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingFamilyZone) {
        e.preventDefault();
        const touch = e.touches[0];
        const newX = touch.clientX - dragStartFamilyZone.x;
        const newY = touch.clientY - dragStartFamilyZone.y;
        
        const deltaX = Math.abs(newX - familyZonePosition.x);
        const deltaY = Math.abs(newY - familyZonePosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedFamilyZone(true);
        }
        
        const maxX = window.innerWidth - (familyZoneIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (familyZoneIconRef.current?.offsetHeight || 200);
        
        setFamilyZonePosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDraggingFamilyZone(false);
      setTimeout(() => setHasMovedFamilyZone(false), 100);
    };

    if (isDraggingFamilyZone) {
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
  }, [isDraggingFamilyZone, dragStartFamilyZone, familyZonePosition]);

  // Enter if you dare icon drag effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingEnterIfYouDare) {
        const newX = e.clientX - dragStartEnterIfYouDare.x;
        const newY = e.clientY - dragStartEnterIfYouDare.y;
        
        const deltaX = Math.abs(newX - enterIfYouDarePosition.x);
        const deltaY = Math.abs(newY - enterIfYouDarePosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedEnterIfYouDare(true);
        }
        
        const maxX = window.innerWidth - (enterIfYouDareIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (enterIfYouDareIconRef.current?.offsetHeight || 200);
        
        setEnterIfYouDarePosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingEnterIfYouDare) {
        e.preventDefault();
        const touch = e.touches[0];
        const newX = touch.clientX - dragStartEnterIfYouDare.x;
        const newY = touch.clientY - dragStartEnterIfYouDare.y;
        
        const deltaX = Math.abs(newX - enterIfYouDarePosition.x);
        const deltaY = Math.abs(newY - enterIfYouDarePosition.y);
        if (deltaX > 5 || deltaY > 5) {
          setHasMovedEnterIfYouDare(true);
        }
        
        const maxX = window.innerWidth - (enterIfYouDareIconRef.current?.offsetWidth || 160);
        const maxY = window.innerHeight - (enterIfYouDareIconRef.current?.offsetHeight || 200);
        
        setEnterIfYouDarePosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDraggingEnterIfYouDare(false);
      setTimeout(() => setHasMovedEnterIfYouDare(false), 100);
    };

    if (isDraggingEnterIfYouDare) {
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
  }, [isDraggingEnterIfYouDare, dragStartEnterIfYouDare, enterIfYouDarePosition]);

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

  const handleExperienceLinkClick = (e: React.MouseEvent) => {
    if (hasMovedExperience || isDraggingExperience) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleMiscLinkClick = (e: React.MouseEvent) => {
    if (hasMovedMisc || isDraggingMisc) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleMyWorldLinkClick = (e: React.MouseEvent) => {
    if (hasMovedMyWorld || isDraggingMyWorld) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleFamilyZoneLinkClick = (e: React.MouseEvent) => {
    if (hasMovedFamilyZone || isDraggingFamilyZone) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleEnterIfYouDareLinkClick = (e: React.MouseEvent) => {
    if (hasMovedEnterIfYouDare || isDraggingEnterIfYouDare) {
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
      <header className="absolute top-0 left-0 right-0 z-20 h-20 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 border-b border-slate-400/50 shadow-lg flex items-center justify-between px-4">
        <nav className="flex gap-2">
          <Link
            href="/home"
            className="relative group px-3 py-1 rounded-full text-xs font-semibold text-slate-700 bg-white/80 hover:bg-white transition-all shadow-md"
            title="A bit of everything"
          >
            Home
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              A bit of everything
            </span>
          </Link>
          <Link
            href="/blog"
            className="relative group px-3 py-1 rounded-full text-xs font-semibold text-slate-700 bg-white/80 hover:bg-white transition-all shadow-md"
            title="Anahely's Digital Diary"
          >
            Blog
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Anahely's Digital Diary
            </span>
          </Link>
          <Link
            href="/profile"
            className="relative group px-3 py-1 rounded-full text-xs font-semibold text-slate-700 bg-white/80 hover:bg-white transition-all shadow-md"
            title="Your Profile"
          >
            Profile
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Your Profile
            </span>
          </Link>
          <Link
            href="/social-club"
            className="relative group px-3 py-1 rounded-full text-xs font-semibold text-slate-700 bg-white/80 hover:bg-white transition-all shadow-md"
            title="Social Media Feed"
          >
            Social club
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Social Media Feed
            </span>
          </Link>
        </nav>
        <Link
          href="/"
          className="relative group px-4 py-2 rounded-full font-semibold text-slate-700 bg-white/80 hover:bg-white transition-all shadow-md hover:scale-105"
          title="Back to Splash"
        >
          📱 Splash Screen
          <span className="absolute bottom-full right-0 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            Back to Splash
          </span>
        </Link>
        </header>
      
      {/* Mobile Grid Layout - 2 icons per row */}
      <div className="md:hidden pt-24 px-4 pb-8" style={{ paddingTop: '100px' }}>
        <div className="grid grid-cols-2 gap-6 justify-items-center">
          {/* Music Icon - Mobile */}
          <Link
            href="/music"
            className="relative group flex flex-col items-center gap-2 transition-transform active:scale-95"
            title="Discover & Play Music"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/music-icon.jpg"
                alt="Music app icon"
                fill
                className="object-cover"
                quality={90}
                draggable={false}
              />
            </div>
            <p className="text-xs font-medium text-white drop-shadow-lg">Music</p>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-active:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Discover & Play Music
            </span>
          </Link>

          {/* Kids Icon - Mobile */}
          <Link
            href="/kids"
            className="relative group flex flex-col items-center gap-2 transition-transform active:scale-95"
            title="Kids Activities & Games"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/kids-icon.png"
                alt="Kids app icon"
                fill
                className="object-cover"
                quality={90}
                draggable={false}
              />
            </div>
            <p className="text-xs font-medium text-white drop-shadow-lg">Kids</p>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-active:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Kids Activities & Games
            </span>
          </Link>

          {/* Thirsty Icon - Mobile */}
          <Link
            href="/thirsty"
            className="relative group flex flex-col items-center gap-2 transition-transform active:scale-95"
            title="Luxury Cocktail Bar"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/thirsty-icon.png"
                alt="Thirsty app icon"
                fill
                className="object-cover"
                quality={90}
                draggable={false}
              />
            </div>
            <p className="text-xs font-medium text-white drop-shadow-lg">Thirsty?</p>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-active:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Luxury Cocktail Bar
            </span>
          </Link>

          {/* Favorite Places Icon - Mobile */}
          <Link
            href="/favorite-places"
            className="relative group flex flex-col items-center gap-2 transition-transform active:scale-95"
            title="Your Favorite Locations"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/favorite-places-icon.png"
                alt="Favorite Places app icon"
                fill
                className="object-cover"
                quality={90}
                draggable={false}
              />
            </div>
            <p className="text-xs font-medium text-white drop-shadow-lg">Favorite Places</p>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-active:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Your Favorite Locations
            </span>
          </Link>

          {/* Experience Icon - Mobile */}
          <Link
            href="/experience"
            className="relative group flex flex-col items-center gap-2 transition-transform active:scale-95"
            title="Explore Experiences"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/experience-icon.png"
                alt="The Experience app icon"
                fill
                className="object-cover"
                quality={90}
                draggable={false}
              />
            </div>
            <p className="text-xs font-medium text-white drop-shadow-lg">The Experience</p>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-active:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Explore Experiences
            </span>
          </Link>

          {/* Miscellaneous Icon - Mobile */}
          <Link
            href="/miscellaneous"
            className="relative group flex flex-col items-center gap-2 transition-transform active:scale-95"
            title="Mixed Aesthetic Content"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/miscellaneous-icon.png"
                alt="Miscellaneous app icon"
                fill
                className="object-cover"
                quality={90}
                draggable={false}
              />
            </div>
            <p className="text-xs font-medium text-white drop-shadow-lg">Miscellaneous</p>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-active:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Mixed Aesthetic Content
            </span>
          </Link>

          {/* My World Icon - Mobile */}
          <Link
            href="/my-world"
            className="relative group flex flex-col items-center gap-2 transition-transform active:scale-95"
            title="Personal Magazine Style"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/my-world-icon.png"
                alt="My World app icon"
                fill
                className="object-cover"
                quality={90}
                draggable={false}
              />
            </div>
            <p className="text-xs font-medium text-white drop-shadow-lg">My World</p>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-active:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Personal Magazine Style
            </span>
          </Link>

          {/* Family Zone Icon - Mobile */}
          <Link
            href="/family-zone"
            className="relative group flex flex-col items-center gap-2 transition-transform active:scale-95"
            title="Family Content by Age"
          >
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/family-zone-icon.png"
                alt="Family Zone app icon"
                fill
                className="object-cover"
                quality={90}
                draggable={false}
              />
            </div>
            <p className="text-[10px] font-medium text-white drop-shadow-lg">Family Zone</p>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-active:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Family Content by Age
            </span>
          </Link>

          {/* Enter if you dare Icon - Mobile */}
          <Link
            href="/enter-if-you-dare"
            className="relative group flex flex-col items-center gap-2 transition-transform active:scale-95"
            title="Special Content"
          >
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/enter-if-you-dare-icon.png"
                alt="Enter if you dare app icon"
                fill
                className="object-cover"
                quality={90}
                draggable={false}
              />
            </div>
            <p className="text-[10px] font-medium text-white drop-shadow-lg">Enter if you dare</p>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-active:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Special Content
            </span>
          </Link>
        </div>
      </div>
      
      {/* Desktop Icons - Absolute Positioning */}
      {/* Music Icon */}
      <div
        ref={musicIconRef}
        className="hidden md:flex absolute z-10 flex-col items-center gap-2 cursor-move select-none"
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
          className="relative group flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          title="Discover & Play Music"
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
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            Discover & Play Music
          </span>
        </Link>
      </div>

      {/* Favorite Places Icon */}
      <div
        ref={placesIconRef}
        className="hidden md:flex absolute z-10 flex-col items-center gap-2 cursor-move select-none"
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
          className="relative group flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          title="Your Favorite Locations"
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
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            Your Favorite Locations
          </span>
        </Link>
      </div>

      {/* Thirsty Icon */}
      <div
        ref={thirstyIconRef}
        className="hidden md:flex absolute z-10 flex-col items-center gap-2 cursor-move select-none"
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
          className="relative group flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          title="Luxury Cocktail Bar"
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
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            Luxury Cocktail Bar
          </span>
        </Link>
      </div>

      {/* Kids Icon */}
      <div
        ref={kidsIconRef}
        className="hidden md:flex absolute z-10 flex-col items-center gap-2 cursor-move select-none"
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
          className="relative group flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          title="Kids Activities & Games"
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
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            Kids Activities & Games
          </span>
        </Link>
      </div>

      {/* Experience Icon */}
      <div
        ref={experienceIconRef}
        className="hidden md:flex absolute z-10 flex-col items-center gap-2 cursor-move select-none"
        style={{
          left: `${experiencePosition.x}px`,
          top: `${experiencePosition.y}px`,
          transition: isDraggingExperience ? "none" : "left 0.2s ease, top 0.2s ease",
        }}
        onMouseDown={handleExperienceMouseDown}
        onTouchStart={handleExperienceTouchStart}
      >
        <Link
          ref={experienceLinkRef}
          href="/experience"
          onClick={handleExperienceLinkClick}
          className="relative group flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          title="Explore Experiences"
        >
          <div className="relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl sm:h-40 sm:w-40">
            <Image
              src="/experience-icon.png"
              alt="The Experience app icon"
              fill
              className="object-cover"
              quality={90}
              draggable={false}
            />
          </div>
          <p className="text-xs font-medium text-white drop-shadow-lg sm:text-sm">The Experience</p>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            Explore Experiences
          </span>
        </Link>
      </div>

      {/* Miscellaneous Icon */}
      <div
        ref={miscIconRef}
        className="hidden md:flex absolute z-10 flex-col items-center gap-2 cursor-move select-none"
        style={{
          left: `${miscPosition.x}px`,
          top: `${miscPosition.y}px`,
          transition: isDraggingMisc ? "none" : "left 0.2s ease, top 0.2s ease",
        }}
        onMouseDown={handleMiscMouseDown}
        onTouchStart={handleMiscTouchStart}
      >
        <Link
          ref={miscLinkRef}
          href="/miscellaneous"
          onClick={handleMiscLinkClick}
          className="relative group flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          title="Mixed Aesthetic Content"
        >
          <div className="relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl sm:h-40 sm:w-40">
            <Image
              src="/miscellaneous-icon.png"
              alt="Miscellaneous app icon"
              fill
              className="object-cover"
              quality={90}
              draggable={false}
            />
          </div>
          <p className="text-xs font-medium text-white drop-shadow-lg sm:text-sm">Miscellaneous</p>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            Mixed Aesthetic Content
          </span>
        </Link>
      </div>

      {/* My World Icon */}
      <div
        ref={myWorldIconRef}
        className="hidden md:flex absolute z-10 flex-col items-center gap-2 cursor-move select-none"
        style={{
          left: `${myWorldPosition.x}px`,
          top: `${myWorldPosition.y}px`,
          transition: isDraggingMyWorld ? "none" : "left 0.2s ease, top 0.2s ease",
        }}
        onMouseDown={handleMyWorldMouseDown}
        onTouchStart={handleMyWorldTouchStart}
      >
        <Link
          ref={myWorldLinkRef}
          href="/my-world"
          onClick={handleMyWorldLinkClick}
          className="relative group flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          title="Personal Magazine Style"
        >
          <div className="relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl sm:h-40 sm:w-40">
            <Image
              src="/my-world-icon.png"
              alt="My World app icon"
              fill
              className="object-cover"
              quality={90}
              draggable={false}
            />
          </div>
          <p className="text-xs font-medium text-white drop-shadow-lg sm:text-sm">My World</p>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            Personal Magazine Style
          </span>
        </Link>
      </div>

      {/* Family Zone Icon */}
      <div
        ref={familyZoneIconRef}
        className="hidden md:flex absolute z-10 flex-col items-center gap-2 cursor-move select-none"
        style={{
          left: `${familyZonePosition.x}px`,
          top: `${familyZonePosition.y}px`,
          transition: isDraggingFamilyZone ? "none" : "left 0.2s ease, top 0.2s ease",
        }}
        onMouseDown={handleFamilyZoneMouseDown}
        onTouchStart={handleFamilyZoneTouchStart}
      >
        <Link
          ref={familyZoneLinkRef}
          href="/family-zone"
          onClick={handleFamilyZoneLinkClick}
          className="relative group flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          title="Family Content by Age"
        >
          <div className="relative h-28 w-28 overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl sm:h-36 sm:w-36">
            <Image
              src="/family-zone-icon.png"
              alt="Family Zone app icon"
              fill
              className="object-cover"
              quality={90}
              draggable={false}
            />
          </div>
          <p className="text-[10px] font-medium text-white drop-shadow-lg sm:text-xs">Family Zone</p>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            Family Content by Age
          </span>
        </Link>
      </div>

      {/* Enter if you dare Icon */}
      <div
        ref={enterIfYouDareIconRef}
        className="hidden md:flex absolute z-10 flex-col items-center gap-2 cursor-move select-none"
        style={{
          left: `${enterIfYouDarePosition.x}px`,
          top: `${enterIfYouDarePosition.y}px`,
          transition: isDraggingEnterIfYouDare ? "none" : "left 0.2s ease, top 0.2s ease",
        }}
        onMouseDown={handleEnterIfYouDareMouseDown}
        onTouchStart={handleEnterIfYouDareTouchStart}
      >
        <Link
          ref={enterIfYouDareLinkRef}
          href="/enter-if-you-dare"
          onClick={handleEnterIfYouDareLinkClick}
          className="relative group flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          title="Special Content"
        >
          <div className="relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl sm:h-40 sm:w-40">
            <Image
              src="/enter-if-you-dare-icon.png"
              alt="Enter if you dare app icon"
              fill
              className="object-cover"
              quality={90}
              draggable={false}
            />
          </div>
          <p className="text-xs font-medium text-white drop-shadow-lg sm:text-sm">Enter if you dare</p>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            Special Content
          </span>
        </Link>
      </div>
    </main>
  );
}

