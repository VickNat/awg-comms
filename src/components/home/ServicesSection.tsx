import React, { useRef } from "react";
import ServicesCard from "../ui/ServicesCard";
import { motion } from "motion/react";

const ServicesHeader = ({
  children,
  containerRef,
}: {
  children: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <h1 className="w-full h-fit overflow-hidden uppercase text-5xl">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{
          root: containerRef,
          amount: 0,
          margin: "0px 0px -5% 0px",
          once: true,
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        {children}
      </motion.div>
    </h1>
  );
};
const ServicesSection = () => {
  const serviceTitle = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative min-h-screen w-full">
      <div className="relative flex flex-1 my-12">
        <div ref={serviceTitle} className="relative w-1/2 pb-28">
          <div className="sticky top-12">
            <ServicesHeader containerRef={serviceTitle}>
              What We Do
            </ServicesHeader>
          </div>
        </div>
        {/* <button className="relative px-8 py-3 border border-primary rounded-full uppercase">
          Discover our services
        </button> */}
        <div className="flex flex-col w-1/2 min-w-1/2">
          <ServicesCard
            serviceId={1}
            title="Media Buying"
            serviceList={[
              "Media Planning",
              "Ad Placement",
              "Campaign Execution and Reporting",
            ]}
          />

          <ServicesCard
            serviceId={2}
            title="Digital Marketing"
            serviceList={[
              "Social Media Management",
              "Online Advertising",
              "Performance Analytics",
            ]}
          />

          <ServicesCard
            serviceId={3}
            title="Public Relations"
            serviceList={[
              "PR Strategy",
              "Press Releases",
              "Stakeholder Engagement",
            ]}
          />

          <ServicesCard
            serviceId={4}
            title="Creative Content"
            serviceList={["Video Production", "Copywriting", "Graphic Design"]}
          />

          <ServicesCard
            serviceId={5}
            title="Brand Identity"
            serviceList={[
              "Brand Positioning",
              "Logo and Visuals Design",
              "Brand Guidelines",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
