import Divider from "../Divider";

interface PoemHeaderProps {
  title: string;
  subtitle?: string;
  ornament?: boolean;
}

export default function PoemHeader({
  title,
  subtitle,
  ornament = true,
}: PoemHeaderProps) {
  return (
    <div className="pt-32 pb-16 px-6 text-center">
      {ornament && (
        <Divider />
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
        <Divider />
      )}
    </div>
  );
}
