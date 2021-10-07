import React, { useEffect } from "react";
import LoadingBox from "../components/boxes/LoadingBox";
import MessageBox from "../components/boxes/MessageBox";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/header/header";
import { detailWebsite } from "../redux/action/websiteAction";

function WebsitesDetailScren(props) {
  const websiteDetails = useSelector((state) => state.websiteDetails);
  const { loading, error, website } = websiteDetails;
  const websiteId = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailWebsite(websiteId));
  }, [dispatch, websiteId]);
  return (
    <>
      <Header bgColor="white" />
      {loading ? (
        <div class="appDetail">
          <LoadingBox></LoadingBox>
        </div>
      ) : error ? (
        <div class="appDetail">
          <MessageBox variant="danger">{error}</MessageBox>
        </div>
      ) : (
        <>
          <div class="owl-carouseler webanner" id="home">
            <img src={website.banner} alt="banner" />
          </div>

          <div class="container">
            <div class="detailses">
              <h1>{website.name}</h1>
              <p>{website.description}</p>
              <button>
                <a target="_blank" href={website.projectLink} rel="noreferrer">
                  Project Link
                </a>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default WebsitesDetailScren;
