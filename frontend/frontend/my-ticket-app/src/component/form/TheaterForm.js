import React from "react";

const TheaterForm = () => {
  return (
    <>
      <section className="container">
        <div className="container1">
          <div className="container2">
            <div className="heading">
              <h3 className="heading-content">Theater Details</h3>
            </div>
            <form>
              <label htmlFor="theatre_name">Theater Name:</label>
              <input type="text" name="theatre_name"></input>

              <label htmlFor="location">Location:</label>
              <input type="text" name="location"></input>

              <label htmlFor="category">Category:</label>
              <input type="text" name="category" required></input>

              <label htmlFor="capacity">Theater Capacity:</label>
              <input type="number" name="capacity" required></input>

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

export default TheaterForm;
