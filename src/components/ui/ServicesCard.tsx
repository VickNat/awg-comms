import React, { useRef} from "react";
import { motion } from "motion/react";

interface ServicesCardProps {
  title: string;
  serviceList: string[];
  serviceId: number
}

const ServicesText = ({
  children,
  containerRef,
}: {
  children: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <h3 className="w-full h-fit overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ root: containerRef, amount: 0, margin: "0px 0px -5% 0px" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        {children}
      </motion.div>
    </h3>
  );
};

const ServicesCard: React.FC<ServicesCardProps> = ({
  serviceId,
  title,
  serviceList,
}) => {

  const serviceContainer = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={serviceContainer} className="relative text-primary bg- w-full py-6 border-t-1">
      <div className="flex flex-1 items-start h-full w-full ">
        <p className="text-7xl w-1/2">{`0${serviceId}`}</p>
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold "><ServicesText containerRef={serviceContainer}>{title}</ServicesText></div>
          <div className="flex flex-col">
            {serviceList.map((service, index) => (
              <div key={index} className="leading-relaxed"><ServicesText containerRef={serviceContainer}>{service}</ServicesText></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
