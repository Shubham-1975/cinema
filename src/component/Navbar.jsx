import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [lang, setLang] = useState("EN");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        scrolled
          ? "fixed top-0 bg-white shadow-md text-black"
          : "absolute top-0 bg-transparent text-white"
      }`}
    >
      {/* Top Bar */}
      <div className="flex flex-wrap justify-between items-center px-4 py-2 text-sm border-b border-white/20">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start sm:items-center">
          <div className="flex items-center gap-2">
            <MdCall />
            <span>+91 8104611156</span>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail />
            <span>alliedmazdoorunion@gmail.com</span>
          </div>
        </div>

        {/* Social & Language Toggle */}
        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
          <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
          <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
          <button
            onClick={() => setLang(lang === "EN" ? "HI" : "EN")}
            className={`${
              scrolled ? "text-white bg-red-700" : "text-red-700 bg-white"
            } font-semibold px-2 py-1 rounded text-xs`}
          >
            {lang === "EN" ? "हिंदी" : "EN"}
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3">
        {/* Logo - always top-left */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-4 sm:mb-0">
          <img
            src={logo}
            alt="ACTADCO Logo"
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-4 items-center justify-center sm:justify-end text-sm font-semibold w-full sm:w-auto">
          <button
            className={`${
              scrolled
                ? "text-red-700 bg-gray-100"
                : "text-white bg-white/10 hover:bg-white/20"
            } px-3 py-1 rounded`}
          >
            Home
          </button>
          <button
            className={`${
              scrolled
                ? "text-red-700 bg-gray-100"
                : "text-white bg-white/10 hover:bg-white/20"
            } px-3 py-1 rounded`}
          >
            About Us
          </button>

          {/* Rules Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-yellow-500">
              Rules & Regulations <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-1 shadow-md rounded z-10 w-48">
              <ul className="p-2 space-y-1 text-sm">
                <li className="hover:bg-gray-100 p-1 px-3">General Rules</li>
                <li className="hover:bg-gray-100 p-1 px-3">Membership Rules</li>
              </ul>
            </div>
          </div>

          {/* Benefits Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-yellow-500">
              Benefits From Union <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-1 shadow-md rounded z-10 w-52">
              <ul className="p-2 space-y-1 text-sm">
                <li className="hover:bg-gray-100 p-1 px-3">Medical Aid</li>
                <li className="hover:bg-gray-100 p-1 px-3">Pension Plan</li>
                <li className="hover:bg-gray-100 p-1 px-3">Welfare Events</li>
              </ul>
            </div>
          </div>

          <button
            className={`${
              scrolled
                ? "text-red-700 bg-gray-100"
                : "text-white bg-white/10 hover:bg-white/20"
            } px-3 py-1 rounded`}
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
