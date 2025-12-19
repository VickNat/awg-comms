'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Megaphone, TrendingUp, MonitorPlay, 
  Lightbulb, PenTool, 
  Clapperboard, Calendar, 
  CheckCircle2, ArrowRight 
} from 'lucide-react'

// --- DATA STRUCTURE (Grouped for Logic) ---
const serviceGroups = [
  {
    title: "Strategy & Growth",
    description: "The foundation of your digital presence. We analyze, plan, and execute data-driven campaigns.",
    number: "01",
    services: [
      {
        title: "Public Relations",
        icon: <Megaphone className="w-6 h-6" />,
        description: "Building trust and shaping narratives that resonate with your key stakeholders.",
        deliverables: ["Media Relations", "Crisis Management", "Press Kits", "Thought Leadership"]
      },
      {
        title: "Marketing Strategy",
        icon: <TrendingUp className="w-6 h-6" />,
        description: "Data-driven campaigns that convert audiences into loyal brand advocates.",
        deliverables: ["Market Research", "SEO/SEM", "Social Media Mgmt", "Performance Marketing"]
      },
      {
        title: "Advertising",
        icon: <MonitorPlay className="w-6 h-6" />,
        description: "High-impact media buying and creative placement across digital and traditional channels.",
        deliverables: ["Media Buying", "Ad Creatives", "Campaign Analytics", "Retargeting"]
      }
    ]
  },
  {
    title: "Identity & Design",
    description: "Visual storytelling that separates your brand from the noise.",
    number: "02",
    services: [
      {
        title: "Branding",
        icon: <Lightbulb className="w-6 h-6" />,
        description: "Crafting distinct visual identities that stand the test of time.",
        deliverables: ["Logo Design", "Brand Guidelines", "Tone of Voice", "Rebranding"]
      },
      {
        title: "Creative Design",
        icon: <PenTool className="w-6 h-6" />,
        description: "World-class graphic design for digital and print collateral.",
        deliverables: ["UI/UX Design", "Packaging", "Illustration", "Marketing Materials"]
      }
    ]
  },
  {
    title: "Experience & Production",
    description: "Bringing the narrative to life through immersive media and events.",
    number: "03",
    services: [
      {
        title: "Production",
        icon: <Clapperboard className="w-6 h-6" />,
        description: "Full-scale video and multimedia production services from script to screen.",
        deliverables: ["Commercials", "Corporate Video", "Photography", "Animation"]
      },
      {
        title: "Events",
        icon: <Calendar className="w-6 h-6" />,
        description: "Memorable on-ground activations and corporate experiences.",
        deliverables: ["Event Planning", "Booth Design", "Live Activations", "Virtual Events"]
      }
    ]
  }
]

// --- SUB-COMPONENT: SERVICE CARD ---
const ServiceCard = ({ service }: { service: any }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group relative p-8 md:p-10 bg-white/[0.02] border border-white/10 rounded-[2rem] hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-500 overflow-hidden"
    >
      {/* Hover Gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(800px_at_50%_0%,rgba(229,124,35,0.06),transparent)] pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row gap-8">
        
        {/* Icon Column */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
            {service.icon}
          </div>
        </div>

        {/* Content Column */}
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Deliverables Grid (The "Blueprint" details) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.deliverables.map((item: string, i: number) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white/60 group-hover:text-white/80 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-primary/50 group-hover:text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// --- SUB-COMPONENT: STICKY GROUP ---
const ServiceGroup = ({ group }: { group: any }) => {
  const ref = useRef(null)
  // Logic to highlight the sidebar when this section is active
  const isInView = useInView(ref, { margin: "-20% 0px -50% 0px" })

  return (
    <div ref={ref} className="flex flex-col lg:flex-row gap-12 lg:gap-24 py-20 border-b border-white/5 last:border-0">
      
      {/* LEFT: STICKY SIDEBAR (The "Index") */}
      <div className="lg:w-1/3">
        <div className="sticky top-32 transition-colors duration-500">
          
          {/* Big Number */}
          <span className={`text-6xl md:text-8xl font-bold tracking-tighter block mb-6 transition-colors duration-500 ${isInView ? "text-primary/20" : "text-white/5"}`}>
            {group.number}
          </span>
          
          {/* Title */}
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-500 ${isInView ? "text-white" : "text-white/40"}`}>
            {group.title}
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed max-w-sm">
            {group.description}
          </p>

          {/* Active Indicator Line */}
          <motion.div 
            animate={{ width: isInView ? 60 : 0 }}
            className="h-1 bg-primary mt-8 rounded-full"
          />
        </div>
      </div>

      {/* RIGHT: SCROLLING CARDS */}
      <div className="lg:w-2/3 space-y-8">
        {group.services.map((service: any, index: number) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

    </div>
  )
}

const ServicesSection = () => {
  return (
    <section className="relative bg-background px-6 pb-32">
       {/* Connecting Line from Banner */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-primary/50 to-transparent" />
       
       <div className="container mx-auto max-w-7xl">
         {serviceGroups.map((group, index) => (
           <ServiceGroup key={index} group={group} />
         ))}
       </div>
    </section>
  )
}

export default ServicesSection