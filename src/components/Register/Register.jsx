import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import GlobalActionMenu from "../HeaderFolder/GlobalActionMenu.jsx";
import HeaderNavBar from "../HeaderFolder/HeaderNavBar.jsx";
import ReCAPTCHA from 'react-google-recaptcha'


const Register = () => {
  
  const [isVerified, setIsVerified] = useState(false)
  const handleRecaptchaChange = (response) => {
    if(resposne) {
      setIsVerified(true)
    }
    else {
      setIsVerified(false)
    }
  }

  
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
    <div className="register-page">
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
      <div className="create-account-form">
        <h1 className="create-your-account">Create Your Account</h1>
        <form onSubmit={onSubmitForm}>
          <div className="username">
            Username
          <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              className="register-input"
            />
          </div>

          <div className="email">
            Email Address
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              className="register-input"
            />
          </div>

          <div className="password">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              className="register-input"
            />
          </div>
          
          <div className='register-dropdown'>
            Country of Residence
            <select name="country" id="country" className="register-input" onchange="OnCountryChange( this )" >
							<option value="AF">Afghanistan</option>
							<option value="AX">Aland Islands</option>
							<option value="AL">Albania</option>
							<option value="DZ">Algeria</option>
							<option value="AS">American Samoa</option>
							<option value="AD">Andorra</option>
							<option value="AO">Angola</option>
							<option value="AI">Anguilla</option>
							<option value="AQ">Antarctica</option>
							<option value="AG">Antigua and Barbuda</option>
							<option value="AR">Argentina</option>
							<option value="AM">Armenia</option>
							<option value="AW">Aruba</option>
							<option value="AU">Australia</option>
							<option value="AT">Austria</option>
							<option value="AZ">Azerbaijan</option>
							<option value="BL">BL</option>
							<option value="BQ">BQ</option>
							<option value="BS">Bahamas</option>
							<option value="BH">Bahrain</option>
							<option value="BD">Bangladesh</option>
							<option value="BB">Barbados</option>
							<option value="BY">Belarus</option>
							<option value="BE">Belgium</option>
							<option value="BZ">Belize</option>
							<option value="BJ">Benin</option>
							<option value="BM">Bermuda</option>
							<option value="BT">Bhutan</option>
							<option value="BO">Bolivia</option>
							<option value="BA">Bosnia and Herzegovina</option>
							<option value="BW">Botswana</option>
							<option value="BV">Bouvet Island</option>
							<option value="BR">Brazil</option>
							<option value="IO">British Indian Ocean Territory</option>
							<option value="BN">Brunei Darussalam</option>
							<option value="BG">Bulgaria</option>
							<option value="BF">Burkina Faso</option>
							<option value="BI">Burundi</option>
							<option value="CU">CU</option>
							<option value="CW">CW</option>
							<option value="KH">Cambodia</option>
							<option value="CM">Cameroon</option>
							<option value="CA">Canada</option>
							<option value="CV">Cape Verde</option>
							<option value="KY">Cayman Islands</option>
							<option value="CF">Central African Republic</option>
							<option value="TD">Chad</option>
							<option value="CL">Chile</option>
							<option value="CN">China</option>
							<option value="CX">Christmas Island</option>
							<option value="CC">Cocos (Keeling) Islands</option>
							<option value="CO">Colombia</option>
							<option value="KM">Comoros</option>
							<option value="CG">Congo</option>
							<option value="CD">Congo, the Democratic Republic of the</option>
							<option value="CK">Cook Islands</option>
							<option value="CR">Costa Rica</option>
							<option value="CI">Cote d'Ivoire</option>
							<option value="HR">Croatia</option>
							<option value="CY">Cyprus</option>
							<option value="CZ">Czech Republic</option>
							<option value="DK">Denmark</option>
							<option value="DJ">Djibouti</option>
							<option value="DM">Dominica</option>
							<option value="DO">Dominican Republic</option>
							<option value="EC">Ecuador</option>
							<option value="EG">Egypt</option>
							<option value="SV">El Salvador</option>
							<option value="GQ">Equatorial Guinea</option>
							<option value="ER">Eritrea</option>
							<option value="EE">Estonia</option>
							<option value="SZ">Eswatini</option>
							<option value="ET">Ethiopia</option>
							<option value="FK">Falkland Islands (Malvinas)</option>
							<option value="FO">Faroe Islands</option>
							<option value="FJ">Fiji</option>
							<option value="FI">Finland</option>
							<option value="FR">France</option>
							<option value="GF">French Guiana</option>
							<option value="PF">French Polynesia</option>
							<option value="TF">French Southern Territories</option>
							<option value="GA">Gabon</option>
							<option value="GM">Gambia</option>
							<option value="GE">Georgia</option>
							<option value="DE">Germany</option>
							<option value="GH">Ghana</option>
							<option value="GI">Gibraltar</option>
							<option value="GR">Greece</option>
							<option value="GL">Greenland</option>
							<option value="GD">Grenada</option>
							<option value="GP">Guadeloupe</option>
							<option value="GU">Guam</option>
							<option value="GT">Guatemala</option>
							<option value="GG">Guernsey</option>
							<option value="GN">Guinea</option>
							<option value="GW">Guinea-Bissau</option>
							<option value="GY">Guyana</option>
							<option value="HT">Haiti</option>
							<option value="HM">Heard and Mc Donald Islands</option>
							<option value="VA">Holy See(Vatican City State)</option>
							<option value="HN">Honduras</option>
							<option value="HK">Hong Kong</option>
							<option value="HU">Hungary</option>
							<option value="IS">Iceland</option>
							<option value="IN">India</option>
							<option value="ID">Indonesia</option>
							<option value="IR">Iran</option>
							<option value="IQ">Iraq</option>
							<option value="IE">Ireland</option>
							<option value="IM">Isle of Man</option>
							<option value="IL">Israel</option>
							<option value="IT">Italy</option>
							<option value="JM">Jamaica</option>
							<option value="JP">Japan</option>
							<option value="JE">Jersey</option>
							<option value="JO">Jordan</option>
							<option value="KZ">Kazakhstan</option>
							<option value="KE">Kenya</option>
							<option value="KI">Kiribati</option>
							<option value="KR">Korea, Republic of</option>
							<option value="XK">Kosovo</option>
							<option value="KW">Kuwait</option>
							<option value="KG">Kyrgyzstan</option>
							<option value="LA">Lao People's Democratic Republic</option>
							<option value="LV">Latvia</option>
							<option value="LB">Lebanon</option>
							<option value="LS">Lesotho</option>
							<option value="LR">Liberia</option>
							<option value="LY">Libya</option>
							<option value="LI">Liechtenstein</option>
							<option value="LT">Lithuania</option>
							<option value="LU">Luxembourg</option>
							<option value="MF">MF</option>
							<option value="MO">Macau</option>
							<option value="MK">Macedonia, the former Yugoslav Republic of</option>
							<option value="MG">Madagascar</option>
							<option value="MW">Malawi</option>
							<option value="MY">Malaysia</option>
							<option value="MV">Maldives</option>
							<option value="ML">Mali</option>
							<option value="MT">Malta</option>
							<option value="MH">Marshall Islands</option>
							<option value="MQ">Martinique</option>
							<option value="MR">Mauritania</option>
							<option value="MU">Mauritius</option>
							<option value="YT">Mayotte</option>
							<option value="MX">Mexico</option>
							<option value="FM">Micronesia, Federated States of</option>
							<option value="MD">Moldova, Republic of</option>
							<option value="MC">Monaco</option>
							<option value="MN">Mongolia</option>
							<option value="ME">Montenegro</option>
							<option value="MS">Montserrat</option>
							<option value="MA">Morocco</option>
							<option value="MZ">Mozambique</option>
							<option value="MM">Myanmar</option>
							<option value="NA">Namibia</option>
							<option value="NR">Nauru</option>
							<option value="NP">Nepal</option>
							<option value="NL">Netherlands</option>
							<option value="NC">New Caledonia</option>
							<option value="NZ">New Zealand</option>
							<option value="NI">Nicaragua</option>
							<option value="NE">Niger</option>
							<option value="NG">Nigeria</option>
							<option value="NU">Niue</option>
							<option value="NF">Norfolk Island</option>
							<option value="MP">Northern Mariana Islands</option>
							<option value="NO">Norway</option>
							<option value="OM">Oman</option>
							<option value="PK">Pakistan</option>
							<option value="PW">Palau</option>
							<option value="PS">Palestinian Territory, Occupied</option>
							<option value="PA">Panama</option>
							<option value="PG">Papua New Guinea</option>
							<option value="PY">Paraguay</option>
							<option value="PE">Peru</option>
							<option value="PH">Philippines</option>
							<option value="PN">Pitcairn</option>
							<option value="PL">Poland</option>
							<option value="PT">Portugal</option>
							<option value="PR">Puerto Rico</option>
							<option value="QA">Qatar</option>
							<option value="RE">Reunion</option>
							<option value="RO">Romania</option>
							<option value="RU">Russian Federation</option>
							<option value="RW">Rwanda</option>
							<option value="SS">SS</option>
							<option value="SX">SX</option>
							<option value="SH">Saint Helena</option>
							<option value="KN">Saint Kitts and Nevis</option>
							<option value="LC">Saint Lucia</option>
							<option value="PM">Saint Pierre and Miquelon</option>
							<option value="VC">Saint Vincent and the Grenadines</option>
							<option value="WS">Samoa</option>
							<option value="SM">San Marino</option>
							<option value="ST">Sao Tome and Principe</option>
							<option value="SA">Saudi Arabia</option>
							<option value="SN">Senegal</option>
							<option value="RS">Serbia</option>
							<option value="SC">Seychelles</option>
							<option value="SL">Sierra Leone</option>
							<option value="SG">Singapore</option>
							<option value="SK">Slovakia</option>
							<option value="SI">Slovenia</option>
							<option value="SB">Solomon Islands</option>
							<option value="SO">Somalia</option>
							<option value="ZA">South Africa</option>
							<option value="GS">South Georgia and the South Sandwich Islands</option>
							<option value="ES">Spain</option>
							<option value="LK">Sri Lanka</option>
							<option value="SD">Sudan</option>
							<option value="SR">Suriname</option>
							<option value="SJ">Svalbard and Jan Mayen</option>
							<option value="SE">Sweden</option>
							<option value="CH">Switzerland</option>
							<option value="SY">Syria</option>
							<option value="TW">Taiwan</option>
							<option value="TJ">Tajikistan</option>
							<option value="TZ">Tanzania, United Republic of</option>
							<option value="TH">Thailand</option>
							<option value="TL">Timor-Leste</option>
							<option value="TG">Togo</option>
							<option value="TK">Tokelau</option>
							<option value="TO">Tonga</option>
							<option value="TT">Trinidad and Tobago</option>
							<option value="TN">Tunisia</option>
							<option value="TR">Turkey</option>
							<option value="TM">Turkmenistan</option>
							<option value="TC">Turks and Caicos Islands</option>
							<option value="TV">Tuvalu</option>
							<option value="UG">Uganda</option>
							<option value="UA">Ukraine</option>
							<option value="AE">United Arab Emirates</option>
							<option value="GB">United Kingdom</option>
							<option value="US" selected>United States</option>
							<option value="UM">United States Minor Outlying Islands</option>
							<option value="UY">Uruguay</option>
							<option value="UZ">Uzbekistan</option>
							<option value="VU">Vanuatu</option>
							<option value="VE">Venezuela</option>
							<option value="VN">Viet Nam</option>
							<option value="VG">Virgin Islands, British</option>
							<option value="VI">Virgin Islands, U.S.</option>
							<option value="WF">Wallis and Futuna</option>
							<option value="EH">Western Sahara</option>
							<option value="YE">Yemen</option>
							<option value="ZM">Zambia</option>
							<option value="ZW">Zimbabwe</option>
						</select>
          </div>

          <div className="reCaptcha">
            <ReCAPTCHA theme='dark' className='recaptcha' sitekey="6Lex444nAAAAADnYeOXQIJFdHfXfTYNhRUuGd_dm" onChange={handleRecaptchaChange} />
          </div>

          <div className="checkbox">
            <input type='checkbox' ></input>
            I am 13 years of age or older and agree to the terms of the <a href="https://store.steampowered.com/subscriber_agreement/">Steam Subscriber Agreement</a> and the <a href="https://store.steampowered.com/privacy_agreement/">Valve Privacy Policy</a>.
          </div>

          <Link to="../login">
          <button type='submit' className="continue">Continue</button>
          </Link>
        </form>
      </div>
    </div>

      <div className='register-footer'>
      <div className='register-footer-content'>
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
      <div className='register-valve-links'>
        <a href='http://www.valvesoftware.com/about'>About Valve</a>
        &nbsp;&nbsp; | &nbsp;&nbsp;<a href='http://www.valvesoftware.com'>Jobs</a>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <a href='http://www.steampowered.com/steamworks/'>Steamworks</a>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <a href='https://partner.steamgames.com/steamdirect'>
          Steam Distribution
        </a>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <a href='https://help.steampowered.com/en/?snr=1_44_44_'>Support</a>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <a href='https://store.steampowered.com/hardware_recycling/?snr=1_44_44_'>
          Recycling
        </a>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <a href='https://store.steampowered.com/digitalgiftcards/?snr=1_44_44_'>
          Gift Cards
        </a>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <a href='https://steamcommunity.com/linkfilter/?url=http://www.facebook.com/Steam'>
          <img src="	https://store.cloudflare.steamstatic.com/public/images/ico/ico_facebook.gif"></img>
          &nbsp;&nbsp;Steam
        </a>
        &nbsp;&nbsp; | &nbsp;&nbsp;
        <a href = 'http://twitter.com/steam'>
          <img src='	https://store.cloudflare.steamstatic.com/public/images/ico/ico_twitter.gif'></img>
          &nbsp;&nbsp;@steam
        </a>
      </div>
    </div>
    </div>
  );
};

export default Register;
