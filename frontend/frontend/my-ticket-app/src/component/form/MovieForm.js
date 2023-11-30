import React from "react";
import "./RegistrationForm.css";

const MovieForm = () => {
  return (
    <>
      <section className="container">
        <div className="container1">
          <div className="container2">
            <div className="heading">
              <h3 className="heading-content">Film Details</h3>
            </div>
            <form>
              <label htmlFor="img">Image:</label>
              <input type="file" name="img" accept="image/*" style={{}}></input>

              <label htmlFor="title">Title:</label>
              <input type="text" name="title"></input>

              <label htmlFor="summary">Summary:</label>
              <input type="text" name="summary"></input>

              <label htmlFor="category">Category:</label>
              <input type="text" name="category" required></input>

              <label htmlFor="release_date">Releasing Date:</label>
              <input type="date" name="release_date" required></input>

              <label htmlFor="release_date">Releasing Date:</label>
              <input type="date" name="release_date" required></input>

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
