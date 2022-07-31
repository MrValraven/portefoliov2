import React from "react";
import TiagosGuidesCard from "../TiagoGuidesCard/TiagosGuidesCard";
import "./styles.scss";

import tiagosGuides from "../../data/tiagosGuides.js";

const TiagosGuide = () => {
  return (
    <section className="tiagosGuides">
      <h1>Tiago's Guide to Everything!</h1>
      <p className="subtitle">
        I'm a firm believer that knowledge should be free and acessible to
        everyone, so here's my humble (and well researched) opinion on a bunch
        of stuff :)
      </p>
      <div className="guidesContainer">
        {tiagosGuides.map((guide) => (
          <TiagosGuidesCard
            key={guide.name}
            guideName={guide.name}
            description={guide.description}
            website={guide.websiteURL}
            image={guide.image}
            isWip={guide.isWIP}
          />
        ))}
      </div>
    </section>
  );
};

export default TiagosGuide;
