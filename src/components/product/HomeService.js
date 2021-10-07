import React from "react";

export const HomeService = (props) => {
  const { services } = props;
  return (
    <div class="col-lg-4 col-md-4 col-sm-6">
      <div class="sectionBox">
        <div class="sectionImage">
          <img src={services.image} alt={services.title} />
        </div>
        <div class="sectionWords">
          <h4>{services.title}</h4>
          <p>{services.description}</p>
        </div>
      </div>
    </div>
  );
};

export const HomeIndustry = (props) => {
  const { industry } = props;
  return (
    <div class="col-lg-4 col-md-4 col-sm-6">
      <div class="sectionBox">
        <div class="sectionImage">
          <img src={industry.image} alt={industry.title} />
        </div>
        <div class="sectionWords">
          <h4> {industry.title}</h4>
          <p>{industry.description}</p>
        </div>
      </div>
    </div>
  );
};
