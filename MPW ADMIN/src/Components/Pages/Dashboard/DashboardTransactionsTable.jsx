import React from "react";
import { GoArrowBoth } from "react-icons/go";
import { Link } from "react-router-dom";

const transactions = [
  {
    id: 1,
    status: "Paid",
    category: "Subscription",
    type: "Credit",
    date: "2024-07-30",
    amount: "₹50",
  },
  {
    id: 2,
    status: "Unpaid",
    category: "Utilities",
    type: "Debit",
    date: "2024-07-29",
    amount: "₹100",
  },
  {
    id: 3,
    status: "Paid",
    category: "PG Fees",
    type: "Debit",
    date: "2024-07-28",
    amount: "₹200",
  },
  {
    id: 4,
    status: "Unpaid",
    category: "Subscription",
    type: "Credit",
    date: "2024-07-27",
    amount: "₹150",
  },
  {
    id: 5,
    status: "Paid",
    category: "PG Fees",
    type: "Debit",
    date: "2024-07-26",
    amount: "₹75",
  },
];

const DashboardTransactionsTable = () => {
  return (
    <div className="border-2 h-full xs:w-auto text-nowrap w-[300px] mx-auto sm:ms-auto">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold p-4">Recent Expenses</h3>
        <div className=" text-3xl rotate-[130deg] px-3">
          <Link to={"/expenses"}>
            {" "}
            <GoArrowBoth />
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto bg-white rounded ">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-slate-300/10">
            <tr>
              <th className="py-2 px-4 font-semibold text-gray-600 text-left text-sm sm:text-base">
                Status
              </th>
              <th className="py-2 px-4 font-semibold text-gray-600 text-left text-sm sm:text-base">
                Category
              </th>
              <th className="py-2 px-4 font-semibold text-gray-600 text-left text-sm sm:text-base">
                Type
              </th>
              <th className="py-2 px-4 font-semibold text-gray-600 text-left text-sm sm:text-base">
                Date
              </th>
              <th className="py-2 px-4 font-semibold text-gray-600 text-left text-sm sm:text-base">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td
                  className={`py-2 px-4 ${
                    transaction.status === "Paid"
                      ? "text-green-500"
                      : "text-red-500"
                  } text-sm sm:text-base`}
                >
                  <div
                    className={`inline-block py-1 px-2 rounded-full ${
                      transaction.status === "Paid"
                        ? "bg-green-200/20"
                        : "bg-red-300/20"
                    }`}
                  >
                    {transaction.status}
                  </div>
                </td>
                <td className="py-2 px-4 text-sm sm:text-base">
                  {transaction.category}
                </td>
                <td className="py-2 px-4 text-sm sm:text-base">
                  {transaction.type}
                </td>
                <td className="py-2 px-4 text-sm sm:text-base">
                  {transaction.date}
                </td>
                <td className="py-2 px-4 text-sm sm:text-base">
                  {transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTransactionsTable;
