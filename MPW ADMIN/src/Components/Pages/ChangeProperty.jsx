import React from "react";

// Reusable Property Item Component
const PropertyItem = ({ title, buttonColor,buttonTitle }) => (
  <div className="flex flex-col items-center">
    <div className="text-xl w-[150px] h-[50px] flex items-center justify-center bg-blue-200 mb-6">
      {title}
    </div>
    <button className={`px-2 py-2 ${buttonColor} rounded-lg`}>{buttonTitle}</button>
  </div>
);

const ChangeProperty = () => {
  // Define the properties for reuse
  const properties = [
    { title: "Ankit PG", buttonColor: "bg-green-500",buttonTitle:'Selected' },
    { title: "Ankit PG", buttonColor: "bg-red-900 hover:bg-red-800  text-white",buttonTitle:'Select'},
    { title: "Ankit PG", buttonColor: "bg-red-900 hover:bg-red-800  text-white",buttonTitle:'Select' },
  ];

  return (
    <section className="max-w-[600px] px-5 ">
      <div>
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl mb-[40px]">
          Change Property
        </button>
        <div className="flex flex-wrap gap-8">
          {properties.map((property, index) => (
            <PropertyItem
              key={index}
              title={property.title}
              buttonColor={property.buttonColor}
              buttonTitle={property.buttonTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChangeProperty;
