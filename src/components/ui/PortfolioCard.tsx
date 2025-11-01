import React from "react";
import Image from "next/image";

interface PortfolioCardProps {
  imagesrc: string;
  title: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ imagesrc, title }) => {
  return (
    <div className="w-full h-full overflow-hidden relative rounded-2xl">
      <div className="w-full h-full relative">
        <Image 
          src={imagesrc} 
          alt={title} 
          fill
          className="object-cover"
        />
      </div>
      <h3 className="absolute top-4 left-4 backdrop-blur-lg bg-accent w-fit text-xl text-foreground/70 text-center uppercase font-bold p-2 rounded-lg">{title}</h3>
    </div>
  );
};

export default PortfolioCard;
