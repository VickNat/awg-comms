import React from "react";
import LogoSlider from "../ui/LogoSlider";
import { motion } from "motion/react";

const clients = [
  { id: 1, name: "", image: "/logo0.png" },
  { id: 2, name: "", image: "/logo1.png" },
  { id: 3, name: "", image: "/logo2.png" },
  { id: 4, name: "", image: "/logo3.png" },
  { id: 5, name: "", image: "/logo4.png" },
  { id: 6, name: "", image: "/logo5.png" },
  { id: 7, name: "", image: "/logo6.png" },
  { id: 8, name: "", image: "/logo7.png" },
  { id: 9, name: "", image: "/logo8.png" },
  { id: 10, name: "", image: "/logo9.png" },
];

const ClientsSection = () => {
  return (
    <div className="relative w-full flex flex-col gap-24 py-16 bg- border-b">
      <div className="relative min-h-screen bg-background">
        sections separater
      </div>
      {/* <h1 className="w-full h-fit overflow-hidden uppercase text-5xl px-12">
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{
            amount: 0,
            margin: "0px 0px -5% 0px",
          }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          our clients
        </motion.div>
      </h1>{" "} */}
      <LogoSlider clients={clients} />
    </div>
  );
};

export default ClientsSection;
