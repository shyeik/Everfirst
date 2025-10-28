import React from "react";
import everfirstLogo from "/Everfirst.png"; // adjust as needed

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl bg-[#f3eded] shadow-lg rounded-2xl px-6 py-3 flex items-center justify-between z-20 border border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          onClick={() => navigate("/")}
          src={everfirstLogo}
          alt="Everfirst Logo"
          className="w-24 sm:w-28 md:w-36 h-auto" // ✅ responsive widths
        />
      </div>

      {/* Navigation */}
      <ul className="hidden sm:flex gap-6 text-base md:text-lg">
        <li>
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#info" className="hover:text-blue-600 transition">
            Information
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
