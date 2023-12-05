import { createContext } from "react";

export const TheaterContext = createContext();

const INITIAL_STATE = {
  userAuth: JSON.parse(localStorage.getItem("userAuth")),
  loading: false,
  error: null,
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
