import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface PortfolioCardProps {
  imagesrc: string;
  title: string;
  tags: string[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  imagesrc,
  title,
  tags,
}) => {
  const projectImage = useRef<HTMLDivElement | null>(null);
  const projectText = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      ref={projectImage}
      initial={{ rotateY: 10, y: 100, opacity: 0 }}
      whileInView={{ rotateY: 0, y: 0, opacity: 1 }}
      viewport={{ amount: 0, margin: "0px 0px -15% 0px" }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      className="w-full h-full overflow-hidden relative rounded-xs flex flex-col"
    >
      <div className="w-full flex-1 relative min-h-0">
        <Image
          src={imagesrc}
          alt={title}
          width={1600}
          height={1200}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="pt-5 pb-2 text-xl">{title}</h3>
      <div ref={projectText} className="flex gap-4 pb-5">
        {tags.map((tag, index) => (
          <div key={index} className="text-sm">
            {tag}
          </div>
        ))}
      </div>{" "}
    </motion.div>
  );
};

export default PortfolioCard;
