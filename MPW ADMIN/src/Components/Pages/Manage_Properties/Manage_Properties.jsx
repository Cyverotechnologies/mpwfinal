import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const propertiesData = [
  {
    icon: <IoHomeOutline />,
    description: "Arun PG 2012 West Avenue, San Diego, CA 92122",
  },
  {
    icon: <IoHomeOutline />,
    description: "Arun PG 2012 West Avenue, San Diego, CA 92122",
  },
];

const PropertyCard = ({ icon, description }) => (
  <div className="px-4 py-6 bg-red-50 rounded-lg w-full">
    <div className="flex items-center gap-x-3 mb-3">
      <span className="text-3xl text-red-400">{icon}</span>
      <p className="text-lg font-semibold text-red-400">{description}</p>
    </div>
    <div className="flex gap-x-4 justify-center mt-5">
      <button className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white  rounded-md text-sm">
        View
      </button>
      <button className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md text-sm">
        Edit
      </button>
    </div>
  </div>
);

const Manage_Properties = () => {
  return (
    <>
      <section className="w-full ">
        <div className="px-5 rounded-lg">
          <div className="mb-4">
            <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
              My Properties - Manage Properties
            </button>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {propertiesData.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            <PropertyCard
              icon={<IoHomeOutline />}
              description="Arun PG 2012 West Avenue, San Diego, CA 92122"
            />
            <div className="flex items-center justify-center py-6 w-full">
              <Link to={"/properties/manage_properties/add_property"}>
                {" "}
                <div className="w-[50px] h-[50px] flex items-center justify-center bg-red-900 hover:bg-red-800  text-white rounded-full cursor-pointer relative group">
                  <FiPlus className="text-4xl text-white" />
                  <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-max bg-yellow-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    Add New Property
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-end mx-4 sm:mx-6 md:mx-8 lg:mx-12 mb-4">
            <button
              className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md text-sm sm:text-base"
              onClick={() => history.back()}
            >
              Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Manage_Properties;
