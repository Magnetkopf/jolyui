import { ScrollText } from "@/registry/default/ui/scroll-text";

export default function ScrollTextDemo() {
  return (
    <div className="flex flex-col gap-32 py-20 items-center justify-center w-full">
      <ScrollText effect="fadeUp" className="text-4xl font-bold">
        Fade Up Animation
      </ScrollText>
      
      <ScrollText effect="blur" className="text-4xl font-bold">
        Blur Animation
      </ScrollText>
      
      <ScrollText effect="scale" className="text-4xl font-bold">
        Scale Animation
      </ScrollText>
      
      <ScrollText effect="rotate" className="text-4xl font-bold">
        Rotate Animation
      </ScrollText>
      
      <ScrollText effect="slideLeft" className="text-4xl font-bold">
        Slide Left Animation
      </ScrollText>
    </div>
  );
}
