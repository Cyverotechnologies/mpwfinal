import { useState } from "react";
import { Link } from "react-router-dom";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const Table = ({ data }) => (
  <div className="overflow-x-auto w-[300px] xs:min-w-full text-nowrap shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left border">
      <thead className="text-xs uppercase border-b bg-gray-200">
        <tr>
          <th scope="col" className="px-6 py-3 sm:text-[16px] ">
            Name
          </th>
          <th scope="col" className="px-6 py-3 sm:text-[16px] ">
            Phone
          </th>
          <th scope="col" className="px-6 py-3 sm:text-[16px] ">
            Email
          </th>
          <th scope="col" className="px-6 py-3 sm:text-[16px] ">
            Bed No
          </th>
          <th scope="col" className="px-6 py-3 sm:text-[16px] ">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className="border-b hover:bg-gray-400 hover:text-white"
          >
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {item.name}
            </td>
            <td className="px-6 py-4">{item.phone}</td>
            <td className="px-6 py-4">{item.email}</td>
            <td className="px-6 py-4">{item.bedNo}</td>
            <td className=" px-6 py-3 gap-2">
              <Link
                to="#"
                className="text-red-800 hover:underline gap-1 flex items-center"
              >
                <FaPen className="mr-1" /> Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function Guest() {
  const [buttonActive, setButtonActive] = useState("tab1");

  const handleButtonClick = (value) => {
    if (value !== buttonActive) {
      setButtonActive(value);
    }
  };

  const activeData = [
    {
      name: "Diego",
      phone: "123-456-7890",
      email: "diego@gmail.com",
      bedNo: "87659",
    },
    {
      name: "Akio",
      phone: "987-654-3210",
      email: "akio@example.com",
      bedNo: "12345",
    },
    {
      name: "Amir",
      phone: "555-555-5555",
      email: "amir@example.com",
      bedNo: "67890",
    },
    {
      name: "Andres",
      phone: "444-444-4444",
      email: "andres@example.com",
      bedNo: "54321",
    },
    {
      name: "Marco",
      phone: "333-333-3333",
      email: "marco@example.com",
      bedNo: "98765",
    },
  ];

  const inactiveData = [
    
    {
      name: "Akio",
      phone: "987-654-3210",
      email: "akio@example.com",
      bedNo: "12345",
    },
    {
      name: "Marco",
      phone: "333-333-3333",
      email: "marco@example.com",
      bedNo: "98765",
    },
    {
      name: "Amir",
      phone: "555-555-5555",
      email: "amir@example.com",
      bedNo: "67890",
    },
    {
      name: "Andres",
      phone: "444-444-4444",
      email: "andres@example.com",
      bedNo: "54321",
    },
    {
      name: "Diego",
      phone: "123-456-7890",
      email: "diego@gmail.com",
      bedNo: "87659",
    },
  
  ];

  return (
    <div className="mb-3 px-5">
      <div className="mb-6">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
          Guests
        </button>
      </div>
      <TETabs>
        <TETabsItem
          onClick={() => handleButtonClick("tab1")}
          active={buttonActive === "tab1"}
          tag="button"
          className="border-none"
        >
          <div className="px-4 py-3 bg-red-900 hover:bg-red-800  text-white rounded-lg">
            Active
          </div>
        </TETabsItem>
        <TETabsItem
          onClick={() => handleButtonClick("tab2")}
          active={buttonActive === "tab2"}
          tag="button"
          className="border-none ml-3 "
        >
          <div className="px-4 py-3 bg-red-900 hover:bg-red-800  text-white rounded-lg ">
            Inactive
          </div>
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane
          show={buttonActive === "tab1"}
          className={` ${buttonActive === "tab1" ? "" : "hidden"}`}
        >
          <Table data={activeData} />
        </TETabsPane>
        <TETabsPane
          show={buttonActive === "tab2"}
          className={`${buttonActive === "tab2" ? "" : "hidden"}`}
        >
          <Table data={inactiveData} />
        </TETabsPane>
      </TETabsContent>
    </div>
  );
}
