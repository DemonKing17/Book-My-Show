import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext/MovieContext";
import { useContext, useEffect, useState } from "react";

const MovieList = () => {
  const { getMovie, getMovieDetails, movies, mov } = useContext(MovieContext);
  const [formData, setformData] = useState({
    title: "",
  });

  const { title } = formData;
  useEffect(() => {
    getMovieDetails();
  }, []);

  const onChangeInput = (e) => {
    setformData(e.target.value);
  };
  let x = false;
  const onClickHandler = (e) => {
    if (!formData?.title) {
      return alert("Please provide Movie Name");
    } else {
      x = true;
      getMovie(formData);
    }
  };
  return (
    <>
      <section className="">
        <div className="container md:px-12 md:py-12 md:mx-auto h-">
          <div className="mx-auto md:px-12 bg-white rounded-3xl bg-opacity-20 md:h-full ">
            <div className="  ">
              <p className="font-sans font-black leading-5 md:py-3 py-2 md:text-4xl text-2xl text-center">
                Movies
              </p>
            </div>
            <div className="md:max-w-sm mx-auto md:mt-4 p-4 flex gap-6">
              <input
                type="text"
                placeholder="Search..."
                className="md:w-full p-1 border border-gray-300 rounded"
                name="titles"
                onChange={onChangeInput}
                value={title}
              />
              <button
                onClick={onClickHandler}
                className="bg-slate-400 p-2 rounded-2xl hover:bg-black hover:text-white justify-end"
              >
                Search
              </button>
            </div>
            <div className="px-3 py-6">
              {x ? (
                <div className="flex-row flex-wrap flex justify-evenly gap-5">
                  <div className="md:w-60 md:h-96 flex flex-col justify-center align-center ">
                    <Link to={`/theaters/${mov?.id}`}>
                      <p className="md:w-56 w-40 h-60 md:h-80 bg-black"></p>
                      <p className="">{mov?.title}</p>
                      <p className="">{mov?.category}</p>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex-row flex-wrap flex justify-evenly gap-5">
                  {movies?.movieList?.length > 0 ? (
                    movies?.movieList?.map((movie) => {
                      return (
                        <div
                          key={movie?.id}
                          className="md:w-60 md:h-96 flex flex-col justify-center align-center "
                        >
                          <Link to={`/theaters/${movie?.id}`}>
                            <img
                              className="md:w-56 w-40 h-60 md:h-80 "
                              alt={movie?.title}
                              src={movie?.img}
                            />
                            <p className="">{movie?.title}</p>
                            <p className="">{movie?.category}</p>
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <p>No Movies Available</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieList;
