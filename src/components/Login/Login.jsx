import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useAuthDataUpdate } from "../../AuthContext";

const Login = () => {

  const setAuthData = useAuthDataUpdate()

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  
  const { email, password } = inputs;
  
  const onChange = (e) =>
  setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await axios.post(
        "https://steam-clone-zf6a.onrender.com/api/auth/login", body);

      const parseRes = await response.data;

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuthData(true);
      } else {
        setAuthData(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="mt-5 text-center">Login</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          className="form-control my-3"
        />
        <Link to="../">
          <button className="btn btn-success btn-block">Submit</button>
        </Link>
      </form>
      <Link to="../register">Register</Link>
    </>
  );
};

export default Login;
