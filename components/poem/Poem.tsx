interface PoemProps {
  stanzas: { text: string; paraphrase?: string }[];
}

export default function Poem({ stanzas }: PoemProps) {
  const poem = stanzas.map((s) => s.text).join("\n\n");
  const lines = poem.split("\n").map((line) => line.trim());

  return (
    <blockquote className="poem-text border-l-2 border-accent/40 pl-6 py-2 text-foreground/80">
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </blockquote>
  );
}