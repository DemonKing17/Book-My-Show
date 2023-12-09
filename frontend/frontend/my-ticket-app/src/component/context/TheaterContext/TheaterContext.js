import { createContext, useReducer } from "react";
import { API_URL_THEATER } from "../../../utils/apiUrl";
import axios from "axios";
import {
  CREATE_THEATER_FAIL,
  CREATE_THEATER_SUCESS,
  FETCH_THEATER_FAIL,
  FETCH_THEATER_SUCESS,
} from "./theaterActionTypes";

export const TheaterContext = createContext();

const INITIAL_STATE = {
  userAuth: JSON.parse(localStorage.getItem("userAuth")),
  loading: false,
  error: null,
  theaters: [],
  theater: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_THEATER_SUCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        theater: payload,
      };
    }
    case CREATE_THEATER_FAIL: {
      return {
        ...state,
        movie: null,
        loading: false,
        error: payload,
      };
    }
    case FETCH_THEATER_SUCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        theater: payload,
      };
    }
    case FETCH_THEATER_FAIL: {
      return {
        ...state,
        theaterss: null,
        loading: false,
        error: payload,
      };
    }

    default:
      return state;
  }
};

export const TheaterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  //postMovie
  const createTheaterDetails = async (formData) => {
    const config = {
      headers: {
        "content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        token: `${state?.userAuth}`,
      },
    };
    try {
      const res = await axios.post(
        `${API_URL_THEATER}/create`,
        formData,
        config
      );
      console.log(res);
      if (res?.status === 200) {
        dispatch({
          type: CREATE_THEATER_SUCESS,
          payload: res?.data,
        });
      }
      window.location.href = "/";
    } catch (error) {
      dispatch({
        type: CREATE_THEATER_FAIL,
        payload: error?.data?.response?.message,
      });
    }
  };

  //GetMovie List
  const getTheaterDetails = async (param) => {
    const config = {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        token: `${state?.userAuth}`,
      },
    };
    try {
      const res = await axios.get(`${API_URL_THEATER}/${param}`, config);
      if (res?.status === 200) {
        var data = res?.data;
        dispatch({
          type: FETCH_THEATER_SUCESS,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_THEATER_FAIL,
        payload: error?.data?.response?.message,
      });
    }
  };

  return (
    <TheaterContext.Provider
      value={{
        createTheaterDetails,
        getTheaterDetails,
        theater: state?.theater,
      }}
    >
      {children}
    </TheaterContext.Provider>
  );
};
export default TheaterContextProvider;
