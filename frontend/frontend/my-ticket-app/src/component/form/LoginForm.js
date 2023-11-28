import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <section className="container">
        <div className="container1">
          <div className="container2">
            <div className="heading">
              <h3 className="heading-content">Register Here</h3>
            </div>
            <form>
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
