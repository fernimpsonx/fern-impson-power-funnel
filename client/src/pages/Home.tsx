import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Headphones, Phone, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663742904481/Y3wgcPb6oicxqnmhhEh6J8/fern_hero_dashboard-CuaobP8rJMjwnLoZLaf4sF.webp"
          alt="Fern Impson - Mind, Heart & Body Coach"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
          {/* Main Problem Statement */}
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-8 text-white">
            You're successful at work.
            <br />
            <span className="text-dusty-rose">So why doesn't it translate to your personal life?</span>
          </h1>

          {/* Supporting Copy */}
          <div className="max-w-2xl mx-auto mb-12 space-y-4">
            <p className="text-xl md:text-2xl text-white/95 font-light">
              You've built a career, a family, and a life people admire.
            </p>
            <p className="text-xl md:text-2xl text-white/95 font-light">
              But inside, your mind never seems to switch off.
            </p>
            <p className="text-xl md:text-2xl text-white/95 font-light">
              You're overthinking, second-guessing yourself, and carrying the weight of everything and everyone.
            </p>
          </div>

          {/* Solution Statement */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-12">
            <p className="text-2xl md:text-3xl font-semibold text-white">
              I help high-achieving women move from survival mode to calm, confidence and self-trust.
            </p>
          </div>

          {/* Divider */}
          <div className="w-16 h-1 bg-gradient-to-r from-dusty-rose via-dusty-rose to-transparent mx-auto mb-12"></div>

          {/* Choose Your Next Step */}
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-12">
            Choose your next step
          </h2>

          {/* Action Buttons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Free 15-Min Workshop */}
            <button className="group relative bg-white/95 hover:bg-white text-charcoal-dark p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 text-left">
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">🎥</div>
                <div>
                  <h3 className="text-xl font-bold font-display mb-2">Free 15-Min Workshop</h3>
                  <p className="text-sm text-charcoal-dark/70">Why you never feel like enough (and what your brain is actually doing).</p>
                </div>
              </div>
            </button>

            {/* 7-Min Reset */}
            <button className="group relative bg-white/95 hover:bg-white text-charcoal-dark p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 text-left">
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">🎧</div>
                <div>
                  <h3 className="text-xl font-bold font-display mb-2">7-Min Brain & Body Reset</h3>
                  <p className="text-sm text-charcoal-dark/70">A guided reset for when life feels overwhelming.</p>
                </div>
              </div>
            </button>

            {/* Free 1:1 Coaching Session */}
            <button className="group relative bg-dusty-rose hover:bg-dusty-rose/90 text-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 text-left md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">📞</div>
                <div>
                  <h3 className="text-xl font-bold font-display mb-2">Free 1:1 Coaching Session</h3>
                  <p className="text-sm text-white/90">Personalised support for your specific situation.</p>
                </div>
              </div>
            </button>
          </div>

          {/* Coaching Packages Link */}
          <div className="mt-8">
            <button className="text-white hover:text-dusty-rose transition-colors duration-300 font-semibold text-lg flex items-center justify-center gap-2 mx-auto">
              💛 Explore 1:1 Coaching Packages
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: SOCIAL PROOF */}
      <section className="bg-charcoal-dark text-white py-20">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-16">
            What clients experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/5 border border-dusty-rose/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-dusty-rose text-xl">⭐</span>
                ))}
              </div>
              <p className="text-lg italic text-white/90 mb-4">
                "I still use the Four Characters tool every day…"
              </p>
              <p className="text-sm text-white/60">— High-Achieving Woman</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/5 border border-dusty-rose/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-dusty-rose text-xl">⭐</span>
                ))}
              </div>
              <p className="text-lg italic text-white/90 mb-4">
                "My mind feels calm instead of constantly racing…"
              </p>
              <p className="text-sm text-white/60">— High-Achieving Woman</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/5 border border-dusty-rose/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-dusty-rose text-xl">⭐</span>
                ))}
              </div>
              <p className="text-lg italic text-white/90 mb-4">
                "I don't react like I used to…"
              </p>
              <p className="text-sm text-white/60">— High-Achieving Woman</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT FERN */}
      <section className="bg-background py-20">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-charcoal-dark">
            Hi, I'm Fern.
          </h2>

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              I grew up in Brazil, one of eight siblings, watching my mother survive domestic violence. I promised her a home, and at 27, I built it. I thought that was "arrival." Instead, I felt empty. I had achieved everything, but I didn't know who I was without it.
            </p>
            <p>
              At 29, I moved to Australia with a suitcase and zero English. I cleaned houses to survive—a season that stripped everything back and allowed me to finally meet myself. I rebuilt my career from scratch, eventually delivering some of the largest infrastructure projects in Australia.
            </p>
            <p>
              But then, life brought me to my knees. Four failed IVF cycles, surgery, and years of trying. I held everything together on the outside while falling apart internally. I thought that was "strength." Now I know it was survival.
            </p>
            <p>
              It was only when I stopped fighting my experience and started listening to my body that everything shifted. My son arrived naturally at 37. Today, I still lead major projects and a busy family—but I do it from a place of calm, not chaos.
            </p>
          </div>

          <button className="mt-12 text-dusty-rose hover:text-dusty-rose/80 font-semibold text-lg flex items-center gap-2 transition-colors duration-300">
            Learn More About My Story
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* SECTION 4: THE METHOD */}
      <section className="bg-charcoal-dark text-white py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-6">
            Mind, Heart & Body
          </h2>

          <p className="text-center text-xl text-white/80 mb-16 max-w-2xl mx-auto">
            Real change doesn't come from more information.
            <br />
            It comes from understanding your mind, connecting with your emotions, and teaching your body that it is safe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mind Pillar */}
            <div className="bg-white/5 border border-dusty-rose/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold font-display mb-4 text-dusty-rose">Mind</h3>
              <p className="text-white/80">The Four Characters and hidden patterns.</p>
            </div>

            {/* Heart Pillar */}
            <div className="bg-white/5 border border-dusty-rose/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-5xl mb-6">💛</div>
              <h3 className="text-2xl font-bold font-display mb-4 text-dusty-rose">Heart</h3>
              <p className="text-white/80">Emotional awareness and boundaries.</p>
            </div>

            {/* Body Pillar */}
            <div className="bg-white/5 border border-dusty-rose/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-5xl mb-6">🫀</div>
              <h3 className="text-2xl font-bold font-display mb-4 text-dusty-rose">Body</h3>
              <p className="text-white/80">Breathwork and nervous system regulation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="bg-background py-20">
        <div className="container max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 text-charcoal-dark">
            Ready for personalised support?
          </h2>

          <p className="text-xl text-foreground/80 mb-12">
            Book a free 1:1 coaching session and we'll explore what's keeping you stuck and what your next step could be.
          </p>

          <button className="bg-dusty-rose hover:bg-dusty-rose/90 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 mx-auto">
            📞 Book Free 1:1 Coaching Session
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Footer */}
          <div className="mt-20 pt-12 border-t border-border">
            <p className="text-sm text-foreground/60">
              Fern Impson | Mind, Heart & Body Coach | Trauma-Informed | Trusted by 50+ High-Achieving Women
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
