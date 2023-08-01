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
        language
      </a>
      {dropdown && (
        <div style={{listStyleType: "none"}} className="languages">
          {languages.map((language, index) => {
            return (
              <li className="language-items" key={index}>
                <a href={language.url}>{language.title}</a>
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Language;