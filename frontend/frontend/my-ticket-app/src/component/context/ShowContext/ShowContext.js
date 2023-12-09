import { createContext, useReducer } from "react";
import { API_URL_SHOW } from "../../../utils/apiUrl";
import axios from "axios";

import {
  CREATE_SHOW_FAIL,
  CREATE_SHOW_SUCESS,
  FETCH_SHOW_FAIL,
  FETCH_SHOW_SUCESS,
} from "./showActionTypes";

export const ShowContext = createContext();

const INITIAL_STATE = {
  userAuth: JSON.parse(localStorage.getItem("userAuth")),
  loading: false,
  error: null,
  shows: [],
  show: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_SHOW_SUCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        show: payload,
      };
    }
    case CREATE_SHOW_FAIL: {
      return {
        ...state,
        show: null,
        loading: false,
        error: payload,
      };
    }
    case FETCH_SHOW_SUCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        show: payload,
      };
    }
    case FETCH_SHOW_FAIL: {
      return {
        ...state,
        show: null,
        loading: false,
        error: payload,
      };
    }

    default:
      return state;
  }
};

export const ShowContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  //postMovie
  const createShowDetails = async (formData) => {
    const config = {
      headers: {
        "content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        token: `${state?.userAuth}`,
      },
    };
    try {
      const res = await axios.post(`${API_URL_SHOW}/create`, formData, config);
      if (res?.status === 200) {
        dispatch({
          type: CREATE_SHOW_SUCESS,
          payload: res?.data,
        });
      }
    } catch (error) {
      dispatch({
        type: CREATE_SHOW_FAIL,
        payload: error?.response?.message,
      });
    }
  };

  //GetMovie List
  const getShowDetails = async (movie_id, theater_id) => {
    const config = {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        token: `${state?.userAuth}`,
      },
    };
    try {
      const res = await axios.get(
        `${API_URL_SHOW}/${movie_id}/${theater_id}`,
        config
      );
      if (res?.status === 200) {
        var data = res?.data;
        dispatch({
          type: FETCH_SHOW_SUCESS,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_SHOW_FAIL,
        payload: error?.response?.message,
      });
    }
  };
  const getSeatsDetails = async (showId) => {
    const config = {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        token: `${state?.userAuth}`,
      },
    };
    try {
      const res = await axios.get(`${API_URL_SHOW}/seats/${showId}`, config);
      console.log(res);
      if (res?.status === 200) {
        var data = res?.data;
        dispatch({
          type: FETCH_SHOW_SUCESS,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_SHOW_FAIL,
        payload: error?.data?.response?.message,
      });
    }
  };
  return (
    <ShowContext.Provider
      value={{
        createShowDetails,
        getShowDetails,
        getSeatsDetails,
        show: state?.show,
      }}
    >
      {children}
    </ShowContext.Provider>
  );
};
export default ShowContextProvider;
