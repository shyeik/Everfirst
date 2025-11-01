import React, { useState } from "react";
import { HelpCircle, X } from "lucide-react";

const LoanComputation = () => {
  const [form, setForm] = useState({
    monthlyLoan: "",
    monthlyKaltas: "",
    loanTerm: "",
    age: "",
  });

  const [result, setResult] = useState(null);
  const [help, setHelp] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const computeLoan = () => {
    const monthlyLoan = parseFloat(form.monthlyLoan);
    const monthlyKaltas = parseFloat(form.monthlyKaltas);
    const loanTerm = parseFloat(form.loanTerm);

    if (!monthlyLoan || !monthlyKaltas || !loanTerm) {
      alert("Please fill all required fields correctly.");
      return;
    }

    const principalLoan = monthlyKaltas * loanTerm;
    const interest = loanTerm * 0.02 * principalLoan;
    const serviceFee = 60 * loanTerm;
    const docstamp = principalLoan * 0.0075;
    const processingFee = 290;

    const totalDeduction = serviceFee + docstamp + processingFee + interest;
    const netTakeHome = principalLoan - totalDeduction;

    setResult({
      principalLoan,
      interest,
      serviceFee,
      docstamp,
      processingFee,
      totalDeduction,
      netTakeHome,
    });
  };

  const helpText = {
    monthlyLoan:
      "Ito ang buwanang halagang hinuhulugan mo sa loan. Halimbawa, ₱2,500 bawat buwan.",
    monthlyKaltas:
      "Ito ang halagang ibinabawas buwan-buwan sa iyong pensyon o sweldo.",
    loanTerm:
      "Ito ang bilang ng buwan na babayaran mo ang loan. Halimbawa, 24 months (2 taon).",
    age: "Ito ang edad ng aplikante. Dapat pasok at hindi hihigit sa 80 years old.",
    sukli:
      "Kapag ang sukli mo ay mas mababa sa ₱100, hindi pa ito maaaring kunin. Makukuha mo lang ito kapag umabot o lumagpas na sa ₱100 nang walang butal.",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-8 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border mt-14 border-gray-100 overflow-hidden">
        {/* HEADER */}
        <header className="px-5 sm:px-8 py-6 sm:py-8 bg-red-600 text-white text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Everfirst Loan Calculator
          </h1>
          <p className="text-sm sm:text-base opacity-90 mt-1">
            Enter your loan details below and compute your estimated take-home
            pay.
          </p>
        </header>

        {/* MAIN CONTENT */}
        <main className="px-5 sm:px-8 py-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* MONTHLY LOAN */}
            <div>
              <label className="block text-gray-700 font-medium mb-1 flex items-center gap-1">
                Monthly Pension
                <HelpCircle
                  size={18}
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setHelp("monthlyLoan")}
                />
              </label>
              <input
                type="text"
                name="monthlyLoan"
                inputMode="numeric"
                value={
                  form.monthlyLoan !== ""
                    ? `₱${parseFloat(form.monthlyLoan).toLocaleString("en-PH")}`
                    : ""
                }
                onChange={(e) => {
                  // No rounding — allow exact input
                  const raw = e.target.value.replace(/[^\d]/g, "");
                  const num = raw ? parseFloat(raw) : "";

                  setForm((prev) => ({
                    ...prev,
                    monthlyLoan: num,
                  }));
                }}
                className="w-full border rounded-lg px-3 py-2 text-right"
                placeholder="₱4,555"
              />
            </div>

            {/* MONTHLY DUE */}
            <div>
              <label className="block text-gray-700 font-medium mb-1 flex items-center gap-1">
                Monthly Due
                <HelpCircle
                  size={18}
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setHelp("monthlyKaltas")}
                />
              </label>
              <input
                type="text"
                name="monthlyKaltas"
                inputMode="numeric"
                value={
                  form.monthlyKaltas !== ""
                    ? `₱${parseFloat(form.monthlyKaltas).toLocaleString(
                        "en-PH"
                      )}`
                    : ""
                }
                onChange={(e) => {
                  const raw = e.target.value.replace(/[^\d]/g, "");
                  const num = raw ? parseFloat(raw) : "";

                  // User can edit freely, but not exceed loan
                  setForm((prev) => ({
                    ...prev,
                    monthlyKaltas:
                      num > prev.monthlyLoan ? prev.monthlyLoan : num,
                  }));
                }}
                onBlur={() => {
                  setForm((prev) => {
                    let due = parseFloat(prev.monthlyKaltas) || 0;
                    if (due > 0) {
                      // round to nearest 100 only when done typing
                      due = Math.floor(due / 100) * 100;
                    }
                    if (due > prev.monthlyLoan) {
                      due = prev.monthlyLoan;
                    }
                    return { ...prev, monthlyKaltas: due };
                  });
                }}
                className="w-full border rounded-lg px-3 py-2 text-right"
                placeholder="₱2,500"
              />
            </div>

            {/* LOAN TERM */}
            <div>
              <label className="flex items-center gap-1 text-gray-700 font-medium mb-1 text-sm sm:text-base">
                Loan Term (months)
                <HelpCircle
                  size={18}
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setHelp("loanTerm")}
                />
              </label>
              <input
                type="number"
                name="loanTerm"
                value={form.loanTerm}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-3 text-right text-base sm:text-lg"
                placeholder="e.g. 22"
              />
            </div>

            {/* AGE */}
            <div>
              <label className="flex items-center gap-1 text-gray-700 font-medium mb-1 text-sm sm:text-base">
                Age
                <HelpCircle
                  size={18}
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setHelp("age")}
                />
              </label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-3 text-right text-base sm:text-lg"
                placeholder="e.g. 60"
              />
            </div>
          </div>

          {/* SUKLI (Difference) */}
          {form.monthlyLoan && form.monthlyKaltas && (
            <div className="mt-4 text-gray-700 font-medium flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
              Sukli:{" "}
              <span
                className={`font-bold ${
                  form.monthlyLoan - form.monthlyKaltas === 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                ₱
                {Math.max(
                  form.monthlyLoan - form.monthlyKaltas,
                  0
                ).toLocaleString("en-PH")}
              </span>
              <HelpCircle
                size={18}
                className="text-blue-600 cursor-pointer"
                onClick={() => setHelp("sukli")}
              />
            </div>
          )}

          {/* COMPUTE BUTTON */}
          <div className="flex justify-center">
            <button
              onClick={computeLoan}
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white text-base sm:text-lg rounded-xl hover:bg-blue-700 transition"
            >
              Compute Loan
            </button>
          </div>

          {/* RESULT SECTION */}
          {result && (
            <div className="mt-8 border-t pt-6">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-700 mb-4 text-center sm:text-left">
                Computation Result
              </h2>
              <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-sm sm:text-base">
                <p>Principal Loan</p>
                <p className="text-right font-medium">
                  ₱{result.principalLoan.toLocaleString()}
                </p>

                <p className="font-bold text-green-700 mt-2">Net Take Home</p>
                <p className="text-right font-bold text-green-700 mt-2">
                  ₱{result.netTakeHome.toLocaleString()}
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* HELP MODAL */}
      {help && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center relative">
            <button
              onClick={() => setHelp(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
            >
              <X size={18} />
            </button>
            <h3 className="text-lg font-semibold mb-2 text-blue-700">
              💡 Help
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {helpText[help]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanComputation;
