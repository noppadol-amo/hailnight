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
    </div>
  )
}