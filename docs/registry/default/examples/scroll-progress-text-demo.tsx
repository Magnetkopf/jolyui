import { ScrollProgressText } from "@/registry/default/ui/scroll-text";

export default function ScrollProgressTextDemo() {
  return (
    <div className="py-20 px-4 w-full max-w-3xl mx-auto">
      <ScrollProgressText 
        text="As you scroll down, this text will light up character by character, creating a beautiful reading experience that guides the user's eye through the content."
        className="text-4xl font-bold leading-tight"
      />
    </div>
  );
}
