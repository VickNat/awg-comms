'use client'

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ShowReel = () => {
  const showReelContainer = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: showReelContainer,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["80px", "0px"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <div 
      ref={showReelContainer} 
      className="relative z-30 -mt-30 w-full bg-transparent"
      style={{ height: "180vh" }}
    >
      <motion.div
        style={{ 
          scale, 
          borderRadius, 
          rotateX,
          boxShadow: useTransform(
            scrollYProgress, 
            [0, 0.2, 0.4, 0.6, 1], 
            [
              "0px -16px 48px 0px rgba(252,252,252,0.3)",
              "0px -8px 32px 0px rgba(252,252,252,0.10)",
              "0px -8px 32px 0px rgba(252,252,252,0.05)",
              "0px -8px 32px 0px rgba(252,252,252,0.02)",
              "0px -8px 32px 0px rgba(252,252,252,0)"
            ]
          ),
        }}
        className="sticky top-0 h-screen w-full bg-background overflow-hidden flex items-center justify-center border-t border-white/10"
      >
        {/* Background Grain/Texture (Consistent with Hero) */}
        {/* <div className="absolute inset-0 opacity-[0.05] pointer-events-none grayscale" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div> */}

        {/* Big Stylized 'PLAY' text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 flex flex-col items-center"
        >
          <h2 className="text-[12rem] md:text-[20rem] font-black uppercase text-white/10 leading-none select-none">
            Play
          </h2>
          
          {/* Showreel Label */}
          <div className="absolute bottom-[-2rem] flex items-center gap-4">
             <div className="h-[1px] w-12 bg-white/20" />
             <span className="text-sm md:text-xl uppercase tracking-[0.5em] font-bold text-white/60">
               Showreel 2025
             </span>
             <div className="h-[1px] w-12 bg-white/20" />
          </div>
        </motion.div>

        {/* Video Placeholder or Decorative Circles (Matches Logo Style) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] aspect-video bg-white/5 rounded-2xl backdrop-blur-3xl border border-white/10 flex items-center justify-center group cursor-pointer">
           <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-110">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-primary border-b-[10px] border-b-transparent ml-1" />
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShowReel;