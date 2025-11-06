import React, { useEffect } from "react";
import Image from "next/image";
import { motion, animate, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

type Clients = {
  id: number;
  name: string;
  image: string;
};

interface LogoSliderProps {
  clients: Clients[];
}

// Logo item component to avoid duplication
const LogoItem: React.FC<{ client: Clients; keyPrefix: string; index: number }> = ({ 
  client, 
  keyPrefix, 
  index 
}) => (
  <div
    key={`${keyPrefix}-${index}`}
    className="relative overflow-hidden h-40 min-w-[240px] max-w-[240px] flex items-center justify-center bg- rounded-3xl"
  >
    <Image
      src={client.image}
      alt={client.name}
      width={150}
      height={150}
      className="object-contain max-h-24"
    />
  </div>
);

const LogoSlider: React.FC<LogoSliderProps> = ({ clients }) => {
  const [topRef, { width: topWidth }] = useMeasure();
  const [bottomRef, { width: bottomWidth }] = useMeasure();
  const topXTranslation = useMotionValue(0);
  const bottomXTranslation = useMotionValue(0);

  useEffect(() => {
    if (topWidth === 0) return;

    // Calculate the width of a single logo item (min-w + gap)
    const itemWidth = 240 + 32; // min-w + gap
    const totalItemsWidth = itemWidth * clients.length;

    // Top slider: animate left
    const topControls = animate(topXTranslation, [0, -totalItemsWidth], {
      duration: 40,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return topControls.stop;
  }, [topWidth, topXTranslation, clients.length]);

  useEffect(() => {
    if (bottomWidth === 0) return;

    // Calculate the width of a single logo item (min-w + gap)
    const itemWidth = 240 + 32; // min-w + gap
    const totalItemsWidth = itemWidth * clients.length;

    // Bottom slider: start from negative position and animate to 0
    // This ensures duplicated logos are visible on the left when sliding right
    const bottomControls = animate(bottomXTranslation, [-totalItemsWidth, 0], {
      duration: 40,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return bottomControls.stop;
  }, [bottomWidth, bottomXTranslation, clients.length]);

  return (
    <div className="overflow-hidden w-full mx-auto flex flex-col gap-8">
      {/* Top slider - moves left */}
      <motion.div
        ref={topRef}
        className="flex gap-8"
        style={{ x: topXTranslation }}
      >
        {clients.map((client, idx) => (
          <LogoItem key={`top-first-${idx}`} client={client} keyPrefix="top-first" index={idx} />
        ))}
        {clients.map((client, idx) => (
          <LogoItem key={`top-second-${idx}`} client={client} keyPrefix="top-second" index={idx} />
        ))}
      </motion.div>

      {/* Bottom slider - moves right */}
      <motion.div
        ref={bottomRef}
        className="flex gap-8"
        style={{ x: bottomXTranslation }}
      >
        {clients.map((client, idx) => (
          <LogoItem key={`bottom-first-${idx}`} client={client} keyPrefix="bottom-first" index={idx} />
        ))}
        {clients.map((client, idx) => (
          <LogoItem key={`bottom-second-${idx}`} client={client} keyPrefix="bottom-second" index={idx} />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSlider;
