import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Footer from "./footer";
export default function SchedulePage() {
  return (
    <div className="bg-[#27344e] min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="top-0 flex flex-col items-center justify-center flex-grow gap-8  text-[#f3ead9] ">
              <Navbar />
      </div>
      
      {/* Schedule Page Content */}
      <div className="flex flex-col items-center flex-grow gap-12 text-[#f3ead9] mt-[60px]">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-csRoger text-[#fccf7f] text-center">
          Event Schedule
        </h1>

        <div className="flex flex-col items-center gap-10 w-full  relative ">
          
  
  {/* Event 1 */}
  <div className="flex flex-col px-4 items-center w-full">
  < img 
  src ="src\pic\Untitled_Artwork 7.png"
  className="absolute  left-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
      
      {/* Right Blue Box */}
      < img 
  src ="src\pic\Untitled_Artwork 4.png"
  className="absolute  right-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
    <div className="relative w-full max-w-[692px] h-[425px] rounded-[20px] bg-[#758fb6] flex items-top justify-center overflow-hidden">
  {/* Background Image */}
  <img 
    src="src\pic\เข้างาน.png" 
    alt="Event Background" 
    className="absolute inset-0 w-full h-full object-cover "
  />

  {/* Text */}
  
</div>


    <div className="mt-8 text-[#fccf7f] text-3xl sm:text-5xl font-csRoger">
      17.10 : เปิดประตูเข้างาน
    </div>
  </div>
  
  {/* Event 2 */}
  <div className="flex flex-col px-4 items-center w-full">
  < img 
  src ="src\pic\Untitled_Artwork 3.png"
  className="absolute  left-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
      
      {/* Right Blue Box */}
      < img 
  src ="src\pic\Untitled_Artwork 2.png"
  className="absolute  right-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
    <div className="relative w-full max-w-[692px] h-[425px] rounded-[20px] bg-[#758fb6] flex items-top justify-center overflow-hidden">
  {/* Background Image */}
  <img 
    src="src\pic\4.png" 
    alt="Event Background" 
    className="absolute inset-0 w-full h-full object-cover "
  />

  {/* Text */}
  
</div>

    <div className="mt-8 text-[#fccf7f] text-3xl sm:text-5xl font-csRoger">
      17.35 - 17.50 : SIPIStar 3rd
    </div>
  </div>

 {/* Event 3 */}
 <div className="flex flex-col px-4 items-center w-full">
  < img 
  src ="src\pic\Untitled_Artwork 3.png"
  className="absolute  left-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
      
      {/* Right Blue Box */}
      < img 
  src ="src\pic\Untitled_Artwork 2.png"
  className="absolute  right-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
    <div className="relative w-full max-w-[692px] h-[425px] rounded-[20px] bg-[#758fb6] flex items-top justify-center overflow-hidden">
  {/* Background Image */}
  <img 
    src="src\pic\5.png" 
    alt="Event Background" 
    className="absolute inset-0 w-full h-full object-cover "
  />

  {/* Text */}
  
</div>

    <div className="mt-8 text-[#fccf7f] text-3xl sm:text-5xl font-csRoger">
      17.55 - 18.10 : SIPIStar 2nd
    </div>
  </div>

{/* Event 4 */}
<div className="flex flex-col px-4 items-center w-full">
  < img 
  src ="src\pic\Untitled_Artwork 3.png"
  className="absolute  left-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
      
      {/* Right Blue Box */}
      < img 
  src ="src\pic\Untitled_Artwork 2.png"
  className="absolute  right-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
    <div className="relative w-full max-w-[692px] h-[425px] rounded-[20px] bg-[#758fb6] flex items-top justify-center overflow-hidden">
  {/* Background Image */}
  <img 
    src="src\pic\6.png" 
    alt="Event Background" 
    className="absolute inset-0 w-full h-full object-cover "
  />

  {/* Text */}
  
</div>

    <div className="mt-8 text-[#fccf7f] text-3xl sm:text-5xl font-csRoger">
      18.15 - 18.30 : SIPIStar 1st
    </div>
  </div>
  
{/* Event 4 */}
<div className="flex flex-col px-4 items-center w-full">
  < img 
  src ="src\pic\Untitled_Artwork 3.png"
  className="absolute  left-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
      
      {/* Right Blue Box */}
      < img 
  src ="src\pic\Untitled_Artwork 2.png"
  className="absolute  right-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
    <div className="relative w-full max-w-[692px] h-[425px] rounded-[20px] bg-[#758fb6] flex items-top justify-center overflow-hidden">
  {/* Background Image */}
  <img 
    src="src\pic\1.png" 
    alt="Event Background" 
    className="absolute inset-0 w-full h-full object-cover  "
  />

  {/* Text */}
  
</div>

    <div className="mt-8 text-[#fccf7f] text-3xl sm:text-5xl font-csRoger">
      19.00 - 20.00 : 1st Artist
    </div>
  </div>

{/* Event 5 */}
<div className="flex flex-col px-4 items-center w-full">
  < img 
  src ="src\pic\Untitled_Artwork 3.png"
  className="absolute  left-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
      
      {/* Right Blue Box */}
      < img 
  src ="src\pic\Untitled_Artwork 2.png"
  className="absolute  right-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
    <div className="relative w-full max-w-[692px] h-[425px] rounded-[20px] bg-[#758fb6] flex items-top justify-center overflow-hidden">
  {/* Background Image */}
  <img 
    src="src\pic\7.png" 
    alt="Event Background" 
    className="absolute inset-0 w-full h-full object-cover "
  />

  {/* Text */}
  
</div>

    <div className="mt-8 text-[#fccf7f] text-3xl sm:text-5xl font-csRoger">
      20.10 - 20.30 : Cover Dance
    </div>
  </div>

{/* Event 6 */}
<div className="flex flex-col px-4 items-center w-full">
  < img 
  src ="src\pic\Untitled_Artwork 3.png"
  className="absolute  left-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
      
      {/* Right Blue Box */}
      < img 
  src ="src\pic\Untitled_Artwork 2.png"
  className="absolute  right-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
    <div className="relative w-full max-w-[692px] h-[425px] rounded-[20px] bg-[#758fb6] flex items-top justify-center overflow-hidden">
  {/* Background Image */}
  <img 
    src="src\pic\2.png" 
    alt="Event Background" 
    className="absolute inset-0 w-full h-full object-cover  "
  />

  {/* Text */}
  
</div>

    <div className="mt-8 text-[#fccf7f] text-3xl sm:text-5xl font-csRoger">
      21.00 - 22.00 : 2nd Artist
    </div>
  </div>

  {/* Event 7 */}
<div className="flex flex-col px-4 items-center w-full">
  < img 
  src ="src\pic\Untitled_Artwork 3.png"
  className="absolute  left-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
      
      {/* Right Blue Box */}
      < img 
  src ="src\pic\Untitled_Artwork 2.png"
  className="absolute  right-[0px] w-[686px] h-[351px]  rounded-lg hidden sm:block"></img>
    <div className="relative w-full max-w-[692px] h-[425px] rounded-[20px] bg-[#758fb6] flex items-top justify-center overflow-hidden">
  {/* Background Image */}
  <img 
    src="src\pic\3.png" 
    alt="Event Background" 
    className="absolute inset-0 w-full h-full object-cover  "
  />

  {/* Text */}
  
</div>

    <div className="mt-8 text-[#fccf7f] text-3xl sm:text-5xl font-csRoger">
      22.30 - 23.30 : 3rd Artist
    </div>
  </div>
</div>

<img 
src = "src\pic\Untitled_Artwork 1.png"
className="relative w-full h-full " />



      </div>
      
      <Footer/>
    </div>
  );
}
