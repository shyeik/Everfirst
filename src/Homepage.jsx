import React from "react";
import everfirstLogo from "/Everfirst.png";
import everfam from "/Fams.png";
import { useNavigate } from "react-router-dom";
import Information from "./Information";
import ContactPage from "./ContactPage";

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* HEADER / NAVBAR */}

      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-2 md:px-20 py-20 mt-10 from-blue-50 to-white"
      >
        {/* LEFT SIDE - TEXT */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl text-red-600 font-extrabold tracking-tight">
            Everfirst Cubao Branch
          </h1>

          <p className="text-gray-700 text-xl leading-relaxed max-w-md mx-auto md:mx-0">
            Everfirst offers{" "}
            <span className="font-semibold text-blue-700">
              SSS and GSIS Loan Assistance
            </span>{" "}
            for members and pensioners. We make every process simple, fast, and
            worry-free.
          </p>

          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            <span className="text-red-700 font-bold block text-xl mb-2">
              Need mo ba pambayad sa bills, pampuhunan, o panggastos?
            </span>
            Dito ka na sa{" "}
            <span className="font-semibold text-blue-700">Everfirst!</span> Our
            friendly staff will guide you every step of the way.
          </p>

          <p className="text-gray-600 text-base italic">
            The Cubao Branch is one of{" "}
            <span className="font-semibold text-gray-800">
              127 Everfirst branches
            </span>{" "}
            proudly serving clients accross Luzon.
          </p>

          <button
            onClick={() => navigate("/requirements")}
            className="mt-6 px-8 py-4 bg-linear-to-r from-red-600 to-red-500 text-white text-lg rounded-2xl shadow hover:shadow-lg hover:from-red-700 hover:to-red-600 transition"
          >
            View Requirements
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

      <Information />
      <ContactPage />

      {/* FOOTER */}
      <footer className="py-6 text-center bg-white border-t text-gray-500">
        © {new Date().getFullYear()} Everfirst. All rights reserved.
      </footer>
    </div>
  );
}
