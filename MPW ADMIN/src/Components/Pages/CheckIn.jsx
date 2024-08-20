import { useState } from "react";
import { TbPhotoUp } from "react-icons/tb";

const CheckIn = () => {
  const [date] = useState(new Date());
  const [partiallyInput, setPartiallyInput] = useState(false);

  return (
    <>
      <div className=" px-5 flex flex-row flex-wrap">
        <div className="w-full xl:w-7/12  xl:pe-5">
          <div className="mb-5">
            <p className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl sm:w-2/3 w-full">
              Check In - Fresh/Against booking
            </p>
          </div>
          <div className="flex flex-wrap gap-y-2 mb-3">
            <input
              type="text"
              value={"Selct Booking Id & Name"}
              className="text-lg focus:outline-none sm:w-1/2 w-full font-bold"
            />
            <input
              type="text"
              value={"111234(Abhay Singh)"}
              readOnly
              className="border-0 px-3 py-3 w-full focus:outline-none  bg-gray-200 rounded text-lg  sm:w-1/2 font-bold"
            />
          </div>
          <div className=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray border-0 ">
            <div className="flex-auto px-2  py-10 pt-10">
              <form>
                <div className="flex flex-wrap ">
                  <div className="w-full px-2">
                    <div className=" w-full mb-3 flex sm:flex-row flex-col gap-2">
                      <div className="flex items-center sm:w-1/6 w-full">
                        <label
                          className=" text-blueGray-600 text-xs  font-bold "
                          htmlFor="Name"
                        >
                          Full Name
                        </label>
                      </div>
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <div className="relative w-full mb-3 flex sm:flex-row flex-col gap-2">
                      <div className="flex items-center sm:w-1/6 w-full">
                        <label
                          className=" text-blueGray-600 text-xs font-bold "
                          htmlFor="Name"
                        >
                          Full Address
                        </label>
                      </div>
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder="Full Address"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <div className="relative  mb-3 flex gap-2 sm:flex-row flex-col">
                      <div className="flex items-center sm:w-1/6 w-full">
                        <label
                          className=" text-blueGray-600 text-xs font-bold "
                          htmlFor="Name"
                        >
                          Phone
                        </label>
                      </div>
                      <div className="w-full">
                        <input
                          type="number"
                          placeholder="Phone"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <div className="relative w-full mb-3 flex gap-2 sm:flex-row flex-col">
                      <div className="flex items-center sm:w-1/6 w-full">
                        <label
                          className=" text-blueGray-600 text-xs font-bold "
                          htmlFor="Name"
                        >
                          Email
                        </label>
                      </div>
                      <div className="w-full">
                        <input
                          type="email"
                          placeholder="example@domain.com"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <div className="relative w-full mb-3 flex gap-2 sm:flex-row flex-col">
                      <div className="flex items-center  sm:w-1/6 w-full">
                        <label
                          className=" text-blueGray-600 text-xs font-bold "
                          htmlFor="Name"
                        >
                          Date
                        </label>
                      </div>
                      <div className="w-full">
                        <input
                          type="datetime-local"
                          placeholder="Defaulted to current date"
                          className="border-0 px-3 py-3  text-gray-400 bg-gray-200 rounded text-sm shadow focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tagging */}
                  <div className="w-full px-2">
                    <div className="relative w-full mb-3 flex gap-2 sm:flex-row flex-col">
                      <div className="flex items-center sm:w-1/6 w-full">
                        <label
                          className="text-blueGray-600 text-xs font-bold "
                          htmlFor="Name"
                        >
                          Tagging
                        </label>
                      </div>
                      <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
                        <select
                          name=""
                          id=""
                          className="border-0 p-3 placeholder-blueGray-300 text-gray-400 bg-gray-200 rounded text-sm shadow w-full"
                        >
                          <option value="" selected>
                            Block
                          </option>
                          <option value="">Block A</option>
                          <option value="">Block B</option>
                          <option value="">Block C</option>
                          <option value="">Block D</option>
                        </select>

                        <select
                          name=""
                          id=""
                          className="border-0 px-3 py-3 text-gray-400 bg-gray-200 rounded text-sm shadow w-full"
                        >
                          <option value="" selected>
                            Room
                          </option>
                          <option value="">A101</option>
                          <option value="">A102</option>
                          <option value="">A103</option>
                          <option value="">A104</option>
                        </select>

                        <select
                          name=""
                          id=""
                          className="border-0 px-3 py-3 text-gray-400 bg-gray-200 rounded text-sm shadow w-full"
                        >
                          <option value="" selected>
                            Bed
                          </option>
                          <option value="">A101a</option>
                          <option value="">A101b</option>
                          <option value="">A101c</option>
                          <option value="">A101d</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Commercial */}

                  <div className="w-full px-2">
                    <div className="relative w-full mb-3 flex gap-2 sm:flex-row flex-col">
                      <div className="flex items-center sm:w-1/6 w-full">
                        <label
                          className=" text-blueGray-600 text-xs font-bold "
                          htmlFor="Name"
                        >
                          Commercial
                        </label>
                      </div>
                      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 w-full">
                        <input
                          type="text"
                          placeholder="Monthly Rent"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full "
                        />
                        <input
                          type="text"
                          placeholder="Monthly Maintenance & Electricity"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full "
                        />
                        <input
                          type="text"
                          placeholder="Security Deposit"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full "
                        />
                        <input
                          type="text"
                          placeholder="Booking Amount"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <div className="relative w-full mb-3 flex gap-2 sm:flex-row flex-col">
                      <div className="flex items-center  sm:w-1/6 w-full">
                        <label
                          className=" text-blueGray-600 text-xs font-bold "
                          htmlFor="Name"
                        >
                          Food Preference
                        </label>
                      </div>
                      <div className="w-full">
                        <select
                          name=""
                          id=""
                          className="bg-gray-200 px-2 py-3 text-gray-400 shadow text-sm focus:outline-none rounded-md w-full"
                        >
                          <option value="Veg / Non Veg" selected>
                            Veg / Non Veg
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <div className="relative w-full mb-3 flex gap-2 sm:flex-row flex-col">
                      <div className="flex items-center  sm:w-1/6 w-full">
                        <label
                          className=" text-blueGray-600 text-xs font-bold "
                          htmlFor="Name"
                        >
                          Monthly Food Charges
                        </label>
                      </div>
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder="Monthly Food Charges"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <div className="relative w-full mb-3 flex gap-2 sm:flex-row flex-col">
                      <div className="flex items-center  sm:w-1/6 w-full">
                        <label
                          className=" text-blueGray-600 text-xs font-bold "
                          htmlFor="Name"
                        >
                          Emergency Contact Person
                        </label>
                      </div>
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder="Emergency Contact Person"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <div className="relative w-full mb-3 flex gap-2 sm:flex-row flex-col">
                      <div className="flex items-center  sm:w-1/6 w-full">
                        <label
                          className=" text-blueGray-600 text-xs font-bold "
                          htmlFor="Name"
                        >
                          Office / Collage Name & Add.
                        </label>
                      </div>
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder="Office / Collage Name and Full Address"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full px-2">
                    <div className="relative w-full mb-3 flex gap-2 sm:flex-row flex-col">
                      <div className="flex items-center  sm:w-1/6 w-full">
                        <label
                          className=" text-blueGray-600 text-xs font-bold "
                          htmlFor="Name"
                        >
                          Reference 1
                        </label>
                      </div>
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder="Reference Person Name , Phone Number and Address"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <div className="relative w-full mb-3 flex gap-2 sm:flex-row flex-col">
                      <div className="flex items-center  sm:w-1/6 w-full">
                        <label
                          className=" text-blueGray-600 text-xs font-bold "
                          htmlFor="Name"
                        >
                          Reference 2
                        </label>
                      </div>
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder="Reference Person Name , Phone Number and Address"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full px-2">
                    <div className="relative w-full mb-3 flex gap-2 sm:flex-row flex-col">
                      <div className="flex items-center  sm:w-1/6 w-full">
                        <label
                          className=" text-blueGray-600 text-xs font-bold "
                          htmlFor="Name"
                        >
                          Aadhar
                        </label>
                      </div>
                      <div className="w-full">
                        <input
                          type="number"
                          placeholder="Aadhar No"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-2">
                    <div className="relative w-full mb-3 flex gap-2 sm:flex-row flex-col">
                      <div className="flex items-center  sm:w-1/6 w-full">
                        <label
                          className=" text-blueGray-600 text-xs font-bold "
                          htmlFor="Name"
                        >
                          PAN
                        </label>
                      </div>
                      <div className="w-full">
                        <input
                          type="number"
                          placeholder="PAN No"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-5/12 xl:mt-[125px] flex flex-col gap-y-6">
          <div className=" flex sm:flex-row flex-col justify-around cursor-pointer gap-3 w-full mb-3">
            <div className="photo flex flex-col border border-dashed border-gray-400 rounded-md p-2 bg-gray-200 w-full">
              <div className="text-5xl flex justify-center">
                <TbPhotoUp />
              </div>
              <input
                type="file"
                multiple
                className="cursor-pointer opacity-0 w-10"
              ></input>
              <div>
                <h4 className="flex justify-center text-xl font-semibold ">
                  Photo
                </h4>
                <p className="text-center">Supported format PNG, JPG</p>
                <span className="flex justify-center">OR</span>
                <p className="text-blue-700 flex justify-center font-bold">
                  BROWSE FILE
                </p>
              </div>
              <input
                type="file"
                className="cursor-pointer p-1 w-40 z-50 ml-5 opacity-0 -mt-6 border"
              />
            </div>
            <div className="photo flex flex-col border border-dashed border-gray-400 bg-gray-200 w-full rounded-md p-2">
              <div className="text-5xl flex justify-center">
                <TbPhotoUp />
              </div>
              <input
                type="file"
                multiple
                className="cursor-pointer opacity-0 w-10"
              ></input>
              <div>
                <h4 className="flex justify-center text-xl font-semibold">
                  Aadhar
                </h4>
                <p className="text-center">Supported format PNG, JPG</p>
                <span className="flex justify-center">OR</span>
                <p className="text-blue-700 flex justify-center font-bold">
                  BROWSE FILE
                </p>
              </div>
              <input
                type="file"
                className="cursor-pointer p-1 w-40 z-50 ml-5 opacity-0 -mt-6 border"
              />
            </div>
          </div>
          <div className=" border p-7 rounded-md  bg-gray-200">
            <h3 className="text-center text-2xl font-bold m-4">Bill</h3>
            <div className="flex flex-col justify-around gap-10">
              <div className="flex justify-between ">
                <p>Monthly Rent</p>
                <p className="font-bold text-2xl">4000</p>
              </div>
              <div className="flex justify-between">
                <p>Monthly Maintinance</p>
                <p className="font-bold text-2xl">800</p>
              </div>
              <div className="flex justify-between">
                <p>Security Deposit</p>
                <p className="font-bold text-2xl">8000</p>
              </div>
              <div className="flex justify-between">
                <p>Other Charges</p>
                <p className="font-bold text-2xl">300</p>
              </div>
              <hr />
              <div className="flex justify-between font-bold">
                <p>Total</p>
                <p className="font-bold text-2xl">13200</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <button className=" bg-green-500 h-12 flex items-center justify-center rounded text-gray-200 text-xl mb-2  p-5">
              Mark as Paid
            </button>
            <button className=" bg-red-500 h-12 flex items-center justify-center rounded text-gray-200 text-xl mb-2  p-5">
              Mark as Unpaid
            </button>
            {partiallyInput && (
              <div className="border mb-2 lg:w-full sm:w-[50%] w-full">
              <input type="text" placeholder="Enter Amount" className="w-full focus:outline-none p-2" />
              </div>
            )}
            <button
              onClick={() => {
                setPartiallyInput(!partiallyInput);
              }}
              className=" bg-yellow-500 h-12 flex items-center justify-center rounded text-gray-200 text-xl mb-2  p-5"
            >
              Mark as Partially Paid
            </button>

            <div className="flex md:justify-end w-full xs:flex-row flex-col gap-3 mb-6 mt-2">
              <button className="p-2 bg-red-900 hover:bg-red-800  text-white w-full rounded-md  cursor-pointer  ">
                Save
              </button>
              <button className="p-2 bg-red-900 hover:bg-red-800  text-white w-full rounded-md  cursor-pointer">
                Reset
              </button>
              <button className="p-2 bg-red-900 hover:bg-red-800  text-white w-full rounded-md  cursor-pointer ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckIn;
