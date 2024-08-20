import React, { useEffect, useRef, useState } from "react";
import { FaEllipsisV, FaFileInvoiceDollar } from "react-icons/fa";
import { IoMdArrowRoundUp } from "react-icons/io";
import Pagination from "../../Components/Common/Pagination";
import { IoClose } from "react-icons/io5";
import { RiGalleryUploadLine } from "react-icons/ri";

const Expenses = () => {
  const [action, setAction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [expense, setExpense] = useState(false);
  const itemsPerPage = 5; // Adjust as needed
  const dropdownRef = useRef(null);

  // Handle clicks outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAction(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const data = [
    {
      id: 1,
      status: "Unpaid",
      category: "Electricity",
      type: "Utility",
      date: "26-04-24",
      amount: "4300",
    },
    {
      id: 2,
      status: "Paid",
      category: "Plumbing",
      type: "Utility",
      date: "06-05-24",
      amount: "1200",
    },
    {
      id: 3,
      status: "Paid",
      category: "Internet",
      type: "Utility",
      date: "28-04-24",
      amount: "5000",
    },
    {
      id: 4,
      status: "Paid",
      category: "Manager salary",
      type: "Salary",
      date: "30-04-24",
      amount: "60000",
    },
    {
      id: 5,
      status: "Paid",
      category: "Cook Salary",
      type: "Salary",
      date: "30-04-24",
      amount: "30000",
    },
    {
      id: 6,
      status: "Paid",
      category: "Oil & pulses",
      type: "Grocery",
      date: "01-05-24",
      amount: "4000",
    },
    {
      id: 7,
      status: "Paid",
      category: "Property tax",
      type: "Misc",
      date: "02-04-24",
      amount: "54000",
    },
    {
      id: 8,
      status: "Paid",
      category: "Property tax",
      type: "Misc",
      date: "02-04-24",
      amount: "54000",
    },
    {
      id: 9,
      status: "Unpaid",
      category: "Property tax",
      type: "Misc",
      date: "02-04-24",
      amount: "54000",
    },
  ];

  // Pagination logic
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleAction = (itemId) =>
    setAction((prev) => (prev === itemId ? null : itemId));
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="px-5">
      <div className="mb-6">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
          Expenses
        </button>
      </div>
      {expense && (
        <div className="flex md:justify-end sm:justify-center justify-start mb-5 transition-all duration-200">
          <div
            className={` md:basis-[40%] basis-full  bg-white border relative`}
          >
            {/* Remove Icons */}
            <div
              className="absolute right-1 top-2 w-[30px] h-[30px] flex items-center justify-center border rounded-full bg-gray-300 hover:text-white hover:bg-gray-500 cursor-pointer"
              onClick={() => {
                setExpense(!expense);
              }}
            >
              <IoClose className="text-2xl" />
            </div>
            {/* content */}
            <div className="flex justify-between gap-4 p-4">
              <div className="basis-[80%] flex flex-col gap-2">
                <select
                  name=""
                  id=""
                  className="appearance-none border-2 outline-none px-2 py-1 rounded-md"
                >
                  <option value="Details">Details</option>
                </select>
                <select
                  name=""
                  id=""
                  className="border-2 outline-none px-2 py-1 rounded-sm"
                >
                  <option value="Category">Category</option>
                </select>
                <select
                  name=""
                  id=""
                  className="border-2 outline-none px-2 py-1 rounded-sm"
                >
                  <option value="Type">Type</option>
                </select>
                <select
                  name=""
                  id=""
                  className="border-2 outline-none px-2 py-1 rounded-sm"
                >
                  <option value="Date">Date</option>
                </select>
                <select
                  name=""
                  id=""
                  className="appearance-none border-2 outline-none px-2 py-1 rounded-sm"
                >
                  <option value="Amount">Amount</option>
                </select>
                <div className="flex xs:gap-10 gap-3">
                  <div className="flex basis-[50%] xs:gap-6 gap-3 items-center">
                    <input
                      type="checkbox"
                      className="border  xs:size-10 size-5"
                    />
                    <select
                      name=""
                      id=""
                      className="appearance-none border-2 outline-none px-2 py-1 rounded-sm w-full xs:text-center"
                    >
                      <option value="Paid">Paid</option>
                    </select>
                  </div>
                  <div className="flex basis-[50%] xs:gap-6 gap-3 items-center">
                    <input
                      type="checkbox"
                      className="border  xs:size-10 size-5"
                    />
                    <select
                      name=""
                      id=""
                      className="appearance-none border-2 outline-none px-2 py-1 rounded-sm w-full xs:text-center"
                    >
                      <option value="Unpaid">Unpaid</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="basis-[20%] flex items-center justify-center">
                <div className="flex flex-col gap-3">
                  <div>
                    <RiGalleryUploadLine className="text-3xl" />
                  </div>
                  <div>
                    <select
                      name=""
                      id=""
                      className="appearance-none border-2 outline-none px-2 py-1 rounded-sm"
                    >
                      <option value="Bill">Bill</option>
                    </select>
                  </div>
                  <div>
                    <button className="px-2 py-2 bg-red-900 hover:bg-red-800  text-white rounded-lg">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex sm:justify-between sm:flex-nowrap flex-wrap mb-4 gap-y-3">
        <div className="flex gap-4 sm:flex-nowrap flex-wrap items-center">
          <div className="flex flex-col rounded-md">
            <select name="category" className="p-2 border border-black rounded">
              <option value="">Category</option>
              <option value="Electricity">Electricity</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Tex">Tax</option>
            </select>
          </div>
          <div className="flex flex-col rounded-md">
            <select name="status" className="p-2 border border-black rounded">
              <option value="">Status</option>
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </div>
          <div className="flex flex-col rounded-md">
            <input className="p-2 border border-black rounded" type="date" />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <button
            onClick={() => {
              setExpense(!expense);
            }}
            className="border bg-red-900 hover:bg-red-800  text-white rounded-md  font-semibold p-2"
          >
            Add New Expense
          </button>
          <button className="flex border bg-red-900 hover:bg-red-800  text-white rounded-md  font-semibold p-2">
            <span className="text-2xl">
              <IoMdArrowRoundUp />
            </span>
            Export
          </button>
        </div>
      </div>
      <div className="overflow-x-auto text-nowrap w-[300px] xs:min-w-full">
        <table className="w-full text-sm text-left rtl:text-right border">
          <thead className="text-xs text-black/60 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="p-4 text-[16px] text-black">
                Check
              </th>
              <th scope="col" className="px-6 py-3 text-[16px] text-black">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-[16px] text-black">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-[16px] text-black">
                Type
              </th>
              <th scope="col" className="px-6 py-3 text-[16px] text-black">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-[16px] text-black">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 text-[16px] text-black">
                Bill
              </th>
              <th scope="col" className="px-6 py-3 text-[16px]"></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-400 hover:text-white"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-${item.id}`}
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  <p
                    className={`rounded-3xl p-2 text-center ${
                      item.status === "Paid" ? "bg-green-300" : "bg-red-900 hover:bg-red-800  text-white"
                    }`}
                  >
                    {item.status}
                  </p>
                </td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.type}</td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">{item.amount}</td>
                <td className="px-6 py-4">
                  <button className="text-2xl cursor-pointer">
                    <FaFileInvoiceDollar />
                  </button>
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
                      ref={dropdownRef}
                      className="absolute overflow-hidden top-14 lg:top-10 -left-20 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                    >
                      <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                        Edit
                      </button>
                      <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                        Delete
                      </button>
                      <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                        Details
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
    </div>
  );
};

export default Expenses;
