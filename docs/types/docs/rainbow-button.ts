/**
 * Props for the RainbowButton component
 */
export interface RainbowButtonProps {
  /**
   * The content to be displayed inside the button
   */
  children: React.ReactNode;
  /**
   * Array of colors for the gradient border
   * @default ["#f43f5e", "#8b5cf6", "#3b82f6", "#22c55e", "#f43f5e"]
   */
  colors?: string[];
  /**
   * Duration of the animation in seconds
   * @default 2
   */
  duration?: number;
  /**
   * Width of the border in pixels
   * @default 2
   */
  borderWidth?: number;
  /**
   * Whether the gradient should animate
   * @default true
   */
  animated?: boolean;
}
