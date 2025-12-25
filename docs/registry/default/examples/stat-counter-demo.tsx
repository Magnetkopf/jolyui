import { StatCounter } from "@/registry/default/ui/number-counter";

export default function StatCounterDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 w-full max-w-4xl mx-auto">
      <StatCounter
        value={15000}
        label="Active Users"
        prefix="+"
        className="p-6 bg-secondary/20 rounded-xl"
      />
      <StatCounter
        value={98.5}
        label="Satisfaction Rate"
        suffix="%"
        decimals={1}
        className="p-6 bg-secondary/20 rounded-xl"
      />
      <StatCounter
        value={2500}
        label="Revenue"
        prefix="$"
        className="p-6 bg-secondary/20 rounded-xl"
      />
    </div>
  );
}
