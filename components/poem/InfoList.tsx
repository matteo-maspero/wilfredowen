interface InfoItem {
  label: string;
  value: React.ReactNode;
}

interface InfoListProps {
  items: InfoItem[];
}

export default function InfoList({ items }: InfoListProps) {
  return (
    <div className="space-y-4 text-foreground/85 leading-relaxed">
      {items.map((item, i) => (
        <div key={i}>
          <span className="font-semibold text-foreground">{item.label}:</span>{" "}
          {item.value}
        </div>
      ))}
    </div>
  );
}
