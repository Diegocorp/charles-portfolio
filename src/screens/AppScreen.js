import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/product/product";
import LoadingBox from "../components/boxes/LoadingBox";
import MessageBox from "../components/boxes/MessageBox";
import { useSelector } from "react-redux";
import Header from "../components/header/header";

function AppScreen(props) {
  const appLists = useSelector((state) => state.appLists);
  const { loading, error, apps } = appLists;

  return (
    <>
      <Header bgColor="white" />
      <div class="banner">
        <div class="overlay">
          <div class="container">
            <h1>My Recent Mobile Apps </h1>
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
            {apps.map((app) => (
              <Product key={app._id} app={app} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default AppScreen;
