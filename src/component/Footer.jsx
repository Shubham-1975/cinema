import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 sm:px-12 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* ACTADCO Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">ACTADCO</h2>
          <p className="text-sm leading-relaxed">
            ACTADCO Tower, 5th floor, Next to Kokilaben Dhirubhai Ambani
            Hospital Gate No - 4, Four Bunglow, Andheri West, Mumbai - 400 053.
          </p>
          <p className="mt-3 text-sm">
            📞+91 8104611156
            <br />
            <div className="flex items-center gap-2">
              <MdEmail />
              <span>alliedmazdoorunion@gmail.com</span>
            </div>
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">
            Important Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-300">
                Empanel List
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Do's & Dont's
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Constitution
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Bye-Laws
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Refund & Cancellation Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                NCPCR Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Minutes of Meeting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Accounts
              </a>
            </li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">
            Let's Connect
          </h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 text-xl"
            >
              <FaYoutube />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ACTADCO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
