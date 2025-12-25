import { HorizontalScrollText } from "@/registry/default/ui/scroll-text";

export default function HorizontalScrollTextDemo() {
  return (
    <div className="py-20 w-full overflow-hidden">
      <HorizontalScrollText className="text-6xl font-black uppercase" speed={0.5}>
        Scroll Text • Animation • Motion • React •
      </HorizontalScrollText>
      
      <div className="h-10" />
      
      <HorizontalScrollText className="text-6xl font-black uppercase text-primary" direction="right" speed={0.5}>
        Creative • Innovative • Dynamic • Powerful •
      </HorizontalScrollText>
    </div>
  );
}
