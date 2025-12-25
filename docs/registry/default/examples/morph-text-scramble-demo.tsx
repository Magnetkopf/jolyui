import { ScrambleMorph } from "@/registry/default/ui/morph-text";

const texts = [
  "System Encrypted",
  "Access Denied",
  "Decrypting...",
  "Access Granted",
  "Welcome User",
];

export default function MorphTextScrambleDemo() {
  return (
    <div className="flex h-[200px] w-full items-center justify-center bg-black text-green-500">
      <ScrambleMorph
        texts={texts}
        className="text-3xl font-bold tracking-wider sm:text-5xl font-mono"
      />
    </div>
  );
}
