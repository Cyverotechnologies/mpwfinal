import React from "react";

const Manage_Floors = () => {
  return (
    <>
      <section className=" px-5">
        <div className="mb-10">
          <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg xs:text-xl text-nowrap">
            My Properties - Manage Floors{" "}
          </button>
        </div>
        <div className="max-w-[400px] flex justify-between items-center mb-7">
          <h2 className="sm:text-xl "> Property</h2>
          <select className="border-2 focus:outline-none appearance-none  px-3 py-1 w-36" disabled>
            <option value="">Ankit PG</option>
          </select>
        </div>
        <div className="max-w-[400px] flex justify-between items-center mb-7">
          <h2 className="sm:text-xl ">Select Blocks</h2>
          <select className="border-2 focus:outline-none   px-3 py-1 w-36" >
            <option value="">A (Kailash)</option>
            <option value="">B (Kailash)</option>
            <option value="">C (Kailash)</option>
          </select>
        </div>
        <div>
          <h2 className="text-2xl  font-bold mb-3">Floors Available </h2>
          <ul className="mb-5 px-2">
            <li className="font-semibold text-xl">0</li>
            <li className="font-semibold text-xl">1</li>
            <li className="font-semibold text-xl">2</li>
            <li className="font-semibold text-xl">3</li>
          </ul>
          <button className="px-4 py-2 w-full xs:w-auto bg-red-900 hover:bg-red-800  text-white rounded-md mb-3">
            Add More Floors
          </button>
        </div>
      </section>
      <div className="flex justify-end px-5 xs:flex-row flex-col sm:mx-6 md:mx-8 lg:mx-12 mb-4 gap-3">
        <button
          className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md  sm:text-base"
          onClick={() => history.back()}
        >
          Back
        </button>
        <button className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md  sm:text-base">
          Save
        </button>
      </div>
    </>
  );
};

export default Manage_Floors;
