export interface MorphTextProps {
  /**
   * The array of texts to morph between.
   */
  texts: string[];

  /**
   * Additional class names.
   */
  className?: string;

  /**
   * Duration of the morph animation in seconds.
   * @default 1.5
   */
  morphDuration?: number;

  /**
   * Duration to wait before the next morph in seconds.
   * @default 2
   */
  cooldownDuration?: number;

  /**
   * The HTML element to render as.
   * @default "div"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export interface CharacterMorphProps {
  /**
   * The array of texts to morph between.
   */
  texts: string[];

  /**
   * Additional class names.
   */
  className?: string;

  /**
   * Interval between text changes in milliseconds.
   * @default 3000
   */
  interval?: number;

  /**
   * Delay between each character animation in seconds.
   * @default 0.03
   */
  staggerDelay?: number;

  /**
   * Duration of each character animation in seconds.
   * @default 0.5
   */
  charDuration?: number;
}

export interface ScrambleMorphProps {
  /**
   * The array of texts to morph between.
   */
  texts: string[];

  /**
   * Additional class names.
   */
  className?: string;

  /**
   * Interval between text changes in milliseconds.
   * @default 3000
   */
  interval?: number;

  /**
   * Duration of the scramble effect in milliseconds.
   * @default 1000
   */
  scrambleDuration?: number;

  /**
   * Characters to use for scrambling.
   * @default "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
   */
  characters?: string;
}

export interface VelocityMorphProps {
  /**
   * The array of texts to morph between.
   */
  texts: string[];

  /**
   * Additional class names.
   */
  className?: string;

  /**
   * Interval between text changes in milliseconds.
   * @default 3000
   */
  interval?: number;
}
