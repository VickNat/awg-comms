import React from "react";
import PortfolioCard from "../ui/PortfolioCard";

const PortfolioSection = () => {
  return (
    <div className="w-full py-16 flex flex-col items-center gap-32">
      <div className="relative w-full flex flex-1 items-center justify-center">
        <h2 className="text-7xl font-bold text-center">Featured work</h2>
      </div>
      <div className="relative w-4/5 grid grid-cols-2 gap-4 auto-rows-[minmax(160px,10fr)]">
        <div className="col-span-2 row-span-3 h-full">
          <PortfolioCard
            imagesrc="/studio.jpg"
            title="chanolly"
          />
        </div>
        <div className="row-span-2 h-full">
          <PortfolioCard
            imagesrc="/studio-setup.jpg"
            title="Yod abyssinya"
          />
        </div>
        <div className="row-span-4 h-full">
          <PortfolioCard
            imagesrc="/studio.jpg"
            title="ruby"
          />
        </div>
        <div className="row-span-2 h-full">
          <PortfolioCard
            imagesrc="/studio-setup.jpg"
            title="Awg Media"
          />
        </div>
        <div className="col-span-2 row-span-3 h-full">
          <PortfolioCard
            imagesrc="/studio.jpg"
            title="Awg Media"
          />
        </div>
        <div className="row-span-4 h-full">
          <PortfolioCard
            imagesrc="/studio-setup.jpg"
            title="Awg Media"
          />
        </div>
        <div className="row-span-2 h-full">
          <PortfolioCard
            imagesrc="/studio.jpg"
            title="Awg Media"
          />
        </div>
        <div className="row-span-2 h-full">
          <PortfolioCard
            imagesrc="/studio-setup.jpg"
            title="Awg Media"
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
