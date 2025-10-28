import React from "react";
import everfirstLogo from "/Everfirst.png";
import everfam from "/Fams.png";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HEADER / NAVBAR */}

      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 mt-10 from-blue-50 to-white"
      >
        {/* LEFT SIDE - TEXT */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl text-red-600 font-semibold">
            Everfirst Cubao Branch
          </h1>
          <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
            Everfirst offers{" "}
            <span className="font-semibold text-blue-700">
              SSS and GSIS loan assistance
            </span>{" "}
            for members and pensioners. Whether you need a 13th month loan or a
            pension loan — we make it simple, fast, and worry-free. Our friendly
            staff will guide you every step of the way to ensure a smooth
            application process.
          </p>
          <button
            onClick={() => navigate("/requirements")}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-red-700 transition"
          >
            Requirements
          </button>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={everfam} // or replace with your image path
            alt="Family Image"
            className="w-120 md:w-screen bg-amber-300 rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center bg-white border-t text-gray-500">
        © {new Date().getFullYear()} Everfirst. All rights reserved.
      </footer>
    </div>
  );
}
