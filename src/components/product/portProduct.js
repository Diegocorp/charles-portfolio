import React from "react";

function PortProduct(props) {
  const { app } = props;
  return (
    <div class="sliderShow">
      <img src={app.image} alt={app.name} />
      <div class="saleslebal">
        <div
          class="salesLebalIcon"
          data-toggle="tooltip"
          data-placement="left"
          title="Live Preview"
        >
          <a href={`apps/${app._id}`}>
            <i class="fas fa-laptop"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortProduct;
