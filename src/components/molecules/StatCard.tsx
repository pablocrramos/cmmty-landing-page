export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-heading text-primary text-4xl font-bold lg:text-5xl">
        {value}
      </p>
      <p className="text-muted-foreground mt-2 text-sm">{label}</p>
    </div>
  );
}
