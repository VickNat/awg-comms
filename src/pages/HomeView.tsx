"use client";

import React from "react";
import { useTheme } from "next-themes";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ClientsSection from "@/components/home/ClientsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import NumbersSection from "@/components/home/NumbersSection";
import ShowReel from "@/components/home/ShowReel";

const HomeView = () => {
  const { setTheme } = useTheme();
  setTheme("dark");
  return (
    <div className="w-full h-full inline-block">
      <div className="relative top-0 z-5">
        <HeroSection />
        <ShowReel />
      </div>

      <div className="relative w-full bg-primary-foreground">
        <div className="px-16">
          <AboutSection />
          <PortfolioSection />
          <ServicesSection />
        </div>
        <ClientsSection />
        <NumbersSection />
      </div>
    </div>
  );
};

export default HomeView;
