"use client";

import { MorphingText } from "@/registry/default/ui/text-morphing";

export default function TextMorphingVariantsDemo() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Fast Animation</h2>
        <p className="text-lg">
          Experience{" "}
          <MorphingText
            words={["speed", "velocity", "rapidity", "quickness"]}
            interval={1500}
            animationDuration={0.3}
            className="text-red-500 font-bold"
          />{" "}
          like never before
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Slow & Elegant</h2>
        <p className="text-lg">
          Enjoy{" "}
          <MorphingText
            words={["grace", "elegance", "beauty", "poetry"]}
            interval={4000}
            animationDuration={1.2}
            className="text-purple-500 font-bold"
          />{" "}
          in motion
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Tech Terms</h2>
        <p className="text-lg">
          Powered by{" "}
          <MorphingText
            words={["React", "TypeScript", "Next.js", "Tailwind"]}
            interval={2500}
            className="text-cyan-500 font-mono"
          />
        </p>
      </div>
    </div>
  );
}