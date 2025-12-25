import { NumberCounter } from "@/registry/default/ui/number-counter";

export default function NumberCounterDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-20 w-full">
      <div className="text-center">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Basic Counter</h3>
        <NumberCounter
          value={1234.56}
          decimals={2}
          prefix="$"
          className="text-4xl font-bold"
        />
      </div>

      <div className="text-center">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Large Number</h3>
        <NumberCounter
          value={1000000}
          prefix="+"
          className="text-4xl font-bold text-primary"
        />
      </div>
    </div>
  );
}
