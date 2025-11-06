import React from "react";
import PortfolioCard from "../ui/PortfolioCard";
import { motion } from "motion/react";

const PortfolioSection = () => {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center gap-32">
      <div className="relative w-full flex flex-1 items-center justify-start">
        <h1 className="w-full h-fit overflow-hidden uppercase text-5xl">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{
              amount: 0,
              margin: "0px 0px -5% 0px",
              once: true,
            }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            Featured work
          </motion.div>
        </h1>
      </div>
      <div className="relative w-full grid grid-cols-3 gap-5 auto-rows-[minmax(400px,500px)]">
        <div className="">
          <PortfolioCard
            imagesrc="/studio.jpg"
            title="chanolly"
            tags={["Branding", "Web Design"]}
          />
        </div>
        <div className="">
          <PortfolioCard
            imagesrc="/studio-setup.jpg"
            title="Yod abyssinya"
            tags={["Branding", "Web Design"]}
          />
        </div>
        <div className="">
          <PortfolioCard
            imagesrc="/studio.jpg"
            title="ruby"
            tags={["Branding", "Web Design"]}
          />
        </div>
        <div className="col-span-2">
          <PortfolioCard
            imagesrc="/studio-setup.jpg"
            title="Awg Media"
            tags={["Branding", "Web Design"]}
          />
        </div>
        <div className="">
          <PortfolioCard
            imagesrc="/studio.jpg"
            title="Awg Media"
            tags={["Branding", "Web Design"]}
          />
        </div>
        <div className="">
          <PortfolioCard
            imagesrc="/studio-setup.jpg"
            title="Awg Media"
            tags={["Branding", "Web Design"]}
          />
        </div>
        <div className="col-span-2">
          <PortfolioCard
            imagesrc="/studio.jpg"
            title="Awg Media"
            tags={["Branding", "Web Design"]}
          />
        </div>
      </div>
      {/* <button className="relative px-8 py-3 border border-primary rounded-full uppercase">
        View More Works
      </button> */}
    </div>
  );
};

export default PortfolioSection;
