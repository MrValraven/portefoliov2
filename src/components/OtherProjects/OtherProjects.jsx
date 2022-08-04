import React from "react";
import "./styles.scss";

import sideprojects from "./sideprojects.json";
import SideProject from "./SideProject/SideProject";

const OtherProjects = () => {
  return (
    <section className="otherProjects">
      <h1>Side projects</h1>
      <div className="projectsContainer">
        {sideprojects.map((sideproject) => (
          <SideProject
            key={sideproject.id}
            title={sideproject.title}
            description={sideproject.description}
            websiteURL={sideproject.websiteURL}
            codeURL={sideproject.codeURL}
          />
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
