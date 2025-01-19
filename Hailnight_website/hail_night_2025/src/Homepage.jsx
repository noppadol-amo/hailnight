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
            className="w-full bg-[#efb246] hover:bg-[#d9a03f] text-[#4a381f] font-csRoger text-2xl py-4 rounded text-center"
          >
            HOME
          </Link>
          <Link
            to="/ticket"
            className="w-full bg-[#f9d38f] hover:bg-[#F8CB7A] text-[#4a381f] font-csRoger text-2xl py-4 rounded text-center"
          >
            TICKET
          </Link>
          <Link
            to="/schedule"
            className="w-full bg-[#f9d38f] hover:bg-[#F8CB7A] text-[#4a381f] font-csRoger text-2xl py-4 rounded text-center"
          >
            SCHEDULE
          </Link>
          <Link
            to="/merchandise"
            className="w-full bg-[#f9d38f] hover:bg-[#F8CB7A] text-[#4a381f] font-csRoger text-2xl py-4 rounded text-center"
          >
            MERCHANDISE
          </Link>
        </div>
      ) : (
        <div className="flex items-center justify-between h-[106px] w-full bg-[#f9d38f]">
          <Link
            to="/"
            className="flex-1 h-full bg-[#efb246] hover:bg-[#d9a03f] text-[#4a381f] font-csRoger text-2xl flex items-center justify-center rounded-r-[18px]"
          >
            HOME
          </Link>
          <Link
            to="/ticket"
            className="flex-1 h-full bg-[#f9d38f] hover:bg-[#F8CB7A] text-[#4a381f] font-csRoger text-2xl flex items-center justify-center rounded-[18px]"
          >
            TICKET
          </Link>
          
          <img 
          src="src\pic\IMG_0927.JPG"
          alt="logo"
          className="w-[205px] h-full object-cover"
          />
          
          <Link
            to="/schedule"
            className="flex-1 h-full bg-[#f9d38f] hover:bg-[#F8CB7A] text-[#4a381f] font-csRoger text-2xl flex items-center justify-center rounded-[18px]"
          >
            SCHEDULE
          </Link>
          <Link
            to="/merchandise"
            className="flex-1 h-full bg-[#f9d38f] hover:bg-[#F8CB7A] text-[#4a381f] font-csRoger text-2xl flex items-center justify-center rounded-l-[18px]"
          >
            MERCHANDISE
          </Link>
        </div>
      )}
    
      {/* Lower Section with Responsive Blue Boxes on Left and Right, and Centered Text */}
      
    {/* Top Section */}
    
    <div className="flex flex-row w-full items-center justify-between px-4 sm:px-0 relative ">
      
      {/* Left Image */}
      {!isSmallScreen && (
      
      <img
        src="src/pic/left top.png"
        alt="top left"
        className="max-w-[495px] w-[33%] h-[421px]"
      />
      )}

      {/* Right Image */}
      {!isSmallScreen && (
      
        <img
          src="src/pic/right top.png"
          alt="top right"
          className="max-w-[495px] w-[33%] h-[421px]"
        />
        )}
      
    </div>
    {/* Centered Text */}

    <div className="relative w-[100%] text-7xl [text-shadow:0px_4px_4px_#00000040] font-csRoger font-normal text-[#fccf7f] text-center tracking-[0] leading-[100.8px] whitespace-nowrap pt-[20px]">
        Hail Night
      </div>
 




      <div className="flex flex-col w-full items-center justify-center pt-[40px] pb-[100px] px-4 sm:px-0 gap-10">
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-10 px-4 sm:px-0">
  {/* HN Image and HN Text Section */}
  <div className="flex flex-col sm:flex-row w-full items-center justify-center pt-[60px] pb-[40px] px-4 sm:px-0 relative gap-10">

    {/* HN Image */}
    <img 
    src = "src\pic\S__10420271.jpg"
    alt = "What is hailnight"
    className="relative w-full sm:w-[600px] h-full bg-[#758fb6] rounded-[20px]" />

    {/* HN Text */}
    <div className="flex flex-col h-[421px] items-center justify-center">
  <p className="relative w-full sm:w-[466px] font-csRoger font-normal text-[#f3ead9] text-2xl text-center tracking-[0] leading-[28.0px]">
  You will be brought on a spellbinding voyage filled with delicious foods, mesmerizing performances, rhythmic music, and many iconic games that capture the thrill of adventure and discovery.

Reconnect with the joy of exploration and let your imagination set sail on this enchanting journey. Relive the spirit of adventure and the boundless optimism of chasing new horizons at Hail Night 2025.
  </p>
    </div>

    

  </div>

  <div className="flex flex-col sm:flex-row w-full items-center justify-between pt-[60px]   relative ">
  {!isSmallScreen && (
    <div
    className="relative flex flex-wrap w-[33%] sm:w-[405px] h-[300px] items-center gap-0" >
    <img 
    src = "src\pic\Untitled_Artwork 7.png"
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
      src="src\pic\Untitled_Artwork 5.png"
      className="absolute top-0 left-0 z-10 w-[300px] h-[270px]"
      alt="Artwork 5"
    />
    
    {/* Untitled_Artwork 4 */}
    <img 
      src="src\pic\Untitled_Artwork 4.png"
      className="relative z-0 w-full h-[200px]"
      alt="Artwork 4"
    />
  
</div>
)}
  
  

</div>

  {/* Date&Time and Location Section */}
  <div className="flex flex-col sm:flex-row w-full items-starts justify-center pt-[40px] pb-[40px] px-4 sm:px-0 relative gap-10">
  {/* Date&Time */}
  <div className="flex flex-col items-center sm:items-end w-full sm:w-auto text-center sm:text-right">
    <div className="relative w-full sm:w-[525px] font-csRoger font-normal text-[#fccf7f] text-[58px] tracking-[0] leading-[81.2px]">
      Date&amp;Time
    </div>
    <div className="relative w-full sm:w-[525px] font-csRoger font-normal text-[#f3dcb3] text-7xl tracking-[0] leading-[100.8px]">
      21 March
    </div>
    <div className="relative w-full sm:w-[525px] font-csRoger font-normal text-[#f3dcb3] text-7xl tracking-[0] leading-[100.8px]">
      2025
    </div>
    <div className="relative w-full sm:w-[525px] font-csRoger font-normal text-[#cbdbf2] text-[56px] tracking-[0] leading-[78.4px]">
      17.00-23.00
    </div>
  </div>

  {/* Location */}
  <div className="flex flex-col items-center sm:items-start w-full sm:w-auto text-center sm:text-left  gap-[10px]">
    <div className="relative w-full sm:w-[525px] font-csRoger font-normal text-[#fccf7f] text-[58px] tracking-[0] leading-[81.2px] ">
      Location
    </div>
    <div className="relative w-full sm:w-[525px] font-csRoger font-normal text-[#c6ddff] text-[58px] tracking-[0] leading-[89.6px]">
      ลานหน้า
      <br />
      หอประชุม
      <br />
      มหิดลสิทธาคาร
    </div>
    <img 
      src="src\pic\IMG_0936.jpg"
      alt="map"
      className="relative w-full sm:w-[405px] h-full bg-[#758fb6] rounded-[20px] "
    />
  </div>
</div>


<div className="flex flex-col sm:flex-row w-full items-center justify-between pt-[40px] pb-[20px]  relative ">
{!isSmallScreen && (
    <div
      className="relative flex flex-wrap w-[33%] sm:w-[405px] h-[300px] items-center gap-0"
    >
      <img 
        src="src\pic\Untitled_Artwork 7.png"
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
        src="src\pic\Untitled_Artwork 2.png"
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
    src = "src\pic\Special guest ปิงซาน - 1.png"
    className="relative w-[400px] h-[400px] bg-[#758fb6] rounded-[20px]">
      {/* Absolute Box "dept" */}
      {/*<div className="absolute w-full h-[98px] bg-[#fccf7f]" />*/}
    </img>
    
    {/* Artist Box 2 */}
    <img 
    src = "src\pic\Special guest ปิงซาน - 2.png"
    className="relative w-[400px] h-[400px] bg-[#758fb6] rounded-[20px]">
      {/* Absolute Box "Only Monday" */}
      {/*<div className="absolute w-full h-[98px] bg-[#fccf7f]" />*/}
    </img>
    
    {/* Artist Box 3 */}
    <img 
    src = "src\pic\Special guest ปิงซาน.png"
    className="relative w-[400px] h-[400px] bg-[#758fb6] rounded-[20px]">
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
        src="src\pic\Untitled_Artwork 7.png"
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
        src="src\pic\Untitled_Artwork 2.png"
        alt="element 1"
        className="w-full h-[200px]" 
      />
    </div>
  )}

</div>



{/* Sponsored Section */}
    
{/*<div className="flex w-[313px] items-center justify-center gap-2.5 pt-0 pb-[50px] px-0 relative flex-[0_0_auto] z-[3]">
        <div className="relative flex-1 mt-[-1.00px] font-csRoger font-normal text-[#f9d38f] text-5xl text-center tracking-[0] leading-[40.6px]">
          Sponsored by
        </div>
      </div> */}

      {/* First Row of Sponsor Circles */}
      {/*<div className="inline-flex items-center justify-center gap-4 sm:gap-16 pt-0 pb-[50px] px-4 relative flex-[0_0_auto] z-[2]">
        <div className="relative w-32 h-[119px] bg-[#758fb6] rounded-[20px]" />
        <div className="relative w-32 h-[119px] bg-[#758fb6] rounded-[20px]" />
        <div className="relative w-32 h-[119px] bg-[#758fb6] rounded-[50%]" />
      </div> */}

      {/* Second Row of Sponsor Circles */}
     {/* <div className="flex flex-wrap items-center justify-between gap-[48px_64px] pt-0 pb-[50px] px-[50px] relative self-stretch w-full flex-[0_0_auto] z-[1]">
  <div className="relative w-[87px] h-[81px] bg-[#758fb6] rounded-[20px]" />
  <div className="relative w-[86px] h-[81px] bg-[#758fb6] rounded-[20px]" />
  <div className="relative w-[87px] h-[81px] bg-[#758fb6] rounded-[50%]" />
  <div className="relative w-[87px] h-[81px] bg-[#758fb6] rounded-[20px]" />
  <div className="relative w-[86px] h-[81px] bg-[#758fb6] rounded-[20px]" />
  <div className="relative w-[87px] h-[81px] bg-[#758fb6] rounded-[50%]" />
  <div className="relative w-[87px] h-[81px] bg-[#758fb6] rounded-[20px]" />
  <div className="relative w-[86px] h-[81px] bg-[#758fb6] rounded-[20px]" />
  <div className="relative w-[87px] h-[81px] bg-[#758fb6] rounded-[50%]" />
</div> */}

  </div> 
  {/* New Section with Blue Boxes */}





</div>
<img 
src = "src\pic\Untitled_Artwork 1.png"
className="relative w-full h-full " />
<Footer />
</div>

    
  );
}
    
