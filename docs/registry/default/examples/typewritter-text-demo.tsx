"use client";

import { TypewriterText } from "@/registry/default/ui/typewritter-text";

export default function TypewritterTextDemo() {
  return (
    <div className="flex items-center justify-center">
      <TypewriterText
        words={["Hello", "World", "Typewriter", "Effect"]}
        className="text-4xl font-bold text-foreground"
      />
    </div>
  );
}