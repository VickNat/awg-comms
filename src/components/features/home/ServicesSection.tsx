'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Megaphone, 
  TrendingUp, 
  MonitorPlay, 
  Lightbulb, 
  PenTool, 
  Clapperboard, 
  Calendar, 
  ArrowUpRight 
} from 'lucide-react'
import { useRouter } from 'next/navigation'

const services = [
  {
    id: 1,
    title: "Public Relations",
    description: "Building trust and shaping narratives that resonate.",
    icon: <Megaphone className="w-8 h-8 text-white" />,
    colSpan: "md:col-span-1",
    href: '/services'
  },
  {
    id: 2,
    title: "Marketing Strategy",
    description: "Data-driven campaigns that convert audiences into advocates.",
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    colSpan: "md:col-span-2",
    href: '/services'
  },
  {
    id: 3,
    title: "Advertising",
    description: "High-impact media buying and creative placement.",
    icon: <MonitorPlay className="w-8 h-8 text-white" />,
    colSpan: "md:col-span-1",
    href: '/services'
  },
  {
    id: 4,
    title: "Branding",
    description: "Crafting distinct visual identities that stand the test of time.",
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    colSpan: "md:col-span-1",
    href: '/services'
  },
  {
    id: 5,
    title: "Creative Design",
    description: "Visual storytelling through world-class graphic design.",
    icon: <PenTool className="w-8 h-8 text-white" />,
    colSpan: "md:col-span-1",
    href: '/services'
  },
  {
    id: 6,
    title: "Production",
    description: "Full-scale video and multimedia production services.",
    icon: <Clapperboard className="w-8 h-8 text-white" />,
    colSpan: "md:col-span-2",
    href: '/services'
  },
  {
    id: 7,
    title: "Events",
    description: "Memorable on-ground activations and corporate experiences.",
    icon: <Calendar className="w-8 h-8 text-white" />,
    colSpan: "md:col-span-3 lg:col-span-1",
    href: '/services'
  }
]

const ServicesSection = () => {
  const router = useRouter()
  
  return (
    <section className="relative py-32 px-6 bg-background overflow-hidden">
      
      {/* --- BACKGROUND ATMOSPHERE (Restored) --- */}
      {/* Top Right: Warm Orange Glow (Primary) */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Bottom Left: Cool White/Blue Glow (Secondary Depth) */}
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* 1. SECTION HEADER */}
        <div className="mb-20 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 bg-primary" /> 
            <h2 className="text-primary uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">
              What We Do
            </h2>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]"
          >
            Comprehensive <br />
            digital solutions.
          </motion.h2>
        </div>

        {/* 2. THE BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => router.push(service.href)}
              className={`group relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex flex-col justify-between h-full min-h-[300px] ${service.colSpan}`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(600px_at_50%_50%,rgba(229,124,35,0.08),transparent)]" />
              
              {/* Icon & Arrow */}
              <div className="relative z-10 flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 transition-transform duration-500 text-primary">
                  {service.icon}
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServicesSection