import type { EmptyProps } from "@/types";

export interface MagneticTextProps extends EmptyProps<"div"> {
  /**
   * The default text displayed before hover.
   * @default "CREATIVE"
   */
  text?: string;

  /**
   * The text displayed inside the morphing cursor circle on hover.
   * @default "EXPLORE"
   */
  hoverText?: string;

  /**
   * Additional CSS classes to apply to the container.
   */
  className?: string;
}
