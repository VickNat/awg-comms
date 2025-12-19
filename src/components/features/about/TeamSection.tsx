'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Plus, ArrowUpRight } from 'lucide-react'
import dummyImage from '@/../public/dummyImage.png'; // Reusing your dummy image for now

// --- DUMMY DATA ---
const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Projects Delivered", value: "150+" },
  { label: "Industry Awards", value: "12" },
  { label: "Team Members", value: "25" },
]

const teamMembers = [
  {
    id: 1,
    name: "Alex Sterling",
    role: "Founder & CEO",
    bio: "Visionary strategist with a decade of experience in digital transformation.",
    image: dummyImage,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Creative Director",
    bio: "Award-winning designer obsessed with typography and visual narrative.",
    image: dummyImage,
  },
  {
    id: 3,
    name: "David Chen",
    role: "Head of Tech",
    bio: "Full-stack architect ensuring our ecosystems are as robust as they are beautiful.",
    image: dummyImage,
  },
  {
    id: 4,
    name: "Elena Ross",
    role: "Client Strategy",
    bio: "The bridge between client goals and creative execution.",
    image: dummyImage,
  },
]

const TeamSection = () => {
  return (
    <section className="relative py-32 px-6 bg-background overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        
        {/* 1. THE STATS BAR (The Bridge) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-12 mb-24"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-white/40 text-xs uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* 2. SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-center items-end mb-16 gap-8">
          <div>
            <div className="flex justify-center text-center items-center gap-3 mb-4">
               <div className="h-[1px] w-8 bg-primary" />
               <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold">
                 The Collective
               </span>
               <div className="h-[1px] w-8 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Meet the
              <span className="text-muted-foreground"> Minds.</span>
            </h2>
          </div>
          
          {/* <button className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            <span className="text-sm uppercase tracking-widest">Join the team</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
               <ArrowUpRight className="w-4 h-4" />
            </div>
          </button> */}
        </div>

        {/* 3. TEAM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/5"
            >
              {/* Image Layer */}
              <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
              </div>

              {/* Gradient Overlay (Always visible for text readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Interaction Overlay (Orange Glow on Hover) */}
              <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-80 mix-blend-overlay transition-opacity duration-500" />

              {/* Content Layer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                
                {/* Top Info (Name/Role) */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                    {member.role}
                  </p>
                </div>

                {/* Hidden Bio (Reveals on Hover) */}
                <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  {/* LinkedIn Icon */}
                  <a href="#" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-widest">Connect</span>
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TeamSection