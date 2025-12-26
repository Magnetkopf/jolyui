"use client";

import { RotatingText } from "@/registry/default/ui/rotate-text";

export default function RotateTextDemo() {
  return (
    <div className="flex items-center justify-center">
      <RotatingText
        words={["Hello", "World", "Rotate", "Text"]}
        className="text-4xl font-bold text-foreground"
      />
    </div>
  );
}