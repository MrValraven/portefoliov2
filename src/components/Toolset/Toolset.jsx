import React from "react";
import "./styles.scss";

import toolset from "../../data/toolset";

const Toolset = ({ codeEnd }) => {
  return (
    <ul className="toolsetContainer">
      {toolset.map((tool) => (
        <li key={tool.name} className={codeEnd ? tool.class : null}>
          <img src={tool.icon} alt="" />
          <p>{tool.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Toolset;
