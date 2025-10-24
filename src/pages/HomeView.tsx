"use client";

import React from "react";
import { useTheme } from "next-themes";
import HeroSection from "@/components/home/HeroSection";

const HomeView = () => {
  const { setTheme } = useTheme();
  setTheme("dark");
  return (
    <div className="w-full h-full inline-block bg-muted">
      <div className="relative top-0 z-5">
        <HeroSection />
      </div>
      <div className="relative h-screen z-10 bg-accent">Page contents here</div>
    </div>
  );
};

export default HomeView;
