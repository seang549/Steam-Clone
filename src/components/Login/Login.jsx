import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuthDataUpdate } from "../../AuthContext";
import Footer from "../FooterFolder/Footer";
import Header from "../HeaderFolder/Header";

const Login = () => {
  const setAuthData = useAuthDataUpdate();

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
        "https://steam-clone-zf6a.onrender.com/api/auth/login",
        body
      );

      const parseRes = await response.data;
      console.log(parseRes);

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuthData(true);
      } else {
        setAuthData(false);
      }
      window.location.href = "../";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="login_page">
      <Header />

      <div>
        <div className="login_for_account">
          <div className="login_ctn">
            <h1 className="login_h1">SIGN IN</h1>

            <div className="login_form_ctn">
              <div className="login_left">
                <form className="login_form" onSubmit={onSubmitForm}>
                  <div className="sign_in_title">SIGN IN WITH ACCOUNT NAME</div>

                  <div>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      className="login_input"
                    />
                  </div>
                  <div className="sign_in_password">PASSWORD</div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                      className="login_input"
                    />
                  </div>
                  <div className="remember_div">
                    <input type="checkbox" className="remember_check" />{" "}
                    Remember me
                  </div>
                  <button className="sign_in_btn">Sign in</button>
                </form>
                <a href="https://help.steampowered.com/wizard/HelpWithLogin?redir=https%3A%2F%2Fstore.steampowered.com%2Flogin%2F%3Fredir%3Dlogin%252F%253Fredir%253Dapp%25252F2433830%25252FSpider%25252F%2526redir_ssl%253D1%2526snr%253D1_5_9__global-header%26redir_ssl%3D1%26snr%3D1_60_4__global-header">
                  Help, I can't sign in
                </a>
              </div>
              <div className="login_right">
                <div className="qr_code_sign">OR SIGN IN WITH QR</div>
                <img src="https://tse2.mm.bing.net/th?id=OIP.sWzQRhKrKwmlGwBQn3xPgAAAAA&pid=Api" />
                <p>
                  use the <span className="underline">Steam Mobile App</span> to
                  sign in via QR code
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="upper_footer">
            <div className="upper_footer_item">
              Join Steam and discover thousands of games to play.
              <div className="learn_more">
                <a
                  href="https://store.steampowered.com/about"
                  style={{ color: "#fff" }}
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="upper_footer_item">
              <img
                style={{ width: "200px" }}
                src="https://store.cloudflare.steamstatic.com/public/shared/images/login/join_pc.png?v=1"
              />
            </div>
            <div className="upper_footer_item">
              <span className="join_btn">
                <Link to="../register" style={{ color: "#fff" }}>
                  Join Steam
                </Link>
              </span>
              <p style={{ marginTop: "15px" }}>It's free and easy to use</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
