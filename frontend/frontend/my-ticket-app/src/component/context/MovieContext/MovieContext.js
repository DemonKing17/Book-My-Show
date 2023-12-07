import { createContext, useReducer } from "react";
import {
  CREATE_MOVIES_FAIL,
  CREATE_MOVIES_SUCCESS,
  FETCH_MOVIE_FAIL,
  FETCH_MOVIE_SUCCESS,
} from "./movieActionTypes";
import { API_URL_MOVIE } from "../../../utils/apiUrl";
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
    case CREATE_MOVIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        movie: payload,
      };
    }
    case CREATE_MOVIES_FAIL: {
      return {
        ...state,
        movie: null,
        loading: false,
        error: payload,
      };
    }
    case FETCH_MOVIE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        movies: payload,
      };
    }
    case FETCH_MOVIE_FAIL: {
      return {
        ...state,
        movies: null,
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

  //postMovie
  const createMoviesDetails = async (formData) => {
    const config = {
      headers: {
        "content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        token: `${state?.userAuth}`,
      },
    };
    try {
      const res = await axios.post(`${API_URL_MOVIE}/create`, formData, config);
      if (res?.status === 200) {
        dispatch({
          type: CREATE_MOVIES_SUCCESS,
          payload: res?.data,
        });
      }
    } catch (error) {
      dispatch({
        type: CREATE_MOVIES_FAIL,
        payload: error?.data?.response?.message,
      });
    }
  };

  //GetMovie List
  const getMovieDetails = async () => {
    const config = {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        token: `${state?.userAuth}`,
      },
    };
    try {
      const res = await axios.get(`${API_URL_MOVIE}`, config);
      if (res?.status === 200) {
        var data = res?.data;
        dispatch({
          type: FETCH_MOVIE_SUCCESS,
          payload: data,
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
        token: `${state?.userAuth}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    try {
      const res = await axios.get(`${API_URL_MOVIE}/${title}`, config);
      if (res?.status === 200) {
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
      value={{
        getMovie,
        getMovieDetails,
        createMoviesDetails,
        movies: state?.movies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
