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
          src = "https://files.hailnight.com/pic/IMG_0927.JPG"
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
        <div className="flex flex-col w-auto items-start">
            
            <div className="text-[#4a381f] text-sm md:text-base lg:text-lg font-bold mb-4">
              Sponsored by
            </div>

            {/* Sponsor Circles */}
            <div className="flex flex-wrap w-[60%] gap-4">
            <img
            src ="https://files.hailnight.com/public/sponser/uniloft.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/superrich%202.jpg"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/loreal-1.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/CP%20consumer.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/Logo%20Major%20Cineplex%20.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%84%E0%B8%A1%E0%B8%A8%E0%B8%B4%E0%B8%A9%E0%B8%A2%E0%B9%8C%E0%B9%80%E0%B8%81%E0%B9%88%E0%B8%B2%E0%B8%A8%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%A3%E0%B8%B2%E0%B8%8A.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B8%A2%E0%B9%8C%E0%B8%95%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C.jpg"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/%E0%B9%82%E0%B8%81%E0%B8%81%E0%B8%B4.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/U72_โลโก้.jpg"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\Farmhouse.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/%E0%B8%A3%E0%B8%9E.%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%98%E0%B8%99.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/%E0%B8%9B%E0%B8%B8%E0%B9%89%E0%B8%A1%E0%B8%9B%E0%B8%B8%E0%B9%89%E0%B8%A2%20ver2%20_%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C_.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%AA%E0%B8%94%E0%B8%98%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5.JPG"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/%E0%B8%A3%E0%B8%9E.%E0%B8%9B%E0%B8%B4%E0%B8%A2%E0%B8%B0%E0%B9%80%E0%B8%A7%E0%B8%97.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/%E0%B8%9A%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B8%B4%E0%B8%95.jpg"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/The%20best%20plus.JPG"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            
            <img
            src ="https://files.hailnight.com/public/sponser/figure.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/Beef35.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/The%20enter.JPG"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%20rent%20sheep.png"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/%E0%B8%AA%E0%B8%B8%E0%B8%84%E0%B8%99%E0%B8%98%E0%B8%B2_retouched.JPG"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="https://files.hailnight.com/public/sponser/D%E2%80%99ORO%20ver2.jpg"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\Seleco.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\rainflower Logo.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\บริษัท สยามยูนิทูลส์ จำกัด.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\Logo บริษัท PRO-toys.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\บริษัท คอนเน็คท์ แฮปปี้เนส จำกัด.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\Lactasoy Logo.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\บริษัท บี.เอส.แอนด์ เอฟ สแตนเลส จำกัด.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\เบทาโกร.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\บริษัท เบลนด์เทค จำกัด.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\บริษัท วีเค เดคคอร์เรชั่น.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\ThaiGimmic.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
          <img
            src ="\new sponser\Codec Logo.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\บริษัท ปังปอนด์ ขนมเปี๊ยะบางกรวย จำกัด.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\คลินิกเวชกรรมใกล้ฉัน.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\บริษัท เจริญกิจจงเสถียร จำกัด.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\บริษัท ปฐวิน จำกัด (มหาชน).webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\โก๋แก่.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\อบทะเล.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\บริษัท เคลฟเวอร์กู๊ดส์ จำกัด.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\บริษัท ปีโป้ลาร์ฟิเชี่ยนส์ จำกัด.webp"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full"/>
            <img
            src ="\new sponser\Ais.png"
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
