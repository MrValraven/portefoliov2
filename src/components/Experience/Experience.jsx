import React from "react";
import "./styles.scss";

import CatLogo from "../../assets/logos/catLogoBlack.svg";
import Aaue from "../../assets/logos/aaue.png";

import experienceData from "../../data/experience";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h1>Professional Experience</h1>
      {experienceData.map((work) => (
        <ExperienceCard
          key={work.companyName}
          companyName={work.companyName}
          companyImage={work.companyImage}
          role={work.role}
          description={work.description}
          work={work.work}
        />
      ))}
    </section>
  );
};

export default Experience;
