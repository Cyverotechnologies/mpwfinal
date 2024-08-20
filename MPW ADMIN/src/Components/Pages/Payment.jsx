import React from "react";
import { Link } from "react-router-dom";

const paymentData = [
  {
    title: "Configure Payments",
    path: "/payments/configure_payments",
  },
  {
    title: "Payment Approvals",
    path: "/payments/payment_approvals",
  },
  {
    title: "Rent & Charges",
    path: "/payments/rent_charges",
  },
];

const Payment = () => {
  return (
    <section className=" w-full px-5">
      <div className=" lg:max-w-[90%] ">
        <div className="mb-6 ">
          <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
            Payments
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paymentData.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="flex gap-4 justify-center items-center w-full h-[150px] border rounded-lg p-4 bg-red-300/40"
            >
              <div className="flex items-center gap-3">
                <h2 className=" text-lg font-bold">{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Payment;
