import React from "react";
import { useState, useEffect } from "react";
import { storeTabs } from "./tabs";
import StoreTabs from "./StoreTabs";

const StoreNav = () => {
  return (
    <div id='store-header'>
      <div id='content'>
        <div id='background-gradient'>
          <div className='store-nav' key={0}>
            {storeTabs.map((menu, index) => (
              <div className='tab'>
                <span>
                  <StoreTabs items={menu} key={index} />
                </span>
              </div>
            ))}
            <div className='flex-spacer'></div>
            <div className='search-area'>
              <div className='store-search'>
                <div className='search-box'>
                  <input placeholder={"search"} className='default'></input>
                  <a href='#' id='search-link'>
                    <img src='https://store.akamai.steamstatic.com/public/images/v6/search_icon_btn.png'></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreNav;
