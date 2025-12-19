'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Users } from 'lucide-react'
import dummyImage from '@/../public/dummyImage.png'

const AboutUsBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center bg-background overflow-hidden pt-20 px-6"
    >
      
      {/* 1. BACKGROUND NOISE */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* --- LEFT: TYPOGRAPHY --- */}
        <motion.div style={{ y: yText, opacity }} className="order-2 lg:order-1">
          
          {/* Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold">
              Who We Are
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            We are the <br />
            <span className="text-primary font-serif italic">Architects</span> of <br />
            Digital Reality.
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-10"
          >
            AWG isn't just an agency; it's a collective of dreamers, data scientists, and designers united by a single obsession: 
            <span className="text-white"> making the complex feel simple.</span>
          </motion.p>

          {/* Stat Badge (Floating) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md"
          >
             <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Users className="w-6 h-6" />
             </div>
             <div>
                <p className="text-2xl font-bold text-white leading-none">25+</p>
                <p className="text-xs text-white/40 uppercase tracking-widest mt-1">Creative Minds</p>
             </div>
          </motion.div>

        </motion.div>

        {/* --- RIGHT: PARALLAX IMAGE WINDOW --- */}
        <motion.div 
          style={{ y: yImage, opacity }} 
          className="relative order-1 lg:order-2 h-[50vh] lg:h-[70vh] w-full"
        >
          {/* The Image Frame */}
          <motion.div 
            initial={{ clipPath: "inset(10% 10% 10% 10%)", opacity: 0 }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
            
            <Image
              src={dummyImage}
              alt="Our Team"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-105"
              priority
            />
          </motion.div>

          {/* Decorative Elements around image */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/[0.02] rounded-full blur-2xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl -z-10" />

        </motion.div>

      </div>

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>

    </section>
  )
}

export default AboutUsBanner