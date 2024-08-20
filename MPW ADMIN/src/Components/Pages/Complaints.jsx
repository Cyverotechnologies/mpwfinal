import { useState } from "react";
import { FaPlus, FaRegFileExcel } from "react-icons/fa";

const data = [
  {
    no: 1,
    title: "Top Issue",
    category: "Plumbing",
    raisedBy: "Amit ",
    bedNo: "A100b",
    date: "Nov 20 , 2022",
  },
  {
    no: 2,
    title: "Slow Interment",
    category: "Interment",
    raisedBy: "John Doe",
    bedNo: "A101c",
    date: "Nov 20 ,2022",
  },
  {
    no: 3,
    title: "State Food",
    category: "Food",
    raisedBy: "Shiva",
    bedNo: "A303a",
    date: "Nov 20 ,2022",
  },
  {
    no: 4,
    title: "Lock Broken",
    category: "Unity",
    raisedBy: "Shivam",
    bedNo: "A303c",
    date: "Nov 20 ,2022",
  },
  {
    no: 5,
    title: "xxxxx",
    category: "xxxxx",
    raisedBy: "Karan",
    bedNo: "A101c",
    date: "Nov 20 ,2022",
  },
];

const Complaint = () => {
  const [editOpen, setEditOpen] = useState(null);

  const handleEditClick = (no) => {
    setEditOpen(editOpen === no ? null : no);
  };

  return (
    <div className="px-5">
      <div className="mb-6">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
          Complaints
        </button>
      </div>
      <div className="w-full flex gap-4 items-center mb-5">
        <p className="font-bold text-xl">Active</p>
        <button className="h-10 w-10 rounded-full bg-sky-400 text-white inline-flex justify-center items-center">
          <FaPlus />
        </button>
        <div className="text-3xl text-orange-800">
          <FaRegFileExcel />
        </div>
      </div>

      <div className="relative overflow-x-auto text-nowrap xs:min-w-full w-[300px] shadow-md sm:rounded-lg border border-gray-200 mb-4">
        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 border-b">
            <tr>
              <th className="p-4 border-b text-[16px] text-black">No</th>
              <th className="px-6 py-3 border-b text-[16px] text-black">
                Complaint Title
              </th>
              <th className="px-6 py-3 border-b text-[16px] text-black">
                Complaint Category
              </th>
              <th className="px-6 py-3 border-b text-[16px] text-black">
                Raised By
              </th>
              <th className="px-6 py-3 border-b text-[16px] text-black">
                Bed No
              </th>
              <th className="px-6 py-3 border-b text-[16px] text-black">
                Date
              </th>
              <th className="px-6 py-3 border-b text-[16px] text-black">
                Details
              </th>
              <th className="px-6 py-3 border-b text-[16px] text-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.no}
                className="text-black border-b hover:bg-gray-400 hover:text-white"
              >
                <td className="w-4 p-4 border-b">
                  <div className="flex items-center">{item.no}</div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-red-700 whitespace-nowrap border-b"
                >
                  {item.title}
                </th>
                <td className="px-6 py-4 border-b">{item.category}</td>
                <td className="px-6 py-4 border-b">{item.raisedBy}</td>
                <td className="px-6 py-4 border-b">{item.bedNo}</td>
                <td className="px-6 py-4 border-b">{item.date}</td>
                <td className="px-6 py-4 border-b">
                  <button className="font-medium text-red-800 hover:underline">
                    Details
                  </button>
                </td>
                <td className="flex items-center px-6 py-4">
                  <button
                    onClick={() => handleEditClick(item.no)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline ms-3"
                  >
                    {"Edit"}
                    {/* {editOpen === item.no ? 'Close' : 'Edit'} */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editOpen && (
        <div className="flex justify-end">
          <div className="xs:w-[200px] w-full flex flex-col gap-3 py-6 px-2 border-2">
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="resolved" className="w-[20px] h-[20px]"/>
              <label htmlFor="resolved">Mark as Resolved</label>
            </div>
            <div>
              <input type="text" placeholder="Comments" className="border-2 px-2 py-1 w-full focus:outline-none" />
            </div>
            <div>
              <button className="px-2 py-1 bg-green-500 w-full">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Complaint;
