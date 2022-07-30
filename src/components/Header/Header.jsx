import React, { useState } from "react";
import "./styles.scss";

import CatLogoBlack from "../../assets/logos/catLogoBlack.svg";
import CatLogoWhite from "../../assets/logos/catLogoWhite.svg";

const Header = ({ toggleColorScheme, style }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <header style={style}>
      <nav>
        <div className="logo">
          {!isDarkMode ? (
            <img src={CatLogoBlack} alt="" />
          ) : (
            <img src={CatLogoWhite} alt="" />
          )}

          <p>tiagocostadev</p>
        </div>
        <ul>
          <li>
            <a>.experience()</a>
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
            <a
              href="https://github.com/MrValraven"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i id="github" className="fab fa-github" style={style}></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tiagoagcosta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i id="linkedin" className="fab fa-linkedin" style={style}></i>
            </a>
          </li>
          {!isDarkMode ? (
            <li
              className="sun"
              onClick={() => {
                toggleColorScheme();
                setIsDarkMode(!isDarkMode);
              }}
            >
              <a>
                <i className="fas fa-sun"></i>
              </a>
            </li>
          ) : (
            <li
              className="moon"
              onClick={() => {
                toggleColorScheme();
                setIsDarkMode(!isDarkMode);
              }}
            >
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
