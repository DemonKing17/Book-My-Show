import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";

const LoginForm = () => {
  const { loginUserAction, userAuth } = useContext(AuthContext);
  //form data
  const [formData, setFormData] = useState({
    email_id: "",
    passwor: "",
  });
  const { email_id, passwor } = formData;

  //onChnage
  const onChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //submit
  const onSubmitHandler = (e) => {
    e.preventDefault();

    //dispatch action
    loginUserAction(formData);
  };

  return (
    <>
      <section className=" bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container md:px-12 md:py-12 md:mx-auto">
          <div className="mx-auto md:px-12 bg-white flex  items-center flex-col rounded-3xl bg-opacity-20 md:h-screen ">
            <div className="mx-auto  ">
              <p className="font-sans font-black leading-5 md:py-6 py-2 md:text-4xl text-2xl text-center">
                Login Here
              </p>
            </div>
            <form className="md:w-1/3 w-2/3 mt-4" onSubmit={onSubmitHandler}>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="email_id"
                >
                  Email:
                </label>
                <input
                  value={email_id}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="email"
                  name="email_id"
                  onChange={onChangeInput}
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="passwor"
                >
                  Password:
                </label>
                <input
                  value={passwor}
                  onChange={onChangeInput}
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="password"
                  name="passwor"
                  required
                ></input>
              </div>

              <button
                className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                type="submit"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/" className="signin-button" type="button">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
