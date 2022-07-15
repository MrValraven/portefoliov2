import React from "react";
import TiagosGuidesCard from "../TiagoGuidesCard/TiagosGuidesCard";
import "./styles.scss";

import tiagosGuides from "../../data/tiagosGuides.json";

const TiagosGuide = () => {
  return (
    <div className="tiagosGuides">
      <h1>Tiago's Guide to Everything!</h1>
      <p className="subtitle">
        I'm a firm believer that knowledge should be free and acessible to
        everyone, so here's my humble (and well researched) opinion on a bunch
        of stuff :)
      </p>
      <div className="guidesContainer">
        {tiagosGuides.map((guide) => (
          <TiagosGuidesCard
            guideName={guide.name}
            description={guide.description}
            website={guide.websiteURL}
            isWip={guide.isWIP}
          />
        ))}
      </div>
    </div>
  );
};

export default TiagosGuide;
