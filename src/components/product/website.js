import React from "react";

function Website(props) {
  const { website } = props;
  return (
    <div class="blogBox col-lg-4 col-md-6 col-sm-6">
      <div class="blogBox_pic">
        <img src={website.image} alt={website.name} />
        <div class="blogLebal">
          <a href={`websites/${website._id}`}>Project Details</a>
        </div>
      </div>
      <div class="blog_text">
        <ul>
          <li>
            <i class="far fa-calendar"></i> {website.createdAt}
          </li>
        </ul>
        <h5>
          <a href={`websites/${website._id}`}>{website.name}</a>
        </h5>
        <p>{website.description.substring(0, 90)}...</p>
      </div>
    </div>
  );
}

export default Website;
