import type { Registry } from "shadcn/schema";

export const examples: Registry["items"] = [
  {
    name: "avatar-group-demo",
    type: "registry:example",
    registryDependencies: ["avatar", "avatar-group"],
    files: [
      {
        path: "examples/avatar-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-group-truncation-demo",
    type: "registry:example",
    registryDependencies: ["avatar", "avatar-group"],
    files: [
      {
        path: "examples/avatar-group-truncation-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-group-rtl-demo",
    type: "registry:example",
    registryDependencies: ["avatar", "avatar-group"],
    files: [
      {
        path: "examples/avatar-group-rtl-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-group-icons-demo",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: ["avatar-group"],
    files: [
      {
        path: "examples/avatar-group-icons-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
