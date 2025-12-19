'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Play, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"

// --- DUMMY DATA ---
const projects = [
  {
    id: 1,
    client: "XPress Leads",
    category: "Development",
    title: "Global Trade Show App",
    video: "https://www.youtube.com/embed/D0UnqGm_miA",
    size: "large", // Spans 2 cols
  },
  {
    id: 2,
    client: "Apex Finance",
    category: "Branding",
    title: "High-Frequency Dashboard",
    video: "https://www.youtube.com/embed/D0UnqGm_miA",
    size: "small",
  },
  {
    id: 3,
    client: "Neon City",
    category: "Production",
    title: "Cyberpunk Fashion Campaign",
    video: "https://www.youtube.com/embed/D0UnqGm_miA",
    size: "small",
  },
  {
    id: 4,
    client: "EcoVision",
    category: "Strategy",
    title: "Sustainability Report 2025",
    video: "https://www.youtube.com/embed/D0UnqGm_miA",
    size: "small",
  },
  {
    id: 5,
    client: "Urban Pulse",
    category: "Production",
    title: "City Sounds Documentary",
    video: "https://www.youtube.com/embed/D0UnqGm_miA",
    size: "small",
  },
  {
    id: 6,
    client: "Velocita",
    category: "Branding",
    title: "EV Automotive Rebrand",
    video: "https://www.youtube.com/embed/D0UnqGm_miA",
    size: "large", // Spans 2 cols
  },
]

const filters = ["All", "Strategy", "Branding", "Production", "Development"]

const WorksView = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  // Filter Logic
  const filteredProjects = projects.filter(project => 
    activeFilter === "All" ? true : project.category === activeFilter
  )

  return (
    <section className="relative min-h-screen bg-background pt-48 pb-20 px-6">
      
      {/* Background Texture */}
      <div className="absolute inset-0 z-[0] opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* 1. HEADER & FILTERS */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 border-b border-white/5 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
               <div className="h-[1px] w-8 bg-primary" />
               <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold">
                 Selected Works
               </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Evidence of <br />
              <span className="text-muted-foreground">Impact.</span>
            </h1>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border
                  ${activeFilter === filter 
                    ? "bg-primary border-primary text-white shadow-[0_0_20px_rgba(229,124,35,0.3)]" 
                    : "bg-white/[0.02] border-white/10 text-white/40 hover:border-white/20 hover:text-white"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 2. THE CINEMATIC GRID */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                className={`group relative rounded-[2rem] overflow-hidden border border-white/10 bg-black aspect-video cursor-pointer ${project.size === 'large' ? 'md:col-span-2 aspect-[21/9]' : ''}`}
              >
                
                {/* --- A. VIDEO MEDIA --- */}
                <div className="absolute inset-0 pointer-events-none">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`${project.video}?controls=0&autoplay=1&mute=1&loop=1&playlist=D0UnqGm_miA`} 
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-[1.3] group-hover:scale-[1.1]" 
                  />
                </div>

                {/* --- B. OVERLAY CONTENT --- */}
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Top Badge */}
                <div className="absolute top-6 left-6 z-20">
                   <span className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest font-bold text-white group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                      {project.category}
                   </span>
                </div>

                {/* Center Play Button (Reveals on Hover) */}
                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                   <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <Play className="w-8 h-8 text-white fill-white translate-x-1" />
                   </div>
                </div>

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div>
                    <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">
                      {project.client}
                    </h3>
                    <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h2>
                  </div>

                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/[0.05] group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 3. LOAD MORE (Scalability Indicator) */}
        <div className="flex justify-center mt-20">
          <Button 
            variant="outline" 
            className="rounded-full px-8 py-6 border-white/10 bg-transparent text-white hover:bg-white hover:text-black hover:border-white transition-all uppercase tracking-widest text-xs font-bold"
          >
            Load More Projects
          </Button>
        </div>

      </div>
    </section>
  )
}

export default WorksView