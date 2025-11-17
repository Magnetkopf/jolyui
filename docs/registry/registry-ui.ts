import type { Registry } from "shadcn/schema";

export const ui: Registry["items"] = [
  {
    name: "avatar-group",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
    files: [
      {
        path: "ui/avatar-group.tsx",
        type: "registry:ui",
      },
    ],
  },
];
