import React from "react";
import { LuPencilLine } from "react-icons/lu";

const blocks = [
  { blockType: "Block A", name: "Kailash Block" },
  { blockType: "Block B", name: "Nanda Block" },
  { blockType: "Block C", name: "Kishor Block" },
];

const BlockItem = ({ block }) => (
  <div className="flex gap-5 sm:gap-20  mt-4 text-nowrap items-center">
    <h3 className="text-md sm:text-lg">{block.blockType}</h3>
    <div className="flex items-center text-lg gap-5 cursor-pointer">
      <select
        className="block w-36 border-2 px-2 py-2 appearance-none outline-none cursor-pointer text-[15px]"
        disabled
      >
        <option>{block.name}</option>
      </select>
      <LuPencilLine size={20} />
    </div>
  </div>
);

const Manage_Block = () => (
  <section className="w-full">
    <div className="px-5 rounded-lg bg-white">
      <div className="mb-4">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg xs:text-xl text-nowrap">
          My Properties - Manage Blocks
        </button>
      </div>
      <div className="mt-12 mb-3">
        <div className="flex gap-5 sm:gap-20 items-center text-nowrap">
          <h3 className="text-md lg:text-lg">Property</h3>
          <select
            className="block w-40 border-2 px-2 py-2 outline-none appearance-none cursor-pointer text-[15px]"
            disabled
          > {/* <option value="">Select a Property</option> */}
            <option>Ankit PG</option>
          </select>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-xl">Blocks Available</h3>
          {blocks.map((block, index) => (
            <BlockItem key={index} block={block} />
          ))}
        </div>
        <div>
          <button className="px-4 py-2 xs:w-auto w-full bg-red-900 hover:bg-red-800  text-white rounded-md  sm:text-base">
            Add Blocks
          </button>
        </div>
      </div>
    </div>
    <div className="flex justify-end xs:flex-row flex-col px-5 sm:mx-6 md:mx-8 lg:mx-12 mb-4 gap-3">
      <button
        className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md  sm:text-base"
        onClick={() => history.back()}
      >
        Back
      </button>
      <button className="px-4 py-2 bg-red-900 hover:bg-red-800  text-white rounded-md  sm:text-base">
        Save
      </button>
    </div>
  </section>
);

export default Manage_Block;
