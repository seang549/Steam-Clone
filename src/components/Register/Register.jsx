import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import GlobalActionMenu from "../HeaderFolder/GlobalActionMenu.jsx";
import HeaderNavBar from "../HeaderFolder/HeaderNavBar.jsx";


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
      <header className='header-content'>
      <div className='nav-area' style={{ display: "flex" }}>
        <a
          className='float-a-tag'
          href='https://store.steampowered.com/?snr=1_5_9__global-header'
        >

          <img
            className='logo'
            src='https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016'
          ></img>
        </a>
        <HeaderNavBar />
        <GlobalActionMenu />
      </div>
    </header>
    <div className='create-account'>
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
      </div>

      <div className='footer'>
      <div className='footer-content'>
        <a href='https://www.valvesoftware.com/en/'>
          <img
            className='valve'
            src='https://store.akamai.steamstatic.com/public/images/footerLogo_valve_new.png'
          ></img>
        </a>
        <div className='footer-text' data-panel='{"flow-children:row"}'>
          <text>
            © 2023 Valve Corporation. All rights reserved. All trademarks are
            property of their respective owners in the US and other countries.{" "}
            <br />
            VAT included in all prices where applicable. &nbsp;&nbsp;
            <a href='https://store.steampowered.com/privacy_agreement/?snr=1_44_44_'>
              Privacy policy
            </a>
            &nbsp; | &nbsp;
            <a href='https://store.steampowered.com/legal/?snr=1_44_44_'>
              Legal
            </a>
            &nbsp; | &nbsp;
            <a href='https://store.steampowered.com/subscriber_agreement/?snr=1_44_44_'>
              Steam Subscriber Agreement
            </a>
            &nbsp; | &nbsp;
            <a href='https://store.steampowered.com/steam_refunds/?snr=1_44_44_'>
              Refunds
            </a>
            &nbsp; | &nbsp;
            <a href='https://store.steampowered.com/account/cookiepreferences/?snr=1_44_44_'>
              Cookies
            </a>
          </text>
        </div>
        <div className='logo-small'>
          <img src='https://store.akamai.steamstatic.com/public/images/v6/logo_steam_footer.png'></img>
        </div>
      </div>
      <div className='valve-links'>
        <a href='http://www.valvesoftware.com/about'>About Valve</a>
        &nbsp; | &nbsp;<a href='http://www.valvesoftware.com'>Jobs</a>
        &nbsp; | &nbsp;
        <a href='http://www.steampowered.com/steamworks/'>Steamworks</a>
        &nbsp; | &nbsp;
        <a href='https://partner.steamgames.com/steamdirect'>
          Steam Distribution
        </a>
        &nbsp; | &nbsp;
        <a href='https://help.steampowered.com/en/?snr=1_44_44_'>Support</a>
        &nbsp; | &nbsp;
        <a href='https://store.steampowered.com/hardware_recycling/?snr=1_44_44_'>
          Recycling
        </a>
        &nbsp; | &nbsp;
        <a href='https://store.steampowered.com/digitalgiftcards/?snr=1_44_44_'>
          Gift Cards
        </a>
        &nbsp; | &nbsp;
        <a href='https://steamcommunity.com/linkfilter/?url=http://www.facebook.com/Steam'>
          <img src="	https://store.cloudflare.steamstatic.com/public/images/ico/ico_facebook.gif"></img>
          &nbsp;Steam
        </a>
        &nbsp; | &nbsp;
        <a href = 'http://twitter.com/steam'>
          <img src='	https://store.cloudflare.steamstatic.com/public/images/ico/ico_twitter.gif'></img>
          &nbsp;@steam
        </a>
      </div>
    </div>
    </>
  );
};

export default Register;
