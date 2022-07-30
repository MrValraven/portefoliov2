import React from "react";
import "./styles.scss";

const ExperienceCard = ({
  companyName,
  companyImage,
  role,
  description,
  work,
}) => {
  return (
    <ul className="experienceCard">
      <div className="marker"></div>
      <h2>
        <img src={companyImage} alt="" />
        <span>{companyName}</span>
      </h2>
      <h3>{role}</h3>
      <p>{description}</p>
      {work.map((project) => (
        <li key={project.company}>
          {project.description}
          <a href={project.workURL} target="_blank" rel="noopener noreferrer">
            {project.company}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ExperienceCard;
