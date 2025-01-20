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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-csRoger text-[#fccf7f] text-center">
          Merchandise
        </h1>

        {/* First Section */}
        <div className="inline-flex w-full h-auto items-center justify-center gap-[33px] relative flex-wrap">
          {/* Shirt Box */}
          <div className="flex w-[600px] h-[400px] items-center justify-center gap-2.5  relative  ">
            <img
            src = "src\pic\merch 2.jpg"
            className="h-full w-full rounded-[20px]">
            
            </img>
          </div>

          {/* Size Box */}
          <div className="flex w-[600px] h-[400px] items-center justify-center gap-2.5  relative  ">
            <img
            src = "src\pic\merch1.jpg"
            className="h-full w-full rounded-[20px]">
            
            </img>
          </div>
        </div>
        
        {/* Second Section */}
        <div className="inline-flex w-full h-auto items-center justify-center gap-[33px] relative flex-wrap">
          {/* Jersey Box */}
          <div className="flex w-[600px] h-[400px] items-center justify-center gap-2.5  relative  ">
            <img
            src = "src\pic\merch3.jpg"
            className="h-full w-full rounded-[20px]">
            
            </img>
          </div>

          {/* Size Box */}
          <div className="flex w-[600px] h-[400px] items-center justify-center gap-2.5  relative  ">
            <img
            src = "src\pic\merch 4.jpg"
            className="h-full w-full rounded-[20px]">
            
            </img>
          </div>
          </div>

          {/* 3rt section*/}
          <div className="inline-flex w-full h-auto items-center justify-center gap-[33px] relative flex-wrap">
          {/* Shirt Box */}
          <div className="flex w-[600px] h-[400px] items-center justify-center gap-2.5  relative  ">
            <img
            src = "src\pic\merch 5.jpg"
            className="h-full w-full rounded-[20px]">
            
            </img>
          </div>

         
          
        </div>


        {/* Link Tree Button Section */}
        

  <div className=" w-full bg-[#f9d490] flex items-center justify-center gap-2.5 px-[150px] py-6 relative rounded-[20px] mb-[40px]  transition-all duration-300">
    <div className="relative w-fit font-csRoger font-bold text-[#4a381f] text-[36px] text-center tracking-[0] leading-[50px]  whitespace-nowrap">
      Pre Order - 15 Feb
    </div>
  </div>


      </div>

      
  
  {/* Bottom Row */}
  <img 
src = "src\pic\Untitled_Artwork.png"
className="relative w-full h-full " />


      {/* Footer */}
      <Footer />
    </div>
  );
}
