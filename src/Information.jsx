import React from "react";
import { User, User2 } from "lucide-react";
import teamPhoto from "/fam4.png"; // 🖼️ replace with your actual image path

const BranchTeam = () => {
  const team = [
    { name: "Jake Derilo", role: "Loan Processor", gender: "male" },

    { name: "John Lopez", role: "Rider", gender: "male" },
    { name: "Rose Alvarez", role: "Loan Consultant", gender: "female" },
    { name: "Miracle Helbolario", role: "Branch Head", gender: "female" },
    { name: "Mariel Pedlino", role: "Loan Processor", gender: "female" },
  ];

  return (
    <section className="py-16 bg-red-100 rounded-2xl shadow-inner mt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-10 px-6">
        {/* LEFT SIDE - IMAGE */}

        {/* RIGHT SIDE - TEAM INFO */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            Meet Our Everfirst Cubao Team
          </h2>
          <p className="max-w-2xl text-gray-600 mb-10 leading-relaxed">
            Our team is here to make your loan experience smooth and worry-free.{" "}
            <br />
            <span className="font-semibold text-gray-700">
              Sa higit 18 taon na karanasan ng aming staff, maaasahan mong bawat
              kliyente ay pinaglilingkuran namin nang may malasakit at tiwala.
            </span>
          </p>

          <div className="flex flex-col items-center space-y-8">
            {/* --- First row: 2 centered columns --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {team.slice(0, 2).map((member, index) => {
                const Icon = member.gender === "female" ? User2 : User;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-5 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shadow-inner">
                        <Icon
                          className={`w-8 h-8 ${
                            member.gender === "female"
                              ? "text-pink-500"
                              : "text-blue-500"
                          }`}
                        />
                      </div>
                    </div>
                    <h3 className="font-semibold text-base">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                );
              })}
            </div>

            {/* --- Second row: 3 columns --- */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {team.slice(2).map((member, index) => {
                const Icon = member.gender === "female" ? User2 : User;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-5 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shadow-inner">
                        <Icon
                          className={`w-8 h-8 ${
                            member.gender === "female"
                              ? "text-pink-500"
                              : "text-blue-500"
                          }`}
                        />
                      </div>
                    </div>
                    <h3 className="font-semibold text-base">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={teamPhoto}
            alt="Everfirst Cubao Team"
            className="rounded-2xl bg-amber-300 shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BranchTeam;
