import { createContext, useReducer } from "react";

import axios from "axios";
import { API_URL_BOOKING } from "../../../utils/apiUrl";

export const BookingContext = createContext();

const INITIAL_STATE = {
  userAuth: JSON.parse(localStorage.getItem("userAuth")),
  loading: false,
  error: null,
  booking: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_BOOKING_SUCCESS": {
      return {
        ...state,
        loading: false,
        error: null,
        booking: payload,
      };
    }
    case "FETCH_BOOKING_FAIL": {
      return {
        ...state,
        booking: null,
        loading: false,
        error: payload,
      };
    }

    default:
      return state;
  }
};
export const BookingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  //GetMovie List
  const getBookingDetails = async () => {
    const config = {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        token: `${state?.userAuth}`,
      },
    };
    try {
      const res = await axios.get(`${API_URL_BOOKING}/all-booking`, config);
      if (res?.status === 200) {
        var data = res?.data;
        dispatch({
          type: "FETCH_BOOKING_SUCCESS",
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: "FETCH_BOOKING_FAIL",
        payload: error?.data?.response?.message,
      });
    }
  };

  return (
    <BookingContext.Provider
      value={{
        getBookingDetails,
        booking: state?.booking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
export default BookingContextProvider;
