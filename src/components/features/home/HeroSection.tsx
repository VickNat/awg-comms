'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const HERO_EASE = [0.16, 1, 0.3, 1] as const

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const rayRotation = useTransform(scrollYProgress, [0, 1], [35, 45])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: HERO_EASE as any }
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] flex items-start justify-center overflow-hidden px-6 pt-32"
    >
      {/* 1. TEXTURE LAYER */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none contrast-125" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* 2. DYNAMIC BACKGROUND */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ rotate: rayRotation }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute top-[-20%] left-[15%] w-[2px] h-[150%] bg-gradient-to-b from-white via-white/40 to-transparent blur-[3px]" 
        />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[160%] aspect-square rounded-full">
          <div className="absolute inset-0 rounded-full border-t border-primary/30 blur-[2px]" />
          <div className="absolute inset-0 rounded-full bg-linear-to-b from-primary/5 via-transparent to-transparent blur-3xl" />
        </div>
      </motion.div>

      {/* 3. CONTENT CONTAINER */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="container relative z-10 max-w-5xl mx-auto text-center md:mt-10"
      >
        
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="inline-flex items-center gap-3 mb-8 opacity-80"
        >
          <div className="h-[1px] w-8 bg-primary" />
          
          <span className="text-white/60 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
            AWG Communications • 2025
          </span>
        </motion.div>

        <motion.h1 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold text-foreground leading-[1.05] tracking-[-0.03em] mb-10"
        >
          <span className="relative inline-block px-8 py-2">
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-primary rounded-full -rotate-1 shadow-[0_0_50px_rgba(229,124,35,0.25)]"
            />
            <span className="relative text-white">Elevate</span>
          </span>
          <br className="hidden md:block" />
          <span className="opacity-90">your digital narrative.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="text-muted-foreground/80 text-base md:text-xl max-w-xl mx-auto mb-14 leading-[1.6] tracking-tight font-medium"
        >
          We bridge the gap between complex data and human emotion to create 
          digital experiences that actually stick.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...fadeInUp.transition, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button 
            size="lg" 
            className="group relative rounded-full px-10 py-7 text-lg font-bold bg-primary hover:bg-primary transition-all duration-300 shadow-xl shadow-primary/10 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 ease-in-out group-hover:translate-x-2" />
            </span>
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </Button>

          <button 
            className="group relative px-10 py-3.5 text-lg font-bold text-white/90 rounded-full transition-all duration-300 border-t border-white/20 shadow-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span className="relative z-10 transition-opacity group-hover:text-white">
              View Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </motion.div>
      </motion.div>

      {/* Particles */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-10 animate-pulse pointer-events-none"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </section>
  )
}

export default HeroSection