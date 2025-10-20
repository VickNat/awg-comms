"use client"

import React from "react";
import { useTheme } from "next-themes";
import HeroSection from "@/components/home/HeroSection";

const HomeView = () => {
  const { setTheme } = useTheme();
  setTheme("dark");
  return (
  <div className="w-full h-full inline-block">
    <HeroSection />
  </div>
)};

export default HomeView;
