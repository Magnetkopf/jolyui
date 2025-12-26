"use client";

import { RotatingText } from "@/registry/default/ui/rotate-text";

export default function RotateTextCustomDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h3 className="mb-4 text-lg font-semibold">Fast Rotation</h3>
        <RotatingText
          words={["Code", "Build", "Deploy", "Scale"]}
          interval={1000}
          className="text-2xl font-mono text-primary"
        />
      </div>

      <div className="text-center">
        <h3 className="mb-4 text-lg font-semibold">Slow Rotation</h3>
        <RotatingText
          words={["Design", "Create", "Innovate", "Inspire"]}
          interval={4000}
          className="text-3xl font-bold text-destructive"
        />
      </div>
    </div>
  );
}