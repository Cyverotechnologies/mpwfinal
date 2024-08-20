import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  colors: ["#7c2d12", "#ffa781"],
  chart: {
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "55%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "50%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr"],
  },
  legend: {
    position: "top",
    horizontalAlign: "center",
    fontWeight: 600,
    fontSize: "16px",
    markers: {
      radius: 99,
    },
  },
};

const DashboardProfitabilityChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Expenses",
        data: [44, 55, 41, 67],
      },
      {
        name: "Income",
        data: [13, 23, 20, 8],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="Rent-Status  rounded-sm border-2  bg-white p-3  h-full sm:w-auto w-[300px] sm:ms-auto mx-auto ">
      <div className="my-2">
        <h4 className="text-2xl font-semibold text-black mb-2">
          Profitability
        </h4>
        <h2>Last 3 Months</h2>
      </div>

      <div className="mt-4 w-full">
        <div id="chartTwo" className="-ml-5 mt-15 w-full">
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={250}
          />
          
        </div>
      </div>
    </div>
  );
};

export default DashboardProfitabilityChart;
