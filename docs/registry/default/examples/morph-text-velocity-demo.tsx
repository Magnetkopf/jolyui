import { VelocityMorph } from "@/registry/default/ui/morph-text";

const texts = [
  "Fast",
  "Fluid",
  "Dynamic",
  "Motion",
  "Velocity",
];

export default function MorphTextVelocityDemo() {
  return (
    <div className="flex h-[200px] w-full items-center justify-center bg-black text-white">
      <VelocityMorph
        texts={texts}
        className="text-4xl font-black uppercase tracking-tighter sm:text-7xl italic"
      />
    </div>
  );
}
