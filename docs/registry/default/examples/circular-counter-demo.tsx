import { CircularCounter } from "@/registry/default/ui/number-counter";

export default function CircularCounterDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-16 py-12 w-full bg-neutral-950 rounded-xl border border-neutral-800">
      <div className="flex flex-col items-center gap-4">
        <CircularCounter 
          value={75} 
          size={160} 
          strokeWidth={12}
          className="text-white"
          color="white"
          trackColor="rgba(255,255,255,0.1)"
        />
        <span className="text-sm font-medium text-neutral-400">Project Completion</span>
      </div>

      <div className="flex flex-col items-center gap-4">
        <CircularCounter 
          value={92} 
          size={120} 
          strokeWidth={8} 
          className="text-white"
          color="#22c55e" // green-500
          trackColor="rgba(255,255,255,0.1)"
        />
        <span className="text-sm font-medium text-neutral-400">Success Rate</span>
      </div>
    </div>
  );
}
