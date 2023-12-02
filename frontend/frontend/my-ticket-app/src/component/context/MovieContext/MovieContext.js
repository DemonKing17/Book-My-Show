import { createContext, useReducer } from "react";
import { FETCH_MOVIE_FAIL, FETCH_MOVIE_SUCCESS } from "./movieActionTypes";
import { API_URL_USER } from "../../../utils/apiUrl";
import axios from "axios";

export const MovieContext = createContext();

const INITIAL_STATE = {
  userAuth: JSON.parse(localStorage.getItem("userAuth")),
  loading: false,
  error: null,
  movies: [],
  movie: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_MOVIE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        movie: payload,
      };
    }
    case FETCH_MOVIE_FAIL: {
      return {
        ...state,
        movie: null,
        loading: false,
        error: payload,
      };
    }

    default:
      return state;
  }
};
export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  //GetMovie List
  const getMovieDetails = async () => {
    const config = {
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${state?.userAuth.token}`,
      },
    };
    try {
      const res = await axios.get(`${API_URL_USER}/movies`, config);
      if (res?.data?.status === "success") {
        dispatch({
          type: FETCH_MOVIE_SUCCESS,
          payload: res?.data,
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_MOVIE_FAIL,
        payload: error?.data?.response?.message,
      });
    }
  };

  //get single movie detail
  const getMovie = async (title) => {
    const config = {
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${state?.userAuth.token}`,
      },
    };
    try {
      const res = await axios.get(`${API_URL_USER}/movie/${title}`, config);
      if (res?.data?.status === "success") {
        dispatch({
          type: FETCH_MOVIE_SUCCESS,
          payload: res?.data,
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_MOVIE_FAIL,
        payload: error?.data?.response?.message,
      });
    }
  };
  return (
    <MovieContext.Provider
      value={{ getMovie, getMovieDetails, movie: state?.movie }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
