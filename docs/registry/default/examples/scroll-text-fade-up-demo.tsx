import { ScrollText } from "@/registry/default/ui/scroll-text";

export default function ScrollTextFadeUpDemo() {
  return (
    <div className="flex items-center justify-center h-[400px] w-full">
      <ScrollText effect="fadeUp" className="text-4xl font-bold">
        Fade Up Animation
      </ScrollText>
    </div>
  );
}
