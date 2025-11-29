"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type BrushType = 'pencil' | 'marker' | 'paintbrush' | 'eraser';
type ShapeType = 'circle' | 'square' | 'triangle' | null;

interface DrawingAction {
  type: 'draw' | 'shape' | 'sticker';
  data: ImageData | null;
}

const stickers = [
  '⭐', '🌟', '✨', '💫', '❤️', '💕', '💖', '💗',
  '🦄', '🌈', '🦋', '🌸', '🎈', '🎉', '🎊', '🎁',
  '🐰', '🐻', '🐸', '🐨', '🦁', '🐯', '🐼', '🐷'
];

export default function ArtCraftsPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#FF6B9D');
  const [brushSize, setBrushSize] = useState(15);
  const [brushType, setBrushType] = useState<BrushType>('pencil');
  const [shapeType, setShapeType] = useState<ShapeType>(null);
  const [history, setHistory] = useState<ImageData[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(100);
  const [lightness, setLightness] = useState(50);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;

      const maxWidth = Math.min(900, window.innerWidth - 40);
      const maxHeight = Math.min(600, window.innerHeight - 200);
      
      canvas.width = maxWidth;
      canvas.height = maxHeight;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      saveState();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  useEffect(() => {
    const hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    setSelectedColor(hsl);
  }, [hue, saturation, lightness]);

  useEffect(() => {
    setCanUndo(historyIndex > 0);
    setCanRedo(historyIndex < history.length - 1);
  }, [historyIndex, history.length]);

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

  const getBrushSettings = () => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    switch (brushType) {
      case 'pencil':
        ctx.globalCompositeOperation = 'source-over';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 1;
        break;
      case 'marker':
        ctx.globalCompositeOperation = 'source-over';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 0.6;
        break;
      case 'paintbrush':
        ctx.globalCompositeOperation = 'source-over';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 0.8;
        break;
      case 'eraser':
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 1;
        break;
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (shapeType) {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0]?.clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0]?.clientY : e.clientY;

      if (clientX && clientY) {
        setStartPos({
          x: clientX - rect.left,
          y: clientY - rect.top
        });
      }
      return;
    }

    setIsDrawing(true);
    saveState();
    draw(e);
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
    }
    if (shapeType) {
      setShapeType(null);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing && e.type !== 'mousedown' && e.type !== 'touchstart') return;
    if (shapeType) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    getBrushSettings();

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0]?.clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0]?.clientY : e.clientY;

    if (!clientX || !clientY) return;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (brushType === 'eraser') {
      ctx.strokeStyle = 'rgba(0,0,0,1)';
    } else {
      ctx.strokeStyle = selectedColor;
    }
    ctx.fillStyle = selectedColor;
    ctx.lineWidth = brushSize;

    if (e.type === 'mousedown' || e.type === 'touchstart') {
      ctx.beginPath();
      ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
      if (brushType === 'eraser') {
        ctx.fill();
      } else {
        ctx.fill();
      }
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const drawShape = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!shapeType) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0]?.clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0]?.clientY : e.clientY;

    if (!clientX || !clientY) return;

    const endX = clientX - rect.left;
    const endY = clientY - rect.top;

    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;
    ctx.lineWidth = brushSize;

    ctx.beginPath();
    const width = endX - startPos.x;
    const height = endY - startPos.y;

    switch (shapeType) {
      case 'circle':
        const radius = Math.sqrt(width * width + height * height);
        ctx.arc(startPos.x, startPos.y, radius, 0, Math.PI * 2);
        break;
      case 'square':
        ctx.rect(startPos.x, startPos.y, width, height);
        break;
      case 'triangle':
        ctx.moveTo(startPos.x, startPos.y);
        ctx.lineTo(endX, endY);
        ctx.lineTo(startPos.x * 2 - endX, endY);
        ctx.closePath();
        break;
    }

    ctx.stroke();
    if (e.type === 'mouseup' || e.type === 'touchend') {
      saveState();
    }
  };

  const addSticker = (sticker: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    saveState();
    ctx.font = `${brushSize * 3}px Arial`;
    ctx.fillText(sticker, canvas.width / 2 - brushSize * 1.5, canvas.height / 2);
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
    saveState();
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'my-artwork.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const presetColors = [
    '#FF6B9D', '#FFB84D', '#FFE66D', '#C5E99B', '#6BCF7F',
    '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA15E',
    '#BC6C25', '#6C5CE7', '#A29BFE', '#FD79A8', '#FDCB6E',
    '#E17055', '#D63031', '#00B894', '#00CEC9', '#0984E3',
    '#000000', '#FFFFFF', '#808080'
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-200 via-pink-200 to-purple-200 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 mb-2">
            ✂️ Art & Crafts ✂️
          </h1>
          <p className="text-xl text-red-700 font-semibold">Create amazing digital art!</p>
        </div>

        {/* Canvas Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 mb-4 flex justify-center">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={(e) => {
              if (shapeType) drawShape(e);
              else draw(e);
            }}
            onMouseUp={(e) => {
              if (shapeType) drawShape(e);
              stopDrawing();
            }}
            onMouseLeave={stopDrawing}
            onTouchStart={(e) => {
              e.preventDefault();
              startDrawing(e);
            }}
            onTouchMove={(e) => {
              e.preventDefault();
              if (shapeType) drawShape(e);
              else draw(e);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              if (shapeType) drawShape(e);
              stopDrawing();
            }}
            className="border-4 border-pink-300 rounded-2xl cursor-crosshair touch-none"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        {/* Controls */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 space-y-6">
          {/* Brush Types */}
          <div>
            <h3 className="text-2xl font-black text-red-600 mb-3 text-center">Brush Type</h3>
            <div className="grid grid-cols-4 gap-2">
              {(['pencil', 'marker', 'paintbrush', 'eraser'] as BrushType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setBrushType(type)}
                  className={`px-4 py-3 rounded-full font-bold text-white transition-all capitalize ${
                    brushType === type
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 scale-110 shadow-lg'
                      : 'bg-gradient-to-r from-red-300 to-pink-300 hover:scale-105'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Shape Tools */}
          <div>
            <h3 className="text-2xl font-black text-red-600 mb-3 text-center">Shapes</h3>
            <div className="grid grid-cols-3 gap-2">
              {(['circle', 'square', 'triangle'] as ShapeType[]).map((shape) => (
                <button
                  key={shape}
                  onClick={() => setShapeType(shape)}
                  className={`px-4 py-3 rounded-full font-bold text-white transition-all capitalize ${
                    shapeType === shape
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-110 shadow-lg'
                      : 'bg-gradient-to-r from-purple-300 to-pink-300 hover:scale-105'
                  }`}
                >
                  {shape}
                </button>
              ))}
            </div>
          </div>

          {/* Color Picker */}
          <div>
            <h3 className="text-2xl font-black text-red-600 mb-3 text-center">Colors</h3>
            <div className="mb-4">
              <button
                onClick={() => setShowColorPicker(!showColorPicker)}
                className="w-full py-3 rounded-full font-bold text-white bg-gradient-to-r from-red-400 to-pink-400 hover:scale-105 transition-all"
              >
                {showColorPicker ? 'Hide' : 'Show'} Advanced Color Picker
              </button>
            </div>

            {showColorPicker && (
              <div className="mb-4 p-4 bg-gray-100 rounded-2xl">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Hue: {hue}°</label>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={hue}
                      onChange={(e) => setHue(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Saturation: {saturation}%</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={saturation}
                      onChange={(e) => setSaturation(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Lightness: {lightness}%</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={lightness}
                      onChange={(e) => setLightness(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <div className="text-center">
                    <div
                      className="w-24 h-24 rounded-full mx-auto border-4 border-gray-300"
                      style={{ backgroundColor: selectedColor }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-6 sm:grid-cols-11 gap-2">
              {presetColors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-full border-4 transition-all hover:scale-110 ${
                    selectedColor === color ? 'border-red-600 scale-125 shadow-lg' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Brush Size */}
          <div>
            <h3 className="text-2xl font-black text-red-600 mb-3 text-center">
              Size: {brushSize}px
            </h3>
            <input
              type="range"
              min="5"
              max="50"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-full h-4 bg-gradient-to-r from-red-300 to-pink-300 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Stickers */}
          <div>
            <h3 className="text-2xl font-black text-red-600 mb-3 text-center">Stickers</h3>
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-2">
              {stickers.map((sticker, index) => (
                <button
                  key={index}
                  onClick={() => addSticker(sticker)}
                  className="text-3xl p-2 rounded-lg bg-gradient-to-br from-pink-200 to-purple-200 hover:scale-110 transition-all"
                >
                  {sticker}
                </button>
              ))}
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
            className="px-8 py-4 rounded-full font-black text-white bg-gradient-to-r from-red-400 to-pink-400 hover:scale-110 shadow-2xl transition-all"
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


