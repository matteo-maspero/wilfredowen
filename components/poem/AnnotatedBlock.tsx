interface AnnotatedBlockProps {
  title: string;
  children: React.ReactNode;
}

export default function AnnotatedBlock({ title, children }: AnnotatedBlockProps) {
  return (
    <div className="border-l-2 border-accent/30 pl-6">
      <h4 className="font-semibold text-foreground mb-2">{title}</h4>
      <div className="text-foreground/80 leading-relaxed">{children}</div>
    </div>
  );
}
