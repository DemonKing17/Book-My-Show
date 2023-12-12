import React, { useState } from "react";
import { useContext } from "react";

import { TheaterContext } from "../context/TheaterContext/TheaterContext";

const TheaterForm = () => {
  const { createTheaterDetails } = useContext(TheaterContext);
  const [formData, setFormData] = useState({
    theater_name: "",
    capacity: "",
    location: "",
  });
  const { theater_name, capacity, location } = formData;
  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "capacity" ? parseInt(value, 10) : value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!theater_name || !capacity || !location) {
      return alert("Please provide all details");
    }
    createTheaterDetails(formData);
  };
  return (
    <>
      <section className="">
        <div className="container md:px-12 md:py-12 md:mx-auto h-">
          <div className="mx-auto md:px-12 bg-white flex justify-center items-center flex-col rounded-3xl bg-opacity-20 md:h-full ">
            <div className="mx-auto  ">
              <p className="font-sans font-black leading-5 md:py-6 py-2 md:text-4xl text-2xl text-center">
                Add Theater
              </p>
            </div>
            <form className="md:w-1/3 w-2/3 mt-4" onSubmit={onSubmitHandler}>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="theater_name"
                >
                  Theater Name:
                </label>
                <input
                  onChange={onChangeInput}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-slate-700  focus:ring-opacity-50"
                  type="text"
                  name="theater_name"
                  value={theater_name}
                  placeholder="Theater Name"
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="location"
                >
                  Location:
                </label>
                <input
                  onChange={onChangeInput}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-slate-700  focus:ring-opacity-50"
                  type="text"
                  name="location"
                  value={location}
                  placeholder="Theater Location"
                  required
                ></input>
              </div>

              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="capacity"
                >
                  Theater Capacity:
                </label>
                <input
                  onChange={onChangeInput}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-slate-700  focus:ring-opacity-50"
                  type="number"
                  name="capacity"
                  value={capacity}
                  placeholder="Theater capacity"
                  required
                ></input>
              </div>

              <button
                className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheaterForm;
