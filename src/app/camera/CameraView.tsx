"use client";

import { useEffect, useRef, useState } from "react";

// Webcam Toy filters - over 80 effects
const filters = {
  Normal: "",
  Alien: "hue-rotate(180deg) saturate(200%) brightness(1.2)",
  Berry: "hue-rotate(300deg) saturate(150%) brightness(1.1)",
  "Black & White": "grayscale(100%)",
  Bloom: "brightness(1.3) contrast(0.8) saturate(1.5)",
  Bokeh: "blur(2px) brightness(1.2)",
  Bulge: "contrast(120%) brightness(1.1)",
  Cartoon: "contrast(150%) saturate(200%) brightness(1.1)",
  Citrus: "hue-rotate(30deg) saturate(180%) brightness(1.15)",
  Cocktail: "hue-rotate(200deg) saturate(200%) contrast(120%)",
  Cocoa: "sepia(40%) contrast(130%) brightness(0.9)",
  "Color Ghost": "contrast(150%) brightness(1.3) saturate(0%) opacity(0.8)",
  "Comic Book": "contrast(150%) saturate(200%) brightness(1.1)",
  "Comic Strip": "contrast(200%) saturate(250%) brightness(1.2)",
  Crosshatch: "contrast(150%) brightness(1.1) saturate(0%)",
  Danger: "hue-rotate(0deg) saturate(200%) contrast(150%) brightness(1.2)",
  Dent: "contrast(130%) brightness(0.95)",
  Disco: "hue-rotate(90deg) saturate(300%) brightness(1.3)",
  Envy: "hue-rotate(120deg) saturate(200%) brightness(1.1)",
  Filmstrip: "contrast(120%) brightness(0.95) sepia(20%)",
  Fire: "hue-rotate(0deg) saturate(250%) brightness(1.3) contrast(150%)",
  Fisheye: "contrast(130%) brightness(1.1)",
  Flare: "brightness(1.4) contrast(0.9) saturate(1.3)",
  Fragment: "contrast(150%) brightness(1.2)",
  Ghost: "contrast(120%) brightness(1.4) saturate(0%) opacity(0.7)",
  Glaze: "brightness(1.2) contrast(0.9) saturate(1.4)",
  Glitch: "contrast(200%) brightness(1.2) saturate(300%)",
  Halo: "brightness(1.5) contrast(0.8) saturate(1.2)",
  "Hazy Days": "brightness(1.2) contrast(0.9) saturate(1.1) blur(1px)",
  "Hot Pink": "hue-rotate(320deg) saturate(250%) brightness(1.2)",
  Kaleidoscope: "hue-rotate(90deg) saturate(200%) contrast(150%)",
  Lomo: "contrast(120%) brightness(1.1) saturate(150%)",
  "Lomo Quad": "contrast(130%) brightness(1.15) saturate(160%)",
  LSD: "hue-rotate(180deg) saturate(400%) contrast(200%) brightness(1.3)",
  Magazine: "contrast(140%) brightness(1.1) saturate(180%)",
  Mint: "hue-rotate(150deg) saturate(180%) brightness(1.1)",
  "Bottom Mirror": "scaleY(-1)",
  "Left Mirror": "scaleX(-1)",
  "Quad Mirror": "contrast(120%) brightness(1.1)",
  "Right Mirror": "",
  "Top Mirror": "scaleY(-1)",
  Mono: "grayscale(100%) contrast(120%)",
  "Mono Quad": "grayscale(100%) contrast(130%)",
  Neon: "contrast(200%) saturate(300%) brightness(1.3)",
  "Night Vision": "contrast(200%) brightness(0.8) hue-rotate(120deg) saturate(200%)",
  "Old Movie": "sepia(50%) contrast(120%) brightness(0.9)",
  Outline: "contrast(200%) brightness(1.5) saturate(0%)",
  Pinch: "contrast(130%) brightness(1.1)",
  "Pop Art": "contrast(200%) saturate(300%) brightness(1.2)",
  "Pop Booth": "contrast(180%) saturate(250%) brightness(1.15)",
  "Quad Cam": "contrast(130%) brightness(1.1) saturate(150%)",
  Rainbow: "hue-rotate(90deg) saturate(250%) brightness(1.2)",
  Retro: "sepia(60%) contrast(130%) brightness(1.05)",
  Ripple: "contrast(120%) brightness(1.1)",
  Rose: "hue-rotate(330deg) saturate(200%) brightness(1.1)",
  Shuffle: "hue-rotate(180deg) saturate(200%) contrast(150%)",
  Silk: "brightness(1.2) contrast(0.9) saturate(1.3)",
  Sketch: "contrast(200%) brightness(1.5) saturate(0%)",
  Smoke: "brightness(0.9) contrast(110%) saturate(0%) blur(1px)",
  Snow: "brightness(1.5) contrast(0.9) saturate(0%)",
  "Soft Focus": "blur(1px) brightness(1.1) contrast(0.95)",
  Sparkle: "brightness(1.4) contrast(1.2) saturate(1.5)",
  Spectrum: "hue-rotate(180deg) saturate(250%) brightness(1.2)",
  Spiral: "contrast(140%) brightness(1.15)",
  "Split Screen": "contrast(120%) brightness(1.1)",
  "Spy Cam": "contrast(200%) brightness(0.8) grayscale(80%)",
  Switch: "hue-rotate(180deg) saturate(200%)",
  Thermal: "contrast(200%) brightness(1.2) saturate(0%) hue-rotate(180deg)",
  Trail: "brightness(1.2) contrast(0.9) saturate(1.1)",
  "True Blue": "hue-rotate(200deg) saturate(200%) brightness(1.1)",
  Tunnel: "contrast(150%) brightness(0.9)",
  Twist: "contrast(140%) brightness(1.1)",
  Underwater: "hue-rotate(180deg) saturate(150%) brightness(0.9) contrast(120%)",
  "Upside-Down": "scaleY(-1)",
  Vintage: "sepia(50%) contrast(120%) brightness(1.1)",
  Watercolor: "contrast(120%) saturate(150%) brightness(1.1) blur(0.5px)",
  Wedge: "contrast(130%) brightness(1.1)",
  "X-Pro": "contrast(150%) brightness(1.1) saturate(180%)",
  "X-Ray": "contrast(200%) brightness(1.5) invert(1) grayscale(100%)",
  Zinc: "grayscale(80%) contrast(130%) brightness(0.95)",
  // 2014 Trend Filters
  "2014 Tumblr": "brightness(1.15) contrast(1.1) saturate(1.2) sepia(10%)",
  "VSCO Cam": "contrast(0.95) brightness(1.05) saturate(1.1)",
  "Instagram 2014": "contrast(1.1) brightness(1.1) saturate(1.15)",
  "Vintage 2014": "sepia(30%) contrast(1.15) brightness(1.05) saturate(1.2)",
  "Nostalgic": "sepia(25%) contrast(1.1) brightness(1.08) saturate(1.15)",
  "Soft Pastel": "brightness(1.2) contrast(0.9) saturate(1.1)",
  "Dreamy": "brightness(1.15) contrast(0.95) saturate(1.2) blur(0.3px)",
  "Matte": "contrast(0.9) brightness(1.05) saturate(0.95)",
  // Hello Kitty / Kawaii Filters
  "Hello Kitty Pink": "hue-rotate(340deg) saturate(200%) brightness(1.2) contrast(1.1)",
  "Kawaii": "brightness(1.25) saturate(180%) contrast(1.05)",
  "Pink Dream": "hue-rotate(330deg) saturate(220%) brightness(1.15)",
  "Cute": "brightness(1.2) saturate(160%) contrast(1.05)",
  "Sweet": "brightness(1.18) saturate(170%) contrast(1.08)",
  "Bubblegum": "hue-rotate(320deg) saturate(240%) brightness(1.2)",
  "Strawberry": "hue-rotate(350deg) saturate(200%) brightness(1.15)",
  "Cherry Blossom": "hue-rotate(340deg) saturate(190%) brightness(1.2) contrast(1.05)",
  // Advanced Transform Effects
  Smudge: "contrast(130%) brightness(1.1)",
  Tiny: "contrast(120%) brightness(1.1)",
  Squished: "contrast(120%) brightness(1.1)",
  "Bug-Eyed": "contrast(150%) brightness(1.2) saturate(150%)",
  "Fish Eye": "contrast(130%) brightness(1.1)",
  Stretch: "contrast(130%) brightness(1.1)",
  "Wide Angle": "contrast(120%) brightness(1.1)",
  "Narrow": "contrast(130%) brightness(1.1)",
} as const;

// Transform effects that need CSS transforms in addition to filters
const transformEffects: Record<string, { filter: string; transform: string }> = {
  "Kaleidoscope Advanced": {
    filter: "hue-rotate(90deg) saturate(200%) contrast(150%)",
    transform: "scaleX(-1) scaleY(-1)",
  },
  "Kaleidoscope Mirror": {
    filter: "hue-rotate(180deg) saturate(250%) contrast(150%)",
    transform: "scaleX(-1)",
  },
  "Kaleidoscope Flip": {
    filter: "hue-rotate(270deg) saturate(200%) contrast(150%)",
    transform: "scaleY(-1)",
  },
  Smudge: {
    filter: "contrast(130%) brightness(1.1)",
    transform: "skewX(5deg) skewY(-2deg)",
  },
  Tiny: {
    filter: "contrast(120%) brightness(1.1)",
    transform: "scale(0.7)",
  },
  Squished: {
    filter: "contrast(120%) brightness(1.1)",
    transform: "scaleX(0.6) scaleY(1.2)",
  },
  "Bug-Eyed": {
    filter: "contrast(150%) brightness(1.2) saturate(150%)",
    transform: "scale(1.3)",
  },
  "Fish Eye": {
    filter: "contrast(130%) brightness(1.1)",
    transform: "scale(1.2)",
  },
  "Stretch Wide": {
    filter: "contrast(130%) brightness(1.1)",
    transform: "scaleX(1.5) scaleY(0.8)",
  },
  "Wide Angle": {
    filter: "contrast(120%) brightness(1.1)",
    transform: "scaleX(1.4) scaleY(0.9)",
  },
  Narrow: {
    filter: "contrast(130%) brightness(1.1)",
    transform: "scaleX(0.7) scaleY(1.1)",
  },
  "Mirror Left": {
    filter: "",
    transform: "scaleX(-1)",
  },
  "Mirror Top": {
    filter: "",
    transform: "scaleY(-1)",
  },
  "Mirror Both": {
    filter: "",
    transform: "scaleX(-1) scaleY(-1)",
  },
  "Rotate 90": {
    filter: "",
    transform: "rotate(90deg)",
  },
  "Rotate 180": {
    filter: "",
    transform: "rotate(180deg)",
  },
  "Rotate 270": {
    filter: "",
    transform: "rotate(270deg)",
  },
  "Tilt Left": {
    filter: "",
    transform: "rotate(-15deg)",
  },
  "Tilt Right": {
    filter: "",
    transform: "rotate(15deg)",
  },
  "Zoom In": {
    filter: "",
    transform: "scale(1.5)",
  },
  "Zoom Out": {
    filter: "",
    transform: "scale(0.7)",
  },
  Pinch: {
    filter: "contrast(130%) brightness(1.1)",
    transform: "scale(0.9)",
  },
  Bulge: {
    filter: "contrast(120%) brightness(1.1)",
    transform: "scale(1.1)",
  },
  Warp: {
    filter: "contrast(130%) brightness(1.1)",
    transform: "skewX(10deg) skewY(-5deg)",
  },
  "Twist Effect": {
    filter: "contrast(140%) brightness(1.1)",
    transform: "rotate(5deg) scaleX(1.1)",
  },
};

// Merge transform effects into main filters
const allFilters = { ...filters, ...transformEffects } as Record<string, string | { filter: string; transform: string }>;
type FilterName = keyof typeof allFilters;

export default function CameraView() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewVideoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<FilterName>("Normal");
  const [bokehEnabled, setBokehEnabled] = useState(false);
  const [bokehIntensity, setBokehIntensity] = useState(5);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [guideLineVisible, setGuideLineVisible] = useState(true);
  const streamRef = useRef<MediaStream | null>(null);

  // Request camera permission explicitly (not auto-start)
  const requestCameraPermission = async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsStreaming(true);
        setHasPermission(true);
      }
    } catch (err) {
      setHasPermission(false);
      setIsStreaming(false);

      // Sanitize error messages - don't expose internal details
      if (err instanceof Error) {
        if (err.name === "NotAllowedError") {
          setError("Camera permission was denied. Please allow camera access in your browser settings.");
        } else if (err.name === "NotFoundError") {
          setError("No camera found on this device.");
        } else if (err.name === "NotReadableError") {
          setError("Camera is already in use by another application.");
        } else if (err.name === "OverconstrainedError") {
          setError("Camera settings are not supported by your device.");
        } else {
          // Generic error - don't expose internal error details
          setError("Unable to access camera. Please check your browser settings and try again.");
        }
      } else {
        setError("Unable to access camera. Please check your browser settings and try again.");
      }
    }
  };

  useEffect(() => {
    // Function to stop all camera streams
    const stopAllStreams = () => {
      // Stop main stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => {
          track.stop();
        });
        streamRef.current = null;
      }

      // Stop all preview streams
      Object.values(previewVideoRefs.current).forEach((previewVideo) => {
        if (previewVideo?.srcObject instanceof MediaStream) {
          previewVideo.srcObject.getTracks().forEach((track) => {
            track.stop();
          });
          previewVideo.srcObject = null;
        }
      });

      // Clear video sources
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }

      setIsStreaming(false);
    };

    // Handle page unload/navigation
    const handleBeforeUnload = () => {
      stopAllStreams();
    };

    // Handle visibility change (tab switch, minimize, etc.)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAllStreams();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup function to stop the stream when component unmounts
    return () => {
      stopAllStreams();
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Effect to assign stream to preview videos when they mount or stream becomes available
  useEffect(() => {
    if (streamRef.current && isStreaming) {
      Object.keys(allFilters).forEach((filterName) => {
        const previewVideo = previewVideoRefs.current[filterName];
        if (previewVideo && !previewVideo.srcObject) {
          previewVideo.srcObject = streamRef.current!.clone();
        }
      });
    }
  }, [isStreaming]);

  return (
    <div className="h-screen w-screen md:h-full md:w-full">
      <div className="relative h-full w-full overflow-hidden bg-black md:rounded-none">
        {!isStreaming && hasPermission === null && !error && (
          <div className="flex h-full items-center justify-center">
            <div className="text-center space-y-4 p-6">
              <div className="text-6xl mb-4">📷</div>
              <h2 className="text-xl font-bold text-white mb-2">Camera Access Required</h2>
              <p className="text-slate-400 text-sm mb-6 max-w-md">
                To use the camera features, we need your permission to access your camera.
                Your camera feed will only be used locally and will not be shared or stored.
              </p>
              <button
                onClick={requestCameraPermission}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
              >
                Enable Camera
              </button>
            </div>
          </div>
        )}
        {!isStreaming && hasPermission === false && !error && (
          <div className="flex h-full items-center justify-center">
            <div className="text-center space-y-4 p-6">
              <div className="text-6xl mb-4">🔒</div>
              <h2 className="text-xl font-bold text-white mb-2">Camera Permission Denied</h2>
              <p className="text-slate-400 text-sm mb-6 max-w-md">
                Camera access was denied. Please allow camera access in your browser settings to use this feature.
              </p>
              <button
                onClick={requestCameraPermission}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
        {error && (
          <div className="flex h-full items-center justify-center p-4">
            <div className="text-center space-y-4">
              <div className="text-6xl mb-4">⚠️</div>
              <p className="text-red-400 text-sm font-medium">{error}</p>
              <button
                onClick={requestCameraPermission}
                className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={`h-full w-full object-cover ${isStreaming ? "block" : "hidden"}`}
          style={{
            filter: `${typeof allFilters[selectedFilter] === "string" ? allFilters[selectedFilter] : allFilters[selectedFilter].filter} ${bokehEnabled ? `blur(${bokehIntensity}px)` : ""} brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`,
            transform: typeof allFilters[selectedFilter] === "object" && allFilters[selectedFilter].transform
              ? `${allFilters[selectedFilter].transform} scaleX(-1)`
              : "scaleX(-1)",
          }}
        />
        {/* Center guide line */}
        {guideLineVisible && (
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/30 pointer-events-none" />
        )}

        {/* Camera Quality Controls */}
        <div className="absolute bottom-4 left-4 z-30 space-y-3 rounded-lg border border-slate-700/50 bg-slate-900/95 backdrop-blur-sm p-4 max-w-xs">
          <h4 className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-3">Camera Quality</h4>

          {/* Guide Line Toggle */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs text-slate-300">Center Guide Line</label>
              <button
                onClick={() => setGuideLineVisible(!guideLineVisible)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${guideLineVisible ? "bg-indigo-600" : "bg-slate-700"
                  }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${guideLineVisible ? "translate-x-6" : "translate-x-1"
                    }`}
                />
              </button>
            </div>
          </div>

          {/* Bokeh/Blur Toggle */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs text-slate-300">Bokeh/Blur</label>
              <button
                onClick={() => setBokehEnabled(!bokehEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${bokehEnabled ? "bg-indigo-600" : "bg-slate-700"
                  }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${bokehEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                />
              </button>
            </div>
            {bokehEnabled && (
              <div className="space-y-1">
                <label className="text-xs text-slate-400">Intensity: {bokehIntensity}px</label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={bokehIntensity}
                  onChange={(e) => setBokehIntensity(Number(e.target.value))}
                  className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>
            )}
          </div>

          {/* Brightness */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs text-slate-300">Brightness</label>
              <span className="text-xs text-slate-400">{brightness}%</span>
            </div>
            <input
              type="range"
              min="50"
              max="150"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>

          {/* Contrast */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs text-slate-300">Contrast</label>
              <span className="text-xs text-slate-400">{contrast}%</span>
            </div>
            <input
              type="range"
              min="50"
              max="150"
              value={contrast}
              onChange={(e) => setContrast(Number(e.target.value))}
              className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>

          {/* Saturation */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs text-slate-300">Saturation</label>
              <span className="text-xs text-slate-400">{saturation}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="200"
              value={saturation}
              onChange={(e) => setSaturation(Number(e.target.value))}
              className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>
        </div>

        {/* Filter sidebar */}
        <div className="absolute right-0 top-0 h-full w-56 overflow-y-auto border-l border-slate-700/50 bg-slate-900/95 backdrop-blur-sm p-4 z-20">
          <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-4 font-medium">Filters</h3>
          <div className="flex flex-col gap-3">
            {(Object.keys(allFilters) as FilterName[]).map((filterName) => (
              <button
                key={filterName}
                onClick={() => setSelectedFilter(filterName)}
                className={`group relative rounded-lg border overflow-hidden transition ${selectedFilter === filterName
                    ? "border-indigo-400 ring-2 ring-indigo-400/50"
                    : "border-slate-700 hover:border-slate-600"
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900`}
              >
                {/* Preview video */}
                <div className="relative aspect-video w-full bg-slate-800">
                  {isStreaming ? (
                    <video
                      ref={(el) => {
                        previewVideoRefs.current[filterName] = el;
                        // Stream will be assigned in useEffect when available
                      }}
                      autoPlay
                      playsInline
                      muted
                      className="h-full w-full object-cover"
                      style={{
                        filter: `${typeof allFilters[filterName] === "string" ? allFilters[filterName] : allFilters[filterName].filter} brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`,
                        transform: typeof allFilters[filterName] === "object" && allFilters[filterName].transform
                          ? `${allFilters[filterName].transform} scaleX(-1)`
                          : "scaleX(-1)",
                      }}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-800">
                      <p className="text-xs text-slate-500">{filterName}</p>
                    </div>
                  )}
                </div>
                {/* Filter name overlay */}
                <div className={`absolute bottom-0 left-0 right-0 px-2 py-1.5 text-xs font-medium transition ${selectedFilter === filterName
                    ? "bg-indigo-600/90 text-indigo-100"
                    : "bg-slate-900/80 text-slate-300 group-hover:bg-slate-900/90"
                  }`}>
                  {filterName}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

