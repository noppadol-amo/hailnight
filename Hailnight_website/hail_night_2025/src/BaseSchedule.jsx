import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./footer"; // Import the Footer component

export default function MerchandisePage() {
  return (
    <div className="bg-[#27344e] min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="top-0 flex flex-col items-center justify-center flex-grow gap-8 text-[#f3ead9]">
        <Navbar />
      </div>

      {/* Merchandise Page Content */}
      <div className="flex flex-col items-center flex-grow gap-12 px-4 text-[#f3ead9] mt-[60px]">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold [font-family:'CS_Roger-Inner',Helvetica] text-[#fccf7f] text-center">
          Merchandise
        </h1>

        

        {/* Second Section */}
        <div className="inline-flex items-center justify-center gap-[33px] relative flex-wrap">
          {/* Jersey Box */}
          <div className="flex w-[428.37px] h-[355px] items-center justify-center gap-2.5 px-[116px] py-[107px] bg-[#758fb6] rounded-[20px]">
            <div className="w-[195.14px] [font-family:'CS_Roger-Double',Helvetica] text-[#f3ead9] text-[29px] leading-[40.6px] text-center tracking-[0]">
              Jersey
            </div>
          </div>

          {/* Size Box */}
          <div className="flex w-[428.37px] h-[355px] items-center justify-center gap-2.5 px-[116px] py-[107px] bg-[#758fb6] rounded-[20px]">
            <div className="relative w-[195.14px] [font-family:'CS_Roger-Double',Helvetica] font-normal text-[#f3ead9] text-[29px] text-center tracking-[0] leading-[40.6px]">
              Size
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
