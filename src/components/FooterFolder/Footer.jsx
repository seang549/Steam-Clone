const Footer = () => {
  return (
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
      </div>
    </div>
  );
};
export default Footer;
