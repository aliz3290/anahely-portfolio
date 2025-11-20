import Image from "next/image";
import Link from "next/link";

export default function Splash() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-0 md:px-4">
      <div className="relative mx-auto flex h-screen w-full items-center justify-center overflow-hidden md:h-auto md:w-auto">
        <div className="relative h-full w-full md:h-full md:w-[70vw] md:max-w-sm md:max-h-[90vh] lg:max-w-xl xl:max-w-2xl">
          <Image
            src="/phone-splash.png"
            alt="Retro phone with buttons for Projects, Blog, Camera, and Games"
            width={768}
            height={1144}
            priority
            className="h-full w-full object-contain select-none drop-shadow-[0_18px_60px_rgba(0,0,0,0.9)] md:max-h-[90vh]"
          />

          {/* Projects / Portfolio (top-left key) */}
          <Link
            href="/portfolio"
            aria-label="Go to Projects and Portfolio"
            className="absolute left-[28%] top-[41.5%] h-[6%] w-[12%] rounded-full outline-none ring-indigo-400/80 ring-offset-2 ring-offset-black transition focus-visible:ring hover:bg-white/10"
          />

          {/* Blog (top-right key) */}
          <Link
            href="/blog"
            aria-label="Go to Blog"
            className="absolute right-[19%] top-[41.5%] h-[6%] w-[18%] rounded-full outline-none ring-indigo-400/80 ring-offset-2 ring-offset-black transition focus-visible:ring hover:bg-white/10"
          />

          {/* Camera (bottom-left key) */}
          <Link
            href="/camera"
            aria-label="Go to Camera"
            className="absolute left-[28%] top-[53%] h-[6%] w-[12%] rounded-full outline-none ring-indigo-400/80 ring-offset-2 ring-offset-black transition focus-visible:ring hover:bg-white/10"
          />

          {/* Games (bottom-right key) */}
          <Link
            href="/games"
            aria-label="Go to Games"
            className="absolute right-[19%] top-[53%] h-[6%] w-[18%] rounded-full outline-none ring-indigo-400/80 ring-offset-2 ring-offset-black transition focus-visible:ring hover:bg-white/10"
          />

          {/* Center Home button */}
          <Link
            href="/home"
            aria-label="Go to Home"
            className="absolute left-1/2 top-[46.8%] h-[9%] w-[14%] -translate-x-1/2 rounded-full outline-none ring-indigo-400/80 ring-offset-2 ring-offset-black transition focus-visible:ring hover:bg-white/10"
          />
        </div>
      </div>
    </main>
  );
}
