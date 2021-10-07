import React from "react";

function RecentApps(props) {
  const { app } = props;
  return (
    <div class="shop col-lg-3 col-md-4 col-sm-6">
      <div class="shopBack">
        <img src={app.image} alt={app.name} />
        <div class="shoplebal">
          <a href={`apps/${app._id}`}>Read More</a>
        </div>
      </div>
      <div class="shoptext">
        <p>{app.name}</p>
        <h3>{app.description.substring(0, 50)}...</h3>
      </div>
    </div>
  );
}

export default RecentApps;
