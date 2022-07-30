import React from "react";
import "./styles.scss";

import PlaceholderImage from "../../assets/placeholder.jpg";

const TiagosGuidesCard = ({
  guideName = "nothing",
  description = "No description available yet",
  isWip = false,
  website = "",
  codeURL = "",
}) => {
  return (
    <div className={`guideCard ${isWip ? "workInProgress" : null}`}>
      <img src={PlaceholderImage} alt="" />
      <div className="textContainer">
        <div className="text">
          <h2>
            Tiago's guide to {guideName}{" "}
            <span>{isWip ? " | Work in progress " : ""}</span>
          </h2>
          <p>{description}</p>
        </div>
        <div className="button-container">
          {website ? (
            <button className="website">
              <a href={website} target="_blank" rel="noreferrer">
                Live Website
              </a>
            </button>
          ) : null}

          {codeURL ? (
            <a href={codeURL} className="code" target="_blank" rel="noreferrer">
              <i className="fas fa-code"></i>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TiagosGuidesCard;
