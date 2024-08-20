import React from "react";

import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import DashboardAvatarDropdown from "./DashboardAvatarDropdown";

function DashboardTopHeader({ setAsideToggleActive }) {
  return (
    <div className="px-5 my-5 ">
      <div className="w-full flex justify-between lg:justify-end items-center mb-5">
        <div
          className="cursor-pointer text-2xl lg:hidden "
          onClick={() => setAsideToggleActive(true)}
        >
          <FaBars />
        </div>
        <div className="lg:hidden block">
          <DashboardAvatarDropdown />
        </div>
      </div>
      <div className="lg:flex lg:justify-between  lg:items-center grid grid-cols-2  mt-3 lg:mt-0  gap-5 lg:gap-0 ">
        <h2 className=" font-semibold sm:text-2xl text-lg">Smart PG</h2>
        <h2 className="flex items-center font-semibold sm:text-2xl text-lg ms-auto lg:ms-0">
          PG 112256
        </h2>
        <h2 className="flex items-center font-semibold sm:text-2xl text-lg  ">
          License Validity - 200 Day
        </h2>
        <div className="lg:block hidden">
        <DashboardAvatarDropdown />
      </div>
      </div>
     
    </div>
  );
}

export default DashboardTopHeader;
