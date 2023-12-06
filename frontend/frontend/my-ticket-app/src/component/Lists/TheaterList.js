import React, { useContext, useEffect } from "react";

import { TheaterContext } from "../context/TheaterContext/TheaterContext";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const TheaterList = () => {
  const { getTheaterDetails, theaters } = useContext(TheaterContext);

  const param = window.location.pathname;
  const arr = param.split("/");
  var M_id = arr[arr.length - 1];
  M_id = parseInt(M_id, 10);
  useEffect(() => {
    getTheaterDetails(M_id);
  }, []);
  return (
    <>
      <section className="h-screen bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container md:px-12 md:py-12 md:mx-auto h-">
          <div className="mx-auto md:px-12 bg-white rounded-3xl bg-opacity-20 md:h-screen ">
            <div className="mx-auto  ">
              <p className="font-sans font-black leading-5 md:py-6 p-3 md:text-4xl text-2xl text-center">
                Theater
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 mt-8">
              {theaters?.length > 0 &&
                theaters?.map((theater) => {
                  return (
                    <div className="w-4/5">
                      <Link to={`/shows/${M_id}/${theater?.id}`}>
                        <div className="md:h-20 h-15 bg-white flex flex-row justify-between mb-5 rounded-2xl">
                          <p className="md:p-4 p-3 md:text-4xl text-2xl">
                            {theater?.theater_name}
                          </p>
                          <p className="md:p-4 p-2 md:text-4xl text-2xl">
                            {theater?.location33333}
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TheaterList;
