import React, { useState, useEffect, useRef } from "react";
import { FiPlus } from "react-icons/fi";
import image_1 from "../../../assets/img-1.jpeg";
import image_2 from "../../../assets/img-2.jpeg";
import image_3 from "../../../assets/img-3.jpeg";
import image_4 from "../../../assets/img-4.jpeg";
import image_5 from "../../../assets/img-5.jpeg";
import { Link } from "react-router-dom";

const userData = [
  { url: image_1, name: "David" },
  { url: image_2, name: "Diego" },
  { url: image_3, name: "Kaif" },
  { url: image_4, name: "Amir" },
  { url: image_1, name: "Andres" },
  { url: image_5, name: "Marco" },
  { url: image_4, name: "Aaron" },
];
const data = [
  [
    {
      title: "Police, Ambulance, Fire...",
      items_1: Array(5).fill("Enter Category"),
      items_2: Array(5).fill("Enter Number"),
    },
  ],
  [
    {
      title: "Laundry, Maid, Milkman...",
      items_1: Array(5).fill("Enter Category"),
      items_2: Array(5).fill("Enter Number"),
    },
  ],
];

const FormInput = ({ type, placeholder }) => (
  <div className="px-4 mb-2">
    <input
      type={type}
      className="w-full py-1 border-2 border-black focus:outline-none px-2 rounded-md"
      placeholder={placeholder}
    />
  </div>
);

const FormSelect = ({ options }) => (
  <div className="px-4 mb-2">
    <select className="w-full py-2 border-2 border-black focus:outline-none px-2 rounded-md">
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const Section = ({ title, items1, items2 }) => (
  <div className="border-2 border-slate-500 p-1">
    <div className="border px-2 py-2">
      <h2 className="mb-3 text-xl font-semibold text-center">{title}</h2>
      <div className="grid grid-cols-2 gap-2">
        <div className="grid gap-2">
          {items1.map((item, index) => (
            <div key={index} className="border px-1 py-[2px]">
              {item}
            </div>
          ))}
        </div>
        <div className="grid gap-2">
          {items2.map((item, index) => (
            <div key={index} className="border px-1 py-[2px]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Add_Property = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const containerRef = useRef(null);
  const formRef = useRef(null);

  const handleIconClick = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const handlePlusClick = () => {
    setFormVisible(true);
  };

  const handleClickOutside = (event) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target) &&
      formRef.current &&
      !formRef.current.contains(event.target)
    ) {
      setVisibleIndex(null);
      setFormVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="sm:max-w-[80%] w-full px-5  rounded-lg ">
        <div className="mb-6">
          <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
            My Properties - Manage Properties - Add New Property - Staff
          </button>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-black px-3 py-2 focus:outline-none"
          />
        </div>

        <div className="flex gap-6 mb-10">
          <div className="max-w-[600px] h-[400px] overflow-y-scroll grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-x-3 gap-y-4 px-3">
            {userData.map((item, index) => (
              <div key={index} className="relative mb-5 ">
                <img
                  src={item.url}
                  alt=""
                  className="w-[90px]  h-[90px] object-cover rounded-full mx-auto"
                />
                <div
                  onClick={() => handleIconClick(index)}
                  className="absolute top-14 right-0  cursor-pointer w-[25px] h-[25px] flex items-center justify-center bg-red-900 hover:bg-red-800  text-white rounded-full"
                >
                  <FiPlus />
                </div>
                {visibleIndex === index && (
                  <div
                    ref={containerRef}
                    className="absolute w-[100px] h-[100px] z-50 bg-white shadow-2xl rounded-lg top-[120px] border left-1/2 transform -translate-x-1/2 flex flex-col gap-y-2 justify-center items-center"
                  >
                    <span className="text-blue-500 border-b border-blue-400 cursor-pointer">
                      Edit
                    </span>
                    <span className="text-blue-500 border-b border-blue-400 cursor-pointer">
                      Delete
                    </span>
                  </div>
                )}
                <p className="text-center mt-2">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-7">
            <div className="flex items-center justify-center w-full">
              <div
                className="w-[50px] h-[50px] flex items-center justify-center bg-red-900 hover:bg-red-800  text-white rounded-full cursor-pointer relative group"
                onClick={handlePlusClick}
              >
                <FiPlus className="text-4xl text-white" />
                <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-max bg-yellow-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  Add New Staff
                </div>
              </div>
            </div>
          </div>
        </div>

        {formVisible && (
          <div
            ref={formRef}
            className="fixed inset-0 flex lg:justify-end justify-center items-center bg-gray-900 bg-opacity-50 z-[500] "
          >
            {/* h-[500px] overflow-y-scroll scrollbar-none */}
            <div className="bg-white p-3 rounded-lg shadow-2xl  max-w-lg mx-4 mt-[60px] transform transition-all duration-300 relative  ">
              <h2 className="my-1 text-center font-semibold text-2xl">
                Add New Staff
              </h2>
              <form className="">
                <FormSelect
                  options={[{ value: "1", label: "Select Property" }]}
                />
                <FormInput type="text" placeholder="Enter Full Name" />
                <FormInput
                  type="text"
                  placeholder="Staff ID System generated"
                />
                <FormInput type="text" placeholder="Enter Full Address" />
                <FormInput type="text" placeholder="Enter Phone Number" />
                <FormInput type="email" placeholder="Enter Email" />
                <FormSelect options={[{ value: "1", label: "Select Role" }]} />
                <FormInput type="text" placeholder="Enter Monthly Salary" />
                <FormInput type="text" placeholder="Enter Aadhar Number" />
                <FormInput type="text" placeholder="Enter PAN Number" />
                <div className="px-4 py-2 flex gap-x-8 mb-2">
                  <button className="px-2 py-2  bg-red-900 hover:bg-red-800  text-white rounded-md">
                    Update Aadhaar
                  </button>
                  <button className="px-2 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md">
                    Update PAN
                  </button>
                </div>
                <div className="px-4 mb-2">
                  <button className="px-2 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md w-full">
                    Save Staff
                  </button>
                </div>
              </form>
              <button
                onClick={() => setFormVisible(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        <div className="max-w-[600px]">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-4">
            <div>
              <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl mb-4">
                Emergency Co..
              </button>
              {data[0].map((section, index) => (
                <Section
                  key={index}
                  title={section.title}
                  items1={section.items_1}
                  items2={section.items_2}
                />
              ))}
            </div>
            <div>
              <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl mb-4">
                Daily Help
              </button>
              {data[1].map((section, index) => (
                <Section
                  key={index}
                  title={section.title}
                  items1={section.items_1}
                  items2={section.items_2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mx-4 sm:mx-6 md:mx-8 lg:mx-12 mb-4 gap-5">
        <button
          className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md text-sm sm:text-base"
          onClick={() => history.back()}
        >
          Back
        </button>
        <button className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md text-sm sm:text-base">
          Save
        </button>
      </div>
    </>
  );
};

export default Add_Property;
