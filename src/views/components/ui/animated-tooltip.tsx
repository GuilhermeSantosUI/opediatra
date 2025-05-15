'use client';

import { useState } from 'react';

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item, index) => (
        <div
          className="-mr-4 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap',
                }}
                className="hidden absolute -top-16 right-2 translate-x-1/2 sm:flex text-xs flex-col items-center justify-center rounded-3xl bg-primary z-50 px-4 py-2">
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className={`w-12 h-12 sm:w-32 sm:h-32  object-cover !m-0 !p-0 object-top rounded-full border-2 group-hover:scale-105 group-hover:z-30 border-white ${
              index !== 0
                ? 'saturate-[0.25] transition-all duration-300 ease-in-out hover:saturate-200'
                : ''
            } relative transition duration-500`}
          />
        </div>
      ))}
    </>
  );
};
