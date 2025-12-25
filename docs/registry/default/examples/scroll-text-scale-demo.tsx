import { ScrollText } from "@/registry/default/ui/scroll-text";

export default function ScrollTextScaleDemo() {
  return (
    <div className="flex items-center justify-center h-[400px] w-full">
      <ScrollText effect="scale" className="text-4xl font-bold">
        Scale Animation
      </ScrollText>
    </div>
  );
}
