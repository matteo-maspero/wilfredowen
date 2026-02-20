interface PageHeaderProps {
  title: string;
  subtitle?: string;
  ornament?: boolean;
}

export default function PageHeader({
  title,
  subtitle,
  ornament = true,
}: PageHeaderProps) {
  return (
    <div className="pt-32 pb-16 px-6 text-center">
      {ornament && (
        <div className="divider-ornament max-w-xs mx-auto mb-8">
          <span className="text-accent text-sm">&#10045;</span>
        </div>
      )}
      <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-light max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {ornament && (
        <div className="divider-ornament max-w-xs mx-auto mt-8">
          <span className="text-accent text-sm">&#10045;</span>
        </div>
      )}
    </div>
  );
}
