import React, { useState } from "react";
import "./styles.scss";

import CatLogoBlack from "../../assets/logos/catLogoBlack.svg";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={CatLogoBlack} alt="" />
          <p>tiagocostadev</p>
        </div>
        <ul>
          <li>
            <a>.home()</a>
          </li>
          <li>
            <a>.work()</a>
          </li>
          <li>
            <a>.about()</a>
          </li>
          <li>
            <a>.contacts()</a>
          </li>
          <li>
            <a>.curriculumVitae()</a>
          </li>
          <li>
            <a href="https://github.com/MrValraven" target="_blank">
              <i id="github" className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tiago-costa-b141121b1/"
              target="_blank"
            >
              <i id="linkedin" className="fab fa-linkedin"></i>
            </a>
          </li>
          {!isDarkMode ? (
            <li className="sun">
              <a>
                <i className="fas fa-sun"></i>
              </a>
            </li>
          ) : (
            <li className="moon">
              <a>
                <i className="fas fa-moon"></i>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
