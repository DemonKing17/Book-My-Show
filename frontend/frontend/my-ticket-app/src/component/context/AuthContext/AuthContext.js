import React, { createContext, useReducer } from "react";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./authActionTypes";
import axios from "axios";
import { API_URL_USER } from "../../../utils/apiUrl";

export const AuthContext = createContext();

const INITIAL_STATE = {
  userAuth: JSON.parse(localStorage.getItem("userAuth")),
  loading: false,
  error: null,
  profile: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userAuth: payload,
      };
    case REGISTER_FAIL: {
      return {
        ...state,
        loading: false,
        error: payload,
        userAuth: null,
      };
    }
    case LOGIN_SUCCESS:
      localStorage.setItem("userAuth", JSON.stringify(payload));

      return {
        ...state,
        loading: false,
        error: null,
        userAuth: payload,
      };
    case LOGIN_FAILED: {
      return {
        ...state,
        loading: false,
        error: payload,
        userAuth: null,
      };
    }
    case LOGOUT:
      return {
        ...state,
        userAuth: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
export const AuthorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  //loginaction
  const loginUserAction = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    try {
      const res = await axios.post(`${API_URL_USER}/login`, formData, config);
      console.log(res);
      if (res?.status === 200) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      }
      window.location.href = "/";
    } catch (error) {
      dispatch({
        type: LOGIN_FAILED,
        payload: error?.response?.data?.message,
      });
    }
  };

  //logout action
  const logoutAction = async () => {
    localStorage.removeItem("userAuth");
    dispatch({
      type: LOGOUT,
      payload: null,
    });
    window.location.href = "/login";
  };

  //register Action
  const registerUserAction = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    console.log("API called");
    try {
      const res = await axios.post(
        `${API_URL_USER}/register`,
        formData,
        config
      );
      if (res?.data?.status === "success") {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      }
      window.location.href = "/login";
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error?.response?.data?.message,
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        loginUserAction,
        userAuth: state,
        token: state?.userAuth,
        logoutAction,
        registerUserAction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthorContextProvider;
