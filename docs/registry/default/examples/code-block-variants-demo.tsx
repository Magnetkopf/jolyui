import { CodeBlock } from "@/registry/default/ui/code-block";

const code = `function calculateSum(a: number, b: number): number {
  return a + b;
}`;

export default function CodeBlockVariantsDemo() {
  return (
    <div className="grid gap-8 w-full max-w-3xl">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Default</h3>
        <CodeBlock code={code} language="typescript" variant="default" />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Terminal</h3>
        <CodeBlock code={code} language="typescript" variant="terminal" />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Minimal</h3>
        <CodeBlock code={code} language="typescript" variant="minimal" />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Gradient</h3>
        <CodeBlock code={code} language="typescript" variant="gradient" />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Glass</h3>
        <div className="p-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl">
          <CodeBlock code={code} language="typescript" variant="glass" />
        </div>
      </div>
    </div>
  );
}
