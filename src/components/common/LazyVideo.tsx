'use client'

import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

interface LazyVideoProps {
  src: string
  poster: string
  className?: string
  isMuted?: boolean
}

const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(({ src, poster, className, isMuted = true }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const localVideoRef = useRef<HTMLVideoElement>(null)
  
  // Load when within 200px of viewport
  const isInView = useInView(containerRef, { margin: "200px", once: true })
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    if (isInView && !hasLoaded) {
      setHasLoaded(true)
    }
  }, [isInView, hasLoaded])

  // FIX: Added [hasLoaded] dependency. 
  // This ensures the parent receives the video element ONLY after it has actually rendered.
  useImperativeHandle(ref, () => localVideoRef.current!, [hasLoaded]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden bg-black rounded-[inherit] ${className}`}>
      
      {/* Poster Image */}
      <Image 
        src={poster}
        alt="Thumbnail"
        fill
        className={`object-cover transition-opacity duration-700 ${hasLoaded ? 'opacity-0' : 'opacity-100'}`}
        priority={false}
        unoptimized
      />

      {/* Video Element */}
      {hasLoaded && (
        <video
          ref={localVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="none"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Fade Overlay */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: hasLoaded ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute inset-0 bg-black pointer-events-none"
      />
    </div>
  )
})

LazyVideo.displayName = "LazyVideo"
export default LazyVideo