import React from "react";

function RecentDesigns(props) {
  const { design } = props;
  return (
    <div class="shop col-lg-3 col-md-4 col-sm-6">
      <div class="shopBack">
        <img src={design.image} alt={design.name} />
        <div class="shoplebal">
          <a href={`designs/${design._id}`}>Read More</a>
        </div>
      </div>
      <div class="shoptext">
        <p>{design.name}</p>
        <h3>{design.description.substring(0, 50)}...</h3>
      </div>
    </div>
  );
}

export default RecentDesigns;
