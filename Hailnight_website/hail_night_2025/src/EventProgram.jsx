import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { scrollModePlugin } from "@react-pdf-viewer/scroll-mode"; // Import the scroll mode plugin
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css"; // Styles for layout plugin
import Navbar from "./Navbar";
import Footer from "./footer";

export default function EventProgram() {
  const pdfFile = "/EventProgram.pdf"; // Ensure it's in 'public' folder
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

        {/* PDF Viewer */}
        <div className="w-[95%] sm:w-[65%] shadow-lg p-8 bg-[#27344e] rounded-lg ">
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