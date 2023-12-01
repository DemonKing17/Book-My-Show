import React, { useContext, useState } from "react";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";

const RegistrationForm = () => {
  const { registerUserAction } = useContext(AuthContext);
  //form data
  const [formData, setFormData] = useState({
    fullname: "",
    email_id: "",
    passwor: "",
  });
  //Destructure
  const { fullname, email_id, passwor, age, phone } = formData;

  //onChange
  const onChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Handle submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email_id || !passwor || !fullname || !age || !phone) {
      return alert("Please provide all details");
    }
    registerUserAction(formData);
  };
  return (
    <>
      <section className="container">
        <div className="container1">
          <div className="container2">
            <div className="heading">
              <h3 className="heading-content">Register Here</h3>
            </div>
            <form onSubmit={onSubmitHandler}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                value={fullname}
                onChange={onChangeInput}
                name="fullname"
              ></input>

              <label htmlFor="phone">Phone:</label>
              <input
                value={phone}
                type="text"
                name="phone"
                onChange={onChangeInput}
              ></input>

              <label htmlFor="age">Age:</label>
              <input
                value={age}
                type="text"
                name="age"
                onChange={onChangeInput}
              ></input>

              <label htmlFor="name">Email:</label>
              <input
                value={email_id}
                onChange={onChangeInput}
                type="email"
                name="email_id"
              ></input>

              <label htmlFor="password">Password:</label>
              <input
                value={passwor}
                onChange={onChangeInput}
                type="password"
                name="passwor"
              ></input>

              <button className="reg-btn" type="submit">
                Register
              </button>
              <p>
                Already registered?{" "}
                <Link to="/login" className="signin-button" type="button">
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
