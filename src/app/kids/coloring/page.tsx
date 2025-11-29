"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface DrawingAction {
  type: 'draw' | 'clear';
  data: ImageData | null;
}

export default function ColoringPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#FF6B9D');
  const [brushSize, setBrushSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [history, setHistory] = useState<ImageData[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const colors = [
    '#FF6B9D', '#FFB84D', '#FFE66D', '#C5E99B', '#6BCF7F',
    '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA15E',
    '#BC6C25', '#6C5CE7', '#A29BFE', '#FD79A8', '#FDCB6E',
    '#E17055', '#D63031', '#00B894', '#00CEC9', '#0984E3',
    '#6C5CE7', '#A29BFE', '#000000', '#FFFFFF', '#808080'
  ];

  const coloringPages = [
    { name: 'Unicorn', emoji: '🦄' },
    { name: 'Rainbow', emoji: '🌈' },
    { name: 'Butterfly', emoji: '🦋' },
    { name: 'Castle', emoji: '🏰' },
    { name: 'Flower', emoji: '🌸' },
    { name: 'Star', emoji: '⭐' },
  ];

  useEffect(() => {
    loadPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setCanUndo(historyIndex > 0);
    setCanRedo(historyIndex < history.length - 1);
  }, [historyIndex, history.length]);

  const loadPage = (pageIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // For unicorn page (index 0), load the image
    if (pageIndex === 0) {
      const img = new window.Image();
      img.onload = () => {
        // Draw image to fit canvas while maintaining aspect ratio
        const imgAspect = img.width / img.height;
        const canvasAspect = canvas.width / canvas.height;
        
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let drawX = 0;
        let drawY = 0;

        if (imgAspect > canvasAspect) {
          drawHeight = canvas.width / imgAspect;
          drawY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgAspect;
          drawX = (canvas.width - drawWidth) / 2;
        }

        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        saveState();
      };
      img.src = '/unicorn-coloring.png';
    } else {
      // Draw outline for other pages
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      drawOutline(ctx, canvas.width, canvas.height, pageIndex);
      
      // Reset history
      saveState();
    }
  };

  const drawOutline = (ctx: CanvasRenderingContext2D, width: number, height: number, pageIndex: number) => {
    ctx.beginPath();
    
    switch (pageIndex) {
      case 0: // Unicorn
        // Head
        ctx.arc(width / 2, height * 0.3, 80, 0, Math.PI * 2);
        // Body
        ctx.ellipse(width / 2, height * 0.6, 100, 120, 0, 0, Math.PI * 2);
        // Horn
        ctx.moveTo(width / 2, height * 0.2);
        ctx.lineTo(width / 2 - 20, height * 0.1);
        ctx.lineTo(width / 2 + 20, height * 0.1);
        ctx.closePath();
        // Legs
        ctx.moveTo(width / 2 - 60, height * 0.7);
        ctx.lineTo(width / 2 - 60, height * 0.9);
        ctx.moveTo(width / 2 + 60, height * 0.7);
        ctx.lineTo(width / 2 + 60, height * 0.9);
        break;
      case 1: // Rainbow
        for (let i = 0; i < 7; i++) {
          ctx.beginPath();
          ctx.arc(width / 2, height * 0.8, 150 - i * 20, Math.PI, 0, false);
          ctx.stroke();
        }
        break;
      case 2: // Butterfly
        // Body
        ctx.moveTo(width / 2, height * 0.2);
        ctx.lineTo(width / 2, height * 0.8);
        // Wings
        ctx.ellipse(width / 2 - 60, height * 0.4, 80, 100, -0.3, 0, Math.PI * 2);
        ctx.ellipse(width / 2 + 60, height * 0.4, 80, 100, 0.3, 0, Math.PI * 2);
        ctx.ellipse(width / 2 - 50, height * 0.6, 60, 80, -0.2, 0, Math.PI * 2);
        ctx.ellipse(width / 2 + 50, height * 0.6, 60, 80, 0.2, 0, Math.PI * 2);
        break;
      case 3: // Castle
        // Base
        ctx.rect(width / 2 - 120, height * 0.5, 240, 200);
        // Towers
        ctx.rect(width / 2 - 150, height * 0.3, 60, 220);
        ctx.rect(width / 2 + 90, height * 0.3, 60, 220);
        // Flags
        ctx.moveTo(width / 2 - 120, height * 0.3);
        ctx.lineTo(width / 2 - 120, height * 0.2);
        ctx.moveTo(width / 2 + 120, height * 0.3);
        ctx.lineTo(width / 2 + 120, height * 0.2);
        break;
      case 4: // Flower
        const centerX = width / 2;
        const centerY = height / 2;
        // Petals
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          ctx.beginPath();
          ctx.ellipse(
            centerX + Math.cos(angle) * 60,
            centerY + Math.sin(angle) * 60,
            40, 60, angle, 0, Math.PI * 2
          );
          ctx.stroke();
        }
        // Center
        ctx.beginPath();
        ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
        ctx.stroke();
        // Stem
        ctx.moveTo(centerX, centerY + 30);
        ctx.lineTo(centerX, height * 0.9);
        break;
      case 5: // Star
        drawStar(ctx, width / 2, height / 2, 5, 100, 50);
        break;
    }
    
    ctx.stroke();
  };

  const drawStar = (ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) => {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
  };

  const saveState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(imageData);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    saveState();
    draw(e);
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing && e.type !== 'mousedown' && e.type !== 'touchstart') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0]?.clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0]?.clientY : e.clientY;

    if (!clientX || !clientY) return;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (e.type === 'mousedown' || e.type === 'touchstart') {
      ctx.beginPath();
      ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const undo = () => {
    if (historyIndex > 0) {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const newIndex = historyIndex - 1;
      ctx.putImageData(history[newIndex], 0, 0);
      setHistoryIndex(newIndex);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const newIndex = historyIndex + 1;
      ctx.putImageData(history[newIndex], 0, 0);
      setHistoryIndex(newIndex);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawOutline(ctx, canvas.width, canvas.height, currentPage);
    saveState();
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `coloring-${coloringPages[currentPage].name.toLowerCase()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;

      const maxWidth = Math.min(800, window.innerWidth - 40);
      const maxHeight = Math.min(600, window.innerHeight - 200);
      
      canvas.width = maxWidth;
      canvas.height = maxHeight;
      loadPage(currentPage);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-yellow-200 to-purple-200 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-2">
            🎨 Coloring Fun 🎨
          </h1>
          <p className="text-xl text-purple-700 font-semibold">Color your world with rainbows!</p>
        </div>

        {/* Page Selection */}
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {coloringPages.map((page, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`px-4 py-2 rounded-full font-bold text-white transition-all ${
                currentPage === index
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-110 shadow-lg'
                  : 'bg-gradient-to-r from-pink-300 to-purple-300 hover:scale-105'
              }`}
            >
              {page.emoji} {page.name}
            </button>
          ))}
        </div>

        {/* Canvas Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 mb-4 flex justify-center">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={(e) => {
              e.preventDefault();
              startDrawing(e);
            }}
            onTouchMove={(e) => {
              e.preventDefault();
              draw(e);
            }}
            onTouchEnd={stopDrawing}
            className="border-4 border-purple-300 rounded-2xl cursor-crosshair touch-none"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        {/* Controls */}
        <div className="bg-white rounded-3xl shadow-2xl p-6">
          {/* Color Palette */}
          <div className="mb-6">
            <h3 className="text-2xl font-black text-purple-600 mb-3 text-center">Colors</h3>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-full border-4 transition-all hover:scale-110 ${
                    selectedColor === color ? 'border-purple-600 scale-125 shadow-lg' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select color ${color}`}
                />
              ))}
            </div>
          </div>

          {/* Brush Size */}
          <div className="mb-6">
            <h3 className="text-2xl font-black text-purple-600 mb-3 text-center">
              Brush Size: {brushSize}px
            </h3>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold">Small</span>
              <input
                type="range"
                min="10"
                max="50"
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
                className="flex-1 h-4 bg-gradient-to-r from-pink-300 to-purple-300 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-lg font-bold">Large</span>
            </div>
          </div>

          {/* Tools */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <button
              onClick={undo}
              disabled={!canUndo}
              className={`px-6 py-3 rounded-full font-bold text-white transition-all ${
                canUndo
                  ? 'bg-gradient-to-r from-blue-400 to-cyan-400 hover:scale-105 shadow-lg'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              ↶ Undo
            </button>
            <button
              onClick={redo}
              disabled={!canRedo}
              className={`px-6 py-3 rounded-full font-bold text-white transition-all ${
                canRedo
                  ? 'bg-gradient-to-r from-green-400 to-emerald-400 hover:scale-105 shadow-lg'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              ↷ Redo
            </button>
            <button
              onClick={clearCanvas}
              className="px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-red-400 to-pink-400 hover:scale-105 shadow-lg transition-all"
            >
              🗑️ Clear
            </button>
            <button
              onClick={downloadImage}
              className="px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 hover:scale-105 shadow-lg transition-all"
            >
              💾 Save
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/kids"
            className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-pink-400 to-purple-400 hover:scale-110 shadow-2xl transition-all"
          >
            ← Back to Games
          </Link>
          <Link
            href="/home"
            className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-blue-400 to-cyan-400 hover:scale-110 shadow-2xl transition-all"
          >
            🏠 Home
          </Link>
        </div>
      </div>
    </main>
  );
}

