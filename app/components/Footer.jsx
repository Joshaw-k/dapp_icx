import React from "react";

const Footer = () => {
  return (
    <div className="p-5 bg-gradient-to-r from-[#381134] to-[#1A154B] mt-8">
      <div className="px-8">
        <div className="md:flex justify-between items-center text-white">
          <div className="mb-3">
            <p>Copyright 2022. Decentralized Dapps.</p>
          </div>
          <div className="flex justify-between items-center gap-x-3 md:gap-x-6 lg:gap-x-9">
            <p>Privacy Policy</p>
            <p>Term & Condition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
