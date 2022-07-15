import React from "react";
import "./styles.scss";

import TiagoImage from "../../assets/tiago.webp";
import Button from "../Button/Button";

import scrollToElement from "../../utils/useScrollToElement";

const Hero = () => {
  const whiteBlue = "#E7ECEF";
  const darkBlue = "#274C77";
  const normalBlue = "#6aa7cf";

  const chars = [
    { id: 0, text: "T" },
    { id: 1, text: "i" },
    { id: 2, text: "a" },
    { id: 3, text: "g" },
    { id: 4, text: "o" },
  ];
  const chars2 = [
    { id: 5, text: "C" },
    { id: 6, text: "o" },
    { id: 7, text: "s" },
    { id: 8, text: "t" },
    { id: 9, text: "a" },
  ];

  return (
    <section className="hero">
      <div className="heroText">
        <h2>
          <span className="hiThere">
            Hi there <p className="handEmoji">👋</p>, I'm
          </span>
        </h2>
        <h1 className="chars">
          <span id="firstName" className="name">
            {chars.map((char) => (
              <span className="char" key={char.id}>
                {char.text}
              </span>
            ))}
          </span>
          <span id="lastName" className="name">
            {chars2.map((char) => (
              <span className="char" key={char.id}>
                {char.text}
              </span>
            ))}
          </span>
        </h1>
        <hr style={{ backgroundColor: darkBlue, borderColor: darkBlue }} />
        <p>
          <span>
            I'm a creative Fullstack Developer who loves to create elegant and
            functional user interfaces and web apps
          </span>
        </p>
        <div className="buttons">
          <div className="buttoes">
            <Button
              clickEvent={() => scrollToElement(".work")}
              buttonText="See my work"
              style={{
                backgroundColor: darkBlue,
                color: whiteBlue,
                borderColor: normalBlue,
              }}
            />
            <Button
              onClick={() => scrollToElement(".contacts")}
              additionalClassNames="lastButton"
              buttonText="Contact me"
              style={{
                backgroundColor: whiteBlue,
                color: darkBlue,
                borderColor: darkBlue,
              }}
            />
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img className="tiagoImg" src={TiagoImage} alt="" />
      </div>
    </section>
  );
};

export default Hero;
