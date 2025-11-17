import XIcon from "@/components/icons/x-icon";
import { GitHubStarsButton } from "@/components/landing/github-star-button";
import { siteConfig } from "@/config/site";
import { source } from "@/lib/source";
import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Flame } from "lucide-react";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Flame className="size-4" />
        <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
          {siteConfig.name}
        </span>
      </>
    ),
  },
  links: [
    {
      type: "icon",
      url: siteConfig.links.github,
      text: "Github",
      icon: <GitHubStarsButton username="johuniq" repo="jolyui"/>,
      external: true,
    },
        {
      type: "icon",
      url: siteConfig.links.x,
      text: "X",
      icon: <div >
        <XIcon className="size-5" />
      </div>,
      external: true,
    },
  ],
};

export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  sidebar: {
    defaultOpenLevel: 1,
  },
};
