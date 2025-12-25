import { HighlightText } from "@/registry/default/ui/highlight-text";

export default function HighlightTextVariantsDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-10">
      <div className="text-2xl font-medium">
        This is an <HighlightText variant="underline">underline</HighlightText> highlight.
      </div>
      <div className="text-2xl font-medium">
        This is a <HighlightText variant="box">box</HighlightText> highlight.
      </div>
      <div className="text-2xl font-medium">
        This is a <HighlightText variant="circle">circle</HighlightText> highlight.
      </div>
      <div className="text-2xl font-medium">
        This is a <HighlightText variant="marker">marker</HighlightText> highlight.
      </div>
    </div>
  );
}
