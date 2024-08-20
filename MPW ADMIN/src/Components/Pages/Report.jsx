const Report = () => {
  return (
    <div className="container  px-5">
      <div className="flex justify-between ">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
          Report
        </button>
        <select name="" id="" className="border-2 outline-none  px-8 py-2">
          <option value="" selected>
            Year
          </option>
          <option value="">2020</option>
          <option value="">2021</option>
          <option value="">2022</option>
          <option value="">2023</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="text-blue-500 underline cursor-pointer outline-none text-2xl  p-3 text-nowrap">
          Occupancy
        </button>
        <button className="text-blue-500 underline cursor-pointer outline-none text-2xl  p-3 text-nowrap">
          Availability
        </button>
        <button className="text-blue-500 underline cursor-pointer outline-none text-2xl  p-3 text-nowrap">
          Dues
        </button>
        <button className="text-blue-500 underline cursor-pointer outline-none text-2xl  p-3 text-nowrap">
          Collection
        </button>
        <button className="text-blue-500 underline cursor-pointer outline-none text-2xl  p-3 text-nowrap">
          Check-In
        </button>
        <button className="text-blue-500 underline cursor-pointer outline-none text-2xl  p-3 text-nowrap">
          Check-Out
        </button>
        <button className="text-blue-500 underline cursor-pointer outline-none text-2xl  p-3 text-nowrap">
          Expense
        </button>
        <button className="text-blue-500 underline cursor-pointer outline-none text-2xl  p-3 text-nowrap">
          Profit & Loss
        </button>
        <button className="text-blue-500 underline cursor-pointer outline-none text-2xl  p-3 text-nowrap">
          Balance Sheet
        </button>
        <button className="text-blue-500 underline cursor-pointer outline-none text-2xl  p-3 text-nowrap">
          GST
        </button>
        <button className="text-blue-500 underline cursor-pointer outline-none text-2xl  p-3 text-nowrap">
          MY_QR
        </button>
      </div>
    </div>
  );
};

export default Report;
