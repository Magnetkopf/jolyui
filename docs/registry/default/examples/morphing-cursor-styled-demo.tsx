import { MagneticText } from "@/registry/default/ui/morphing-cursor";

export default function MorphingCursorStyledDemo() {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <MagneticText
        text="HOVER ME"
        hoverText="MAGIC"
        className="rounded-2xl bg-muted/50 p-8"
      />
    </div>
  );
}
