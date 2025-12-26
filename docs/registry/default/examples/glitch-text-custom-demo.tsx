"use client";

import { GlitchText } from "@/registry/default/ui/glitch-text";

export default function GlitchTextCustomDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h3 className="mb-4 text-lg font-semibold">Fast Glitch</h3>
        <GlitchText
          words={["Code", "Hack", "Debug", "Fix"]}
          interval={1500}
          glitchDuration={200}
          className="text-2xl font-mono text-primary"
        />
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-semibold">Slow Glitch</h3>
        <GlitchText
          words={["Design", "Create", "Build", "Deploy"]}
          interval={5000}
          glitchDuration={500}
          className="text-3xl font-bold text-destructive"
        />
      </div>
    </div>
  );
}