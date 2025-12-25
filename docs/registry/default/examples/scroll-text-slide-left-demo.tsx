import { ScrollText } from "@/registry/default/ui/scroll-text";

export default function ScrollTextSlideLeftDemo() {
  return (
    <div className="flex items-center justify-center h-[400px] w-full">
      <ScrollText effect="slideLeft" className="text-4xl font-bold">
        Slide Left Animation
      </ScrollText>
    </div>
  );
}
