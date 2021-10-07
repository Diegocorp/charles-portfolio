import React from "react";

function Design(props) {
  const { design } = props;
  return (
    <div class="blogBox col-lg-4 col-md-6 col-sm-6">
      <div class="blogBox_pic">
        <img src={design.image} alt={design.name} />
        <div class="blogLebal">
          <a href={`/designs/${design._id}`}>Project Details</a>
        </div>
      </div>
      <div class="blog_text">
        <ul>
          <li>
            <i class="far fa-calendar"></i> {design.createdAt}
          </li>
        </ul>
        <h5>
          <a href={`/designs/${design._id}`}>{design.name}</a>
        </h5>
        <p>{design.description.substring(0, 90)}...</p>
      </div>
    </div>
  );
}

export default Design;
