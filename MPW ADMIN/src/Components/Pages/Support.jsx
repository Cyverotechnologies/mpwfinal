import { IoIosCall } from "react-icons/io";
import { MdSmsFailed } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const Support = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col items-start gap-3 sm:px-5 py-10">
        <div
          className="w-full lg:w-1/2
              px-4 "
        >
          <div className="">
            <div>
              <h2 className="sm:text-4xl text-3xl font-bold mb-3">
                Need Support ?{" "}
              </h2>
              <p className="mb-2 text-xl">Fill in the form to get in touch</p>
            </div>
            <div className="md:h-[680px]">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://media.istockphoto.com/id/1443305526/photo/young-smiling-man-in-headphones-typing-on-laptop-keyboard.webp?b=1&s=170667a&w=0&k=20&c=tLmgEUrp9MgRwnKaJjRgN3ID0X7b-MFTjueVLKLvQdo="
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center ">
          <div className="w-full px-4 md:px-8 lg:px-4">
            <form className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">
                Hello Again!
              </h1>
              <p className="text-sm font-normal text-gray-600 mb-8">
                Welcome Back
              </p>
              <div className="flex md:flex-row flex-col md:justify-between md:gap-2 gap-y-4 mb-4">
                <div className="w-full">
                  <label htmlFor="name" className="mb-2 block">
                    First Name
                  </label>
                  <input
                    id="name"
                    className=" px-3 py-2 w-full outline-none border "
                    type="text"
                    name="email"
                    placeholder="First Name "
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="name" className="mb-2 block">
                    Last Name
                  </label>
                  <input
                    id="name"
                    className=" px-3 py-2 w-full outline-none border "
                    type="email"
                    name="email"
                    placeholder="Last Name "
                  />
                </div>
              </div>
              <label htmlFor="email" className="mb-2 block">
                Email
              </label>
              <div className="flex items-center border mb-4 py-2 px-3">
                <input
                  id="email"
                  className=" pl-2 w-full outline-none border-none"
                  type="email"
                  name="email"
                  placeholder="Email "
                />
              </div>
              <label htmlFor="email" className="mb-2 block">
                Phone number
              </label>
              <div className="flex items-center border mb-4 py-2 px-3">
                <input
                  id="number"
                  className=" pl-2 w-full outline-none border-none"
                  type="number"
                  name="number"
                  placeholder="Phone Number "
                />
              </div>
              <label htmlFor="email" className="mb-2 block">
                Which topic best fit for your needs?
              </label>
              <select
                name=""
                id=""
                className="w-full px-3 py-2 border mb-3 text-gray-400"
              >
                {" "}
                select
                <optgroup>
                  <option value="" className="w-full">
                    Which topic best fit for your need?{" "}
                  </option>
                  <option value="" className="w-full">
                    Topic two{" "}
                  </option>
                  <option value="" className="w-full">
                    Three{" "}
                  </option>
                </optgroup>
              </select>
              <div className=""></div>

              <label htmlFor="message" className="block mb-2  ">
                How can we help?
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full  text-gray-900 border focus:outline-none"
                placeholder="Please share what you want us to help"
              ></textarea>

              <button
                type="submit"
                className="block w-full  mt-5 py-2 rounded-lg  bg-red-900 hover:bg-red-800  text-white hover:-translate-y-1 transition-all duration-500 hover:text-white  font-semibold mb-2"
              >
                Submit
              </button>

              <div className="flex justify-around mt-8">
                <div>
                  <IoIosCall className="text-5xl text-blue-500" />
                </div>
                <div>
                  <MdSmsFailed className="text-5xl text-blue-500" />
                </div>
                <div>
                  <GiProgression className="text-5xl text-blue-500" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
