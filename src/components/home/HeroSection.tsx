import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const HeroHeader = ({ children }: { children: string }) => {
  return (
    <h1 className="w-full text-7xl uppercase text-center font-bold tracking-wide">
      <motion.div
        initial="initial"
        whileInView="WhileInView"
        transition={{ staggerChildren: 0.04, ease: "easeInOut"}}
        viewport={{once: true}}
      >
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{ initial: { y: 32, opacity: 0, filter: "blur(10px)" }, WhileInView: { y: 0, opacity: 1, filter: "none" } }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </motion.div>
    </h1>
  );
};

const HeroText = ({ children }: { children: string }) => {
  return (
    <h1 className="w-full text-3xl text-center ">
      <motion.div
        initial="initial"
        whileInView="WhileInView"
        transition={{ staggerChildren: 0.02, ease: "easeOut", delay: 1.5 }}
        viewport={{once: true}}
      >
        {children.split("").map((l, i) => {
          return (
            <motion.span
            variants={{ initial: { y: 32, opacity: 0, filter: "blur(10px)" }, WhileInView: { y: 0, opacity: 1, filter: "none" } }}
            className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </motion.div>
    </h1>
  );
};

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen h-[120vh] object-center overflow-hidden flex bg-background">
      <div className="w-full h-full overflow-hidden">
        <Image
          src="/herodemo.svg"
          alt="hero pattern"
          width={2400}
          height={1500}
          className="object-center w-full"
        ></Image>
      </div>
      <div className="absolute flex flex-col gap-10 h-[120vh] w-full justify-center items-center backdrop-blur-xs mask-x-from-70%">
        <div className="p-0 overflow-hidden">
          <HeroHeader>AWG Communication</HeroHeader>
        </div>
        <div className="p-0 overflow-hidden">
          <HeroText>Creative, Passionate and Rooted in Story.</HeroText>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
