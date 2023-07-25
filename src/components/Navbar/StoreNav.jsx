import React from "react";
import { useState, useEffect } from "react";
import { storeTabs } from "./tabs";
import StoreTabs from "./StoreTabs";

const StoreNav = () => {
  return (
    <>
      <ul className='menuTabs'>
        {storeTabs.map((menu, index) => (
          <StoreTabs items={menu} key={index} />
        ))}
      </ul>
    </>
  );
};

export default StoreNav;
