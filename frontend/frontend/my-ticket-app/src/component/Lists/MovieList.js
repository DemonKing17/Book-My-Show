import { Link } from "react-router-dom";

const MovieList = (movies) => {
  //   const { getMovie, getMovieDetails } = useContext(MovieContext);
  //   const [title, setTitle] = useState("");

  //   const onChangeInput = (e) => {
  //     setTitle({ title: e.target.value });
  //   };

  //   useEffect(() => {
  //     getMovieDetails();
  //   });

  //   const onSubmitHandler = (e) => {
  //     e.preventDefault();
  //     if (!title) {
  //       return alert("Please provide Movie Name");
  //     } else {
  //       getMovie(title);
  //     }
  //   };
  return (
    <>
      <section className="h-full bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container md:px-12 md:py-12 md:mx-auto h-">
          <div className="mx-auto md:px-12 bg-white rounded-3xl bg-opacity-20 md:h-full ">
            <div className="mx-auto  ">
              <p className="font-sans font-black leading-5 md:py-6 py-2 md:text-4xl text-2xl text-center">
                Movies
              </p>
            </div>
            <div className="md:max-w-sm mx-auto md:mt-8 p-4 flex gap-6">
              <input
                type="text"
                placeholder="Search..."
                className="md:w-full p-1 border border-gray-300 rounded"
                name="titles"
              />
              <button className="bg-white p-2 rounded-2xl hover:bg-black hover:text-white justify-end">
                Search
              </button>
            </div>
            <div className="px-3 py-6">
              <div className="flex-row flex-wrap flex justify-evenly gap-5">
                <div className="md:w-60 md:h-96 flex flex-col justify-center align-center ">
                  <Link to={`/theater/${movies?.id}`}>
                    <p className="md:w-56 w-40 h-60 md:h-80 bg-white"></p>
                    <p className="text-white">Movie Name</p>
                    <p className="text-white">Category</p>
                  </Link>
                </div>
                <div className="md:w-60 md:h-96 flex flex-col justify-center align-center ">
                  <Link to={`/theater/${movies?.id}`}>
                    <p className="md:w-56 w-40 h-60 md:h-80 bg-white"></p>
                    <p className="text-white">Movie Name</p>
                    <p className="text-white">Category</p>
                  </Link>
                </div>
                <div className="md:w-60 md:h-96 flex flex-col justify-center align-center ">
                  <Link to={`/theater/${movies?.id}`}>
                    <p className="md:w-56 w-40 h-60 md:h-80 bg-white"></p>
                    <p className="text-white">Movie Name</p>
                    <p className="text-white">Category</p>
                  </Link>
                </div>
                <div className="md:w-60 md:h-96 flex flex-col justify-center align-center ">
                  <Link to={`/theater/${movies?.id}`}>
                    <p className="md:w-56 w-40 h-60 md:h-80 bg-white"></p>
                    <p className="text-white">Movie Name</p>
                    <p className="text-white">Category</p>
                  </Link>
                </div>
                <div className="md:w-60 md:h-96 flex flex-col justify-center align-center ">
                  <Link to={`/theater/${movies?.id}`}>
                    <p className="md:w-56 w-40 h-60 md:h-80 bg-white"></p>
                    <p className="text-white">Movie Name</p>
                    <p className="text-white">Category</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieList;
