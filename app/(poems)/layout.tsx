export default function PoemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-24">
      {children}
    </div>
  );
}
