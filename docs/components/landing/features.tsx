import { Dancing_Script } from 'next/font/google';

import { cn } from '@/lib/utils';
import { AlarmClockIcon, ArrowRightIcon, AudioLinesIcon, BatteryFullIcon, BellRingIcon, ClockIcon, Disc3Icon, LoaderIcon, MessageSquareMoreIcon, SettingsIcon, UserIcon, WifiIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Blocks } from '../icons/blocks';
import { Components } from '../icons/components';
import { Primitives } from '../icons/primitives';
import { MotionEffect } from './motion-effect';


const COMPONENTS = [
  {
    name: 'Primitives',
    href: '/docs/primitives',
    icon: <Primitives/>,
  },
  {
    name: 'Components',
    href: '/docs/components',
    icon: <Components/>
  },
  {
    name: 'Icons',
    href: '/docs/icons',
    icon: (
        <div className="w-full flex flex-col gap-6 pt-7 justify-center items-center h-full aspect-[350/259.17] dark:text-neutral-500 text-neutral-400">
          <div className="flex flex-row gap-6">
            <WifiIcon className="size-6.5 xs:size-5.5 sm:size-6.5" />
            <ClockIcon className="size-6.5 xs:size-5.5 sm:size-6.5" />
            <AudioLinesIcon className="size-6.5 xs:size-5.5 sm:size-6.5" />
            <LoaderIcon className="size-6.5 xs:size-5.5 sm:size-6.5" />
          </div>
          <div className="flex flex-row gap-6">
            <SettingsIcon
              className="size-6.5 xs:size-5.5 sm:size-6.5"
            />
            <Disc3Icon className="size-6.5 xs:size-5.5 sm:size-6.5" />
            <BatteryFullIcon className="size-6.5 xs:size-5.5 sm:size-6.5" />
            <UserIcon className="size-6.5 xs:size-5.5 sm:size-6.5" />
          </div>
          <div className="flex flex-row gap-6">
            <MessageSquareMoreIcon className="size-6.5 xs:size-5.5 sm:size-6.5" />
            <BellRingIcon className="size-6.5 xs:size-5.5 sm:size-6.5" />
            <AlarmClockIcon className="size-6.5 xs:size-5.5 sm:size-6.5" />
            <ArrowRightIcon
              className="size-6.5 xs:size-5.5 sm:size-6.5"
            />
          </div>
        </div>
    ),
  },
  {
    name: 'Soon...',
    icon: (
      <div className="relative">
        <Blocks />
      </div>
    ),
  },
];

const dancing = Dancing_Script({ subsets: ['latin'] });

export const Features = () => {
  return (
    <div className="relative pt-16 pb-10 px-5 flex flex-col items-center justify-center mt-auto">
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-4 w-full max-w-7xl sm:max-lg:max-w-2xl mx-auto">
        {COMPONENTS.map((component, index) => {
          const Component = component.href ? Link : 'div';
          return (
            <MotionEffect
              slide={{
                direction: 'down',
              }}
              fade
              zoom
              delay={1 + 0.15 * index}
              key={index}
            >
              {/* @ts-ignore */}
              <Component {...(component.href ? { href: component.href } : {})}>
                <motion.div
                  whileHover={{
                    scale: component.href ? 1.025 : 1,
                  }}
                  whileTap={{
                    scale: component.href ? 0.925 : 1,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                  }}
                  className={cn(
                    'relative w-full dark:bg-neutral-800 bg-neutral-100 rounded-2xl pt-1',
                    !component?.href && 'opacity-50 cursor-not-allowed',
                  )}
                >
                  <p
                    className={cn(
                      dancing.className,
                      'text-[22px] font-black text-muted-foreground absolute xs:top-2 top-3 left-1/2 -translate-x-1/2',
                    )}
                  >
                    {component.name}
                  </p>

                  {component.icon}
                </motion.div>
              </Component>
            </MotionEffect>
          );
        })}
      </div>
    </div>
  );
};