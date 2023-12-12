import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";

const RegistrationForm = () => {
  const { registerUserAction } = useContext(AuthContext);

  const [secret, setSecret] = useState();
  //form data
  const [formData, setFormData] = useState({
    fullname: "",
    email_id: "",
    passwor: "",
    user_type: "",
  });
  //Destructure
  const { fullname, email_id, passwor, user_type } = formData;

  //onChange
  const onChangeInput = (e) => {
    console.log(e, e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onChangeSecret = (e) => {
    setSecret(e.target.value);
  };
  //Handle submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email_id || !passwor || !fullname) {
      return alert("Please provide all details");
    }
    if (user_type === "Admin" && secret !== "Sunder@123") {
      return alert("Invalid key");
    } else {
      registerUserAction(formData);
    }
  };
  return (
    <>
      <section className="">
        <div className="container md:px-12 md:py-12 md:mx-auto h-">
          <div className="mx-auto md:px-12 bg-white rounded-3xl flex justify-center items-center flex-col bg-opacity-20 md:h-full ">
            <div className="mx-auto  ">
              <p className="font-sans font-black leading-5 md:py-6 py-2 md:text-4xl text-2xl text-center">
                Register Here
              </p>
            </div>
            <form onSubmit={onSubmitHandler} className="md:w-1/3 w-2/3 mt-4">
              <div className="text-xl mb-5">
                Register As :
                <input
                  type="radio"
                  name="user_type"
                  onChange={onChangeInput}
                  checked={user_type === "User"}
                  value="User"
                  className="scale-125 m-2"
                ></input>
                <label htmlFor="user_type" className="">
                  User
                </label>
                <input
                  type="radio"
                  name="user_type"
                  onChange={onChangeInput}
                  checked={user_type === "Admin"}
                  value="Admin"
                  className="scale-125 m-2"
                ></input>
                <label htmlFor="user_type">Admin{"  "}</label>
              </div>
              {user_type === "Admin" ? (
                <div className="mb-6">
                  <label
                    className="block mb-2 text-coolGray-800 font-medium"
                    htmlFor="secret"
                  >
                    Secret Key
                  </label>
                  <input
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    value={secret}
                    onChange={onChangeSecret}
                    type="password"
                    placeholder="******"
                    name="secret"
                    required
                  ></input>
                </div>
              ) : null}
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="fullname"
                >
                  Name:
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="text"
                  value={fullname}
                  onChange={onChangeInput}
                  placeholder="Your Name"
                  name="fullname"
                ></input>
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor="name"
                >
                  Email:
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  value={email_id}
                  onChange={onChangeInput}
                  type="email"
                  name="email_id"
                  placeholder="*****@gmail.com"
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
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  value={passwor}
                  onChange={onChangeInput}
                  type="password"
                  name="passwor"
                  placeholder="********"
                  required
                ></input>
              </div>
              <button
                className="inline-block py-3 px-7  mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                type="submit"
              >
                Register
              </button>
              <p>
                Already registered?{" "}
                <Link
                  to="/login"
                  className="signin-button text-indigo-700"
                  type="button"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationForm;
