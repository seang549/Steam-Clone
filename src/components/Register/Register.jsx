import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


const Register = () => {


  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = inputs;

  const onChange = (e) => 
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
      e.preventDefault();
      console.log(inputs)
    try {
      const body = { email, password, name };
      const response = await axios.post(
        "https://steam-clone-zf6a.onrender.com/api/auth/register", body);
      // const parseRes = await response.data;

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="mt-5 text-center">Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <Link to="../login">
        <button type='submit' className="btn btn-success btn-block">Submit</button>
        </Link>
      </form>
      <Link to="../login">login</Link>
    </>
  );
};

export default Register;
