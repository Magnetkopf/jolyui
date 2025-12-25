import { RollingCounter } from "@/registry/default/ui/number-counter";

export default function RollingCounterDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-20 w-full">
      <div className="text-center">
        <h3 className="text-sm font-medium text-muted-foreground mb-4">Rolling Counter</h3>
        <RollingCounter
          value={98765}
          prefix="$"
          className="text-6xl font-black tracking-tight"
        />
      </div>
    </div>
  );
}
