import React from "react";

const ShowForm = () => {
  return (
    <>
      <section className="container">
        <div className="container1">
          <div className="container2">
            <div className="heading">
              <h3 className="heading-content">Film Details</h3>
            </div>
            <form>
              <label htmlFor="movie_id">Movie ID:</label>
              <input type="number" name="movie_id"></input>

              <label htmlFor="theater_id">Theater ID:</label>
              <input type="number" name="theater_id"></input>

              <label htmlFor="show_time">Show Time:</label>
              <input type="time" name="show_time" step={300} required></input>

              <label htmlFor="show_date">Show Date:</label>
              <input type="date" name="show_date" required></input>

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

export default ShowForm;
