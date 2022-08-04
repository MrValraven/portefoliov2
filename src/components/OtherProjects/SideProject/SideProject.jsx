import React from "react";
import "./styles.scss";

const SideProject = ({ title, description, websiteURL, codeURL }) => {
  return (
    <div className="sideproject-container">
      <div className="text-container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="button-container">
        {websiteURL ? (
          <button className="website">
            <a href={websiteURL} target="_blank" rel="noreferrer">
              Live Website
            </a>
          </button>
        ) : null}

        <a href={codeURL} className="code" target="_blank" rel="noreferrer">
          <i className="fas fa-code"></i>
        </a>
      </div>
    </div>
  );
};

export default SideProject;
