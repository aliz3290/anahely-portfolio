import Link from "next/link";
import Image from "next/image";

export default function FavoritePlacesPage() {
  const places = [
    {
      id: 1,
      title: "Paris, France",
      category: "City",
      description: "The City of Light, where art, culture, and romance converge in perfect harmony.",
      image: "/api/placeholder/800/600",
    },
    {
      id: 2,
      title: "Santorini, Greece",
      category: "Island",
      description: "Whitewashed cliffs overlooking the Aegean Sea, where sunsets paint the sky in hues of gold and rose.",
      image: "/api/placeholder/800/600",
    },
    {
      id: 3,
      title: "Kyoto, Japan",
      category: "Cultural",
      description: "Ancient temples and cherry blossoms, where tradition meets tranquility in every season.",
      image: "/api/placeholder/800/600",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.03),transparent)]"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-6 font-light">Curated Collection</p>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6 text-slate-900">
            Favorite
            <br />
            <span className="italic font-serif">Places</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            A carefully curated selection of destinations that inspire, captivate, and leave lasting impressions.
          </p>
        </div>
        
        {/* Decorative line */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-24 h-px bg-slate-300"></div>
      </header>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/home" className="text-sm uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors">
            ← Back
          </Link>
          <div className="text-xs uppercase tracking-widest text-slate-400">Favorite Places</div>
        </div>
      </nav>

      {/* Editorial Content */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-32 text-center">
          <p className="text-sm uppercase tracking-widest text-slate-500 mb-8">Editorial</p>
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
            Each destination tells a story, each location holds a memory. These are the places that have shaped perspectives,
            inspired creativity, and created moments of pure wonder. From bustling city streets to serene natural landscapes,
            this collection represents a journey through spaces that resonate deeply.
          </p>
        </div>

        {/* Places Grid */}
        <div className="space-y-32 mb-32">
          {places.map((place, index) => (
            <article
              key={place.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full aspect-[4/3] relative overflow-hidden bg-slate-100">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100">
                  <span className="text-slate-400 text-sm uppercase tracking-widest">Image Placeholder</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 border-l border-slate-300 pl-4">
                    {place.category}
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-light tracking-tight text-slate-900">
                  {place.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light max-w-lg">
                  {place.description}
                </p>
                <div className="pt-4">
                  <span className="text-xs uppercase tracking-widest text-slate-400 border-t border-slate-200 pt-4 inline-block">
                    Discover More
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto text-center py-24 border-t border-slate-200">
          <p className="text-3xl md:text-4xl font-light italic text-slate-700 leading-relaxed mb-8">
            &ldquo;The world is a book, and those who do not travel read only one page.&rdquo;
          </p>
          <p className="text-sm uppercase tracking-widest text-slate-400">— Saint Augustine</p>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-12 border-t border-slate-200">
          <Link
            href="/home"
            className="text-sm uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors border-b border-transparent hover:border-slate-900"
          >
            Return Home
          </Link>
          <span className="text-slate-300">•</span>
          <Link
            href="/"
            className="text-sm uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors border-b border-transparent hover:border-slate-900"
          >
            Phone Splash
          </Link>
        </div>
      </section>
    </main>
  );
}
