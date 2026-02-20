import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-accent/10 bg-surface-dark text-background/70">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-background/90 mb-3">
              Wilfred Owen
            </h3>
            <p className="text-sm leading-relaxed">
              Sito dedicato alla memoria del poeta britannico Wilfred Owen
              (1893–1918), una delle voci più potenti della poesia di guerra.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-3">
              Pagine
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm hover:text-accent-light transition-colors"
              >
                Home
              </Link>
              <Link
                href="/author"
                className="text-sm hover:text-accent-light transition-colors"
              >
                Biografia
              </Link>
              <Link
                href="/dulce-et-decorum-est"
                className="text-sm hover:text-accent-light transition-colors"
              >
                Dulce et Decorum Est
              </Link>
              <Link
                href="/futility"
                className="text-sm hover:text-accent-light transition-colors"
              >
                Futility
              </Link>
            </nav>
          </div>

          {/* Credits */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-3">
              Nota
            </h4>
            <p className="text-sm leading-relaxed">
              I testi poetici sono riprodotti a scopo didattico e di studio. Le
              opere di Wilfred Owen sono di dominio pubblico.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10 text-center text-xs text-background/40">
          <p>
            &copy; {new Date().getFullYear()} &middot; Progetto didattico
            dedicato a Wilfred Owen
          </p>
        </div>
      </div>
    </footer>
  );
}
