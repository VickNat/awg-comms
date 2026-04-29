'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Phone, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

// Services for the form selection
const services = ["Strategy", "Branding", "Web Design", "Development", "Video/Production", "Events"]
// Budget ranges
const budgets = ["< $5k", "$5k - $20k", "$20k - $50k", "$50k+"]

const ContactusView = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState<string>("")

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    )
  }

  return (
    <section className="relative min-h-screen bg-background pt-32 pb-20 px-6 flex items-center">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* --- LEFT COLUMN: CONTEXT & DIRECT CONTACT --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
               <div className="h-[1px] w-8 bg-primary" />
               <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold">
                 Get in Touch
               </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              Let's build <br />
              <span className="text-white/40">something real.</span>
            </h1>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-md">
              Whether you have a fully drafted RFP or just a vague idea, we’re here to help you refine the narrative and execute the vision.
            </p>

            {/* THE "CALL" CARD (Your Request) */}
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Urgent Inquiry?</p>
              
              <a href="tel:+251911223344" className="group block relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-colors duration-300">
                <div className="relative z-10 p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Direct Line</h3>
                      <p className="text-white/50 text-sm group-hover:text-primary transition-colors">+251 911 22 33 44</p>
                    </div>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:text-primary group-hover:border-primary transition-all duration-300">
                    <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
                  </div>
                </div>
                
                {/* Background Hover Glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </div>

            {/* Other Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/60">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:hello@awg.com" className="hover:text-white transition-colors">hello@awgcommunications.com</a>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: THE FORM --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-sm"
          >
            <form className="space-y-8">
              
              {/* Inputs Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Service Selection (Pills) */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">I'm interested in...</label>
                <div className="flex flex-wrap gap-3">
                  {services.map(service => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`
                        px-4 py-2 rounded-full text-xs font-bold border transition-all duration-300
                        ${selectedServices.includes(service)
                          ? "bg-primary border-primary text-white"
                          : "bg-transparent border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                        }
                      `}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Selection */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Budget Range</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {budgets.map(budget => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={`
                        px-2 py-2 rounded-xl text-xs font-bold border transition-all duration-300 text-center
                        ${selectedBudget === budget
                          ? "bg-white text-black border-white"
                          : "bg-transparent border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                        }
                      `}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20 resize-none"
                  placeholder="Tell us about your project goals..."
                />
              </div>

              {/* Submit Button */}
              <Button 
                size="lg"
                className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold tracking-wide text-lg group"
              >
                <span>Send Message</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:-rotate-45 transition-transform duration-300" />
              </Button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ContactusView