import React from "react";
import { Facebook } from "./Facebook";
import { Instagram } from "./Instagram";
import artist1 from "./artist-1.png";
import artist2 from "./artist-2.png";
import artist3 from "./artist-3.png";
import background1 from "./background-1.png";
import background2 from "./background-2.png";
import dept from "./dept.svg";
import hailNightPalmy211 from "./hail-night-palmy-21-1.png";
import hailNightPalmy212 from "./hail-night-palmy-21-2.png";
import hailNightPalmy213 from "./hail-night-palmy-21-3.png";
import hailNightPalmy2612 from "./hail-night-palmy-26-1-2.png";
import hailNightPalmy261 from "./hail-night-palmy-26-1.png";
import hailNightPalmy262 from "./hail-night-palmy-26-2.png";
import hailNightPalmy265 from "./hail-night-palmy-26-5.png";
import hailNightPalmy291 from "./hail-night-palmy-29-1.png";
import hailNightPalmy292 from "./hail-night-palmy-29-2.png";
import image1 from "./image-1.png";
import image from "./image.png";
import onlyMonday from "./only-monday.png";
import parkinson from "./parkinson.png";
import sponser3 from "./sponser-3.svg";
import sponser6 from "./sponser-6.svg";
import sponser9 from "./sponser-9.svg";
import sponser12 from "./sponser-12.svg";
import sponserM3 from "./sponser-m-3.svg";
import sponserM6 from "./sponser-m-6.svg";
import sponserM10 from "./sponser-m-10.svg";
import sponserM13 from "./sponser-m-13.svg";

export const Home = () => {
  return (
    <div className="flex flex-col min-w-[990px] max-w-[1980px] items-center gap-[var(--size-space-100)] relative bg-[#27344e]">
      <div className="flex flex-wrap h-[106px] items-center justify-center gap-[0px_0px] relative self-stretch w-full z-[9] bg-[#f9d38f]">
        <button className="all-[unset] box-border flex h-[106px] items-center justify-center gap-2.5 px-[63px] py-[39px] relative flex-1 grow bg-[#efb246] rounded-[0px_18px_18px_0px]">
          <div className="relative w-fit mt-[-1.00px] ml-[-4.38px] mr-[-4.38px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#4a381f] text-xl text-center tracking-[0] leading-[28.0px] whitespace-nowrap">
            Home
          </div>
        </button>

        <div className="flex h-[106px] items-center justify-center gap-2.5 px-[57px] py-[39px] relative flex-1 grow bg-[#f9d38f] rounded-[18px]">
          <div className="relative w-fit mt-[-1.00px] ml-[-8.88px] mr-[-8.88px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#4a381f] text-xl text-center tracking-[0] leading-[28.0px] whitespace-nowrap">
            Ticket
          </div>
        </div>

        <div className="relative w-[205px] h-[106px] bg-[#758fb6]" />

        <div className="flex h-[106px] items-center justify-center gap-2.5 px-3.5 py-[39px] relative flex-1 grow bg-[#f9d38f] rounded-[18px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#4a381f] text-xl text-center tracking-[0] leading-[28.0px] whitespace-nowrap">
            Schedule
          </div>
        </div>

        <div className="flex h-[106px] items-center justify-center gap-2.5 px-[22px] py-[39px] relative flex-1 grow bg-[#f9d38f] rounded-[18px_0px_0px_18px]">
          <div className="relative w-fit mt-[-1.00px] ml-[-21.88px] mr-[-21.88px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#4a381f] text-xl text-center tracking-[0] leading-[28.0px] whitespace-nowrap">
            Merchandise
          </div>
        </div>
      </div>

      <div className="flex min-w-[990px] items-end justify-between pt-0 pb-[100px] px-0 relative self-stretch w-full flex-[0_0_auto] z-[8]">
        <img
          className="relative w-[495px] h-[421px]"
          alt="Background"
          src={background1}
        />

        <div className="relative w-fit ml-[-292.5px] [text-shadow:0px_4px_4px_#00000040] [font-family:'CS_Roger-Double',Helvetica] font-normal text-[#fccf7f] text-7xl text-center tracking-[0] leading-[100.8px] whitespace-nowrap">
          Hail Night
        </div>

        <img
          className="relative w-[495px] h-[421px] ml-[-292.5px]"
          alt="Background"
          src={background2}
        />
      </div>

      <div className="flex items-center justify-center gap-[var(--size-space-200)] pt-0 pb-[100px] px-0 relative self-stretch w-full flex-[0_0_auto] z-[7] overflow-hidden">
        <img
          className="relative w-[49px] h-[351px]"
          alt="Hail night palmy"
          src={hailNightPalmy265}
        />

        <div className="relative w-[405px] h-[451px] bg-[#758fb6] rounded-[20px]" />

        <p className="relative w-[466px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#f3ead9] text-xl text-right tracking-[0] leading-[28.0px]">
          You will be brought back to a simpler era with delicious foods,
          captivating performances, catchy music, and many other iconic games.
          The time when people can connect in person and experience the
          nostalgic and cultural phenomena that will jog them down memory lane.
          Relive the innocence and optimism of a time when anything seemed
          possible with us at Hail Night 2024.
        </p>

        <img
          className="relative w-[46px] h-[344px]"
          alt="Hail night palmy"
          src={image}
        />

        <img
          className="w-[325px] h-[310px] top-[2724px] left-[4777px] absolute object-cover"
          alt="Hail night palmy"
          src={hailNightPalmy291}
        />
      </div>

      <div className="flex h-[713px] items-start justify-center gap-[var(--size-space-400)] pt-0 pb-[150px] px-0 relative self-stretch w-full z-[6] overflow-hidden">
        <img
          className="relative w-[594.5px] h-[268px] mb-[-1821.00px]"
          alt="Hail night palmy"
          src={hailNightPalmy2612}
        />

        <div className="inline-flex flex-col h-[361px] items-end justify-center relative flex-[0_0_auto] ml-[-0.25px]">
          <div className="relative w-[453px] mt-[-1.00px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#fccf7f] text-[58px] tracking-[0] leading-[81.2px]">
            Date&amp;Time
          </div>

          <div className="relative w-[525px] [font-family:'CS_Roger-Double',Helvetica] font-normal text-[#f3dcb3] text-7xl text-right tracking-[0] leading-[100.8px]">
            21 March
          </div>

          <div className="relative w-[392px] [font-family:'CS_Roger-Double',Helvetica] font-normal text-[#f3dcb3] text-7xl text-right tracking-[0] leading-[100.8px]">
            2025
          </div>

          <div className="relative w-[470px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#cbdbf2] text-[56px] text-right tracking-[0] leading-[78.4px]">
            17.00-23.00
          </div>
        </div>

        <div className="inline-flex flex-col h-[347px] items-start relative flex-[0_0_auto]">
          <div className="relative w-[454px] mt-[-1.00px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#fccf7f] text-[58px] tracking-[0] leading-[81.2px]">
            Location
          </div>

          <div className="relative w-[456px] mb-[-3.00px] [font-family:'CS_Roger-Double',Helvetica] font-normal text-[#c6ddff] text-[64px] tracking-[0] leading-[89.6px]">
            Prince
            <br />
            Mahidol
            <br />
            Hall
          </div>
        </div>

        <img
          className="relative w-[588px] h-[348px] mb-[-1901.00px]"
          alt="Hail night palmy"
          src={hailNightPalmy262}
        />

        <img
          className="absolute w-[428px] h-[304px] top-[380px] left-[541px] object-cover"
          alt="Image"
          src={image1}
        />
      </div>

      <div className="flex items-center justify-center gap-8 px-0 py-[100px] relative self-stretch w-full flex-[0_0_auto] z-[5] overflow-hidden">
        <img
          className="relative w-[594.5px] h-[268px] mb-[-1346.00px]"
          alt="Hail night palmy"
          src={hailNightPalmy261}
        />

        <img
          className="relative w-[296px] h-[374px] object-cover"
          alt="Artist"
          src={artist1}
        />

        <img
          className="relative w-[295px] h-[374px] object-cover"
          alt="Artist"
          src={artist2}
        />

        <img
          className="relative w-[296px] h-[374px]"
          alt="Artist"
          src={artist3}
        />

        <img
          className="absolute w-[296px] h-[98px] top-[104px] left-[19px] object-cover"
          alt="Only monday"
          src={onlyMonday}
        />

        <img
          className="absolute w-[295px] h-[106px] top-[100px] left-[347px] object-cover"
          alt="Parkinson"
          src={parkinson}
        />

        <img
          className="absolute w-[296px] h-[98px] top-[100px] left-[674px]"
          alt="Dept"
          src={dept}
        />

        <img
          className="relative w-[594.5px] h-[344.14px] mb-[-1384.07px]"
          alt="Hail night palmy"
          src={hailNightPalmy213}
        />
      </div>

      <div className="flex min-w-[990px] items-center justify-between pt-0 pb-[100px] px-0 relative self-stretch w-full flex-[0_0_auto] z-[4]">
        <img
          className="relative w-[614px] h-[390px]"
          alt="Hail night palmy"
          src={hailNightPalmy211}
        />

        <img
          className="relative w-[687px] h-[390px] ml-[-311px]"
          alt="Hail night palmy"
          src={hailNightPalmy212}
        />

        <img
          className="w-[350px] h-[334px] top-[78px] left-80 absolute object-cover"
          alt="Hail night palmy"
          src={hailNightPalmy292}
        />
      </div>

      <div className="flex w-[313px] items-center justify-center gap-2.5 pt-0 pb-[50px] px-0 relative flex-[0_0_auto] z-[3]">
        <div className="relative flex-1 mt-[-1.00px] [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#f9d38f] text-[29px] text-center tracking-[0] leading-[40.6px]">
          Sponsored by
        </div>
      </div>

      <div className="inline-flex items-center justify-center gap-16 pt-0 pb-[50px] px-0 relative flex-[0_0_auto] z-[2]">
        <div className="relative w-32 h-[119px] bg-[#758fb6] rounded-[20px]" />

        <div className="relative w-32 h-[119px] bg-[#758fb6] rounded-[20px]" />

        <img className="relative w-32 h-[119px]" alt="Sponser" src={sponser3} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-[48px_64px] pt-0 pb-[50px] px-[50px] relative self-stretch w-full flex-[0_0_auto] z-[1]">
        <div className="relative w-[87px] h-[81px] bg-[#758fb6] rounded-[20px]" />

        <div className="relative w-[86px] h-[81px] bg-[#758fb6] rounded-[20px]" />

        <img
          className="relative w-[87px] h-[81px]"
          alt="Sponser"
          src={sponser6}
        />

        <div className="relative w-[87px] h-[81px] bg-[#758fb6] rounded-[20px]" />

        <div className="relative w-[86px] h-[81px] bg-[#758fb6] rounded-[20px]" />

        <img
          className="relative w-[87px] h-[81px]"
          alt="Sponser"
          src={sponser9}
        />

        <div className="relative w-[87px] h-[81px] bg-[#758fb6] rounded-[20px]" />

        <div className="relative w-[86px] h-[81px] bg-[#758fb6] rounded-[20px]" />

        <img
          className="relative w-[87px] h-[81px]"
          alt="Sponser"
          src={sponser12}
        />
      </div>

      <div className="relative self-stretch w-full h-[293px] z-0 bg-[#f9d38f] rounded-[3px]">
        <div className="h-[162px] top-[23px] left-[258px] absolute w-[734px]">
          <div className="h-[161px] top-px left-0 absolute w-[734px]">
            <div className="absolute w-[226px] h-[158px] top-0 left-[508px]">
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

            <div className="absolute w-[551px] h-[66px] top-[95px] left-0">
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
          </div>

          <Instagram className="!absolute !w-[29px] !h-[29px] !top-[41px] !left-0" />
          <Facebook className="!absolute !w-[29px] !h-[29px] !top-[39px] !left-10" />
          <div className="absolute w-[286px] top-0 left-0 [font-family:'CS_Roger-Inner',Helvetica] font-normal text-[#4a381f] text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
            Hail Night 2025
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

        <div className="absolute w-[152px] h-[108px] top-6 left-8 bg-[#758fb6]" />
      </div>
    </div>
  );
};
