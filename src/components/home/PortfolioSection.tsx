import React from "react";
import PortfolioCard from "../ui/PortfolioCard";

const PortfolioSection = () => {
  return (
    <div className="w-full py-16 flex flex-col items-center gap-16">
      <div className="relative w-full flex flex-1 items-center">
        <h2 className="w-full text-4xl uppercase">Featured work</h2>
        <h2 className="w-3/5 text-2xl">
          {
            "We craft innovative and purposeful story that capture attention and drive meaningful results."
          }
        </h2>
      </div>
      <div className="relative grid grid-cols-3 gap-y-16">
        <PortfolioCard
          imagesrc="/studio.jpg"
          title="Awg Media And Communication Grand Opening"
        />
        <PortfolioCard
          imagesrc="/studio-setup.jpg"
          title="Awg Media And Communication Grand Opening"
        />
        <PortfolioCard
          imagesrc="/studio.jpg"
          title="Awg Media And Communication Grand Opening"
        />
        <PortfolioCard
          imagesrc="/studio-setup.jpg"
          title="Awg Media And Communication Grand Opening"
        />
        <PortfolioCard
          imagesrc="/studio.jpg"
          title="Awg Media And Communication Grand Opening"
        />
        <PortfolioCard
          imagesrc="/studio-setup.jpg"
          title="Awg Media And Communication Grand Opening"
        />
        <PortfolioCard
          imagesrc="/studio.jpg"
          title="Awg Media And Communication Grand Opening"
        />
        <PortfolioCard
          imagesrc="/studio-setup.jpg"
          title="Awg Media And Communication Grand Opening"
        />
        <PortfolioCard
          imagesrc="/studio.jpg"
          title="Awg Media And Communication Grand Opening"
        />
      </div>
      <button className="relative px-8 py-3 border border-primary rounded-full uppercase">
        View More Works
      </button>
    </div>
  );
};

export default PortfolioSection;
