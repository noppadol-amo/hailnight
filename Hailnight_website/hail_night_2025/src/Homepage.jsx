import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

export default function HomePage() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size on load and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Breakpoint for small screens
    };

    checkScreenSize(); // Run on load
    window.addEventListener("resize", checkScreenSize); // Update on resize

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
  }, []);

  return (
    <div className="bg-[#27344e] min-h-screen w-full flex items-center justify-center flex-col overflow-x-hidden">
      {isSmallScreen ? (
        <div className="flex flex-col items-center gap-2 w-full">
          <Link
            to="/"
            className="w-full bg-[#efb246] hover:bg-[#d9a03f] text-[#4a381f] font-csRoger text-xl py-4 rounded text-center"
          >
            HOME
          </Link>
          <Link
            to="/ticket"
            className="w-full bg-[#f9d38f] hover:bg-[#F8CB7A] text-[#4a381f] font-csRoger text-xl py-4 rounded text-center"
          >
            TICKET
          </Link>
          <Link
            to="/schedule"
            className="w-full bg-[#f9d38f] hover:bg-[#F8CB7A] text-[#4a381f] font-csRoger text-xl py-4 rounded text-center"
          >
            SCHEDULE
          </Link>
          <Link
            to="/merchandise"
            className="w-full bg-[#f9d38f] hover:bg-[#F8CB7A] text-[#4a381f] font-csRoger text-xl py-4 rounded text-center"
          >
            MERCHANDISE
          </Link>
        </div>
      ) : (
        <div className="flex items-center justify-between h-[106px] w-full bg-[#f9d38f]">
          <Link
            to="/"
            className="flex-1 h-full bg-[#efb246] hover:bg-[#d9a03f] text-[#4a381f] font-csRoger text-xl flex items-center justify-center rounded-r-[18px]"
          >
            HOME
          </Link>
          <Link
            to="/ticket"
            className="flex-1 h-full bg-[#f9d38f] hover:bg-[#F8CB7A] text-[#4a381f] font-csRoger text-xl flex items-center justify-center rounded-[18px]"
          >
            TICKET
          </Link>
          
          <img 
          src="\pic\IMG_0927.JPG"
          alt="logo"
          className="w-[205px] h-full object-cover"
          />
          
          <Link
            to="/schedule"
            className="flex-1 h-full bg-[#f9d38f] hover:bg-[#F8CB7A] text-[#4a381f] font-csRoger text-xl flex items-center justify-center rounded-[18px]"
          >
            SCHEDULE
          </Link>
          <Link
            to="/merchandise"
            className="flex-1 h-full bg-[#f9d38f] hover:bg-[#F8CB7A] text-[#4a381f] font-csRoger text-xl flex items-center justify-center rounded-l-[18px]"
          >
            MERCHANDISE
          </Link>
        </div>
      )}
    
      {/* Lower Section with Responsive Blue Boxes on Left and Right, and Centered Text */}
      
    {/* Top Section */}
    
    

    <img
    src ="\pic\top new.png"
    className="w-full h-full pb-[60px]"
    ></img>
 




      <div className="flex flex-col w-full items-center justify-center pt-[40px] pb-[100px] px-4 sm:px-0 gap-10">
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-10 px-4 sm:px-0">
  {/* HN Image and HN Text Section */}
  <div className="flex flex-col sm:flex-row w-full items-center justify-center pt-[60px]  px-4 sm:px-0 relative gap-10">

    {/* HN Image */}
    <img 
    src = "\pic\S__10420271.jpg"
    alt = "What is hailnight"
    className="relative w-full sm:w-[600px] h-full bg-[#758fb6] rounded-[20px]" />

    {/* HN Text */}
    <div className="flex flex-col h-auto items-center justify-center">
  <div className="relative w-[130%] sm:w-[466px] text-xs sm:text-lg font-csRoger font-normal text-[#f3ead9] text-l sm:text-right text-center tracking-[0] leading-10">
  You will be brought on a spellbinding voyage filled with delicious foods, mesmerizing performances, rhythmic music, and many iconic games that capture the thrill of adventure and discovery.

Reconnect with the joy of exploration and let your imagination set sail on this enchanting journey. Relive the spirit of adventure and the boundless optimism of chasing new horizons at Hail Night 2025.
  </div>
    </div>

    

  </div>

  <div className="flex flex-col sm:flex-row w-full items-center justify-between px-2 relative ">
  {!isSmallScreen && (
    <div
    className="relative flex flex-wrap w-[33%] sm:w-[405px] h-[300px] items-center gap-0" >
    <img 
    src = "\pic\Untitled_Artwork 7.png"
    alt = "element 1"
    className="w-full h-[200px]" />
    </div>
  )}

{!isSmallScreen && (
  
  <div
    className="relative flex flex-wrap w-[33%] sm:w-[405px] h-[300px] items-center gap-0"
  >
    {/* Untitled_Artwork 5 */}
    <img 
      src="\pic\Untitled_Artwork 5.png"
      className="absolute top-0 left-0 z-10 w-[300px] h-[270px]"
      alt="Artwork 5"
    />
    
    {/* Untitled_Artwork 4 */}
    <img 
      src="\pic\Untitled_Artwork 4.png"
      className="relative z-0 w-full h-[200px]"
      alt="Artwork 4"
    />
  
</div>
)}
  
  

</div>

  


<div className="flex flex-col sm:flex-row w-full items-starts justify-center mt-[40px] pb-[40px]  sm:px-0 relative gap-10">
  {/* Date&Time */}
  <div className="flex flex-col items-center sm:items-starts w-full sm:w-auto text-center sm:text-right mb-[10px]">
    <div className="relative w-full sm:w-[525px] font-csRoger font-normal px-4 text-[#fccf7f] text-[60px]  tracking-[0] leading-relaxed">
      Date & Time
    </div>
    <div className="relative w-full sm:w-[525px] font-csRoger font-normal text-[#f3dcb3] text-5xl tracking-[0] leading-[100.8px]">
      21 March
    </div>
    <div className="relative w-full sm:w-[525px] font-csRoger font-normal text-[#f3dcb3] text-5xl tracking-[0] leading-[100.8px]">
      2025
    </div>
    <div className="relative w-full sm:w-[525px] font-csRoger font-normal text-[#cbdbf2] text-4xl tracking-[0] leading-[78.4px]">
      17.00-00.00
    </div>
  </div>

  {/* Location */}
  <div className="flex flex-col items-center sm:items-start w-full sm:w-auto text-center sm:text-left  gap-[10px]">
    <div className="relative w-full sm:w-[525px] font-csRoger font-normal text-[#fccf7f] text-5xl sm:text-[60px] tracking-[0] leading-[81.2px] mt-[10px]">
    Location
    </div>
    <div className="relative w-full sm:w-[525px] font-boran font-normal text-[#c6ddff] text-[48px] sm:text-[68px] tracking-[0] leading-[89.6px]">
      ลานหน้า
      <br />
      หอประชุม
      <br />
      มหิดลสิทธาคาร
    </div>
    <a
    href="https://maps.app.goo.gl/maSLKwSogGkhRzdp7"
    target="_blank">
    <img 
      src="\pic\IMG_0936.jpg"
      alt="map"
      className="relative w-full sm:w-[405px] h-full bg-[#758fb6] rounded-[20px] "
    />
    </a>
  </div>
</div>


<div className="flex flex-col sm:flex-row w-full items-center justify-between  pb-[20px]  relative ">
{!isSmallScreen && (
    <div
      className="relative flex flex-wrap w-[33%] sm:w-[405px] h-[300px] items-center gap-0"
    >
      <img 
        src="\pic\Untitled_Artwork 7.png"
        alt="element 1"
        className="w-full h-[200px]" 
      />
    </div>
  )}

{!isSmallScreen && (
    <div
      className="relative flex flex-wrap w-[33%] sm:w-[405px] h-[300px] items-center gap-0"
    >
      <img 
        src="\pic\Untitled_Artwork 2.png"
        alt="element 1"
        className="w-full h-[200px]" 
      />
    </div>
  )}
  
  

</div>




     {/* Artist Section with Overlaid Boxes */}
<div className="flex flex-col sm:flex-row w-full items-center justify-center pt-[60px] pb-[60px] px-4 sm:px-0 relative gap-10">
  
  {/* Responsive Artist Boxes */}
  <div className="flex flex-col w-full sm:flex-row justify-center items-center gap-10 relative">
    {/* Artist Box 1 */}
    <img 
    src = "\pic\Special guest ปิงซาน - 1.png"
    className="relative w-[400px] h-full bg-[#758fb6] rounded-[20px]">
      {/* Absolute Box "dept" */}
      {/*<div className="absolute w-full h-[98px] bg-[#fccf7f]" />*/}
    </img>
    
    {/* Artist Box 2 */}
    <img 
    src = "\pic\Special guest ปิงซาน - 2.png"
    className="relative w-[400px] h-full bg-[#758fb6] rounded-[20px]">
      {/* Absolute Box "Only Monday" */}
      {/*<div className="absolute w-full h-[98px] bg-[#fccf7f]" />*/}
    </img>
    
    {/* Artist Box 3 */}
    <img 
    src = "\pic\Special guest ปิงซาน.png"
    className="relative w-[400px] h-full bg-[#758fb6] rounded-[20px]">
      {/* Absolute Box "parkinson" */}
      {/*<div className="absolute w-full h-[98px] bg-[#fccf7f]" />*/}
    </img>
  </div>
  
  

</div>
<div className="flex flex-col sm:flex-row w-full items-center justify-between pt-[60px] pb-[20px]  relative ">
{!isSmallScreen && (
    <div
      className="relative flex flex-wrap w-[33%] sm:w-[405px] h-[300px] items-center gap-0"
    >
      <img 
        src="\pic\Untitled_Artwork 7.png"
        alt="element 1"
        className="w-full h-[200px]" 
      />
    </div>
  )}
  
  {!isSmallScreen && (
    <div
      className="relative flex flex-wrap w-[33%] sm:w-[405px] h-[300px] items-center gap-0"
    >
      <img 
        src="\pic\Untitled_Artwork 2.png"
        alt="element 1"
        className="w-full h-[200px]" 
      />
    </div>
  )}

</div>



{/* Sponsored Section */}
    
<div className="flex  items-center justify-center gap-2.5 pt-0 pb-[50px] px-0 relative flex-[0_0_auto] z-[3]">
        <div className="relative flex-1 mt-[-1.00px] font-csRoger font-normal text-[#f9d38f] text-3xl sm:text-5xl text-center tracking-[0] leading-[40.6px]">
          Sponsored by
        </div>
      </div> 

      {/* First Row of Sponsor Circles */}
      <div className="inline-flex items-center justify-center gap-4 sm:gap-16 pt-0 pb-[20px] px-4 relative flex-[0_0_auto] z-[2]">
        <img 
        src ="\sponser\uniloft.png"
        className="relative w-[50%] sm:w-[400px] bg-[#758fb6] rounded-[10px]" />
        <img 
        src ="\sponser\superrich 2.jpg"
        className="relative w-[60%] sm:w-[500px] bg-[#758fb6] rounded-[10px]" />
        
      </div> 

      {/* Second Row of Sponsor Circles */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-0 pb-[20px] px-[50px] relative self-stretch w-full flex-[0_0_auto] z-[1]">
     <img 
        src ="\sponser\สมาคมศิษย์เก่าศิริราช.png"
        className="relative w-[45%] sm:w-[200px] bg-[#758fb6] rounded-[10px]" />
        <img 
        src ="\sponser\วันเดย์ติวเตอร์.jpg"
        className="relative w-[45%] sm:w-[200px] bg-[#758fb6] rounded-[10px]" />
        <img 
        src ="\sponser\โกกิ.png"
        className="relative w-[45%] sm:w-[200px] bg-[#758fb6] rounded-[10px] bg-white" />
        <img 
        src ="\sponser\U72_โลโก้.jpg"
        className="relative w-[45%] sm:w-[200px] bg-[#758fb6] rounded-[10px]" />
</div> 

<div className="flex flex-wrap items-center justify-center gap-4 pt-0 pb-[50px] px-[50px] relative self-stretch w-full flex-[0_0_auto] z-[1]">
     <img 
        src ="\sponser\รพ.ปิยะเวท.png"
        className="relative w-[40%] sm:w-[150px] bg-[#758fb6] rounded-[10px] bg-white" />
        <img 
        src ="\sponser\บัณฑิต.jpg"
        className="relative w-[40%] sm:w-[150px] bg-[#758fb6] rounded-[10px]" />
        <img 
        src ="\sponser\figure.png"
        className="relative w-[40%] sm:w-[150px] bg-[#758fb6] rounded-[10px] bg-white" />
        <img 
        src ="\sponser\Beef35.png"
        className="relative w-[40%] h-[50px] sm:w-[150px] sm:h-[100px] bg-[#758fb6] rounded-[10px]" />
         <img 
        src ="\sponser\The enter.JPG"
        className="relative w-[40%] sm:w-[150px] bg-[#758fb6] rounded-[10px]" />
</div> 


  </div> 
  {/* New Section with Blue Boxes */}





</div>
<img 
src = "\pic\Untitled_Artwork 1.png"
className="relative w-full h-full " />
<Footer />
</div>

    
  );
}
    
