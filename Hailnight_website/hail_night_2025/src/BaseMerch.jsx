import React from "react";
import { Link } from "react-router-dom";
import { Facebook } from "./Facebook";
import { Instagram } from "./Instagram";
import hailNightPalmy212 from "./hail-night-palmy-21-2.png";
import hailNightPalmy251 from "./hail-night-palmy-25-1.png";
import sponserM3 from "./sponser-m-3.svg";
import sponserM6 from "./sponser-m-6.svg";
import sponserM10 from "./sponser-m-10.svg";
import sponserM13 from "./sponser-m-13.svg";

export const Merchandise = () => {
  return (
    <div className="flex flex-col min-w-[990px] max-w-[1980px] h-[1701px] items-center justify-between relative bg-[#27344e] overflow-hidden">
      <div className="flex flex-wrap h-[106px] items-center justify-center gap-[0px_0px] relative self-stretch w-full bg-[#f9d38f]">
        <button className="all-[unset] box-border flex h-[106px] items-center justify-center gap-2.5 px-[63px] py-[39px] relative flex-1 grow bg-[#f9d38f] rounded-[0px_18px_18px_0px]">
          <div className="w-fit mt-[-1.00px] [font-family:'CS_Roger-Inner',Helvetica] text-[#4a381f] text-xl leading-[28.0px] whitespace-nowrap relative font-normal text-center tracking-[0]">
            Home
          </div>
        </button>

        <div className="flex h-[106px] items-center justify-center gap-2.5 px-[57px] py-[39px] relative flex-1 grow bg-[#f9d38f] rounded-[18px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#4a381f] text-xl text-center tracking-[0] leading-[28.0px] whitespace-nowrap">
            Ticket
          </div>
        </div>

        <div className="relative w-[205px] h-[106px] bg-[#758fb6]" />

        <div className="flex h-[106px] items-center justify-center gap-2.5 px-3.5 py-[39px] relative flex-1 grow bg-[#f9d38f] rounded-[18px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#4a381f] text-xl text-center tracking-[0] leading-[28.0px] whitespace-nowrap">
            Schedule
          </div>
        </div>

        <Link
          className="flex h-[106px] items-center justify-center gap-2.5 px-[22px] py-[39px] relative flex-1 grow bg-[#efb347] rounded-[18px_0px_0px_18px]"
          to="/merchandise"
        >
          <div className="relative w-fit mt-[-0.50px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#4a381f] text-[19px] text-center tracking-[0] leading-[26.6px] whitespace-nowrap">
            Merchandise
          </div>
        </Link>
      </div>

      <div className="inline-flex items-center justify-center gap-[33px] relative flex-[0_0_auto]">
        <div className="flex w-[428.37px] h-[356px] items-center justify-center gap-2.5 px-[116px] py-[103px] relative bg-[#758fb6] rounded-[20px]">
          <div className="relative w-[195.14px] [font-family:'CS_Roger-Double',Helvetica] font-normal text-[#f3ead9] text-[29px] text-center tracking-[0] leading-[40.6px]">
            Shirt
          </div>
        </div>

        <div className="flex w-[428.37px] h-[356px] items-center justify-center gap-2.5 px-[116px] py-[103px] relative bg-[#758fb6] rounded-[20px]">
          <div className="relative w-[195.14px] [font-family:'CS_Roger-Double',Helvetica] font-normal text-[#f3ead9] text-[29px] text-center tracking-[0] leading-[40.6px]">
            Size
          </div>
        </div>
      </div>

      <div className="absolute w-[2156px] h-[929px] top-[479px] left-2">
        <div className="relative w-[1972px] h-[929px]">
          <img
            className="absolute w-[1439px] h-[344px] top-[512px] left-[533px]"
            alt="Hail night palmy"
            src={hailNightPalmy212}
          />

          <img
            className="absolute w-[1972px] h-[929px] top-0 left-0 object-cover"
            alt="Hail night palmy"
            src={hailNightPalmy251}
          />
        </div>
      </div>

      <div className="flex w-[856.73px] items-center justify-center gap-[33px] relative flex-[0_0_auto]">
        <div className="h-[355px] ml-[-16.50px] bg-[#758fb6] flex w-[428.37px] items-center justify-center gap-2.5 px-[116px] py-[107px] relative rounded-[20px]">
          <div className="w-[195.14px] [font-family:'CS_Roger-Double',Helvetica] text-[#f3ead9] text-[29px] leading-[40.6px] relative font-normal text-center tracking-[0]">
            Jersey
          </div>
        </div>

        <div className="flex w-[428.37px] h-[355px] items-center justify-center gap-2.5 px-[116px] py-[107px] relative mr-[-16.50px] bg-[#758fb6] rounded-[20px]">
          <div className="relative w-[195.14px] [font-family:'CS_Roger-Double',Helvetica] font-normal text-[#f3ead9] text-[29px] text-center tracking-[0] leading-[40.6px]">
            Size
          </div>
        </div>
      </div>

      <div className="h-[111px] bg-[#f9d490] flex w-[428.37px] items-center justify-center gap-2.5 px-[116px] py-[107px] relative rounded-[20px]">
        <div className="relative w-fit mt-[-73.00px] mb-[-71.00px] ml-[-11.82px] mr-[-11.82px] [font-family:'CS_Roger-Double',Helvetica] font-normal text-[#4a381f] text-[29px] text-center tracking-[0] leading-[40.6px] underline whitespace-nowrap">
          Link tree
        </div>
      </div>

      <div className="relative self-stretch w-full h-[293px] bg-[#f9d38f] rounded-[3px]">
        <div className="absolute w-[226px] h-[158px] top-6 left-[1756px]">
          <div className="absolute w-[105px] top-0 left-[111px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#4a381f] text-xs text-right tracking-[0] leading-[16.8px]">
            Support
          </div>

          <div className="absolute w-[146px] top-[31px] left-[70px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#4a381f] text-xs text-right tracking-[0] leading-[16.8px]">
            Privacy Policy
          </div>

          <div className="absolute w-[146px] top-[63px] left-[70px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#4a381f] text-xs text-right tracking-[0] leading-[16.8px]">
            Refund Policy
          </div>

          <div className="absolute w-[216px] top-[94px] left-0 [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#4a381f] text-xs text-right tracking-[0] leading-[16.8px]">
            Terms and Conditions
          </div>

          <div className="absolute w-[194px] top-[126px] left-[22px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#4a381f] text-xs text-right tracking-[0] leading-[16.8px]">
            Contact Us
          </div>
        </div>

        <p className="absolute w-[728px] top-[201px] left-[262px] [font-family:'Milonga-Regular',Helvetica] font-normal text-[#4a381f] text-base tracking-[0] leading-[22.4px]">
          <span className="[font-family:'Milonga-Regular',Helvetica] font-normal text-[#4a381f] text-base tracking-[0] leading-[22.4px]">
            คณะกรรมการนกศกษาแพทยรน 135 คณะแพทยศาสตรศรราชพยาบาล มหาวทยาลยมหดล
            <br />2 ถนนวงหลง แขวงศรราช เขตบางกอกนอย กรงเทพฯ 10700
            <br />
            Email:{" "}
          </span>

          <a
            href="mailto:contact@hailnight.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="underline">contact@hailnight.com</span>
          </a>
        </p>

        <Instagram className="!absolute !w-[29px] !h-[29px] !top-16 !left-[258px]" />
        <Facebook className="!absolute !w-[29px] !h-[29px] !top-[62px] !left-[298px]" />
        <div className="absolute w-[551px] h-[66px] top-[119px] left-[258px]">
          <div className="w-10 left-0 bg-[#758fb6] rounded-[20px] absolute h-[38px] top-7" />

          <div className="w-10 left-[46px] bg-[#758fb6] rounded-[20px] absolute h-[38px] top-7" />

          <img
            className="w-10 left-[92px] absolute h-[38px] top-7"
            alt="Sponser m"
            src={sponserM3}
          />

          <div className="w-[41px] left-[138px] bg-[#758fb6] rounded-[20px] absolute h-[38px] top-7" />

          <div className="w-10 left-[185px] bg-[#758fb6] rounded-[20px] absolute h-[38px] top-7" />

          <img
            className="w-10 left-[231px] absolute h-[38px] top-7"
            alt="Sponser m"
            src={sponserM6}
          />

          <div className="w-10 left-[278px] bg-[#758fb6] rounded-[20px] absolute h-[38px] top-7" />

          <div className="w-[39px] left-[324px] bg-[#758fb6] rounded-[20px] absolute h-[38px] top-7" />

          <img
            className="w-10 left-[370px] absolute h-[38px] top-7"
            alt="Sponser m"
            src={sponserM10}
          />

          <div className="w-10 left-[416px] bg-[#758fb6] rounded-[20px] absolute h-[38px] top-7" />

          <div className="w-[39px] left-[463px] bg-[#758fb6] rounded-[20px] absolute h-[38px] top-7" />

          <img
            className="w-[41px] left-[508px] absolute h-[38px] top-7"
            alt="Sponser m"
            src={sponserM13}
          />

          <div className="absolute w-[172px] top-0 left-1 [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#4a381f] text-[14.4px] tracking-[0] leading-[20.2px]">
            Sponsored by
          </div>
        </div>

        <div className="absolute w-[286px] top-[23px] left-[258px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#4a381f] text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
          Hail Night 2025
        </div>

        <div className="absolute w-[152px] h-[108px] top-6 left-8 bg-[#758fb6]" />
      </div>
    </div>
  );
};
