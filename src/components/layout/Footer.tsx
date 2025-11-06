import { Copyright } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="relative w-full h-[60vh] flex p-12">
      <div className="flex flex-col gap-10 w-1/4">
        <div className="flex flex-col gap-4 font-bold text-primary/80">
          Menu
          <div className="flex flex-col text-primary/60 font-normal">
            <span>About</span>
            <span>Work</span>
            <span>Clients</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 font-bold text-primary/80">
          Connect
          <div className="flex flex-col text-primary/60 font-normal">
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
        <div className="flex flex-col gap-10 w-1/4">
          <div className="flex flex-col gap-4 font-bold text-primary/80">
            Contact
            <div className="flex flex-col text-primary/60 font-normal">
              <span>Awgcomms@gmail.com</span>
              <span>+251 91 640 6015</span>
              <span>+251 91 091 4256 </span>
            </div>
            </div>
            <div className="flex flex-col gap-4 font-bold text-primary/80">
              Address
              <div className="flex flex-col text-primary/60 font-normal">
                <span>ORDA BLDG, Lagare</span>
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
        </div>

      <div className="absolute bottom-4 left-12 flex items-center justify-center gap-2 uppercase text-sm">
        awg communications 2025 <Copyright className="w-4 h-4" />
      </div>
    </div>
  );
};

export default Footer;
