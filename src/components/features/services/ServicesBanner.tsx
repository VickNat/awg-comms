'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const ServicesBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-background border-b border-white/5"
    >
      
      {/* 1. BACKGROUND NOISE TEXTURE */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* 2. THE SONAR RADAR (Background) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none perspective-[1000px]">
        
        {/* Ring 1 (Largest) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] border border-white/5 rounded-full opacity-30"
        />
        
        {/* Ring 2 (Middle with Dashes) */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] border border-dashed border-white/10 rounded-full opacity-40"
        />

        {/* Ring 3 (Smallest - The "Scanner") */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[400px] h-[400px] rounded-full opacity-50"
          style={{
             background: 'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(229,124,35,0.1) 360deg)' // Primary Orange Fade
          }}
        />
        
        {/* Central Core Glow */}
        <div className="absolute w-[200px] h-[200px] bg-primary/10 blur-[80px] rounded-full" />
      </div>

      {/* 3. CONTENT (Foreground) */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 container px-6 text-center"
      >
        
        {/* Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <div className="h-[1px] w-8 bg-primary" />
          <span className="text-primary uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">
            Our Expertise
          </span>
          <div className="h-[1px] w-8 bg-primary" />
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8"
        >
          Engineering <br />
          <span className="text-white/40">Digital Ecosystems.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          We don't just deliver services; we build interconnected systems that 
          amplify your brand's voice across every channel.
        </motion.p>

      </motion.div>

      {/* 4. SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 z-10 text-white/20"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>

    </section>
  )
}

export default ServicesBanner