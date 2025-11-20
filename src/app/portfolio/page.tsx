import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-50 px-4 py-16">
      <div className="max-w-2xl w-full space-y-8">
        <header className="space-y-2 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Nana&apos;s Work
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl">Projects &amp; Portfolio</h1>
          <p className="text-sm text-slate-400">
            A gallery space for your projects, artwork, experiments, or
            anything else you want to showcase.
          </p>
        </header>
        <section className="space-y-4 text-sm text-slate-200">
          <p>
            Later you can swap this placeholder out for a grid of cards,
            images, or any layout that matches your vision. For now, it ensures
            the route behind the Projects/Portfolio key is wired correctly.
          </p>
        </section>
        <nav
          className="flex flex-wrap items-center gap-3 text-sm"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 font-medium text-slate-100 shadow-sm transition hover:border-indigo-400 hover:bg-slate-900"
          >
            Back to phone splash
          </Link>
          <Link
            href="/home"
            className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-slate-300 transition hover:border-indigo-400 hover:bg-slate-900"
          >
            Go to home
          </Link>
        </nav>
      </div>
    </main>
  );
}

