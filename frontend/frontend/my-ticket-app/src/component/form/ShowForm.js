import React, { useContext, useState } from "react";
import { ShowContext } from "../context/ShowContext/ShowContext";

const ShowForm = () => {
  const { createShowDetails } = useContext(ShowContext);

  const [formData, setFormData] = useState({
    movie_id: "",
    theater_id: "",
    show_time: "",
    show_date: "",
    price: "",
  });

  const { movie_id, theater_id, show_date, show_time, price } = formData;

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        name === "price" || name === "movie_id" || name === "theater_id"
          ? parseInt(value, 10)
          : name === "show_time"
          ? value
          : value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!movie_id || !theater_id || !show_date || !show_time || !price) {
      return alert("please provide all details");
    }
    createShowDetails(formData);
  };
  return (
    <>
      <section className="">
        <div className="container md:px-12 md:py-12 md:mx-auto h-">
          <div className="mx-auto md:px-12 bg-white rounded-3xl flex justify-center items-center flex-col bg-opacity-20 md:h-full ">
            <div className="mx-auto  ">
              <p className="font-sans font-black leading-5 md:py-6 py-2 md:text-4xl text-2xl text-center">
                Add Show
              </p>
            </div>
            <form className="md:w-1/3 w-2/3 mt-4" onSubmit={onSubmitHandler}>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="movie_id"
                >
                  Movie ID:
                </label>
                <input
                  onChange={onChangeInput}
                  value={movie_id}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-opacity-50"
                  type="text"
                  name="movie_id"
                  placeholder="Movie Id"
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="theater_id"
                >
                  Theater ID:
                </label>
                <input
                  onChange={onChangeInput}
                  value={theater_id}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-slate-700  focus:ring-opacity-50"
                  type="text"
                  name="theater_id"
                  placeholder="Theater Id"
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="show_time"
                >
                  Show Time:
                </label>
                <input
                  onChange={onChangeInput}
                  value={show_time}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-slate-700  focus:ring-opacity-50"
                  type="time"
                  name="show_time"
                ></input>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="show_date"
                >
                  Show Date:
                </label>
                <input
                  onChange={onChangeInput}
                  value={show_date}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-slate-700  focus:ring-opacity-50"
                  type="date"
                  name="show_date"
                ></input>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="price"
                >
                  Price:
                </label>
                <input
                  onChange={onChangeInput}
                  value={price}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-slate-700  focus:ring-opacity-50"
                  type="text"
                  name="price"
                  placeholder="ticket price"
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

export default ShowForm;
