"use client";

import { ShimmerBorder } from "@/registry/default/ui/gradient-border";

export default function GradientBorderShimmerDemo() {
  return (
    <div className="h-full">
      <ShimmerBorder className="h-full">
        <div className="p-6">
          <h3 className="mb-2 font-semibold">Shimmer Border</h3>
          <p className="text-sm text-muted-foreground">
            A single rotating shimmer highlight around the border
          </p>
        </div>
      </ShimmerBorder>
    </div>
  );
}