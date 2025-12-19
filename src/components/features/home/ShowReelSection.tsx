'use client'

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import LazyVideo from "@/components/common/LazyVideo";

const ShowReel = () => {
  const showReelContainer = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Start muted to allow autoplay
  const [isUserMuted, setIsUserMuted] = useState(true); 

  const { scrollYProgress } = useScroll({
    target: showReelContainer,
    offset: ["start 80%", "end 20%"], 
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["80px", "0px"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, 0]);

  // Audio Curve: 
  // 0% -> 15%: Fade In
  // 15% -> 85%: Max Volume
  // 85% -> 100%: Fade Out (Giving it 15% of scroll space to fade gracefully)
  const scrollVolume = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.85, 1], 
    [0, 0.5, 0.5, 0]
  );
  // 1. Sync volume while scrolling (Only works if master switch is ON)
  useMotionValueEvent(scrollVolume, "change", (latest) => {
    if (videoRef.current && !isUserMuted) {
      videoRef.current.volume = latest;
    }
  });

  // 2. Handle the "Master Switch" (The Button)
  useEffect(() => {
    if (videoRef.current) {
      // If user mutes, silence it immediately
      if (isUserMuted) {
        videoRef.current.muted = true;
      } 
      // If user unmutes, enable sound AND apply current scroll volume immediately
      else {
        videoRef.current.muted = false;
        videoRef.current.volume = scrollVolume.get();
      }
    }
  }, [isUserMuted, scrollVolume]);


  return (
    <div 
      ref={showReelContainer} 
      className="relative z-30 -mt-30 w-full bg-transparent"
      style={{ height: "180vh" }}
    >
      <div className="absolute inset-0 top-30 opacity-[0.03] pointer-events-none contrast-125" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      
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
        className="sticky top-0 h-screen w-full bg-black overflow-hidden flex items-end justify-center border-t border-white/10 pb-20 rounded-3xl"
      >
        
        {/* VIDEO LAYER */}
        <div className="absolute inset-0 z-0 rounded-3xl">
          <LazyVideo 
            ref={videoRef}
            src="https://res.cloudinary.com/dmmuwyn45/video/upload/q_auto,f_auto/v1766150758/Show_reel_vjf7ug.mp4"
            poster="https://res.cloudinary.com/dmmuwyn45/video/upload/q_auto,f_auto/v1766150758/Show_reel_vjf7ug.jpg"
            className="w-full h-full"
            isMuted={isUserMuted} 
          />
          <div className="absolute inset-0 bg-black/40 rounded-3xl" />
        </div>

        {/* OVERLAY CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 flex items-center gap-4 pointer-events-none"
        >
           <div className="h-[1px] w-12 bg-white/40" />
           <span className="text-sm md:text-xl uppercase tracking-[0.5em] font-bold text-white">
             Showreel 2025
           </span>
           <div className="h-[1px] w-12 bg-white/40" />
        </motion.div>

        {/* AUDIO BUTTON */}
        <div className="absolute bottom-10 right-10 z-20">
          <button
            onClick={() => setIsUserMuted(!isUserMuted)}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            {isUserMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default ShowReel;