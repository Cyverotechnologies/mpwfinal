import React from "react";
import { FiPlus } from "react-icons/fi";

const Manage_Rooms = () => {
  return (
    <section className="w-full">
      <div className="max-w-[80%]  px-5 ">
        <div className="mb-10">
          <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg xs:text-xl text-nowrap">
            My Properties - Manage Rooms{" "}
          </button>
        </div>
        <div className="max-w-[400px] flex gap-3 justify-between mb-7 items-center">
          <h2 className="sm:text-xl text-nowrap"> Property</h2>
          <select className="border-2 focus:outline-none appearance-none   px-3 py-1  w-36" disabled>
            <option value="">Ankit PG</option>
          </select>
        </div>
        <div className="max-w-[400px] flex gap-3 justify-between mb-7 items-center ">
          <h2 className="sm:text-xl text-nowrap">Select Blocks</h2>
          <select className="border-2 focus:outline-none px-3   py-1 w-36" >
            <option value="">A (Kailash)</option>
            <option value="">B (Kailash)</option>
            <option value="">C (Kailash)</option>
          </select>
        </div>
        <div className="max-w-[400px]  gap-3 flex justify-between items-center mb-[40px] ">
          <h2 className="sm:text-xl text-nowrap">Select Floor</h2>
          <select className="border-2 focus:outline-none px-3   py-1 w-36" >
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
        </div>
        <div className="max-w-[400px]">
          <h2 className="font-bold text-xl mb-3">Rooms Added </h2>
          <div className="roomsAddedContainer grid  grid-cols-4 gap-4 mb-5 ">
            <div className="group relative">
              <h2 className="text-xl text-blue-400 border-b-2 border-blue-400 hover:text-blue-600 hover:border-blue-600  font-bold w-[50px] cursor-pointer">
                A101
              </h2>
              {/* Inside Div */}
              {<div className="absolute  sm:max-w-[250px] w-[300px] h-[100px]  top-10 px-2 py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100">
                <button className="px-4 py-2 text-white bg-slate-500 rounded-md mb-5 ">
                  A101
                </button>
                <div className="border-2 border-slate-600 px-2 py-2 rounded-md ">
                  <select
                    name=""
                    id=""
                    className="border mb-4 focus:outline-none w-full"
                  >
                    <option value="" className=" w-full">
                      Occupancy Type Double
                    </option>
                  </select>
                  <div className="flex items-center gap-x-2 mb-3">
                    <input
                      type="checkbox"
                      className={`w-5 h-5 focus:bg-red-500`}
                      id="check"
                    />
                    <label htmlFor="check">AC</label>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Bads Added </h3>
                  <div className="mb-2">
                    <span>Bad1</span>
                    <span className="mx-3">Bad2</span>
                  </div>
                  <div className="flex justify-end">
                  <button className="px-2 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md">Under Maintenance</button>
                  </div>
                </div>
              </div> }
            </div>
            <div className="group relative">
              <h2 className="text-xl text-blue-400 border-b-2 border-blue-400 hover:text-blue-600 hover:border-blue-600  font-bold w-[50px] cursor-pointer">
                A102
              </h2>
              {/* Inside Div */}
              {<div className="absolute  sm:max-w-[250px] w-[300px] h-[100px]  top-10 px-2 py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100">
                <button className="px-4 py-2 text-white bg-slate-500 rounded-md mb-5 ">
                  A102
                </button>
                <div className="border-2 border-slate-600 px-2 py-2 rounded-md ">
                  <select
                    name=""
                    id=""
                    className="border mb-4 focus:outline-none w-full"
                  >
                    <option value="" className=" w-full">
                      Occupancy Type Double
                    </option>
                  </select>
                  <div className="flex items-center gap-x-2 mb-3">
                    <input
                      type="checkbox"
                      className={`w-5 h-5 focus:bg-red-500`}
                      id="check"
                    />
                    <label htmlFor="check">AC</label>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Bads Added </h3>
                  <div className="mb-2">
                    <span>Bad1</span>
                    <span className="mx-3">Bad2</span>
                  </div>
                  <div className="flex justify-end">
                  <button className="px-2 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md">Under Maintenance</button>
                  </div>
                </div>
              </div> }
            </div>
            <div className="group relative">
              <h2 className="text-xl text-blue-400 border-b-2 border-blue-400 hover:text-blue-600 hover:border-blue-600  font-bold w-[50px] cursor-pointer">
                A103
              </h2>
              {/* Inside Div */}
              {<div className="absolute  sm:max-w-[250px] w-[300px] h-[100px]  top-10 px-2 py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100">
                <button className="px-4 py-2 text-white bg-slate-500 rounded-md mb-5 ">
                  A103
                </button>
                <div className="border-2 border-slate-600 px-2 py-2 rounded-md ">
                  <select
                    name=""
                    id=""
                    className="border mb-4 focus:outline-none w-full"
                  >
                    <option value="" className=" w-full">
                      Occupancy Type Double
                    </option>
                  </select>
                  <div className="flex items-center gap-x-2 mb-3">
                    <input
                      type="checkbox"
                      className={`w-5 h-5 focus:bg-red-500`}
                      id="check"
                    />
                    <label htmlFor="check">AC</label>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Bads Added </h3>
                  <div className="mb-2">
                    <span>Bad1</span>
                    <span className="mx-3">Bad2</span>
                  </div>
                  <div className="flex justify-end">
                  <button className="px-2 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md">Under Maintenance</button>
                  </div>
                </div>
              </div> }
            </div>
           
            <div className="w-[50px] h-[50px] flex items-center justify-center bg-red-900 hover:bg-red-800  text-white rounded-full cursor-pointer relative group">
              <FiPlus className="text-4xl text-white" />
              <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-max bg-yellow-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                Add New Rooms
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end xs:flex-row flex-col mx-4 sm:mx-6 md:mx-8 lg:mx-12 mb-4 gap-3">
        <button
          className="px-4 py-2  bg-red-900 hover:bg-red-800  text-white rounded-md text-sm sm:text-base"
          onClick={() => history.back()}
        >
          Back
        </button>
        <button className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md text-sm sm:text-base">
          Save
        </button>
      </div>
    </section>
  );
};

export default Manage_Rooms;
