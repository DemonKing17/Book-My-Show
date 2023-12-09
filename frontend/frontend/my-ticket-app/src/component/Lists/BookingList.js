import React, { useContext, useEffect } from "react";
import { BookingContext } from "../context/BookingContext/BookinContext";

const BookingList = () => {
  const { getBookingDetails, booking } = useContext(BookingContext);
  useEffect(() => {
    getBookingDetails();
  });
  return (
    <>
      <section>
        <div className="container md:px-12 md:py-12 md:mx-auto h-">
          <div className="mx-auto md:px-12 bg-white rounded-3xl bg-opacity-20 md:h-screen ">
            <div className="mx-auto  ">
              <p className="font-sans font-black leading-5 md:py-6 p-3 md:text-4xl text-2xl text-center">
                Bookings
              </p>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th className="border-2 p-6 text-left">ID</th>
                    <th className="border-2 p-6 text-left">Booked Seats</th>
                    <th className="border-2 p-6 text-left">Booked Time</th>
                  </tr>
                </thead>
                <tbody>
                  {booking?.map((item) => (
                    <tr key={item.id}>
                      <td className="border-2 px-6 text-left">{item.id}</td>
                      <td className="border-2 px-6 text-left">
                        {item.booked_seats}
                      </td>
                      <td className="border-2 px-6 text-left">
                        {item.booking_time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingList;
