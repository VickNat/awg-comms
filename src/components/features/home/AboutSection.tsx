'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
const AboutSection = () => {
  const router = useRouter()
  return (
    <section className="relative py-32 md:py-48 bg-background overflow-hidden flex items-center justify-center">
      
      {/* --- ATMOSPHERE --- */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* 1. LABEL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mb-10"
        >
           <div className="h-10 w-[1px] bg-gradient-to-b from-transparent to-primary/50" />
           <span className="text-primary uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold border border-primary/20 px-4 py-1.5 rounded-full bg-primary/5 backdrop-blur-sm">
             Our Philosophy
           </span>
        </motion.div>

        {/* 2. HEADLINE (Animated Pill) */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-8"
        >
          A Perfect 
          
          <span className="relative inline-block px-6 mx-2 align-middle">
            {/* The Pill Reveal Animation */}
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-primary rounded-full -rotate-2 shadow-[0_0_20px_rgba(229,124,35,0.3)] origin-left"
            />
            <span className="relative text-white italic font-serif z-10">Flow</span>
          </span>
          
          <br />
          of a Story.
        </motion.h2>

        {/* 3. NARRATIVE TEXT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          <p>
            At AWG, we believe every message deserves to flow like a good story. 
            That's what we do best: helping people and brands <span className="text-white font-medium">say what they mean</span>, 
            and <span className="text-white font-medium">mean what they say.</span>
          </p>
          <p className="text-base md:text-lg opacity-60">
            Sunt sit deserunt amet exercitation labore in cupidatat proident in Lorem eu consectetur consequat commodo. 
            Nostrud nisi cillum deserunt irure. In ad cupidatat qui consequat ut minim.
          </p>
        </motion.div>

        {/* 4. PROFESSIONAL BUTTON (Clean, No Scale) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12"
        >
          <Button 
            size="lg" 
            className="group h-auto py-6 px-20 rounded-full text-xl font-bold tracking-tight transition-all duration-300
                       bg-white text-background 
                       hover:bg-primary hover:text-white border border-transparent"
            onClick={() => router.push('/contactus')}
          >
            <span className="mr-8">Start Your Chapter</span>
            
            {/* Arrow: Simple rotation, clean color swap */}
            <ArrowRight className=" transition-transform duration-300 ease-out group-hover:-rotate-45" />
          </Button>

          <p className="mt-6 text-xs text-white/30 uppercase tracking-widest">
            Let's create something timeless
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default AboutSection