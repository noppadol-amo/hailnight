import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f9d38f] rounded-[3px] py-8 px-4 w-full">
      <div className="mx-auto w-full">
        {/* Header and Blue Box Section - Same row */}
        <div className="flex items-center justify-between mb-8">
          {/* Blue Box (on the left) */}
          <img 
          src = "\pic\IMG_0927.JPG"
          className="w-[152px] h-[108px] " />

          {/* Header Text */}
          <div className="text-2xl md:text-3xl font-csRoger lg:text-4xl text-[#4a381f] font-bold mb-2 ml-2">
            Hail Night 2025
          </div>

          {/* Social Media Icons */}
          <button 
          onClick={() => window.open('https://www.instagram.com/hailnight_official/','_blank')} className="flex gap-4">
            <FaInstagram size={29} className="text-[#4a381f]" />
            
          </button>
        </div>
        </div>
        

        <div className="flex flex-row justify-between items-start mb-8">
        {/* Left Side (Sponsored by and sponsor circles) */}
        <div className="flex flex-col items-start">
            
            <div className="text-[#4a381f] text-sm md:text-base lg:text-lg font-bold mb-4">
              Sponsored by
            </div>

            {/* Sponsor Circles */}
            <div className="flex flex-wrap gap-4">
            <img
            src ="\sponser\uniloft.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\sponser\superrich 2.jpg"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\sponser\สมาคมศิษย์เก่าศิริราช.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\sponser\วันเดย์ติวเตอร์.jpg"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\sponser\โกกิ.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\sponser\U72_โลโก้.jpg"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\sponser\รพ.ปิยะเวท.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\sponser\บัณฑิต.jpg"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\sponser\figure.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\sponser\Beef35.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\sponser\The enter.JPG"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            
            </div>
          </div>
          <div className="flex flex-col justify-center w-fit gap-4 text-right">
            <a
              href="https://docs.google.com/document/d/109HOyWkWIYzbOG78jOFrZpnipXS1ZN4XPImqu0B3Whk/edit?usp=sharing"
              target="_blank"
              className="text-[#4a381f] text-xs md:text-sm lg:text-base underline "
            >
              PDPA
            </a>
            <a
              href=" https://docs.google.com/document/d/1v2jUoWQ1TyIeckGJn5WQ34UyH-PeVMJKuuAePe_77ZU/edit?usp=sharing"
              target="_blank"
              className="text-[#4a381f] text-xs md:text-sm lg:text-base underline"
            >
              Privacy Policy
            </a>
            <a
              href="https://docs.google.com/document/d/1Z8wB3bg8pm5J0ZOqF0mr2nP1gtyMYjmhHMgONMPJBTo/edit?usp=sharing"
              target="_blank"
              className="text-[#4a381f] text-xs md:text-sm lg:text-base underline"
            >
              Refund Policy
            </a>
            <a
              href="https://docs.google.com/document/d/155Oxg4RxKfUk4Oo5RxSLYit8sLcFJMaRkJ83esR8-Iw/edit?usp=sharing"
              target="_blank"
              className="text-[#4a381f] text-xs md:text-sm lg:text-base underline"
            >
              Terms and Conditions
            </a>
          </div>
          </div>

        {/* Links, Sponsors, and "Sponsored by" - Row layout */}

        <div className="flex flex-row justify-between items-start mb-8">

        <div className="text-left text-[#4a381f] text-base md:text-lg lg:text-xl mb-8">
          <p>
            คณะกรรมการนักศึกษาแพทย์รุ่น 135 คณะแพทยศาสตร์ศิริราชพยาบาล มหาวิทยาลัยมหิดล
            <br />
            2 ถนนวังหลัง แขวงศิริราช เขตบางกอกน้อย กรุงเทพฯ 10700
            <br />
            Email:{" "}
            <a
              href="mailto:contact@hailnight.com"
              className="underline"
            >
              contact@hailnight.com
            </a>
          </p>
        </div>
        

        

          {/* Left Side (Sponsored by and sponsor circles) */}
          
          {/* Links - Each on a separate row, aligned to the right */}
          
        </div>

        {/* Contact Info - Left aligned */}
      
    </footer>
  );
}
