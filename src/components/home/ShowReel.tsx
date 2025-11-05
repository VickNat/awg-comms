import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "motion/react";

const ShowReel = () => {
  const showReelContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: showReelContainer,
    offset: ["start 0.85", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.85], [0.6, 1]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8],
    ["#000", "#000", "#ddd"]
  )

  return (
    <motion.div
      ref={showReelContainer}
      className={`relative min-h-screen h-[160vh] w-full flex items-start justify-center`}
      style={{backgroundColor: backgroundColor}}
    >
      <motion.div
        className="sticky top-0 min-h-screen w-full bg-primary flex items-center justify-start"
        style={{ scale: scale}}
      >
        <p className="absolute text-8xl uppercase text-accent font-bold w-full flex justify-center">
          play
        </p>
        <p className="absolute text-4xl uppercase text-accent font-bold self-end p-4">
          showreel
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ShowReel;
