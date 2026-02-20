import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section — Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full-screen background image */}
        <Image
          src="/images/hero-trench.jpg"
          alt="Trincea britannica durante la Battaglia della Somme, 1916"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Decorative line */}
          <div className="w-16 h-px bg-accent-light mx-auto mb-8 animate-fade-in-up" />

          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight animate-fade-in-up">
            Wilfred Owen
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/60 font-medium tracking-[0.3em] uppercase animate-fade-in-up-delay">
            1893 — 1918
          </p>

          {/* Quote */}
          <blockquote className="mt-12 max-w-2xl mx-auto animate-fade-in-up-delay-2">
            <p className="text-xl md:text-2xl text-white/80 italic leading-relaxed font-[family-name:var(--font-playfair)]">
              &ldquo;La mia poesia non è nella pietà.
              <br />
              La pietà è nella poesia.&rdquo;
            </p>
            <cite className="block mt-4 text-sm text-white/40 not-italic tracking-wider uppercase">
              — Wilfred Owen, Prefazione
            </cite>
          </blockquote>

          {/* CTA */}
          <div className="mt-16 animate-fade-in-up-delay-3">
            <Link
              href="/author"
              className="inline-flex items-center gap-3 px-8 py-3 border border-white/20 text-white/80 text-sm uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/40 transition-all duration-300 rounded-none"
            >
              Scopri la sua storia
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Decorative line */}
          <div className="w-16 h-px bg-accent-light mx-auto mt-16 animate-fade-in-up-delay-3" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-fade-in-up-delay-3">
          <span className="text-xs tracking-[0.3em] uppercase">Scorri</span>
          <div className="w-px h-8 bg-white/20" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-24 px-6">
        {/* Owen portrait as subtle background element */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.04] pointer-events-none hidden lg:block">
          <Image
            src="/images/owen-portrait.png"
            alt=""
            fill
            className="object-contain object-right-top"
            aria-hidden="true"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground mb-8">
            Il poeta delle trincee
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-6">
            Wilfred Owen è considerato il più grande poeta della Prima Guerra
            Mondiale. Le sue poesie, scritte nelle trincee del fronte
            occidentale, denunciano con brutale onestà l&apos;orrore del
            conflitto e la menzogna della retorica bellicista.
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            Morì il 4 novembre 1918 — sette giorni prima dell&apos;Armistizio —
            a soli venticinque anni. La sua opera, pubblicata postuma, ha
            cambiato per sempre il modo in cui l&apos;umanità racconta la
            guerra.
          </p>
        </div>
      </section>

      {/* Poems Preview */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          {/* Chateau Wood image banner */}
          <div className="relative w-full h-48 md:h-64 mb-16 overflow-hidden">
            <Image
              src="/images/chateau-wood.jpg"
              alt="Chateau Wood, Ypres, 1917 — Soldati australiani attraversano un paesaggio devastato"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-surface/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xs text-foreground/50 tracking-wider uppercase">Chateau Wood, Ypres, 1917 — Dominio pubblico</p>
            </div>
          </div>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground">
              Le opere
            </h2>
            <div className="divider-ornament max-w-xs mx-auto mt-6">
              <span className="text-accent text-sm">&#10045;</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dulce et Decorum Est */}
            <Link
              href="/dulce-et-decorum-est"
              className="group block bg-background border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src="/images/hero-trench.jpg"
                  alt="Trincea della Somme"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              </div>
              <div className="p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                Dulce et Decorum Est
              </h3>
              <p className="text-sm text-muted-light italic mb-4">1917</p>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Una denuncia feroce della propaganda bellicista, attraverso la
                descrizione di un attacco con il gas nelle trincee. Owen
                smantella la &ldquo;vecchia menzogna&rdquo; che morire per la
                patria sia dolce e onorevole.
              </p>
              <span className="text-accent text-sm uppercase tracking-wider group-hover:tracking-[0.2em] transition-all">
                Leggi l&apos;analisi →
              </span>
              </div>
            </Link>

            {/* Futility */}
            <Link
              href="/futility"
              className="group block bg-background border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src="/images/chateau-wood.jpg"
                  alt="Chateau Wood, Ypres, 1917"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              </div>
              <div className="p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                Futility
              </h3>
              <p className="text-sm text-muted-light italic mb-4">1918</p>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Una meditazione intima sull&apos;inutilità della morte in
                guerra. Davanti al corpo di un soldato caduto, Owen interroga il
                sole e la natura sul senso della vita e della creazione.
              </p>
              <span className="text-accent text-sm uppercase tracking-wider group-hover:tracking-[0.2em] transition-all">
                Leggi l&apos;analisi →
              </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
