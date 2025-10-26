import React from "react";
import Image from "next/image";

interface ServicesCardProps {
//   iconurl: string;
  title: string;
  description: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
//   iconurl,
  title,
  description,
}) => {
  return (
    <div className="relative h-[18rem] text-primary p-6">
      <div className="flex flex-col items-start h-full space-y-10">
        {/* <div className="">
          <Image
            src={iconurl}
            alt={title}
            width={72}
            height={72}
            className="object-contain overflow-hidden"
          />
        </div> */}
        <h3 className="text-xl font-semibold ">{title}</h3>
        <p className="text- leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
