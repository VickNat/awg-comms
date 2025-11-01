import React from "react";
import Image from "next/image";

const ShowReel = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center mt-24">
      <div className="relative min-h-screen w-full scale-75 bg-primary/50 flex items-center justify-start">
      <p className="absolute text-8xl uppercase text-accent font-bold w-full flex justify-center">play</p>
      <p className="absolute text-4xl uppercase text-accent font-bold self-end p-4">showreel</p>
      </div>
    </div>
  );
};

export default ShowReel;
