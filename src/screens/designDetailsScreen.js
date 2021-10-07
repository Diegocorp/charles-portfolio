import React, { useEffect } from "react";
import LoadingBox from "../components/boxes/LoadingBox";
import MessageBox from "../components/boxes/MessageBox";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/header/header";
import { detailDesign } from "../redux/action/designActions";

function DesignDetailsScreen(props) {
  const designsDetails = useSelector((state) => state.designsDetails);
  const { loading, error, design } = designsDetails;
  const designId = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailDesign(designId));
  }, [dispatch, designId]);
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
            <img src={design.banner} alt="banner" />
          </div>

          <div class="container">
            <div class="detailses">
              <h1>{design.name}</h1>
              <p>{design.description}</p>
              <button>
                <a target="_blank" href={design.projectLink} rel="noreferrer">
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

export default DesignDetailsScreen;
