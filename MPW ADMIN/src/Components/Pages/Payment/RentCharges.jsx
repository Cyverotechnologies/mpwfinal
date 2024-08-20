import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { IoMdArrowRoundUp, IoMdSearch } from "react-icons/io";
import Pagination from "../../Common/Pagination";
import { IoClose } from "react-icons/io5";

const staticData = [
  {
    id: 1,
    name: "Malik",
    bedNumber: "101",
    category: "Monthly Rent",
    amount: 20000,
    date: "23-03-24",
    status: "Paid",
  },
  {
    id: 2,
    name: "Suman",
    bedNumber: "102",
    category: "Monthly Rent",
    amount: 30000,
    date: "23-03-24",
    status: "Pending",
  },
  {
    id: 3,
    name: "Rahul",
    bedNumber: "103",
    category: "Monthly Rent",
    amount: 32000,
    date: "23-03-24",
    status: "Paid",
  },
  {
    id: 4,
    name: "Amit",
    bedNumber: "104",
    category: "Monthly Rent",
    amount: 28000,
    date: "23-03-24",
    status: "Pending",
  },
  {
    id: 5,
    name: "Aditi",
    bedNumber: "105",
    category: "Monthly Rent",
    amount: 31000,
    date: "23-03-24",
    status: "Paid",
  },
  {
    id: 6,
    name: "Zubair",
    bedNumber: "106",
    category: "Monthly Rent",
    amount: 35000,
    date: "23-03-24",
    status: "Paid",
  },
  {
    id: 7,
    name: "Mushkan",
    bedNumber: "107",
    category: "Monthly Rent",
    amount: 18000,
    date: "23-03-24",
    status: "Pending",
  },
  {
    id: 8,
    name: "Priyank",
    bedNumber: "108",
    category: "Monthly Rent",
    amount: 34000,
    date: "23-03-24",
    status: "Paid",
  },
  {
    id: 9,
    name: "Amar",
    bedNumber: "109",
    category: "Monthly Rent",
    amount: 33000,
    date: "23-03-24",
    status: "Pending",
  },
  {
    id: 10,
    name: "Ravi",
    bedNumber: "110",
    category: "Monthly Rent",
    amount: 25000,
    date: "23-03-24",
    status: "Paid",
  },
  {
    id: 11,
    name: "Ravi",
    bedNumber: "110",
    category: "Monthly Rent",
    amount: 25000,
    date: "23-03-24",
    status: "Paid",
  },
  {
    id: 12,
    name: "Ravi",
    bedNumber: "110",
    category: "Monthly Rent",
    amount: 25000,
    date: "23-03-24",
    status: "Paid",
  },
  {
    id: 13,
    name: "Ravi",
    bedNumber: "110",
    category: "Monthly Rent",
    amount: 25000,
    date: "23-03-24",
    status: "Paid",
  },
];

const RentCharges = () => {
  const [data] = useState(staticData);
  const [action, setAction] = useState(null);
  const [charges, setCharges] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setAction(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAction = (itemId) =>
    setAction((prev) => (prev === itemId ? null : itemId));
  const handlePageChange = (page) => setCurrentPage(page);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="px-5">
      <div className="mb-6 ">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
          Payments - Rent & Charges
        </button>
      </div>
      <div className="flex sm:justify-between flex-wrap mb-4 gap-3 w-full">
        <div className="flex items-center border px-2 bg-gray-200">
          <label htmlFor="">
            <IoMdSearch />
          </label>
          <input
            type="text"
            className="outline-none px-2 py-2 bg-gray-200"
            placeholder="Search in"
          />
        </div>
        <div className="flex gap-4 flex-wrap items-center">
          <select
            name="category"
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Category</option>
            <option value="Electricity">Electricity</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Tax">Tax</option>
          </select>
          <select name="status" className="p-2 border border-gray-300 rounded">
            <option value="">Status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
          <input className="p-2 border border-gray-300 rounded" type="date" />
        </div>
        <div className="flex gap-4">
          <button className="flex items-center p-2 gap-2 bg-red-900 hover:bg-red-800  text-white rounded">
            <IoMdArrowRoundUp className="text-2xl " />
            Export
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto xs:min-w-full w-[300px] shadow-md sm:rounded-lg mb-4 text-nowrap">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs uppercase bg-gray-100">
            <tr>
              <th className="p-4 text-black">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
              </th>
              <th className="px-6 py-3 text-[16px] text-black">Name</th>
              <th className="px-6 py-3 text-[16px] text-black">Bed Number</th>
              <th className="px-6 py-3 text-[16px] text-black">Category</th>
              <th className="px-6 py-3 text-[16px] text-black">Amount</th>
              <th className="px-6 py-3 text-[16px] text-black">Date</th>
              <th className="px-6 py-3 text-[16px] text-black">Status</th>
              <th className="px-6 py-3 text-[16px] text-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b hover:bg-gray-400 hover:text-white"
              >
                <td className="w-4 p-4 text-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                </td>
                <td className="px-6 py-4 font-medium">{item.name}</td>
                <td className="px-6 py-4">{item.bedNumber}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.amount}</td>
                <td className="px-6 py-4">{item.date}</td>
                <td
                  className={`px-6 py-4 ${
                    item.status === "Paid" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.status}
                </td>
                <td className="px-6 py-4 text-center relative">
                  <button
                    className="text-gray-600 hover:text-gray-900 focus:outline-none"
                    onClick={() => handleAction(item.id)}
                  >
                    <FaEllipsisV className="text-xl" />
                  </button>
                  {action === item.id && (
                    <div
                      ref={menuRef}
                      className="absolute top-full left-[-20px] mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                    >
                      <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                        Edit
                      </button>
                      <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-5 flex justify-end">
        <Pagination
          totalPages={Math.ceil(data.length / itemsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      {charges && (
        <div className="flex md:justify-end sm:justify-center justify-start mb-5 ">
          <div
            className={` xs:basis-[25%] basis-full  bg-white border relative p-4  ${
              charges ? " block" : " hidden"
            }`}
          >
            {/* Remove Icons */}
            <div
              className="absolute right-1 top-2 w-[30px] h-[30px] flex items-center justify-center border rounded-full bg-gray-300 hover:text-white hover:bg-gray-500 cursor-pointer"
              onClick={() => {
                setCharges(!charges);
              }}
            >
              <IoClose className="text-2xl" />
            </div>

            {/* Content */}

            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center ">
                <label htmlFor="">Block</label>
                <select name="" id="" className="border-2 px-2 py-1">
                  <option value="Dropdown">Dropdown</option>
                </select>
              </div>
              <div className="flex gap-3 items-center ">
                <label htmlFor="">Room</label>
                <select name="" id="" className="border-2 px-2 py-1">
                  <option value="Dropdown">Dropdown</option>
                </select>
              </div>
              <div className="flex gap-3 items-center mb-3">
                <label htmlFor="">Bed</label>
                <select name="" id="" className="border-2 px-2 py-1">
                  <option value="Dropdown">Dropdown</option>
                </select>
              </div>
              <div className="flex gap-3 items-center ">
                <label htmlFor="">Name</label>
                <select name="" id="" className="border-2 px-2 py-1">
                  <option value="Dropdown">Dropdown</option>
                </select>
              </div>
              <div className="flex gap-3 items-center ">
                <label htmlFor="">Category</label>
                <select name="" id="" className="border-2 px-2 py-1">
                  <option value="Dropdown">Dropdown</option>
                </select>
              </div>
              <div className="flex gap-3 items-center mb-3">
                <label htmlFor="">Amount</label>
                <select name="" id="" className="border-2 px-2 py-1">
                  <option value="Input Text">Input Text</option>
                </select>
              </div>
              <div>
                <button className="py-2 rounded-md hover:bg-green-600 bg-green-500 text-white w-full">Save</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex flex-col sm:flex-row sm:justify-end justify-center mb-4 gap-4">
        <button
          onClick={() => {
            setCharges(!charges);
          }}
          className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md text-sm sm:text-base"
        >
          Add Charges
        </button>
        <button
          className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white  rounded-md text-sm sm:text-base"
          onClick={() => history.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default RentCharges;
