import React from "react";

function PortWebsite(props) {
  const { website } = props;
  return (
    <div class="sliderShow">
      <img src={website.image} alt={website.name} />
      <div class="saleslebal">
        <div
          class="salesLebalIcon"
          data-toggle="tooltip"
          data-placement="left"
          title="Live Preview"
        >
          <a href={`websites/${website._id}`}>
            <i class="fas fa-laptop"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortWebsite;
