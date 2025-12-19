'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu } from 'lucide-react'
import logo from '@/../public/Logo.png';
import { usePathname, useRouter } from 'next/navigation'

const navItems = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const { scrollY } = useScroll()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setActiveItem(navItems.find(item => pathname.includes(item.href))?.name || null)
  }, [pathname])

  // Detect scroll to shrink the header slightly or add backdrop (optional polish)
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none"
    >
      
      {/* 1. LEFT: LOGO (Clickable) */}
      <div className="pointer-events-auto relative z-50">
        <Link href="/" className="block relative w-32 md:w-40 h-auto hover:opacity-80 transition-opacity">
           <Image
             src={logo}
             alt="AWG Communications"
             width={160}
             height={60}
             className="object-contain"
             priority
           />
        </Link>
      </div>

      {/* 2. CENTER: GLASS NAV PILL (Hidden on Mobile) */}
      <div className="hidden md:block pointer-events-auto absolute left-1/2 -translate-x-1/2">
        <nav className={`
          flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-500
          ${scrolled 
            ? "bg-white/[0.03] border-white/10 backdrop-blur-xl shadow-lg" 
            : " bg-white/[0.03] border-white/5 backdrop-blur-md shadow-sm"
          }
        `}>
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`relative px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors group overflow-hidden ${activeItem === item.name ? 'bg-white/5' : 'text-white/70'}`}
            >
              <span className="relative z-10">{item.name}</span>
              
              {/* Subtle Orange Glow on Hover */}
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300" />
            </Link>
          ))}
        </nav>
      </div>

      {/* 3. RIGHT: ACTION BUTTON (Mobile Menu + Desktop CTA) */}
      <div className="flex items-center gap-4 pointer-events-auto">
        
        {/* "Let's Talk" Button - Desktop */}
        <div className="hidden md:block">
          <Button 
            className="group rounded-full bg-primary hover:bg-primary/90 text-white font-bold tracking-tight px-6 h-11 transition-all duration-300 shadow-[0_0_20px_rgba(229,124,35,0.2)] hover:shadow-[0_0_30px_rgba(229,124,35,0.4)]"
            onClick={() => router.push('/contactus')}
          >
            <span className="mr-2 text-xs uppercase tracking-widest">Let's Talk</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
          </Button>
        </div>

        {/* Hamburger Menu - Mobile Only */}
        <button className="md:hidden w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md flex items-center justify-center text-white active:scale-95 transition-all">
          <Menu className="w-5 h-5" />
        </button>

      </div>

    </motion.header>
  )
}

export default Header