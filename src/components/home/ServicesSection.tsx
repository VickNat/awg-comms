import React from "react";
import ServicesCard from "../ui/ServicesCard";

const ServicesSection = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div className="relative flex justify-between items-center my-12">
        <h2 className="relative w-3/5 uppercase text-3xl">
          Tell your story with us, Which captivate the eye and awaken emotions.
        </h2>
        <button className="relative px-8 py-3 border border-primary rounded-full uppercase">
          Discover our services
        </button>
      </div>
      <div className="relative w-full flex items-center justify-center">
        <div className="grid grid-cols-3 grid-rows-2 gap-12 gap-x-20 w-full">
          <ServicesCard
            title="Service Title"
            description="Ad excepteur id eu pariatur deserunt nostrud. Nostrud nisi ipsum dolor ad. Id minim sint anim pariatur. Ea officia reprehenderit aliquip consectetur proident."
          />
          <ServicesCard
            title="Service Title"
            description="Occaecat cupidatat qui quis enim enim in commodo nisi. Labore incididunt irure sint officia. Cupidatat id aliqua eu tempor excepteur dolor."
          />
          <ServicesCard
            title="Service Title"
            description="Laborum irure consequat consectetur esse. Voluptate proident velit commodo culpa. Quis dolore quis velit magna velit culpa cupidatat fugiat aute."
          />
          <ServicesCard
            title="Service Title"
            description="Sunt culpa ea sit dolor id labore in eu. Aliqua sint adipisicing consectetur esse occaecat magna adipisicing cupidatat exercitation nisi dolor officia."
          />
          <ServicesCard
            title="Service Title"
            description="Eu laborum elit dolore minim mollit minim aute non nisi cillum laborum esse ipsum cillum. Cupidatat mollit minim occaecat aliquip nostrud."
          />
          <ServicesCard
            title="Service Title"
            description="Veniam quis dolor laborum consectetur eu elit proident nisi tempor. Exercitation adipisicing Lorem duis occaecat consectetur. Ut culpa eiusmod pariatur ut."
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
