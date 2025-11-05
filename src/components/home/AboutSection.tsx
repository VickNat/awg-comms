import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const HeaderText = ({
  children,
  containerRef,
}: {
  children: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <h1 className="w-full h-fit overflow-hidden uppercase text-5xl">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ root: containerRef, amount: 0, margin: "0px 0px -20% 0px", once: true }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        {children}
      </motion.div>
    </h1>
  );
};

const PText = ({
  children,
  containerRef,
}: {
  children: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className="w-full text-lg">
      <motion.div
        initial="initial"
        whileInView="WhileInView"
        viewport={{ root: containerRef, amount: 0, margin: "0px 0px -20% 0px", once: true }}
        transition={{ staggerChildren: 0.015, ease: "easeOut" }}
      >
        {children.split(" ").map((word, i) => (
            <motion.span
              variants={{
                initial: { opacity: 0 },
                WhileInView: { opacity: 1},
              }}
              className="inline-block"
              key={i}
            >
              {word}
              {i < children.split(" ").length - 1 && "\u00A0"}
            </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

const AboutSection = () => {
  const aboutContainer = useRef<HTMLDivElement | null>(null);

  return (
    <div className="min-h-[110vh] w-full flex justify-center items-center">
      <div className="relative h-full w-full">
        <div
          ref={aboutContainer}
          className="relative h-full w-full flex flex-1 gap-16 items-center justify-center py-28"
        >
          <div className="relative flex flex-col gap-16">
            <HeaderText containerRef={aboutContainer}>
              A Perfect Flow of a Story
            </HeaderText>
            <div className="space-y-6">
              <PText containerRef={aboutContainer}>
                At AWG, we believe every message deserves to flow like a good
                story. That's what we do best: helping people and brands say
                what they mean, and mean what they say.
              </PText>
              <PText containerRef={aboutContainer}>
                Sunt sit deserunt amet exercitation labore in cupidatat proident
                in Lorem eu consectetur consequat commodo. Nostrud nisi cillum
                deserunt irure. In ad cupidatat qui consequat ut minim.
              </PText>
            </div>
            <div className="relative p-0 h-fit overflow-hidden">
              <motion.button
                className="relative px-8 py-3 w-fit border border-primary rounded-full uppercase"
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ease: "easeIn"}}
                viewport={{ root: aboutContainer, amount: 0, margin: "0px 0px -20% 0px", once: true }}
                >
                Who We Are
              </motion.button>
            </div>
          </div>
          <div className="relative min-w-[45%] max-w-[45%]">
            <Image
              src="/studio.jpg"
              alt="about us image"
              width={1600}
              height={1000}
              className="rounded-xs "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
