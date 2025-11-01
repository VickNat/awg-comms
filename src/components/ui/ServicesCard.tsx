import React from "react";

interface ServicesCardProps {
  title: string;
  serviceList: string[];
  serviceId: number
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  serviceId,
  title,
  serviceList,
}) => {
  return (
    <div className="relative text-primary bg- w-full py-6 border-t-1">
      <div className="flex flex-1 items-start h-full w-full ">
        <p className="text-7xl w-1/2">{`0${serviceId}`}</p>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold ">{title}</h3>
          <div className="flex flex-col">
            {serviceList.map((service, index) => (
              <p key={index} className="leading-relaxed">{service}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
