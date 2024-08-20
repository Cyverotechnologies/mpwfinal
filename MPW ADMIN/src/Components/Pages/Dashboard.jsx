import React, { lazy } from "react";
const DashboardTopHeader = lazy(() => import("./Dashboard/DashboardTopHeader"));
const DashoboardComplains = lazy(() =>
  import("./Dashboard/DashoboardComplains")
);
const DashboardTransactionsTable = lazy(() =>
  import("./Dashboard/DashboardTransactionsTable")
);
const DashboardProfitabilityChart = lazy(() =>
  import("./Dashboard/DashboardProfitabilityChart")
);
const DashboardBudge = lazy(() => import("./Dashboard/DashboardBudge"));
const DashboardMonthlyChart = lazy(() =>
  import("./Dashboard/DashboardMonthlyChart")
);

function Dashboard({ setAsideToggleActive }) {
  return (
    <section className="">
      <DashboardTopHeader setAsideToggleActive={setAsideToggleActive} />
      <div className="flex flex-col xl:flex-row mx-5 gap-5 ">
        <div className="w-full xl:w-[70%] h-full grid">
          <DashboardBudge />
          <div className="border mt-5 rounded">
            <DashboardMonthlyChart />
          </div>
        </div>
        <div className="w-full xl:w-[30%] grid">
          <DashoboardComplains />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row px-5 my-10 gap-5">
        <div className="w-full lg:w-[70%]">
          <DashboardTransactionsTable />
        </div>
        <div className="w-full lg:w-[30%]">
          <DashboardProfitabilityChart />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
