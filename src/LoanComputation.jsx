import React, { useState } from "react";

const LoanComputation = () => {
  const [form, setForm] = useState({
    monthlyLoan: "",
    monthlyKaltas: "",
    loanTerm: "",
    loanType: "",
    age: "",
  });

  const [result, setResult] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Compute loan details
  const computeLoan = () => {
    const monthlyLoan = parseFloat(form.monthlyLoan);
    const monthlyKaltas = parseFloat(form.monthlyKaltas);
    const loanTerm = parseFloat(form.loanTerm);

    if (!monthlyLoan || !monthlyKaltas || !loanTerm) {
      alert("Please fill all required fields correctly.");
      return;
    }

    // === SAMPLE FORMULAS ===
    const principalLoan = monthlyLoan * loanTerm;
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

  return (
    <div className="min-h-screen bg-gray-50 mt-10 text-gray-800 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        {/* HEADER */}
        <header className="px-6 py-8 bg-linear-to-r bg-red-500 text-black rounded-t-2xl">
          <h1 className="text-3xl font-bold">Everfirst Loan Calculator</h1>
          <p className="text-sm opacity-90 mt-1">
            Enter your loan details below and compute your estimated take-home
            pay.
          </p>
        </header>

        {/* FORM INPUTS */}
        <main className="px-6 py-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Monthly Loan
              </label>
              <input
                type="number"
                name="monthlyLoan"
                value={form.monthlyLoan}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="₱2500"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Monthly Kaltas
              </label>
              <input
                type="number"
                name="monthlyKaltas"
                value={form.monthlyKaltas}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="₱2400"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Loan Term (months)
              </label>
              <input
                type="number"
                name="loanTerm"
                value={form.loanTerm}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="e.g. 22"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                placeholder="e.g. 35"
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-6">
            <button
              onClick={computeLoan}
              className="px-6 py-3 bg-blue-600  text-white rounded-xl hover:bg-blue-700 transition"
            >
              Compute Loan
            </button>
          </div>

          {/* RESULT SECTION */}
          {result && (
            <div className="mt-8 border-t pt-6">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">
                Computation Result
              </h2>
              <div className="grid grid-cols-2 gap-y-2 text-gray-700">
                <p>Principal Loan</p>
                <p className="text-right font-medium">
                  ₱{result.principalLoan.toLocaleString()}
                </p>

                <p className="font-bold text-green-700 text-lg mt-2">
                  Net Take Home
                </p>
                <p className="text-right font-bold text-green-700 text-lg mt-2">
                  ₱{result.netTakeHome.toLocaleString()}
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default LoanComputation;
