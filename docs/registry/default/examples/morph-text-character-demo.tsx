import { CharacterMorph } from "@/registry/default/ui/morph-text";

const texts = [
  "Character Morph",
  "Staggered Effect",
  "Smooth Transitions",
  "Text Animation",
];

export default function MorphTextCharacterDemo() {
  return (
    <div className="flex h-[200px] w-full items-center justify-center bg-black text-white">
      <CharacterMorph
        texts={texts}
        className="text-3xl font-bold tracking-wide sm:text-5xl"
      />
    </div>
  );
}
