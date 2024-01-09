import React from "react";

function WelcomeBanner() {
  return (
    <div className="relative bg-indigo-500 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-100 font-bold mb-1">
          We are all crypto-natives. Today or tomorrow.
        </h1>
        <p className="text-indigo-200">
          Flint is the home for crypto-natives to grow their wealth stablecoins,
          envisioning itself to be a comprehensive solution for all wealth
          management in cryptocurrency, making crypto interactions simple and
          accessible.
        </p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
