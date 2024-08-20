import React, { useState } from "react";

const staticData = [
  {
    block: "A",
    floor: 0,
    room: "01",
    bed: "a",
    ac: true,
    sharing: 1,
    rent: 5000,
  },
  {
    block: "A",
    floor: 1,
    room: "01",
    bed: "a",
    // ac: true,
    sharing: 2,
    rent: 6000,
  },
  {
    block: "A",
    floor: 1,
    room: "01",
    bed: "b",
    // ac: false,
    sharing: 2,
    rent: 5000,
  },
  {
    block: "A",
    floor: 1,
    room: "02",
    bed: "a",
    ac: true,
    sharing: 3,
    rent: 5000,
  },
  {
    block: "A",
    floor: 2,
    room: "01",
    bed: "a",
    // ac: false,
    sharing: 1,
    rent: 5000,
  },
  {
    block: "A",
    floor: 2,
    room: "01",
    bed: "b",
    // ac: true,
    sharing: 3,
    rent: 5000,
  },
  {
    block: "A",
    floor: 2,
    room: "01",
    bed: "c",
    // ac: true,
    sharing: 3,
    rent: 5000,
  },
  {
    block: "A",
    floor: 3,
    room: "01",
    bed: "a",
    ac: true,
    sharing: 1,
    rent: 5000,
  },
];

const ConformPayment = () => {
  const [data, setData] = useState(staticData);

  return (
    <section className="w-full px-5 ">
      <div className="md:max-w-[80%]">
        <div className="mb-6">
          <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
            Payments-Configure Payments
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20 text-lg">
          <div className="grid grid-cols-2">
            <p>Select Property</p>
            <select name="" id="" className="border focus:outline-none">
              <option value="">Ankit PG</option>
            </select>
          </div>
          <div className="grid grid-cols-2">
            <p>Default Rent</p>
            <input
              type="text"
              readOnly
              placeholder="Input Default Rent Application for all "
              className="text-sm border-2 px-2 text-black inline-block focus:outline-none placeholder:text-black"
            />
          </div>
        </div>
        <div className="border-[3px] border-indigo-300 block mt-7 text-nowrap overflow-x-auto sm:w-full w-[300px] ">
          <table className="w-full ">
            <thead className="bg-gray-50">
              <tr className="border">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider border">
                  Block
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider border">
                  Floor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider border">
                  Room
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider border">
                  Bed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider border">
                  AC / No <br /> n Ac
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider border">
                  Sharing
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider border">
                  Rent
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">
                    {item.block}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
                    {item.floor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
                    {item.room}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
                    {item.bed}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">
                    <input
                      type="checkbox"
                      checked={item.ac}
                      className="form-checkbox h-4 w-4 text-indigo-600"
                      readOnly
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-4xl font-semibold text-gray-500 border">
                    {item.sharing}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.rent}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex xs:justify-end xs:flex-row flex-col  mt-10 mb-5 gap-3">
        <button
          className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md text-sm sm:text-base"
          onClick={() => history.back()}
        >
          Back
        </button>
        <button className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md text-sm sm:text-base capitalize">
          Maintenance & food charges
        </button>
        <button className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white  rounded-md text-sm sm:text-base">
          Save
        </button>
      </div>
    </section>
  );
};

export default ConformPayment;