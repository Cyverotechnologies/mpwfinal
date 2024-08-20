import { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";

const tabData = [
  { id: "tab1", label: "Available", rows: generateRows() },
  { id: "tab2", label: "Occupie", rows: generateRows() },
  { id: "tab3", label: "Under Notice", rows: generateRows() },
  { id: "tab4", label: "Booking", rows: generateRows() },
];

function generateRows() {
  return Array.from({ length: 8 }, (_, index) => ({
    number: index + 1,
    bedNumber: `A120c${Math.floor(Math.random() * 999)}`,
    type: `Monthly rental${Math.floor(Math.random() * 999)}`,
    sharing: `Triple${Math.floor(Math.random() * 999)}`,
  }));
}

const Table = ({ rows }) => (
<div className="text-nowrap w-[300px] xs:min-w-full overflow-x-auto">
<table className="w-full text-sm text-left border ">
    <thead className="text-xs uppercase ">
      <tr className="border bg-gray-200 sm:text-[16px]">
        <th scope="col" className="p-4 border">
          No
        </th>
        <th scope="col" className="px-6 py-3 border sm:text-[16px]">
          Bed Number
        </th>
        <th scope="col" className="px-6 py-3 border sm:text-[16px]">
          Type
        </th>
        <th scope="col" className="px-6 py-3 border sm:text-[16px]">
          Sharing
        </th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => (
        <tr
          key={index}
          className=" border-b  border hover:bg-gray-400 hover:text-white"
        >
          <td className="w-4 p-4 border">
            <div className="flex items-center">{row.number}</div>
          </td>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border"
          >
            {row.bedNumber}
          </th>
          <td className="px-6 py-4 border">{row.type}</td>
          <td className="px-6 py-4 border">{row.sharing}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
);

export default function Availability() {
  const [fillActive, setFillActive] = useState("tab1");

  const handleFillClick = (value) => {
    if (value !== fillActive) {
      setFillActive(value);
    }
  };

  return (
    <div className="px-5">
      <div className="mb-6 ">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
          Availability
        </button>
      </div>
      <TETabs fill>
        {tabData.map((tab) => (
          <TETabsItem
            key={tab.id}
            onClick={() => handleFillClick(tab.id)}
            active={fillActive === tab.id}
            className="px-4 py-3  text-start border-none bg-red-900 hover:bg-red-800  text-white  inline-block hover:text-white rounded-lg"
          >
            {tab.label}
          </TETabsItem>
        ))}
      </TETabs>

      <TETabsContent>
        {tabData.map((tab) => (
          <TETabsPane key={tab.id} show={fillActive === tab.id}>
            <Table rows={tab.rows} />
          </TETabsPane>
        ))}
      </TETabsContent>
    </div>
  );
}
