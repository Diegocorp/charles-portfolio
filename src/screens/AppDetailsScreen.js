import React, { useEffect } from "react";
import LoadingBox from "../components/boxes/LoadingBox";
import MessageBox from "../components/boxes/MessageBox";
import { useSelector, useDispatch } from "react-redux";
import { detailApps } from "../redux/action/appsActions";
import Header from "../components/header/header";

function AppDetailScreen(props) {
  const appDetails = useSelector((state) => state.appDetails);
  const { loading, error, app } = appDetails;
  const appId = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailApps(appId));
  }, [dispatch, appId]);
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
          <div class="owl-carouseler" id="home">
            <img src={app.banner} alt="banner" />
          </div>

          <div class="container">
            <div class="detailses">
              <h1>{app.name}</h1>
              <p>{app.description}</p>
              <button>
                <a target="_blank" href={app.projectLink} rel="noreferrer">
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

export default AppDetailScreen;
