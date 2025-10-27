import React from "react";
import Image from "next/image";

interface PortfolioCardProps {
  imagesrc: string;
  title: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ imagesrc, title }) => {
  return (
    <div className="w-full overflow-hidden relative flex flex-col gap-8 items-center justify-center">
      <Image src={imagesrc} alt={title} width={800} height={500} className="w-full h-96 max-h-80 object-cover" />
      <h3 className="absolute top-1/2 backdrop-blur-sm bg-background/20 w-full text-center py-2">{title}</h3>
    </div>
  );
};

export default PortfolioCard;
