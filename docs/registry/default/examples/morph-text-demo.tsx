import { MorphText } from "@/registry/default/ui/morph-text";

const texts = [
  "Creative",
  "Innovative",
  "Powerful",
  "Dynamic",
  "Beautiful",
];

export default function MorphTextDemo() {
  return (
    <div className="flex h-[200px] w-full items-center justify-center bg-black text-white">
      <MorphText
        texts={texts}
        className="text-4xl font-bold tracking-tight sm:text-6xl"
      />
    </div>
  );
}
