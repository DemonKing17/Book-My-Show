import React, { useState } from "react";

const Registerpart1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onFormsubmit = (e) => {
    e.preventDefault();
    console.log(formData.name, formData.email, formData.password);
  };
  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={onFormsubmit}>
        <input
          onChange={onChangeFormData}
          type="text"
          placeholder="name"
          value={formData.name}
          name="name"
        ></input>
        <br></br>
        <input
          onChange={onChangeFormData}
          type="email"
          placeholder="email"
          value={formData.email}
          name="email"
        ></input>
        <br></br>
        <input
          onChange={onChangeFormData}
          type="password"
          placeholder="password"
          value={formData.password}
          name="password"
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registerpart1;
