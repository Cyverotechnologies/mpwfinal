import React, { useState } from "react";
import img_1 from "../../assets/img-1.jpeg";
const Profile = () => {
  const [image, setImage] = useState(false);
  console.log(image);

  return (
    <section className="px-5">
      <div className="mb-3">
        <button className="px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl">
          My Profile
        </button>
      </div>
      <div className="w-full flex flex-col  md:flex-row gap-5 mb-3 ">
        <div className="lg:basis-3/5 w-full border px-3 py-4 shadow-md">
          <div className="flex items-center gap-x-2 mb-2">
            <img
              src={image ? URL.createObjectURL(image) : img_1}
              className="sm:w-24 sm:h-24 w-20 h-20 object-cover"
              alt="Profile"
            />
            <div>
              <h2 className="mb-2 sm:text-xl">Upload your photo</h2>
              <p className="mb-4 text-xs">
                Your photos should be in PNG or JPG format
              </p>
              <div className="flex flex-nowrap">
                <label htmlFor="change_image" className=" sm:px-2 sm:py-2 text-nowrap px-1 py-1 sm:text-[18px] text-xs text-red-500 border-red-500  border-2 rounded-lg">
                  Change Image
                </label>
                <input
                  type="file"
                  onChange={(e) => {
                    setImage(e.target?.files[0]);
                  }}
                  className="hidden"
                  id="change_image"
                />
                <button
                  className="sm:text-[18px] mx-2 text-xs px-4 py-2  rounded-md  hover:bg-gray-300"
                  onClick={() => setImage(false)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <form action="">
            <div className="flex flex-col mb-2">
              <label
                htmlFor="fullName"
                className="sm:text-xl font-semibold mb-1"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Your full name"
                className="w-full border-2 px-2 py-2 bg-slate-100 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="email" className="sm:text-xl font-semibold mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full border-2 px-2 py-2 bg-slate-100 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="phone" className="sm:text-xl font-semibold mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                type="number"
                placeholder="Your phone number"
                className="w-full border-2 px-2 py-2 bg-slate-100 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="secondaryPhone"
                className="sm:text-xl font-semibold mb-1"
              >
                Secondary Phone Number
              </label>
              <input
                id="secondaryPhone"
                type="text"
                placeholder="Your secondary phone number"
                className="w-full border-2 px-2 py-2 bg-slate-100 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="address"
                className="sm:text-xl font-semibold mb-1"
              >
                Full Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Your full address with landmark"
                className="w-full border-2 px-2 py-2 bg-slate-100 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="aadhar" className="sm:text-xl font-semibold mb-1">
                Aadhar Number
              </label>
              <input
                id="aadhar"
                type="number"
                placeholder="Your Aadhar Number"
                className="w-full border-2 px-2 py-2 bg-slate-100 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="pan" className="sm:text-xl font-semibold mb-1">
                PAN Number
              </label>
              <input
                id="pan"
                type="number"
                placeholder="Your PAN number"
                className="w-full border-2 px-2 py-2 bg-slate-100 focus:outline-none"
              />
            </div>
          </form>
        </div>
        <div className="lg:basis-2/5 w-full flex flex-col gap-5">
          <div className="w-full px-6 py-9 border flex flex-col justify-center gap-5 shadow-md">
            <h2 className="font-bold text-xl">Upload Aadhar</h2>
            <div className="border-dashed border-2 flex flex-col items-center justify-center py-9">
              <h2 className="mb-2 text-xl font-semibold">Drop files here</h2>
              <p className="mb-4">Supported formats PNG, JPG</p>
              <span className="mb-2 text-xs font-bold">OR</span>
              <h3 className="text-red-600 font-semibold">Browse files</h3>
              <input
                type="file"
                className="cursor-pointer p-1 w-40 z-50 ml-5 opacity-0 -mt-6 border"
              />
            </div>
            <div className="flex justify-end gap-5">
            <button className="px-3 py-2  hover:bg-gray-300 rounded-lg">
                Cancel
              </button>
              <button className="px-3 py-2 bg-red-900 hover:bg-red-800  text-white rounded-lg">
                Upload
              </button>
            </div>
          </div>
          <div className="w-full px-6 py-9 border flex flex-col justify-center gap-5 shadow-md">
            <h2 className="font-bold text-xl">Upload PAN</h2>
            <div className="border-dashed border-2 flex flex-col items-center justify-center py-9">
              <h2 className="mb-2 text-xl font-semibold">Drop files here</h2>
              <p className="mb-4">Supported formats PNG, JPG</p>
              <span className="mb-2 text-xs font-bold">OR</span>

              <h3 className="text-red-600 font-semibold">Browse files</h3>
              <input
                type="file"
                className="cursor-pointer p-1 w-40 z-50 ml-5 opacity-0 -mt-6 border"
              />
            </div>
            <div className="flex justify-end gap-5">
              <button className="px-3 py-2  hover:bg-gray-300 rounded-lg">
                Cancel
              </button>
              <button className="px-3 py-2 bg-red-900 hover:bg-red-800  text-white rounded-lg">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-x-10 my-10">
        <button className="px-3 py-2 bg-red-900 hover:bg-red-800 text-white rounded-lg">
          Reset
        </button>
        <button className="px-3 py-2 bg-red-900 hover:bg-red-800  text-white rounded-lg">
          Save
        </button>
      </div>
    </section>
  );
};

export default Profile;
