import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

interface MorphTextProps {
  texts: string[];
  className?: string;
  morphDuration?: number;
  cooldownDuration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

const MorphText = React.forwardRef<HTMLDivElement, MorphTextProps>(
  (
    {
      texts,
      className,
      morphDuration = 1.5,
      cooldownDuration = 2,
      as: Component = "div",
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [displayText, setDisplayText] = React.useState(texts[0]);
    const [morphProgress, setMorphProgress] = React.useState(0);

    const currentText = texts[currentIndex];
    const nextText = texts[(currentIndex + 1) % texts.length];

    React.useEffect(() => {
      const interval = setInterval(() => {
        setIsAnimating(true);
      }, (morphDuration + cooldownDuration) * 1000);

      return () => clearInterval(interval);
    }, [morphDuration, cooldownDuration]);

    React.useEffect(() => {
      if (!isAnimating) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) / 1000;
        const progress = Math.min(elapsed / morphDuration, 1);

        setMorphProgress(progress);

        // Create morphed text based on progress
        const maxLen = Math.max(currentText.length, nextText.length);
        let morphedText = "";

        for (let i = 0; i < maxLen; i++) {
          const currentChar = currentText[i] || " ";
          const nextChar = nextText[i] || " ";

          if (progress < 0.5) {
            morphedText += currentChar;
          } else {
            morphedText += nextChar;
          }
        }

        setDisplayText(morphedText);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setIsAnimating(false);
          setMorphProgress(0);
          setDisplayText(nextText);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, [isAnimating, currentText, nextText, morphDuration, texts.length]);

    // Calculate blur based on morph progress (peak blur at 0.5)
    const blurAmount = Math.sin(morphProgress * Math.PI) * 8;

    return (
      <div ref={ref} className={cn("relative inline-block whitespace-nowrap", className)}>
        {/* Background text (current) */}
        <motion.span
          className="absolute inset-0 select-none"
          style={{
            filter: `blur(${blurAmount}px)`,
            opacity: 1 - morphProgress,
          }}
        >
          {currentText.split("").map((char, i) => (
            <span
              key={`current-${i}`}
              className="inline-block"
              style={{
                filter: `blur(${Math.sin(morphProgress * Math.PI) * 4}px)`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </motion.span>

        {/* Foreground text (next) */}
        <motion.span
          className="absolute inset-0 select-none"
          style={{
            filter: `blur(${blurAmount}px)`,
            opacity: morphProgress,
          }}
        >
          {nextText.split("").map((char, i) => (
            <span
              key={`next-${i}`}
              className="inline-block"
              style={{
                filter: `blur(${Math.sin(morphProgress * Math.PI) * 4}px)`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </motion.span>

        {/* Invisible text for layout */}
        <span className="invisible">
          {displayText.split("").map((char, i) => (
            <span key={`layout-${i}`} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </div>
    );
  }
);

MorphText.displayName = "MorphText";

// Alternative: Character-by-character morph with stagger
interface CharacterMorphProps {
  texts: string[];
  className?: string;
  interval?: number;
  staggerDelay?: number;
  charDuration?: number;
}

const CharacterMorph = React.forwardRef<HTMLDivElement, CharacterMorphProps>(
  (
    {
      texts,
      className,
      interval = 3000,
      staggerDelay = 0.03,
      charDuration = 0.5,
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const currentText = texts[currentIndex];

    React.useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, interval);

      return () => clearInterval(timer);
    }, [interval, texts.length]);

    const maxLength = Math.max(...texts.map((t) => t.length));

    return (
      <div ref={ref} className={cn("relative inline-flex whitespace-nowrap", className)}>
        <AnimatePresence mode="popLayout">
          {currentText.split("").map((char, i) => (
            <motion.span
              key={`${currentIndex}-${i}-${char}`}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)", rotateX: -90 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)", rotateX: 90 }}
              transition={{
                duration: charDuration,
                delay: i * staggerDelay,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="inline-block"
              style={{ transformStyle: "preserve-3d" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </AnimatePresence>
        {/* Maintain minimum width */}
        <span className="invisible absolute">
          {"M".repeat(maxLength)}
        </span>
      </div>
    );
  }
);

CharacterMorph.displayName = "CharacterMorph";

// Scramble morph effect
interface ScrambleMorphProps {
  texts: string[];
  className?: string;
  interval?: number;
  scrambleDuration?: number;
  characters?: string;
}

const ScrambleMorph = React.forwardRef<HTMLDivElement, ScrambleMorphProps>(
  (
    {
      texts,
      className,
      interval = 3000,
      scrambleDuration = 1000,
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [displayText, setDisplayText] = React.useState(texts[0]);
    const [isScrambling, setIsScrambling] = React.useState(false);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setIsScrambling(true);
      }, interval);

      return () => clearInterval(timer);
    }, [interval]);

    React.useEffect(() => {
      if (!isScrambling) return;

      const nextIndex = (currentIndex + 1) % texts.length;
      const targetText = texts[nextIndex];
      const startText = texts[currentIndex];
      const maxLen = Math.max(startText.length, targetText.length);

      let frame = 0;
      const totalFrames = scrambleDuration / 16; // ~60fps
      const revealFrame = totalFrames * 0.3; // Start revealing at 30%

      const scramble = () => {
        frame++;
        const progress = frame / totalFrames;

        let result = "";
        for (let i = 0; i < maxLen; i++) {
          const targetChar = targetText[i] || "";
          const charRevealPoint = revealFrame + (i / maxLen) * (totalFrames - revealFrame);

          if (frame >= charRevealPoint) {
            result += targetChar;
          } else if (frame < totalFrames * 0.1 && startText[i]) {
            result += startText[i];
          } else {
            result += characters[Math.floor(Math.random() * characters.length)];
          }
        }

        setDisplayText(result);

        if (frame < totalFrames) {
          requestAnimationFrame(scramble);
        } else {
          setDisplayText(targetText);
          setCurrentIndex(nextIndex);
          setIsScrambling(false);
        }
      };

      requestAnimationFrame(scramble);
    }, [isScrambling, currentIndex, texts, scrambleDuration, characters]);

    return (
      <div ref={ref} className={cn("inline-block font-mono whitespace-nowrap", className)}>
        {displayText.split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            animate={{
              opacity: isScrambling ? [1, 0.7, 1] : 1,
            }}
            transition={{
              duration: 0.1,
              repeat: isScrambling ? Infinity : 0,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    );
  }
);

ScrambleMorph.displayName = "ScrambleMorph";

// Velocity morph - quick swap with motion blur
interface VelocityMorphProps {
  texts: string[];
  className?: string;
  interval?: number;
}

const VelocityMorph = React.forwardRef<HTMLDivElement, VelocityMorphProps>(
  ({ texts, className, interval = 3000 }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, interval);

      return () => clearInterval(timer);
    }, [interval, texts.length]);

    return (
      <div ref={ref} className={cn("relative overflow-hidden whitespace-nowrap p-2", className)}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ 
              y: 40, 
              opacity: 0, 
              filter: "blur(10px)",
              scale: 0.8,
            }}
            animate={{ 
              y: 0, 
              opacity: 1, 
              filter: "blur(0px)",
              scale: 1,
            }}
            exit={{ 
              y: -40, 
              opacity: 0, 
              filter: "blur(10px)",
              scale: 0.8,
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {texts[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
);

VelocityMorph.displayName = "VelocityMorph";

export { CharacterMorph, MorphText, ScrambleMorph, VelocityMorph };
export type { CharacterMorphProps, MorphTextProps, ScrambleMorphProps, VelocityMorphProps };

