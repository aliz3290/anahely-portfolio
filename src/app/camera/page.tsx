import Link from "next/link";
import CameraView from "./CameraView";

export default function CameraPage() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black md:flex md:items-center md:justify-center">
      <CameraView />
      <nav
        aria-label="Primary navigation"
        className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-3 text-sm md:top-6 md:left-6"
      >
        <Link
          href="/"
          className="rounded-full border border-slate-700/50 bg-slate-900/80 backdrop-blur-sm px-4 py-2 font-medium text-slate-100 shadow-sm transition hover:border-indigo-400 hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Back to phone splash
        </Link>
        <Link
          href="/home"
          className="rounded-full border border-slate-700/50 bg-slate-900/80 backdrop-blur-sm px-4 py-2 text-slate-300 transition hover:border-indigo-400 hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Go to home
        </Link>
      </nav>
    </main>
  );
}

