import { ScrollText } from "@/registry/default/ui/scroll-text";

export default function ScrollTextRotateDemo() {
  return (
    <div className="flex items-center justify-center h-[400px] w-full">
      <ScrollText effect="rotate" className="text-4xl font-bold">
        Rotate Animation
      </ScrollText>
    </div>
  );
}
