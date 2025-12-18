'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Import client logos
import client1 from '@/../public/clients/Atobaba.png';
import client2 from '@/../public/clients/BW.png';
import client3 from '@/../public/clients/Chanoly.png';
import client4 from '@/../public/clients/Elilta decor.png';
import client5 from '@/../public/clients/MERHABA.png';
import client6 from '@/../public/clients/Ruby.png';
import client7 from '@/../public/clients/VIV.png';
import client8 from '@/../public/clients/Wild coffee.png';
import client9 from '@/../public/clients/Yod.png';

const clients = [
  client1, client2, client3, client4, client5,
  client6, client7, client8, client9
];

const OurClientsSection = () => {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="relative py-24 bg-background flex flex-col items-center overflow-hidden">

      {/* Title - Professional Typography & Subtle Entrance */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // "Slow & Smooth" Ease
        className="mb-14 text-center flex flex-col items-center"
      >
        <h2 className="text-white/90 uppercase text-[11px] md:text-[13px] font-bold tracking-[0.5em] leading-relaxed mb-4">
          Standing Tall with Our Clients
        </h2>
        
        {/* The Underline - Anchors the text without cluttering */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1, ease: "circOut" }}
          className="h-[1px] w-12 bg-primary origin-center" // Primary AWG Orange
        />
      </motion.div>

      {/* THE PILL CONTAINER - Height adjusted for larger logos */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[92%] max-w-6xl h-28 md:h-36 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-sm overflow-hidden flex items-center"
      >
        {/* Cinematic Fade Masks - Darker to blend with background */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        {/* The Marquee Track */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35, // Slightly faster than before to feel more active
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex flex-nowrap gap-16 md:gap-24 items-center px-10"
        >
          {duplicatedClients.map((logo, index) => (
            <div
              key={index}
              className="relative w-32 md:w-44 h-16 md:h-20 flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out"
            >
              <Image
                src={logo}
                alt={`Client Logo ${index}`}
                fill
                className="object-contain px-1"
              />
            </div>
          ))}
        </motion.div>

        {/* Clean White Border Overlay (No Orange) */}
        <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
      </motion.div>

      {/* Subtle Background Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-20 bg-white/[0.02] blur-[80px] pointer-events-none" />

    </section>
  )
}

export default OurClientsSection