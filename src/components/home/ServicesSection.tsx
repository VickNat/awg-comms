import React from "react";
import ServicesCard from "../ui/ServicesCard";

const ServicesSection = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div className="relative flex flex-1 my-12">
        <h2 className="relative uppercase text-3xl w-1/2">
          We Tell Your Story
        </h2>
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
