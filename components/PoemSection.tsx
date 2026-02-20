interface PoemSectionProps {
  stanzaNumber?: number;
  stanza: string;
  analysis: string;
}

export default function PoemSection({
  stanzaNumber,
  stanza,
  analysis,
}: PoemSectionProps) {
  return (
    <section className="mb-16">
      {stanzaNumber !== undefined && (
        <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-foreground mb-6">
          Strofa {stanzaNumber}
        </h3>
      )}

      {/* Original poem text */}
      <blockquote className="poem-text border-l-2 border-accent/40 pl-6 py-2 mb-8 text-foreground/80">
        {stanza.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < stanza.split("\n").length - 1 && <br />}
          </span>
        ))}
      </blockquote>

      {/* Analysis in Italian */}
      <div className="text-foreground/90 leading-relaxed space-y-4">
        {analysis.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
