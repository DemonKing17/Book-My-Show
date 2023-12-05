import React, { useContext, useState } from "react";

import { MovieContext } from "../context/MovieContext/MovieContext";

const MovieForm = () => {
  const { createMoviesDetails } = useContext(MovieContext);
  //form data
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    release_date: "",
    ending_date: "",
    img: null,
    category: "",
  });
  //Destructure
  const { title, summary, release_date, ending_date, img, category } = formData;

  //onChange
  const onChangeInput = (e) => {
    if (e.target.name === "img") {
      const selectedFile = e.target.files[0];
      setFormData({ ...formData, img: selectedFile });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  //Handle submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!title || !summary || !release_date || !ending_date || !category) {
      return alert("Please provide all details");
    }
    createMoviesDetails(formData);
  };
  return (
    <>
      <section className="h-full bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container md:px-12 md:py-12 md:mx-auto h-">
          <div className="mx-auto md:px-12 bg-white rounded-3xl flex justify-center items-center flex-col bg-opacity-20 md:h-full ">
            <div className="mx-auto  ">
              <p className="font-sans font-black leading-5 md:py-6 py-2 md:text-4xl text-2xl text-center">
                Add Movies
              </p>
            </div>
            <form className="md:w-1/3 w-2/3 mt-4" onSubmit={onSubmitHandler}>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="img"
                >
                  Image:
                </label>
                <input
                  onChange={onChangeInput}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="file"
                  name="img"
                  accept="image/*"
                ></input>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="title"
                >
                  Title:
                </label>
                <input
                  onChange={onChangeInput}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="text"
                  name="title"
                  value={title}
                ></input>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="summary"
                >
                  Summary:
                </label>
                <input
                  onChange={onChangeInput}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="text"
                  name="summary"
                  value={summary}
                ></input>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="category"
                >
                  Category:
                </label>
                <input
                  onChange={onChangeInput}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="text"
                  name="category"
                  value={category}
                ></input>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="release_date"
                >
                  Releasing Date:
                </label>
                <input
                  onChange={onChangeInput}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="date"
                  name="release_date"
                  value={release_date}
                ></input>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="ending_date"
                >
                  Ending Date:
                </label>
                <input
                  onChange={onChangeInput}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="date"
                  name="ending_date"
                  value={ending_date}
                ></input>
              </div>
              <div className="mb-6"></div>
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

export default MovieForm;
