import React, { useRef, useState, useEffect } from "react";
import { FaEllipsisV, FaPlus, FaRegFileExcel } from "react-icons/fa";

const TableRow = ({ number, title, startDate, endDate, handleAction, action, menuRef }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-400 hover:text-white">
      <td className="w-4 p-4 border">
        <div className="flex items-center">{number}</div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium whitespace-nowrap border text-red-800"
      >
        {title}
      </th>
      <td className="px-6 py-4 border">{startDate}</td>
      <td className="px-6 py-4 border">{endDate}</td>
      <td className="px-6 py-4 text-blue-600 border">
        <button className="font-medium text-red-800 hover:underline">
          Details
        </button>
      </td>
      <td className="px-6 py-4 text-center relative">
        <button
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => handleAction(number)}
        >
          <FaEllipsisV className="text-xl" />
        </button>
        {action === number && (
          <div
            ref={menuRef}
            className="absolute top-[80%] left-[-70px] mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
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
  );
};

const Notice = () => {
  const [action, setAction] = useState(null);
  const menuRef = useRef(null);

  // Handle dropdown visibility
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setAction(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAction = (itemNumber) => setAction((prev) => (prev === itemNumber ? null : itemNumber));

  const notices = [
    {
      number: "01",
      title: "Food Menu",
      startDate: "Oct 20, 2022",
      endDate: "Nov 20, 2022",
    },
    {
      number: "02",
      title: "Interment Details",
      startDate: "Oct 20, 2022",
      endDate: "Nov 20, 2022",
    },
    {
      number: "03",
      title: "950-4030-102-0107",
      startDate: "Oct 20, 2022",
      endDate: "Nov 20, 2022",
    },
    {
      number: "04",
      title: "950-4030-102-0107",
      startDate: "Oct 20, 2022",
      endDate: "Nov 20, 2022",
    },
    {
      number: "05",
      title: "950-4030-102-0107",
      startDate: "Oct 20, 2022",
      endDate: "Nov 20, 2022",
    },
    {
      number: "06",
      title: "950-4030-102-0107",
      startDate: "Oct 20, 2022",
      endDate: "Nov 20, 2022",
    },
    {
      number: "07",
      title: "950-4030-102-0107",
      startDate: "Oct 20, 2022",
      endDate: "Nov 20, 2022",
    },
    {
      number: "08",
      title: "950-4030-102-0107",
      startDate: "Oct 20, 2022",
      endDate: "Nov 20, 2022",
    },
    {
      number: "09",
      title: "950-4030-102-0107",
      startDate: "Oct 20, 2022",
      endDate: "Nov 20, 2022",
    },
  ];

  return (
    <div className="px-5">
      <div className="mb-6">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
          Notices
        </button>
      </div>
      <div className="w-full flex gap-4 items-center mb-5">
        <p className="font-bold text-xl">Active</p>
        <button className="h-10 w-10 rounded-full bg-sky-400 text-white inline-flex justify-center items-center">
          <FaPlus />
        </button>
        <div className="text-3xl text-orange-900">
          <FaRegFileExcel />
        </div>
      </div>

      <div className="relative overflow-x-auto xs:min-w-full  text-nowrap shadow-md sm:rounded-lg mb-5 w-[300px] ">
        <table className="min-w-full text-sm text-left border">
          <thead className="text-xs text-gray-700 uppercase border bg-gray-200">
            <tr>
              <th scope="col" className="p-4 border text-[16px] text-black">
                No
              </th>
              <th scope="col" className="px-6 py-3 border text-[16px] text-black">
                Title
              </th>
              <th scope="col" className="px-6 py-3 border text-[16px] text-black">
                Start Date
              </th>
              <th scope="col" className="px-6 py-3 border text-[16px] text-black">
                End Date
              </th>
              <th scope="col" className="px-6 py-3 border text-[16px] text-black">
                Details
              </th>
              <th scope="col" className="px-6 py-3 border text-[16px] text-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <TableRow
                key={notice.number}
                {...notice}
                handleAction={handleAction}
                action={action}
                menuRef={menuRef}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notice;
