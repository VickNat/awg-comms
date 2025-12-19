'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Play } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: "XPress Leads",
    category: "App Design",
    description: "Streamlining lead retrieval for global trade shows.",
    video: "https://www.youtube.com/embed/D0UnqGm_miA",
    tags: ["USA", "SaaS", "UX/UI"],
  },
  {
    id: 2,
    title: "Apex Finance",
    category: "Fintech Platform",
    description: "A high-frequency trading dashboard for modern investors.",
    video: "https://www.youtube.com/embed/D0UnqGm_miA",
    tags: ["React", "Dashboard"],
  },
  {
    id: 3,
    title: "Neon City",
    category: "Brand Identity",
    description: "Reimagining urban aesthetics for a cyberpunk brand.",
    video: "https://www.youtube.com/embed/D0UnqGm_miA",
    tags: ["Branding", "3D Motion"],
  },
  {
    id: 4,
    title: "EcoVision",
    category: "Web Design",
    description: "Sustainable energy reporting for the next century.",
    video: "https://www.youtube.com/embed/D0UnqGm_miA",
    tags: ["Editorial", "GSAP"],
  },
]

const FeaturedProjectsSection = () => {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Horizontal Scroll Logic
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">

      {/* STICKY CONTAINER */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* Atmosphere Background */}
        <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[15%] right-[-10%] w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

        {/* HORIZONTAL TRACK */}
        <motion.div style={{ x }} className="flex gap-10 px-6 md:px-20 items-center">

          {/* 1. INTRO TEXT (The "Hook") */}
          <div className="flex flex-col justify-center min-w-[300px] md:min-w-[450px] pr-12">
            
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-primary" />
              <h2 className="text-primary uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">
                Selected Work
              </h2>
            </div>
            
            {/* Headline */}
            <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Turning <br />
              imagination <br />
              into <span className="text-primary">impact.</span>
            </h2>
            
            {/* Description */}
            <p className="text-muted-foreground text-lg max-w-sm leading-relaxed mb-10">
              We don't just build websites; we craft digital ecosystems that drive real business growth.
            </p>

            {/* --- NEW EXPLORE BUTTON --- */}
            {/* Consistent with Service Card Icons: Circle + ArrowUpRight */}
            <Link href="/work" className="inline-flex items-center gap-4 group cursor-pointer w-fit">
               <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/[0.02] group-hover:bg-primary group-hover:border-primary transition-all duration-500 ease-out">
                  <ArrowUpRight className="w-6 h-6 text-white group-hover:rotate-45 transition-transform duration-500 ease-out" />
               </div>
               <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-white group-hover:text-primary transition-colors duration-300">
                    View Full Archive
                  </span>
                  {/* Subtle underline animation consistent with Client Section */}
                  <span className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out mt-1" />
               </div>
            </Link>

          </div>

          {/* 2. VERTICAL PROJECT CARDS */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative min-w-[350px] md:min-w-[480px] h-[60vh] bg-white/[0.02] border border-white/10 rounded-[24px] overflow-hidden flex flex-col hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 shadow-lg"
            >

              {/* --- TOP: MEDIA AREA (60% Height) --- */}
              <div className="relative h-[60%] w-full bg-black border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`${project.video}?controls=0&autoplay=1&mute=1&loop=1&playlist=D0UnqGm_miA`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.3] group-hover:scale-[1.1]"
                  />
                </div>

                {/* Category Badge */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-white bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                    <Play className="w-6 h-6 text-white fill-white translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* --- BOTTOM: CONTENT AREA (40% Height) --- */}
              <div className="relative h-[40%] p-8 flex flex-col">

                {/* Header Row */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="p-2 rounded-full border border-transparent group-hover:border-white/10 group-hover:bg-white/5 transition-all duration-300">
                    <ArrowRight className="text-white/40 w-6 h-6 group-hover:text-primary group-hover:rotate-[-45deg] transition-transform duration-300" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground/80 text-sm md:text-base leading-relaxed line-clamp-3 mb-6 font-medium">
                  {project.description}
                </p>

                {/* Footer: Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] md:text-xs font-semibold text-white/40 bg-white/[0.03] border border-white/5 px-3 py-1.5 rounded-full group-hover:border-white/10 group-hover:text-white/70 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjectsSection