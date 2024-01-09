import React from "react";

function DashboardCard02() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-slate-800 shadow-lg rounded-sm border border-slate-700 items-center justify-center">
      <div className="px-5 pt-5">
        <h2 className="text-lg font-semibold text-slate-100 mb-2">
          % Change in Balance
        </h2>
        <div className="flex items-center justify-center">
          <div className="text-3xl font-bold mr-2 text-indigo-300">
            {"11.93%"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard02;
