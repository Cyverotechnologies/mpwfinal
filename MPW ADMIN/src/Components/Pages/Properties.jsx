import React from "react";
import { FaBuildingUser } from "react-icons/fa6";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { LuBuilding2 } from "react-icons/lu";
import { MdOutlineBedroomParent } from "react-icons/md";
import { PiBuildingApartmentBold } from "react-icons/pi";

import { Link } from "react-router-dom";

const myPropertiesArray = [
  {
    icon: <PiBuildingApartmentBold size={40} /> ,
    title: "Manage Properties",
    path: "/properties/manage_properties",
  },
  {
    icon: <HiOutlineBuildingOffice size={40} />,
    title: "Manage Block",
    path: "/properties/manage_block",
  },
  {
    icon: <MdOutlineBedroomParent size={40} />,
    title: "Manage Rooms",
    path: "/properties/manage_rooms",
  },
  {
    icon: <LuBuilding2 size={40} />,
    title: "Manage Floors",
    path: "/properties/manage_floors",
  },
];

const Properties = () => {
  return (
    <section className=" w-full px-5 mb-4">
      <div className=" md:max-w-[80%] lg:max-w-[70%]">
        <div className="mb-6 ">
          <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
            My Properties
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {myPropertiesArray.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="flex gap-4 justify-center items-center w-full h-[150px] border rounded-lg p-4 bg-red-300/40"
            >
              <div className="flex items-center gap-3">
                <p> {item.icon}</p>
                <h2 className=" text-lg font-bold">{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
