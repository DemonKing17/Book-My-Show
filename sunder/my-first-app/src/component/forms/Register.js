import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangename = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangepassword = (e) => {
    setPassword(e.target.value);
  };
  const onFormsubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={onFormsubmit}>
        <input
          onChange={onChangeEmail}
          type="email"
          placeholder="email"
          value={email}
        ></input>
        <br></br>
        <input
          onChange={onChangename}
          type="text"
          placeholder="name"
          value={name}
        ></input>
        <br></br>
        <input
          onChange={onChangepassword}
          type="password"
          placeholder="password"
          value={password}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
