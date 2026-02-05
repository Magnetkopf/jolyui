import { MagneticText } from "@/registry/default/ui/morphing-cursor";

export default function MorphingCursorCustomDemo() {
  return (
    <div className="flex min-h-[300px] flex-wrap items-center justify-center gap-12">
      <MagneticText text="DESIGN" hoverText="CREATE" />
      <MagneticText text="BUILD" hoverText="LAUNCH" />
    </div>
  );
}
