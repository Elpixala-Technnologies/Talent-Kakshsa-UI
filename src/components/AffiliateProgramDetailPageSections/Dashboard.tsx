import { formatRupee } from "@/utils/customText";
import React from "react";
import { DateRangeSelector } from "../DateRangeSelector";

export default function Dashboard() {
  return (
    <div className="relative grid grid-cols-3 gap-5">
      {/* col-span-1  */}
      <div className="col-span-1 gap-3 rounded-lg text-sm">
        {/* row 1  */}
        <div className="grid grid-cols-1 gap-3 rounded-lg bg-white p-3 text-center md:grid-cols-2">
          <div className="col-span-1 rounded-lg bg-gray-200 p-2 text-blue-800">
            <p>CURRENT BALANCE</p>
            <p className="text-2xl font-bold">INR {formatRupee(1500)}</p>
          </div>
          <div className="col-span-1 rounded-lg bg-blue-900 p-2 text-white">
            <p>TOTAL EARNED</p>
            <p className="text-2xl font-bold">INR {formatRupee(2500)}</p>
          </div>
        </div>
        {/* row 2  */}
        <div className="rounded-lg bg-white p-3">
          <div className="flex flex-wrap justify-between">
            <h2 className="text-lg font-semibold">Return</h2>
            <DateRangeSelector />
          </div>
        </div>
      </div>
      {/* col-span-2  */}
      <div className="col-span-2 gap-3 rounded-lg bg-white text-sm"></div>
    </div>
  );
}
