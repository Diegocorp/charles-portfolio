import React from "react";

function PortDesign(props) {
  const { design } = props;
  return (
    <div class="sliderShow">
      <img src={design.image} alt={design.name} />
      <div class="saleslebal">
        <div
          class="salesLebalIcon"
          data-toggle="tooltip"
          data-placement="left"
          title="Live Preview"
        >
          <a href={`/designs/${design._id}`}>
            <i class="fas fa-laptop"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortDesign;
