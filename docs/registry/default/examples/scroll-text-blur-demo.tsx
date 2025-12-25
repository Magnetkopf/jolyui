import { ScrollText } from "@/registry/default/ui/scroll-text";

export default function ScrollTextBlurDemo() {
  return (
    <div className="flex items-center justify-center h-[400px] w-full">
      <ScrollText effect="blur" className="text-4xl font-bold">
        Blur Animation
      </ScrollText>
    </div>
  );
}
