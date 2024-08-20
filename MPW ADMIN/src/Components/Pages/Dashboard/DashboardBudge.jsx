import React from "react";

function DashboardBudge() {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 grid-cols-1 ">
      <div className="p-3 pb-8 bg-blue-300/15">
        <p className="text-xl ">Total Beds</p>
        <p className="text-2xl font-semibold mt-3">100</p>
      </div>
      <div className="p-3 pb-8 bg-red-300/15">
        <p className="text-xl ">Occupied</p>
        <p className="text-2xl font-semibold mt-3">80</p>
      </div>
      <div className="p-3  pb-8 bg-green-300/15">
        <p className="text-xl ">Vacant</p>
        <p className="text-2xl font-semibold mt-3">20</p>
      </div>
    </div>
  );
}

export default DashboardBudge;
