import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation(); // Hook to get the current URL path

  // Check screen size on load and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Breakpoint for small screens
    };

    checkScreenSize(); // Run on load
    window.addEventListener("resize", checkScreenSize); // Update on resize

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
  }, []);

  // Function to determine if a button is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sticky top-0 z-50 w-full bg-[#f9d38f]">
      {isSmallScreen ? (
        // Small Screen Layout
        <div className="flex flex-col items-center gap-2 w-full bg-[#27344e] ">
          <Link
            to="/"
            className={`w-full ${
              isActive("/") ? "bg-[#d9a03f]" : "bg-[#f9d38f]"
            } hover:bg-[#d9a03f] text-[#4a381f] font-csRoger text-2xl py-4 rounded text-center`}
          >
            HOME
          </Link>
          <Link
            to="/ticket"
            className={`w-full ${
              isActive("/ticket") ? "bg-[#d9a03f]" : "bg-[#f9d38f]"
            } hover:bg-[#d9a03f] text-[#4a381f] font-csRoger text-2xl py-4 rounded text-center`}
          >
            TICKET
          </Link>
          <Link
            to="/schedule"
            className={`w-full ${
              isActive("/schedule") ? "bg-[#d9a03f]" : "bg-[#f9d38f]"
            } hover:bg-[#d9a03f] text-[#4a381f] font-csRoger text-2xl py-4 rounded text-center`}
          >
            SCHEDULE
          </Link>
          <Link
            to="/merchandise"
            className={`w-full ${
              isActive("/merchandise") ? "bg-[#d9a03f]" : "bg-[#f9d38f]"
            } hover:bg-[#d9a03f] text-[#4a381f] font-csRoger text-2xl py-4 rounded text-center`}
          >
            MERCHANDISE
          </Link>
        </div>
      ) : (
        // Large Screen Layout
        <div className="flex items-center justify-between h-[106px] w-full">
          <Link
            to="/"
            className={`flex-1 h-full ${
              isActive("/") ? "bg-[#d9a03f]" : "bg-[#f9d38f]"
            } hover:bg-[#d9a03f] text-[#4a381f] font-csRoger text-2xl flex items-center justify-center rounded-r-[18px]`}
          >
            HOME
          </Link>
          <Link
            to="/ticket"
            className={`flex-1 h-full ${
              isActive("/ticket") ? "bg-[#d9a03f]" : "bg-[#f9d38f]"
            } hover:bg-[#d9a03f] text-[#4a381f] font-csRoger text-2xl flex items-center justify-center rounded-[18px]`}
          >
            TICKET
          </Link>
          <img 
          src="https://files.hailnight.com/pic/IMG_0927.JPG"
          alt="logo"
          className="w-[205px] h-full object-cover"
          />
          <Link
            to="/schedule"
            className={`flex-1 h-full ${
              isActive("/schedule") ? "bg-[#d9a03f]" : "bg-[#f9d38f]"
            } hover:bg-[#d9a03f] text-[#4a381f] font-csRoger text-2xl flex items-center justify-center rounded-[18px]`}
          >
            SCHEDULE
          </Link>
          <Link
            to="/merchandise"
            className={`flex-1 h-full ${
              isActive("/merchandise") ? "bg-[#d9a03f]" : "bg-[#f9d38f]"
            } hover:bg-[#d9a03f] text-[#4a381f] font-csRoger text-2xl flex items-center justify-center rounded-l-[18px]`}
          >
            MERCHANDISE
          </Link>
        </div>
      )}
    </div>
  );
}
