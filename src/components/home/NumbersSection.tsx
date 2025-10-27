import React, { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

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
    <span ref={ref} className="text-4xl font-semibold">
      {displayValue}
      {suffix}
    </span>
  );
};

const NumbersSection = () => {
  return (
    <div className="relative w-full py-16 pb-44 flex flex-col items-center justify-center gap-32">
      <h2 className=" text-4xl text-center uppercase border-b-4 border-foreground py-3 px-8">Why Work with us?</h2>
      <div className="w-full h-40 flex items-center justify-center gap-2 md:gap-4">
        <div className="w-56 h-full bg-accent backdrop-blur-xs flex flex-col gap-2 items-center justify-center text-center text-foreground">
          <Counter end={5} suffix="+" />
          <span className="text-md">Years</span>
        </div>
        <div className="w-56 h-full bg-accent backdrop-blur-xs flex flex-col gap-2 items-center justify-center text-center text-foreground">
          <Counter end={15} suffix="+" />
          <span className="text-md">Clients</span>
        </div>
        <div className="w-56 h-full bg-accent backdrop-blur-xs flex flex-col gap-2 items-center justify-center text-center text-foreground">
          <Counter end={100} suffix="+" />
          <span className="text-md">Projects</span>
        </div>
      </div>
    </div>
  );
};

export default NumbersSection;
