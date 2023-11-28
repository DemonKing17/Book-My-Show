import React from "react";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <>
      <section className="container">
        <div className="container1">
          <div className="container2">
            <div className="heading">
              <h3 className="heading-content">Register Here</h3>
            </div>
            <form>
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required></input>

              <label for="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{10}"
                required
              ></input>

              <label for="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                min="6"
                max="60"
                required
              ></input>

              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required></input>

              <label for="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                required
              ></input>

              <button className="reg-btn" type="submit">
                Register
              </button>
              <p>
                Already registered?{" "}
                <Link to="/login" class="signin-button" type="button">
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
