import React, { useEffect, useRef, useState } from "react";
import { useInView, animate, motion } from "motion/react";

// Counter component for animated numbers
const Counter: React.FC<{ end: number; suffix?: string }> = ({
  end,
  suffix = "",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => setDisplayValue(Math.floor(value)),
      });
      return controls.stop;
    }
  }, [isInView, end]);

  return (
    <span ref={ref} className="text-5xl font- w-32">
      {displayValue}
      {suffix}
    </span>
  );
};

const NumbersSection = () => {
  return (
    <div className="relative w-full h-[110vh] py-16 px-12 pb-44 flex flex-col items-center justify-center gap-32 bg-">
      <h1 className="w-full h-fit overflow-hidden uppercase text-5xl">
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{
            amount: 0,
            margin: "0px 0px -5% 0px",
          }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          We tell your brand story
        </motion.div>
      </h1>
      <div className="w-full flex flex-col items-start gap-2 text-4xl">
        <div className="w-1/2 h-32 flex gap-8 text-foreground border-b items-end py-6 ">
          <Counter end={5} suffix="+" />
          <motion.span className="" initial={{x:-50, filter: "blur(10px)", opacity: 0}} whileInView={{x: 0, filter: "none", opacity: 1}} transition={{duration: 0.5, ease: "easeOut"}} viewport={{amount: 0, margin: "0px 0px -10% 0px" }}>
            Years
          </motion.span>
        </div>
        <div className="w-1/2 h-32 flex gap-8 text-foreground border-b items-end py-6">
          <Counter end={15} suffix="+" />
          <motion.span className="" initial={{x:-50, filter: "blur(10px)", opacity: 0}} whileInView={{x: 0, filter: "none", opacity: 1}} transition={{duration: 0.5, ease: "easeOut"}} viewport={{amount: 0, margin: "0px 0px -10% 0px" }}>Clients</motion.span>
        </div>
        <div className="w-1/2 h-32 flex gap-8 text-foreground border-b items-end py-6">
          <Counter end={100} suffix="+" />
          <motion.span className="" initial={{x:-50, filter: "blur(10px)", opacity: 0}} whileInView={{x: 0, filter: "none", opacity: 1}} transition={{duration: 0.5, ease: "easeOut"}} viewport={{amount: 0, margin: "0px 0px -10% 0px" }}>Projects</motion.span>
        </div>
      </div>
    </div>
  );
};

export default NumbersSection;
