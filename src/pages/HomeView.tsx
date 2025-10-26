"use client";

import React from "react";
import { useTheme } from "next-themes";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";

const HomeView = () => {
  const { setTheme } = useTheme();
  setTheme("dark");
  return (
    <div className="w-full h-full inline-block bg-muted">
      <div className="relative top-0 z-5">
        <HeroSection />
      </div>

      <div className="relative w-full px-16 bg-primary-foreground">
        <AboutSection />
        <ServicesSection />
      </div>
    </div>
  );
};

export default HomeView;
