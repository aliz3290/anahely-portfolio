"use client";

/**
 * Interactive Room Hub Page
 * 
 * This is an interactive point-and-click room scene that serves as a hub for navigation.
 * Users can click on different areas of the room (drawer, book, computer) to interact.
 * 
 * This page can be used as:
 * - A splash screen (full-screen gate before Home)
 * - A regular page in your Misc or World section
 * 
 * CUSTOMIZATION:
 * - Hotspot coordinates: Adjust left, top, width, height percentages in inline styles
 * - Navigation routes: Change the router.push() destinations
 * - Content: Modify the drawer panel and book modal content
 * - Background image: Place your room image at /public/room-scene.png
 */

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RoomScene() {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBookOpen, setIsBookOpen] = useState(false);

  const handleDrawerClick = () => {
    setIsDrawerOpen(true);
  };

  const handleBookClick = () => {
    setIsBookOpen(true);
  };

  const handleComputerClick = () => {
    // Navigate to blog - customize this route as needed
    router.push("/blog");
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const closeBook = () => {
    setIsBookOpen(false);
  };

  // Close modals when clicking backdrop
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeBook();
    }
  };

  return (
    <main className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Background image */}
      <div className="relative w-full h-full">
        <Image
          src="/room-scene.png"
          alt="Interactive room scene"
          fill
          className="object-cover"
          priority
          onError={(e) => {
            // Fallback if image doesn't exist - show placeholder
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        {/* Placeholder if image doesn't exist */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <p className="text-lg mb-2">Room Scene Image</p>
            <p className="text-sm opacity-75">
              Place your room image at: <code className="bg-black/50 px-2 py-1 rounded">/public/room-scene.png</code>
            </p>
          </div>
        </div>
      </div>

      {/* Drawer Hotspot - Bottom left/middle area */}
      <button
        aria-label="Open drawer"
        onClick={handleDrawerClick}
        className="absolute cursor-pointer hover:bg-white/10 transition-colors rounded"
        style={{
          left: "15%",
          top: "65%",
          width: "12%",
          height: "15%",
        }}
        title="Click to open drawer"
      >
        {/* Optional: Uncomment to see hotspot outline for debugging */}
        {/* <div className="w-full h-full border-2 border-white/50 rounded"></div> */}
      </button>

      {/* Book Hotspot - Bookshelf area */}
      <button
        aria-label="Open book"
        onClick={handleBookClick}
        className="absolute cursor-pointer hover:bg-white/10 transition-colors rounded"
        style={{
          left: "70%",
          top: "30%",
          width: "10%",
          height: "18%",
        }}
        title="Click to open book"
      >
        {/* Optional: Uncomment to see hotspot outline for debugging */}
        {/* <div className="w-full h-full border-2 border-white/50 rounded"></div> */}
      </button>

      {/* Computer Hotspot - Desk/computer area */}
      <button
        aria-label="Go to computer"
        onClick={handleComputerClick}
        className="absolute cursor-pointer hover:bg-white/10 transition-colors rounded"
        style={{
          left: "45%",
          top: "40%",
          width: "15%",
          height: "20%",
        }}
        title="Click to go to blog"
      >
        {/* Optional: Uncomment to see hotspot outline for debugging */}
        {/* <div className="w-full h-full border-2 border-white/50 rounded"></div> */}
      </button>

      {/* Drawer Panel - Slides up from bottom */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
            onClick={closeDrawer}
          />
          {/* Panel */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/90 backdrop-blur-md text-white p-6 z-50 transform transition-transform"
            style={{
              animation: "slideUp 0.3s ease-out",
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Drawer</h2>
              <button
                onClick={closeDrawer}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors font-semibold"
                aria-label="Close drawer"
              >
                Close
              </button>
            </div>
            <div className="space-y-3">
              <p className="text-gray-300 mb-4">
                Here you can put links, secrets, or navigation items.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/home"
                  className="p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <div className="font-semibold">Home</div>
                  <div className="text-sm text-gray-400">Go to homepage</div>
                </Link>
                <Link
                  href="/portfolio"
                  className="p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <div className="font-semibold">Portfolio</div>
                  <div className="text-sm text-gray-400">View my work</div>
                </Link>
                <Link
                  href="/my-world"
                  className="p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <div className="font-semibold">My World</div>
                  <div className="text-sm text-gray-400">Explore my world</div>
                </Link>
                <Link
                  href="/miscellaneous"
                  className="p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <div className="font-semibold">Miscellaneous</div>
                  <div className="text-sm text-gray-400">Other stuff</div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Book Modal - Centered overlay */}
      {isBookOpen && (
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div
            className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl transform transition-all"
            style={{
              animation: "fadeInScale 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">The Book</h2>
              <button
                onClick={closeBook}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-700 font-bold"
                aria-label="Close book"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                This could show your blog index, story entries, or whatever you want.
              </p>
              <div className="space-y-2">
                <Link
                  href="/blog"
                  className="block p-3 bg-pink-100 hover:bg-pink-200 rounded-lg transition-colors"
                >
                  <div className="font-semibold text-gray-900">Read Blog</div>
                  <div className="text-sm text-gray-600">Check out my latest posts</div>
                </Link>
                <div className="p-3 bg-gray-100 rounded-lg">
                  <div className="font-semibold text-gray-900">Story Collection</div>
                  <div className="text-sm text-gray-600">Coming soon...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Link - Optional: Add a way to go back */}
      <div className="absolute top-4 left-4 z-30">
        <Link
          href="/home"
          className="px-4 py-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white rounded-lg transition-colors font-semibold"
        >
          ← Back to Home
        </Link>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </main>
  );
}



