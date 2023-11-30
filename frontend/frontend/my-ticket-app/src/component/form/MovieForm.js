import React from "react";
import "./RegistrationForm.css";

const MovieForm = () => {
  return (
    <>
      <section className="container">
        <div className="container1">
          <div className="container2">
            <div className="heading">
              <h3 className="heading-content">Register Here</h3>
            </div>
            <form>
              <label for="name">Image:</label>
              <input
                type="image"
                id="imageI"
                name="imageI"
                src="ss"
                required
              ></input>

              <label for="phone">Title:</label>
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieForm;
// CREATE TABLE movies (
//     id int PRIMARY KEY,
//     img blob default null,
//     title VARCHAR(255) NOT NULL,
//     summary varchar(255),
//     release_date DATE default null,
//     ending_date date default null,
//     category varchar(255),
//     created_at timestamp default current_timestamp,
//     updated_at varchar(255) default null
// );
