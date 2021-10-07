import React from "react";
import { Link } from "react-router-dom";
import LoadingBox from "../components/boxes/LoadingBox";
import MessageBox from "../components/boxes/MessageBox";
import { useSelector } from "react-redux";
import Header from "../components/header/header";
import Website from "../components/product/website";

function WebsitesScreen(props) {
  const websiteList = useSelector((state) => state.websiteList);
  const { loading, error, websites } = websiteList;

  return (
    <>
      <Header bgColor="white" />
      <div class="banner">
        <div class="overlay">
          <div class="container">
            <h1>My Recent Website works</h1>
            <button>
              <Link to="/">Home</Link>
            </button>
          </div>
        </div>
      </div>

      <div class="container blogcontainer">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div class="row">
            {websites.map((website) => (
              <Website key={website._id} website={website} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default WebsitesScreen;
