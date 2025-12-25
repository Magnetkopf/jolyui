import { ScrollReveal } from "@/registry/default/ui/scroll-text";

export default function ScrollRevealDemo() {
  return (
    <div className="flex flex-col gap-8 py-20 items-center justify-center w-full">
      <ScrollReveal direction="up" className="p-8 bg-primary/10 rounded-xl">
        <h3 className="text-2xl font-bold mb-2">Reveal Up</h3>
        <p className="text-muted-foreground">This content reveals from the bottom.</p>
      </ScrollReveal>

      <ScrollReveal direction="left" delay={0.2} className="p-8 bg-primary/10 rounded-xl">
        <h3 className="text-2xl font-bold mb-2">Reveal Left</h3>
        <p className="text-muted-foreground">This content reveals from the right.</p>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={0.4} className="p-8 bg-primary/10 rounded-xl">
        <h3 className="text-2xl font-bold mb-2">Reveal Right</h3>
        <p className="text-muted-foreground">This content reveals from the left.</p>
      </ScrollReveal>
    </div>
  );
}
