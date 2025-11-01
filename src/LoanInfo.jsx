import React from "react";
import {
  Landmark,
  HandCoins,
  Wallet,
  HeartPulse,
  Accessibility,
  ShieldCheck,
} from "lucide-react";

const LoanInfo = () => {
  const loanTypes = [
    {
      icon: <HandCoins className="w-8 h-8 text-red-600" />,
      title: "SD Loan (Survivor & Death)",
      desc: "Para sa mga benepisyaryo ng pensioner na pumanaw. Madaling ma-avail upang makatulong sa mga gastusin o pangangailangan ng pamilya.",
    },
    {
      icon: <Landmark className="w-8 h-8 text-red-600" />,
      title: "RT Loan (Retirement)",
      desc: "Para sa mga retiradong pensioners na gustong mag-loan gamit ang kanilang buwanang pension. Mabilis, magaan, at may flexible terms.",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-red-600" />,
      title: "SP Loan (Partial Disability)",
      desc: "Para sa mga pensioners na may bahagyang kapansanan. Layunin nitong makatulong sa gamutan o pang-araw-araw na pangangailangan.",
    },
    {
      icon: <Accessibility className="w-8 h-8 text-red-600" />,
      title: "ST Loan (Total Disability)",
      desc: "Para sa mga pensioners na may total disability. May espesyal na terms at tulong upang maging magaan ang proseso at pagbabayad.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff8f8] py-16 px-6 md:px-12 text-gray-800">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-14 space-y-10 border border-red-100">
        {/* HEADER */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-3">
            Loan Information para sa Pensioners
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Madaling loan program para sa ating mga SSS at GSIS pensioners —
            maaasahan, mabilis, at may malasakit.
          </p>
        </header>

        {/* SSS SECTION */}
        <section className="bg-red-50 border-l-8 border-red-400 rounded-xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <Wallet className="w-10 h-10 text-red-600 shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-red-600 mb-2">
                SSS Pensioner Loan
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Ang{" "}
                <span className="font-semibold text-red-700">
                  SSS Pensioner Loan
                </span>{" "}
                ay para sa mga retiradong SSS members na gustong magkaroon ng
                karagdagang tulong pinansyal para sa personal, medikal, o
                pang-araw-araw na gastusin.
              </p>
            </div>
          </div>
        </section>

        {/* GSIS SECTION */}
        <section className="bg-red-50 border-l-8 border-red-400 rounded-xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <Landmark className="w-10 h-10 text-red-600 shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-red-600 mb-2">
                GSIS Pensioner Loan
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Ang{" "}
                <span className="font-semibold text-red-700">
                  GSIS Pensioner Loan
                </span>{" "}
                ay para sa mga retiradong empleyado ng gobyerno. Maaaring
                gamitin para sa gamot, bahay, o pangkabuhayan — may mababang
                interest at diretsong kaltas sa pension.
              </p>
            </div>
          </div>
        </section>

        {/* TYPES OF LOANS */}
        <section>
          <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
            Mga Uri ng Pension na Inaalok ng Everfirst
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {loanTypes.map((loan, i) => (
              <div
                key={i}
                className="bg-[#fff5f5] border border-red-100 rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition"
              >
                <div>{loan.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-red-700 mb-1">
                    {loan.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {loan.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER NOTE */}
        <footer className="text-center bg-red-600 text-white py-6 rounded-2xl text-lg mt-10">
          <p>
            ❤️ <span className="font-semibold">Everfirst Cubao</span> — 16 taon
            nang tumutulong sa ating mga pensioners.
            <br /> Maaasahan. Madali. Para sa inyo, mga haligi ng tahanan.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LoanInfo;
