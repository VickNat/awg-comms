import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="min-h-[120vh] w-full flex justify-center items-center">
      <div className="relative h-full w-full">
        <div className="relative h-screen flex flex-col gap-16 items-center justify-center">
          {/* <h2 className="text-7xl font-bold text-center">A Perfect Flow <br /> of a Story...</h2> */}
          <p className="text-5xl text-center">
            At AWG, we believe every message <br /> deserves to flow like a good
            story. <br />
            That's what we do best <br /> helping brands say what they mean,{" "}
            <br /> and mean what they say.
          </p>
          {/* <button className="relative px-8 py-3 w-fit border border-primary rounded-full uppercase">
            Who We Are
          </button> */}
        </div>
        {/* <div className="relative max-w-5/12">
          <Image
            src="/studio.jpg"
            alt="about us image"
            width={1600}
            height={1000}
            className="rounded-xl "
          />
        </div> */}

        <div className="relative h-full w-full flex flex-1 gap-16 items-center justify-center py-28">
          <div className=" relative flex flex-col gap-16">
            <h2 className="text-5xl font-bold">A Perfect Flow of a Story...</h2>
            <p className="text-lg">
              At AWG, we believe every message deserves to flow like a good
              story. That's what we do best: helping people and brands say what
              they mean, and mean what they say.{" "}
            </p>
            <button className="relative px-8 py-3 w-fit border border-primary rounded-full uppercase">
              Who We Are
            </button>
          </div>
          <div className="relative max-w-5/12">
            <Image
              src="/studio.jpg"
              alt="about us image"
              width={1600}
              height={1000}
              className="rounded-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
