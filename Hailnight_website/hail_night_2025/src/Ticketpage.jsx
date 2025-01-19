import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./footer";
export default function TicketPage() {
  return (
    <div className="bg-[#27344e] min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="top-0 flex flex-col items-center justify-center flex-grow gap-8  text-[#f3ead9] ">
        <Navbar />
      </div>

      {/* Ticket Page Content */}
<div className="flex flex-col items-center justify-center flex-grow gap-8 text-[#f3ead9] pt-[60px]">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-csRoger text-[#fccf7f] text-center">
          Ticket
        </h1>
  {/* First row of buttons */}
  <div className="flex flex-wrap gap-8 justify-center w-full">
  <button 
    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSee0Vv4eb3XB7Ve9-wMTrZAOa5O4leUzUjhHjmtGWpv0nZqmg/viewform?usp=header', '_blank')}
    className="relative flex w-[90%] sm:w-[914px] max-w-full h-[369px] items-center justify-center gap-2.5 px-6 sm:px-[247px] py-6 sm:py-[71px] rounded-[20px] hover:scale-105 transition-all duration-300"
  >
    {/* Background Image */}
    <img 
      src="src\pic\canon-poon-hailnight-659.jpg"
      alt="Baan กลาง"
      className="absolute inset-0 w-full h-full object-cover opacity-70 brightness-75 rounded-[20px] hover:opacity-100 transition-all duration-300"
    />

    {/* Text */}
    <div className="relative z-10 w-[396px] font-csRoger font-normal text-[#f3ead9] text-[64px] text-center tracking-[0] leading-[89.6px]">
      BAAN กลาง
    </div>
  </button>
</div>



  {/* Second row of buttons */}
  <div className="flex flex-wrap gap-8 justify-center w-full">
    <button 
    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdNLiblmeNYn0po8RNwpusHphFgqWNBY67_7Geq-20NmpDwcA/viewform?usp=header','_blank')}
    className="flex w-[90%] sm:w-[440px] max-w-full h-[298px] items-center justify-center gap-2.5 sm:px-[53px] sm:py-[52px] relative  rounded-[20px]  hover:scale-105 transition-all duration-300 ">
      <img 
      src ="src\pic\baan 1.JPG"
      className="absolute inset-0 bg-[#758fb6] opacity-70 brightness-75 rounded-[20px] hover:bg-[#5a6f8e] hover:opacity-100 transition-all duration-300"></img>

      <div className="relative w-[333px] font-csRoger font-normal text-[#f3ead9] text-5xl text-center tracking-[0] leading-[67.2px]">
        BAAN 1
      </div>
    </button>

    <button 
    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSemyA8mNNRz_VIiW86l1HvQba9lTT5_FPHvR6MJ5c1o2zRPsw/viewform?usp=header','_blank')}
    className="flex w-[90%] sm:w-[440px] max-w-full h-[298px] items-center justify-center gap-2.5 sm:px-[53px] sm:py-[52px] relative  rounded-[20px]  hover:scale-105 transition-all duration-300">
      <img 
      src ="src\pic\DSC02570.JPG"
      className="absolute inset-0 bg-[#758fb6] opacity-70 brightness-75 rounded-[20px] hover:bg-[#5a6f8e] hover:opacity-100 transition-all duration-300"></img>

      <div className="relative w-[334px] font-csRoger font-normal text-[#f3ead9] text-5xl text-center tracking-[0] leading-[67.2px]">
        BAAN 2
      </div>
    </button>
  </div>

  {/* Third row of buttons */}
  <div className="flex flex-wrap gap-8 justify-center w-full">
    <button 
    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeyGiO0aO3s6g2okIVaxA1yktdLi_8M-kedqtZCLH7gsLZeEw/viewform?usp=header','_blank')}
    className="flex w-[90%] sm:w-[440px] max-w-full h-[298px] items-center justify-center gap-2.5 sm:px-[53px] sm:py-[52px] relative  rounded-[20px]  hover:scale-105 transition-all duration-300">
      <img 
      src ="src\pic\DSC02506.JPG"
      className="absolute inset-0 bg-[#758fb6] opacity-70 brightness-75 rounded-[20px] hover:bg-[#5a6f8e] hover:opacity-100 transition-all duration-300"></img>


      <div className="relative w-[333px] font-csRoger font-normal text-[#f3ead9] text-5xl text-center tracking-[0] leading-[67.2px]">
        BAAN 3
      </div>
    </button>

    <button 
    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeyxcTT_4llDFEjo6dqhwfmvWL2gMytpYrG7KBxjIpHdPio1A/viewform?usp=header','_blank')}
    className="flex w-[90%] sm:w-[440px] max-w-full h-[298px] items-center justify-center gap-2.5 sm:px-[53px] sm:py-[52px] relative  rounded-[20px]  hover:scale-105 transition-all duration-300">
      <img 
      src ="src\pic\DSC02586.JPG"
      className="absolute inset-0 bg-[#758fb6] opacity-70 brightness-75 rounded-[20px] hover:bg-[#5a6f8e] hover:opacity-100 transition-all duration-300"></img>

      <div className="relative w-[334px] font-csRoger font-normal text-[#f3ead9] text-5xl text-center tracking-[0] leading-[67.2px]">
        BAAN 4
      </div>
    </button>
  </div>

  {/* Fourth row of buttons */}
  <div className="flex flex-wrap gap-8 justify-center w-full">
    <button 
    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdywHNrPL9uamJob-0DwRgpx1rIytEBfvcdCHk_o0OMF7z90w/viewform?usp=header','_blank')}
    className="flex w-[90%] sm:w-[440px] max-w-full h-[298px] items-center justify-center gap-2.5 sm:px-[53px] sm:py-[52px] relative  rounded-[20px]  hover:scale-105 transition-all duration-300">
      <img 
      src ="src\pic\DSC02864.JPG"
      className="absolute inset-0 bg-[#758fb6] opacity-70 brightness-75 rounded-[20px] hover:bg-[#5a6f8e] hover:opacity-100 transition-all duration-300"></img>

      <div className="relative w-[333px] font-csRoger font-normal text-[#f3ead9] text-5xl text-center tracking-[0] leading-[67.2px]">
        BAAN 5
      </div>
    </button>

    <button 
     
    className="flex w-[90%] sm:w-[440px] max-w-full h-[298px] items-center justify-center gap-2.5 sm:px-[53px] sm:py-[52px] relative  rounded-[20px]  hover:scale-105 transition-all duration-300">
      <img 
      src ="src\pic\DSC02525.JPG"
      className="absolute inset-0 bg-[#758fb6] opacity-70 brightness-75 rounded-[20px]  hover:opacity-100 transition-all duration-300"></img>

      <div className="relative w-[333px] font-csRoger font-normal text-[#f3ead9] text-5xl text-center tracking-[0] leading-[67.2px]">
        BAAN 6
      </div>
    </button>
  </div>
</div>

{/* New Section */}
<img 
src = "src\pic\Untitled_Artwork 1.png"
className="relative w-full h-full " />


      
      <div><Footer /></div>
      
    </div>
  );
}
