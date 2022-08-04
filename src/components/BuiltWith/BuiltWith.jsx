import React from "react";
import GlitchyImage from "../GlitchyImage/GlitchyImage";
import "./styles.scss";

const BuiltWith = () => {
  return (
    <section className="builtWith">
      <div className="glitchContainer">
        <div className="glitch" data-text="This page was built with:">
          This page was built with:
        </div>
        <div className="glow">This page was built with:</div>
        <ul>
          <li>
            React.js, SCSS, <span>Visual</span> Studio Code
          </li>
          <li>
            2439543983240342 bugs & <span>glitches</span>
          </li>
          <li>
            2563 <span>lines</span> of CODE
          </li>
          <li className="cat" data-text-cat="250 Neko interrupting occurrences">
            250 Neko interrupting occurrences
          </li>
          <li>
            120 plant based <span>meals</span>
          </li>
          <li>
            32 doses of "<span>Arroz de tomate</span>
            <span></span> da Avó Rosa"
          </li>
        </ul>
      </div>
      <div className="scanlines"></div>
      <GlitchyImage />
    </section>
  );
};

export default BuiltWith;
