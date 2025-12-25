import { HighlightText } from "@/registry/default/ui/highlight-text";

export default function HighlightTextDemo() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold tracking-tight text-center max-w-2xl leading-relaxed">
        Make your text <HighlightText>stand out</HighlightText> with animated highlights.
      </h1>
    </div>
  );
}
