import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css"; // Styles for layout plugin
import Navbar from "./Navbar";
import Footer from "./footer";

export default function EventProgram() {
  const pdfFile = "/Hail Night Event Program.pdf"; // Ensure it's in 'public' folder
  const defaultLayout = defaultLayoutPlugin(); // Plugin for better layout


  return (
    <div className="bg-[#27344e] min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="top-0 flex flex-col items-center justify-center flex-grow gap-8 text-[#f3ead9]">
        <Navbar />
      </div>

      <div className="flex flex-col items-center flex-grow gap-12 text-[#f3ead9] mt-[60px] pb-8">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-csRoger text-[#fccf7f] text-center leading-relaxed">
          Event Program
        </h1>
        <a 
      href="https://drive.google.com/file/d/11zNynA7QFRGjvcs6LRhA94NTQv9arjOt/view?usp=sharing"  // Replace with your URL
        target="_blank"  // Open link in a new tab
        rel="noopener noreferrer"  // Security for opening in a new tab
>   
        <div className=" w-50% bg-[#f9d490] flex items-center justify-center gap-2.5 px-4 sm:px-[150px] py-4 relative rounded-[20px] mb-[40px]  hover:scale-110 transition-all duration-300">
        <div className="relative w-fit font-csRoger font-bold text-[#4a381f] text-[16px] sm:text-[28px] text-center tracking-[0] leading-[50px]  whitespace-nowrap underline">
          Download Event Program
          </div>
        </div>
      </a>

        {/* PDF Viewer */}
        <div className="w-[95%] sm:w-[65%] shadow-lg p-8 bg-[#27344e] rounded-[20px] ">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
            <Viewer
              fileUrl={pdfFile}
              plugins={[defaultLayout]} // Use layout and scroll mode plugins
              theme={{
                theme: "dark", // Dark mode theme
              }}
              className="bg-[#27344e]" // Background color
            />
          </Worker>
        </div>
      </div>
      

      <Footer />
    </div>
  );
}