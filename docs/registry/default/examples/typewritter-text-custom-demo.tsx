"use client";

import { TypewriterText } from "@/registry/default/ui/typewritter-text";

export default function TypewritterTextCustomDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h3 className="mb-4 text-lg font-semibold">Fast Typing</h3>
        <TypewriterText
          words={["Code", "Build", "Deploy", "Scale"]}
          typingSpeed={50}
          deletingSpeed={25}
          pauseDuration={1000}
          className="text-2xl font-mono text-primary"
        />
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-semibold">Slow Typing</h3>
        <TypewriterText
          words={["Design", "Create", "Innovate", "Inspire"]}
          typingSpeed={200}
          deletingSpeed={100}
          pauseDuration={3000}
          className="text-3xl font-bold text-destructive"
        />
      </div>
    </div>
  );
}