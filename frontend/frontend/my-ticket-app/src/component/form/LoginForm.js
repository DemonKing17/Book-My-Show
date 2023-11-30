import React from "react";
import { Link } from "react-router-dom";
import "./RegistrationForm.css";

const LoginForm = () => {
  return (
    <>
      <section className="container">
        <div className="container1">
          <div className="container2">
            <div className="heading">
              <h3 className="heading-content">Login Here</h3>
            </div>
            <form>
              <label htmlFor="email_id">Email:</label>
              <input type="email" name="email_id" required></input>

              <label htmlFor="passwor">Password:</label>
              <input type="password" name="passwor" required></input>

              <button className="reg-btn" type="submit">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/register" class="signin-button" type="button">
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
