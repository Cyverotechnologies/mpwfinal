import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import image_1 from "../../assets/img-1.jpeg";
import image_2 from "../../assets/img-2.jpeg";
import image_3 from "../../assets/img-3.jpeg";
import image_4 from "../../assets/img-4.jpeg";

const userData = [
  {
    url: image_1,
    name: "David",
    details: {
      booking: "Booking Id - ABCD",
      name: "Name - john Doe",
      phone: "Phone - 9876543",
      email: "Email - jogn@gmail.com",
      check_in: "Check in Date - June 10 2024",
      end_tagged: "End Tagged - ABCD",
      monthly_Rent: "Monthly Rent - 8000",
      booking_amount: "Booking Amount - 10000",
      address_amount: "Booking Amount - 40000",
      maintenance: "Maintenance & Electricity - 0",
      security_deposit: "Security Deposit - 0",
    },
  },
  {
    url: image_2,
    name: "John Doe",
    details: {
      booking: "Booking Id - ABCD",
      name: "Name - john Doe",
      phone: "Phone - 9876543",
      email: "Email - jogn@gmail.com",
      check_in: "Check in Date - June 10 2024",
      end_tagged: "End Tagged - ABCD",
      monthly_Rent: "Monthly Rent - 8000",
      booking_amount: "Booking Amount - 10000",
      address_amount: "Booking Amount - 40000",
      maintenance: "Maintenance & Electricity - 0",
      security_deposit: "Security Deposit - 0",
    },
  },
  {
    url: image_3,
    name: "Aaron",
    details: {
      booking: "Booking Id - ABCD",
      name: "Name - john Doe",
      phone: "Phone - 9876543",
      email: "Email - jogn@gmail.com",
      check_in: "Check in Date - June 10 2024",
      end_tagged: "End Tagged - ABCD",
      monthly_Rent: "Monthly Rent - 8000",
      booking_amount: "Booking Amount - 10000",
      address_amount: "Booking Amount - 40000",
      maintenance: "Maintenance & Electricity - 0",
      security_deposit: "Security Deposit - 0",
    },
  },
  {
    url: image_4,
    name: "Diego",
    details: {
      booking: "Booking Id - ABCD",
      name: "Name - john Doe",
      phone: "Phone - 9876543",
      email: "Email - jogn@gmail.com",
      check_in: "Check in Date - June 10 2024",
      end_tagged: "End Tagged - ABCD",
      monthly_Rent: "Monthly Rent - 8000",
      booking_amount: "Booking Amount - 10000",
      address_amount: "Booking Amount - 40000",
      maintenance: "Maintenance & Electricity - 0",
      security_deposit: "Security Deposit - 0",
    },
  },
];

const UserCard = ({ user }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-5">
        <img
          src={user.url}
          alt={user.name}
          className="w-[100px] h-[100px] rounded-full object-cover"
        />
      </div>
      <div className="text-center cursor-pointer relative group">
        <div>
          <p className="font-semibold">{user.name}</p>
        </div>
        <div className="absolute  rounded z-50 sm:w-[200px] w-[180px] xs:left-0 left-[-70px] border bg-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="flex flex-col p-2">
            {Object.entries(user.details).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between w-full mb-2"
              >
                <p className="text-xs">{value}</p>
              </div>
            ))}
            <div className="flex justify-between mt-2 ">
              <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors duration-300 mx-2">
                Edit
              </button>
              <button className="bg-red-300 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-300">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Bookings = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <div className="mb-4 px-5">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
          Active Bookings
        </button>
      </div>
      <section className="relative px-4 mt-5">
        <div className="max-w-[600px] grid sm:grid-cols-5 grid-cols-2 gap-x-4 sm:gap-y-0 gap-y-[100px]">
          {userData.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
          <div className="flex items-center justify-center w-full">
            <div
              className="w-[50px] h-[50px] flex items-center justify-center bg-red-900 hover:bg-red-800  text-white rounded-full cursor-pointer relative group"
              onClick={toggleForm}
            >
              <FiPlus className="text-4xl text-white" />
              <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-max bg-yellow-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                New Booking
              </div>
            </div>
          </div>
        </div>

        {/* PopUp Form */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black md:pt-[50px]  bg-opacity-50 flex items-center justify-center md:justify-end">
            <div className="w-full max-w-md mx-4 sm:mx-8 bg-white p-6 rounded-lg shadow-lg relative">
              <button
                className="absolute top-4 right-4 text-2xl rounded-full font-bold"
                onClick={toggleForm}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">New Booking</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Booking Id - System generated"
                  className="w-full px-4 py-1 border-2 border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-1 border-2 border-gray-300 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="w-full px-4 py-1 border-2 border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-1 border-2 border-gray-300 rounded-md"
                />
                <input
                  type="datetime-local"
                  placeholder="Number"
                  className="w-full px-4 py-1 border-2 border-gray-300 rounded-md placeholder:text-gray-400"
                />
                <select className="w-full px-4 py-1 border-2 border-gray-300 rounded-md text-gray-400">
                  <option value="">Bed</option>
                </select>
                <input
                  type="text"
                  placeholder="Monthly Rent"
                  className="w-full px-4 py-1 border-2 border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Security Deposits"
                  className="w-full px-4 py-1 border-2 border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Address Amount"
                  className="w-full px-4 py-1 border-2 border-gray-300 rounded-md"
                />

                <input
                  type="text"
                  placeholder="Booking Amount"
                  className="w-full px-4 py-1 border-2 border-gray-300 rounded-md"
                />
                <div className="border-2 border-gray-300 rounded-md relative">
                  <input
                    type="file"
                    id="file-upload"
                    className="w-full px-4 py-1 opacity-0"
                  />
                  <label
                    htmlFor="file-upload"
                    className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-red-600 z-[1] cursor-pointer"
                  >
                    Browse files
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Bookings;
