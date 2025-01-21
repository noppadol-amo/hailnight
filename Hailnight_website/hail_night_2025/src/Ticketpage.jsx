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
<div className="flex flex-col items-center justify-center flex-grow gap-16 text-[#f3ead9] pt-[60px]">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-csRoger text-[#fccf7f] text-center">
          Ticket
        </h1>
  {/* First row of buttons */}
  <div className="flex flex-col sm:flex-row gap-8 items-center justify-center w-full ">
  {/* Scaled Image */}
  <div className="relative w-[500px] sm:w-[500px] max-w-full sm:h-[550px] rounded-[20px] px-4 ">
    <img
      src="\pic\S__10420271.jpg"
      alt="Scaled Image"
      className="w-full sm:h-full rounded-[20px] "
    />
  </div>

  {/* Button */}
  
  
  <div 
    className="relative flex w-[90%] sm:w-[600px] max-w-full h-[700px] sm:h-[700px] border-2 border-gray-100 rounded-[20px] overflow-hidden transition-all duration-300"
  >
    {/* Background Image */}
    <img 
      src="\pic\canon-poon-hailnight-659.jpg"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover blur  brightness-50  "
    />

    {/* Overlay Content */}
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-20">
      {/* Text */}
      <div className="font-csRoger font-bold text-[#fccf7f] text-[38px] sm:text-[64px] text-center leading-[89.6px] whitespace-nowrap">
        GET TICKET
      </div>

      {/* Ticket Image */}
      <img
        src="\pic\ticket.PNG"
        alt="Ticket"
        className="w-[80%]  sm:max-w-[120%] px-4 "
      />
      <div className="font-csRoger font-bold text-[#fccf7f] text-[28px] sm:text-[40px] text-center leading-[89.6px] whitespace-nowrap">
        Regular - 379.-
      </div>
      <div className="font-csRoger font-bold text-[#cbdbf2] text-[22px] sm:text-[32px] text-center leading-[89.6px] whitespace-nowrap">
        Now - 20 Mar 2025
      </div>
       <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSee0Vv4eb3XB7Ve9-wMTrZAOa5O4leUzUjhHjmtGWpv0nZqmg/viewform?usp=header"  // Replace with your URL
  target="_blank"  // Open link in a new tab
  rel="noopener noreferrer"  // Security for opening in a new tab
>   

  <div className="bg-[#f9d490] w-full sm:w-full flex items-center justify-center gap-2.5 px-[50px] sm:px-[100px] py-6 relative rounded-[20px] mb-[40px] hover:scale-110 transition-all duration-300">
    <div className="relative w-[auto] font-csRoger font-bold text-[#4a381f] text-[24px] sm:text-[36px] text-center tracking-[0] leading-[50px] underline whitespace-nowrap">
      Buy Now
    </div>
  </div>
</a>
    </div>
  </div>


</div>




 
</div>

{/* New Section */}
<img 
src = "\pic\Untitled_Artwork 1.png"
className="relative w-full h-full " />


      
      <div><Footer /></div>
      
    </div>
  );
}
