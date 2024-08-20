import React from "react";
import { GoArrowBoth } from "react-icons/go";
import { Link } from "react-router-dom";
import img_1 from "../../../assets/img-1.jpeg";
import img_2 from "../../../assets/img-2.jpeg";
import img_3 from "../../../assets/img-3.jpeg";
import img_4 from "../../../assets/img-4.jpeg";
import img_5 from "../../../assets/img-5.jpeg";

const complaints = [
  { id: 1, name: 'Akio', img: img_1, description: 'Lorem ipsum dolor sit adipisicing elit. Veniam, a?' },
  { id: 2, name: 'Andres', img: img_2, description: 'Lorem ipsum dolor sit adipisicing elit. Veniam, a?' },
  { id: 3, name: 'Amir', img: img_3, description: 'Lorem ipsum dolor sit adipisicing elit. Veniam, a?' },
  { id: 4, name: 'Diego', img: img_4, description: 'Lorem ipsum dolor sit adipisicing elit. Veniam, a?' },
  { id: 4, name: 'Angel', img: img_5, description: 'Lorem ipsum dolor sit adipisicing elit. Veniam, a?' },
];

const ComplaintItem = ({ name, img, description }) => (
  <div className="flex items-center gap-2 mt-2 bg-slate-300/20 p-2 rounded-md ">
    <img
      src={img}
      alt={`Avatar of ${name}`}
      className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer object-cover"
    />
    <div>
      <p className="text-sm font-semibold">{name}</p>
      <p className="text-sm text-black/70 mt-[2px]">{description}</p>
    </div>
  </div>
);

function DashboardComplaints() {
  return (
    <div className="border-2 rounded relative p-3 ">
      <div className="absolute top-2 right-2 text-3xl rotate-[140deg]">
        <Link to="/complaints">
          <GoArrowBoth />
        </Link>
      </div>
      <h3 className="text-2xl font-semibold">Open Complaints</h3>
      <div className="flex flex-col gap-1">
        {complaints.map(({ id, name, img, description }) => (
          <ComplaintItem key={id} name={name} img={img} description={description} />
        ))}
      </div>
    </div>
  );
}

export default DashboardComplaints;
