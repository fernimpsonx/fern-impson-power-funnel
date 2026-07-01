export default function Affirmations() {
  return (
    <div className="min-h-screen bg-blush-background text-charcoal-dark font-body">
      {/* HEADER - Minimal, Premium */}
      <header className="sticky top-0 z-50 bg-blush-background/95 backdrop-blur-sm border-b border-cognac/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
          <h1 className="text-2xl md:text-3xl font-bold font-display text-burgundy-wine">
            FERN IMPSON
          </h1>
          <p className="text-xs md:text-sm text-cognac font-light tracking-widest mt-2">
            LIFE ALIGNMENT GUIDE
          </p>
        </div>
      </header>

      {/* HERO SECTION - Asymmetric, Spacious */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left: Headline & Copy */}
            <div className="space-y-8">
              <div>
                <p className="text-xs md:text-sm text-cognac font-light tracking-widest mb-6">
                  FREE AFFIRMATIONS
                </p>
                <h2 className="text-5xl md:text-6xl font-bold font-display text-charcoal-dark leading-tight">
                  Affirmations to Become Your Best Self
                </h2>
              </div>

              <p className="text-lg md:text-xl text-charcoal-dark/80 font-light leading-relaxed max-w-lg">
                These affirmations strengthen the way you think, feel, and respond to life. Little by little, these words become beliefs, and those beliefs become the life you create.
              </p>
            </div>

            {/* Right: Video Placeholder (Vertical) */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-xs">
                {/* Vertical Video Placeholder */}
                <div className="aspect-[9/16] bg-charcoal-dark rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center text-white/60 p-6">
                    <p className="text-sm font-light">Video Placeholder</p>
                    <p className="text-xs mt-2">9:16 Vertical Format</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER - Subtle */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-gradient-to-r from-cognac/30 via-cognac/10 to-transparent"></div>
      </div>

      {/* VIDEO SECTION - "Watch & Absorb" */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h3 className="text-4xl md:text-5xl font-bold font-display text-burgundy-wine mb-8">
              Watch & Absorb
            </h3>

            <p className="text-lg md:text-xl text-charcoal-dark/80 font-light leading-relaxed mb-12">
              This 7-minute affirmation video is designed to anchor you into your highest identity. Listen with intention, feel the words, and let them reshape your internal narrative.
            </p>

            {/* Vertical Video Embed Placeholder */}
            <div className="flex justify-start">
              <div className="w-full max-w-xs">
                <div className="aspect-[9/16] bg-charcoal-dark rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/FeMRY6ZvvFk"
                    title="Affirmations to Become Your Best Self"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - Minimal */}
      <footer className="py-16 px-6 md:px-12 border-t border-cognac/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-charcoal-dark/60 font-light">
            © 2026 Fern Impson
            <br />
            Certified Life & Mindfulness Coach — Trauma-Informed
          </p>
        </div>
      </footer>
    </div>
  );
}
