import React from "react";
import { Link } from "react-router-dom";
import PortProduct from "../components/product/portProduct";
import LoadingBox from "../components/boxes/LoadingBox";
import MessageBox from "../components/boxes/MessageBox";
import { useSelector } from "react-redux";
import Header from "../components/header/header";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PortWebsite from "../components/product/portWebsite";
import PortDesign from "../components/product/portDesign";

function PortfolioScreen(props) {
  const appLists = useSelector((state) => state.appLists);
  const { loading, error, apps } = appLists;
  const websiteList = useSelector((state) => state.websiteList);
  const { loading: loadingweb, error: errorweb, websites } = websiteList;
  const designsList = useSelector((state) => state.designsList);
  const { loading: loadingDesign, error: errorDesign, designs } = designsList;
  return (
    <>
      <Header bgColor="white" />
      <div class="banner">
        <div class="overlay">
          <div class="container">
            <h1>Some of my works </h1>
            <button>
              <Link to="/">Home</Link>
            </button>
          </div>
        </div>
      </div>
      <div class="container portfolios">
        {/* APP SLIDER */}
        <div class="slides row">
          <div class="sliderWords col-lg-4 col-md-5">
            <div class="sliderWordsImage">
              <img src="images/gifs/gif22.gif" alt="web Development" />
            </div>
            <div class="sliderHeading">
              <h4>app Development</h4>
              <p>
                I develop both native and cross-platform applications using
                React Native and flutter that can adapt to your time constraints
                and budget.
              </p>
            </div>
          </div>

          <div class="sliderIterms col-lg-8 col-md-7">
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <>
                {apps.length && (
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={20}
                    items={3}
                    autoPlay={true}
                    autoplayTimeout={2000}
                    smartSpeed={20}
                  >
                    {apps.map((app) => (
                      <PortProduct key={app._id} app={app} />
                    ))}
                  </OwlCarousel>
                )}
              </>
            )}
          </div>
        </div>

        {/* WEB SLIDER */}
        <div class="slides row">
          <div class="sliderWords col-lg-4 col-md-5">
            <div class="sliderWordsImage">
              <img src="images/gifs/gif15.gif" alt="web Development" />
            </div>
            <div class="sliderHeading">
              <h4>web Development</h4>
              <p>
                I have develop full-fledged, Responsive and scalable websites
                for kupatana, zawaExplore , Zawa.labs, TanzaniaGemstones and
                many websites of all organization size{" "}
              </p>
            </div>
          </div>

          <div class="sliderIterms col-lg-8 col-md-7">
            {loadingweb ? (
              <LoadingBox></LoadingBox>
            ) : errorweb ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <>
                {websites.length && (
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={20}
                    items={3}
                    autoPlay={true}
                    autoplayTimeout={2000}
                    smartSpeed={20}
                  >
                    {websites.map((website) => (
                      <PortWebsite key={website._id} website={website} />
                    ))}
                  </OwlCarousel>
                )}
              </>
            )}
          </div>
        </div>

        {/* DESIGN SLIDER */}
        <div class="slides row">
          <div class="sliderWords col-lg-4 col-md-5">
            <div class="sliderWordsImage">
              <img src="images/gifs/gif10.gif" alt="web and app design" />
            </div>
            <div class="sliderHeading">
              <h4>CRM software</h4>
              <p>
                Save hours daily by automating your email marketing and spend
                more time on your business. Reach your audience through the
                power of automation without sacrificing personal touch.
              </p>
            </div>
          </div>

          <div class="sliderIterms col-lg-8 col-md-7">
            {loadingDesign ? (
              <LoadingBox></LoadingBox>
            ) : errorDesign ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <>
                {designs.length && (
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={20}
                    items={3}
                    autoPlay={true}
                    autoplayTimeout={2000}
                    smartSpeed={20}
                  >
                    {designs.map((design) => (
                      <PortDesign key={design._id} design={design} />
                    ))}
                  </OwlCarousel>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioScreen;
