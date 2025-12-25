import { CodeCompare } from "@/registry/default/ui/code-block";

const beforeCode = `function add(a, b) {
  return a + b;
}`;

const afterCode = `function add(a: number, b: number): number {
  return a + b;
}`;

export default function CodeBlockCompareDemo() {
  return (
    <div className="w-full max-w-4xl">
      <CodeCompare
        before={beforeCode}
        after={afterCode}
        language="typescript"
        beforeTitle="JavaScript"
        afterTitle="TypeScript"
        showDiff={true}
      />
    </div>
  );
}
