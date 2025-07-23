import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdEmail, MdCall } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaYoutube,
} from "react-icons/fa";
import { ChevronDown, X } from "lucide-react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [lang, setLang] = useState("EN");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      {/* Top bar */}
      <div className="flex justify-between items-center px-4 py-2 text-sm border-b border-white/20">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          <div className="flex items-center gap-2">
            <MdCall />
            <span>+91 8104611156</span>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail />
            <span>alliedmazdoorunion@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:alliedmazdoorunion@gmail.com"
            className="hover:text-yellow-500"
            aria-label="Email"
          >
            <MdEmail />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="hover:text-yellow-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-yellow-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-yellow-500" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube className="hover:text-yellow-500" />
          </a>
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

      {/* Main nav */}
      <div className="flex justify-between items-center px-4 py-3 relative">
        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Logo on Right */}
        <div className="flex justify-end w-full sm:w-auto">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 object-cover rounded-full"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-6 text-sm font-semibold absolute sm:static left-0 top-full sm:top-auto sm:left-auto sm:mt-0 mt-4 sm:flex-row flex-col bg-white sm:bg-transparent text-black sm:text-inherit p-4 sm:p-0 rounded-md shadow-md sm:shadow-none z-40">
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-500">
            About Us
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-yellow-500">
              Rules & Regulations <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-1 shadow-md rounded w-48 z-10">
              <ul className="p-2 space-y-1 text-sm">
                <li>
                  <Link
                    to="/rules/general"
                    className="hover:bg-gray-100 p-1 px-3 block"
                  >
                    General Rules
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rules/membership"
                    className="hover:bg-gray-100 p-1 px-3 block"
                  >
                    Membership Rules
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-yellow-500">
              Benefits From Union <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-1 shadow-md rounded w-52 z-10">
              <ul className="p-2 space-y-1 text-sm">
                <li>
                  <Link
                    to="/benefits/medical-aid"
                    className="hover:bg-gray-100 p-1 px-3 block"
                  >
                    Medical Aid
                  </Link>
                </li>
                <li>
                  <Link
                    to="/benefits/pension-plan"
                    className="hover:bg-gray-100 p-1 px-3 block"
                  >
                    Pension Plan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/benefits/welfare-events"
                    className="hover:bg-gray-100 p-1 px-3 block"
                  >
                    Welfare Events
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link to="/contact" className="hover:text-yellow-500">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black/80 text-white z-50 flex flex-col items-start px-6 py-4 shadow-md sm:hidden gap-3 mt-8">
            <Link
              to="/"
              className="py-3 rounded-2xl hover:bg-[grey] text-yellow-300  text-xl border-none bg-[#8b8888] w-full px-5"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-3 rounded-2xl hover:bg-[grey] text-yellow-300  text-xl border-none bg-[#8b8888] w-full px-5"
            >
              About Us
            </Link>
            <Link
              to="/rules/general"
              className="py-3 rounded-2xl hover:bg-[grey] text-yellow-300  text-xl border-none bg-[#8b8888] w-full px-5"
            >
              General Rules
            </Link>
            <Link
              to="/rules/membership"
              className="py-3 rounded-2xl hover:bg-[grey] text-yellow-300  text-xl border-none bg-[#8b8888] w-full px-5"
            >
              Membership Rules
            </Link>
            <Link
              to="/benefits/medical-aid"
              className="py-3 rounded-2xl hover:bg-[grey] text-yellow-300  text-xl border-none bg-[#8b8888] w-full px-5"
            >
              Medical Aid
            </Link>
            <Link
              to="/benefits/pension-plan"
              className="py-3 rounded-2xl hover:bg-[grey] text-yellow-300  text-xl border-none bg-[#8b8888] w-full px-5"
            >
              Pension Plan
            </Link>
            <Link
              to="/benefits/welfare-events"
              className="py-3 rounded-2xl hover:bg-[grey] text-yellow-300  text-xl border-none bg-[#8b8888] w-full px-5"
            >
              Welfare Events
            </Link>
            <Link
              to="/contact"
              className="py-3 rounded-2xl hover:bg-[grey] text-yellow-300  text-xl border-none bg-[#8b8888] w-full px-5"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
