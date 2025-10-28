import React from "react";

const LoanRequirement = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-10 text-gray-800 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* HEADER */}
        <header className="px-6 py-8 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-t-2xl">
          <h1 className="text-3xl font-bold">Everfirst Loan Requirements</h1>
          <p className="text-sm opacity-90 mt-1">
            Please prepare the following documents before applying.
          </p>
        </header>

        {/* MAIN CONTENT */}
        <main className="px-6 py-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-blue-700 mb-4">
              Basic Requirements
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>LATEST 3 MONTHS BANK STATEMENT</li>
              <li>ATM or PASSBOOK</li>
              <li>2-3 VALID IDs</li>
              <li>2×2 PICTURE (2 pieces)</li>
            </ul>
          </section>

          <section className="bg-yellow-50 border-l-4 border-yellow-300 p-4 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> All documents must be clear and updated.
              Bring originals during verification. Additional documents may be
              required depending on loan type (e.g., SSS-SP, GSIS-RT, SSS-SD).
            </p>
          </section>

          <section className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              Need help completing your requirements? Visit any Everfirst branch
              or contact our support.
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LoanRequirement;
