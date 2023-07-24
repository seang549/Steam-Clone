import React from "react";
import { useState, useEffect } from "react";
import { storeTabs } from "./tabs";
import StoreTabs from "./StoreTabs";

const StoreNav = () => {
  return (
    <>
      <ul className='menuTabs'>
        {storeTabs.map((item, index) => (
          <StoreTabs item={item} key={index} />
        ))}
      </ul>
    </>
  );
};

export default StoreNav;
