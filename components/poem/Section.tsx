import Divider from "../Divider";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  dividerBefore?: boolean;
}

export default function Section({
  title,
  children,
  dividerBefore = false,
}: SectionProps) {
  return (
    <>
      {dividerBefore && <Divider />}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground mb-6">
          {title}
        </h2>
        {children}
      </section>
    </>
  );
}
