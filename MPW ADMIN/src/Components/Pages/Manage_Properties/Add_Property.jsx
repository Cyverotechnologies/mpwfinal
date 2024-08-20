import React, { useState, useEffect, useRef } from "react";
import { FaHouseUser, FaLocationDot } from "react-icons/fa6";
import { IoIosCall, IoIosLocate, IoMdClose } from "react-icons/io";
import { MdOutlineDescription } from "react-icons/md";
import { PiAddressBookTabsFill } from "react-icons/pi";
import { TbMapPinCode } from "react-icons/tb";
import { Link } from "react-router-dom";

const Add_Property = () => {
  const [visibleAmenities, setVisibleAmenities] = useState(false);
  return (
    <>
      <div className="sm:max-w-[80%] w-full px-5  rounded-lg ">
        <div className="mb-6">
          <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
            My Properties - Manage Properties - Add New Property
          </button>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-5 w-full  px-5  ">
        <div className="basis-full lg:basis-[75%]">
          <form action="">
            <div className="flex items-center gap-2 mb-4 border-2 px-2 py-2">
              <label htmlFor="PG Name">
                <FaHouseUser />
              </label>
              <input
                type="text"
                id="PG Name"
                className="w-full outline-none"
                placeholder="PG Name"
              />
            </div>
            <div className="flex items-center gap-2 mb-4 border-2 px-2 py-2">
              <label htmlFor="PG Description">
                <MdOutlineDescription />
              </label>
              <input
                type="text"
                id="PG Description"
                className="w-full outline-none"
                placeholder="PG Description"
              />
            </div>
            <div className="flex lg:justify-between lg:flex-row mb-4 flex-col gap-5">
              <div className="lg:basis-1/2 basis-full">
                <select
                  name=""
                  id=""
                  className="w-full border-2 py-2 px-2 outline-none text-gray-400"
                >
                  <option value="PG Type">PG Type</option>
                </select>
              </div>
              <div className="lg:basis-1/2 basis-full">
                <div className="flex items-center gap-2  border-2 px-2 py-2">
                  <label htmlFor="PG Contact Number">
                    <IoIosCall />
                  </label>
                  <input
                    type="text"
                    id="PG Contact Number"
                    className="w-full outline-none"
                    placeholder="PG Contact Number"
                  />
                </div>
              </div>
            </div>
            <div className="flex lg:justify-between lg:flex-row mb-4 flex-col gap-5">
              <div className="lg:basis-1/2 basis-full">
                <div className="flex items-center gap-2 border-2 px-2 py-2">
                  <label htmlFor="Address Line 1">
                    <PiAddressBookTabsFill />
                  </label>
                  <input
                    type="text"
                    id="Address Line 1"
                    className="w-full outline-none"
                    placeholder="Address Line 1"
                  />
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full">
                <div className="flex items-center gap-2  border-2 px-2 py-2">
                  <label htmlFor="Address Line 2">
                    <PiAddressBookTabsFill />
                  </label>
                  <input
                    type="text"
                    id="Address Line 2"
                    className="w-full outline-none"
                    placeholder="Address Line 2"
                  />
                </div>
              </div>
            </div>
            <div className="flex lg:justify-between lg:flex-row mb-4 flex-col gap-5">
              <div className="lg:basis-1/2 basis-full">
                <div className="flex items-center gap-2  border-2 px-2 py-2">
                  <label htmlFor="Location">
                    <FaLocationDot />
                  </label>
                  <input
                    type="text"
                    id="Location"
                    className="w-full outline-none"
                    placeholder="Location"
                  />
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full">
                <select
                  name=""
                  id=""
                  className="w-full border-2 py-2 px-2 outline-none text-gray-400"
                >
                  <option value="State">State</option>
                </select>
              </div>
            </div>
            <div className="flex lg:justify-between lg:flex-row mb-4 flex-col gap-5">
              <div className="lg:basis-1/2 basis-full">
                <select
                  name=""
                  id=""
                  className="w-full border-2 py-2 px-2 outline-none text-gray-400"
                >
                  <option value="City">City</option>
                </select>
              </div>
              <div className="lg:basis-1/2 basis-full">
                <div className="flex items-center gap-2  border-2 px-2 py-2">
                  <label htmlFor="PIN Code">
                    <TbMapPinCode />
                  </label>
                  <input
                    type="text"
                    id="PIN Code"
                    className="w-full outline-none"
                    placeholder="PIN Code"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4 border-2 px-2 py-2">
              <label htmlFor="Google Maps PIN">
                <FaLocationDot />
              </label>
              <input
                type="text"
                id="Google Maps PIN"
                className="w-full outline-none"
                placeholder="Google Maps PIN"
              />
            </div>
            <div className="flex lg:justify-between lg:flex-row mb-4 flex-col gap-5">
              <div className="lg:basis-1/2 basis-full">
                <select
                  name=""
                  id=""
                  className="w-full border-2 py-2 px-2 outline-none text-gray-400"
                >
                  <option value="Reset Collection Frequency">
                    Reset Collection Frequency
                  </option>
                </select>
              </div>
              <div className="lg:basis-1/2 basis-full">
                <select
                  name=""
                  id=""
                  className="w-full border-2 py-2 px-2 outline-none text-gray-400"
                >
                  <option value="Reset Invoke Frequency">
                    Reset Invoke Frequency
                  </option>
                </select>
              </div>
            </div>
            <div className="border-2 px-2 py-2">
              <input
                type="text"
                id="Terms & Condition for Tenants"
                className="w-full outline-none"
                placeholder="Terms & Condition for Tenants"
              />
            </div>
          </form>
        </div>
        {visibleAmenities && (
          <div className={`lg:basis-[23%] basis-full flex items-end `}>
            <div className="w-full border px-2 py-2 relative">
              <div
                className="absolute top-2 right-2 w-[30px] rounded-full h-[30px] flex items-center justify-center bg-gray-300 hover:text-white hover:bg-gray-600 cursor-pointer"
                onClick={() => {
                  setVisibleAmenities(!visibleAmenities);
                }}
              >
                <IoMdClose />
              </div>
              <h2 className="text-center">Amenities</h2>
              <div className="mb-3">
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <label htmlFor="">Refrigerator</label>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <label htmlFor="">AC</label>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <label htmlFor="">Internet</label>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <label htmlFor="">TV</label>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <label htmlFor="">Washing Machine</label>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <label htmlFor="">GYM</label>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <label htmlFor="">Swimming Pool</label>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <label htmlFor="">2 Wheeler Parking</label>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" />
                  <label htmlFor="">4 Wheeler Parking</label>
                </div>
              </div>
              <div className="lg:block hidden">
                <div className="mb-3 w-full">
                  <select
                    name=""
                    id=""
                    className="w-full border-2 px-2 py-2 outline-none "
                  >
                    <option value="Food (Veg/Non Veg)">
                      Food (Veg/Non Veg)
                    </option>
                  </select>
                </div>
                <div className="w-full mb-3">
                  <input
                    type="text"
                    placeholder="Other Amenities"
                    className="w-full py-2 border-2 outline-none px-2"
                    readOnly
                  />
                </div>
                <div className="w-full mb-3">
                  <button className="w-full rounded-md py-2 bg-red-900 hover:bg-red-800  text-white">
                    Save Amenities
                  </button>
                </div>
              </div>
              <div className="lg:hidden  grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
                <div className=" w-full">
                  <select
                    name=""
                    id=""
                    className="w-full border-2 px-2 py-2 outline-none "
                  >
                    <option value="Food (Veg/Non Veg)">
                      Food (Veg/Non Veg)
                    </option>
                  </select>
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Other Amenities"
                    className="w-full py-2 border-2 outline-none px-2"
                    readOnly
                  />
                </div>
                <div className="w-full ">
                  <button className="w-full border-2 py-2 bg-red-900 hover:bg-red-800  text-white">
                    Save Amenities
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="sm:max-w-[77%] w-full px-5 mt-4  lg:px-10">
        <div className="flex lg:justify-end md:justify-between justify-center w-full  mb-6">
          <div className="lg:w-auto w-full flex xs:flex-row flex-col gap-3">
            <Link
              to={"/properties/manage_properties/add_property/add_staff"}
              className="w-full lg:w-auto"
            >
              <button className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white w-full lg:w-auto  rounded">
                Add Staff & Clients
              </button>
            </Link>
            <button
              className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white w-full lg:w-auto hover:text-white  rounded"
              onClick={() => {
                setVisibleAmenities(!visibleAmenities);
              }}
            >
              Add Amenities
            </button>
          </div>
        </div>
      </div>
      <div className="flex lg:justify-end justify-center mb-4 px-5">
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <button
            className="px-4 py-2 w-full lg:w-auto bg-red-900 hover:bg-red-800  text-white rounded"
            onClick={() => {
              history.back();
              window.scrollTo(0, 0);
            }}
          >
            Back
          </button>
          <button className="px-4 py-2 w-full lg:w-auto bg-red-900 hover:bg-red-800  text-white rounded">
            Reset
          </button>
          <button className="px-4 py-2 w-full lg:w-auto bg-red-900 hover:bg-red-800  text-white rounded">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Add_Property;
