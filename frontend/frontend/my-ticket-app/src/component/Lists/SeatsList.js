import React, { useContext, useEffect, useState } from "react";

import { ShowContext } from "../context/ShowContext/ShowContext";

const SeatsList = () => {
  const { getSeatsDetails, createBookingDetails, show } =
    useContext(ShowContext);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (index) => {
    // Check if the seat is already selected
    const isSelected = selectedSeats.includes(index);

    if (isSelected) {
      // If selected, remove it from the list
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((seatIndex) => seatIndex !== index)
      );
    } else {
      // If not selected, add it to the list
      setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, index]);
    }
  };
  const param = window.location.pathname;
  const arr = param.split("/");
  var S_id = arr[arr.length - 1];
  S_id = parseInt(S_id, 10);
  useEffect(() => {
    getSeatsDetails(S_id);
  }, []);

  const seatsTotal = [];
  for (let index = 0; index <= show?.theater_capacity; index++) {
    seatsTotal[index] = false;
  }
  const onClickHandler = () => {
    createBookingDetails(S_id, selectedSeats);
  };
  if (show?.selected_seat != null) {
    let array = show?.selected_seat?.split(",").map((item) => item.trim());
    for (let i = 0; i < array.length; i++) {
      seatsTotal[array[i]] = true;
    }
  }

  return (
    <>
      <section className="">
        <div className="container md:px-12 md:py-12 md:mx-auto">
          <div className="mx-auto md:px-12 bg-white rounded-3xl bg-opacity-20 md:h-full ">
            <div className="mx-auto  ">
              <p className="font-sans font-black leading-5 md:py-6 p-3 md:text-4xl text-2xl text-center">
                Seats
              </p>
            </div>
            <div className="m-4 flex flex-wrap gap-2">
              {seatsTotal.map((item, index) => {
                return (
                  <div key={index}>
                    {item === true ? (
                      <div
                        key={index}
                        className="w-8 h-8 border-2 text-center bg-black text-white"
                        value={index}
                      >
                        {index}
                      </div>
                    ) : (
                      <button
                        key={index}
                        onClick={() => toggleSeat(index)}
                        className={`w-8 h-8 border-2 text-center ${
                          selectedSeats.includes(index)
                            ? "bg-teal-700"
                            : "bg-white"
                        }`}
                        value={item}
                      >
                        {index}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="text-center py-16 font-bold ">
              Screen
              <p className="border-b-8 border-spacing-8 rounded-full border-blue-500"></p>
            </div>
            <div className="text-center">
              <button
                className="w-4/5 md:w-1/5 text-3xl mb-12 bg-rose-900 text-white p-3 rounded-3xl hover:text-4xl "
                onClick={onClickHandler}
              >
                Book Seats
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeatsList;
