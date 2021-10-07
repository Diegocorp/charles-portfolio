import React from "react";

function Product(props) {
  const { app } = props;
  return (
    <div class="blogBox col-lg-4 col-md-6 col-sm-6">
      <div class="blogBox_pic">
        <img src={app.image} alt={app.name} />
        <div class="blogLebal">
          <a href={`apps/${app._id}`}>Project Details</a>
        </div>
      </div>
      <div class="blog_text">
        <ul>
          <li>
            <i class="far fa-calendar"></i> {app.createdAt}
          </li>
        </ul>
        <h5>
          <a href={`apps/${app._id}`}>{app.name}</a>
        </h5>
        <p>{app.description.substring(0, 90)}...</p>
      </div>
    </div>
  );
}

export default Product;
