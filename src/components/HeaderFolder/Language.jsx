// import { languages } from "./languages"
// import {useState} from "react"

// const Language = () => {
//     const [dropdown, setDropdown] = useState(false)
//     return (
//         <ul className='languages'>language
//             {languages.map((language, index) => {
//                 return (
//                     <li className="language-items" key={index}>
//                         <a href={language.url}>{language.title}</a>
//                     </li>
//                 )
//             })}
//         </ul>
//     )
// }

import { languages } from "./languages";
import { useState } from "react";

const Language = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="language-dropdown">
      <a className="language-toggle" onClick={toggleDropdown}>
        language ▾
      </a>
      {dropdown && (
        <ul className="languages">
          {languages.map((language, index) => {
            return (
              <li className="language-items" key={index}>
                <a href={language.url}>{language.title}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Language;


