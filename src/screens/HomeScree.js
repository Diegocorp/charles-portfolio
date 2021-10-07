import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Services from "../components/datas/servicesDatas";
import { HomeIndustry, HomeService } from "../components/product/HomeService";
import { Link } from "react-router-dom";
import Header from "../components/header/header";
import { useSelector } from "react-redux";
import RecentApps from "../components/product/recentApps";
import LoadingBox from "../components/boxes/LoadingBox";
import MessageBox from "../components/boxes/MessageBox";
import ContactForm from "../components/product/contactForm";
import RecentWebsites from "../components/product/recentWebsite";
import RecentDesigns from "../components/product/recentDesign";

function HomeScreen(props) {
  const appLists = useSelector((state) => state.appLists);
  const { loading, error, apps } = appLists;
  const websiteList = useSelector((state) => state.websiteList);
  const { loading: loadingweb, error: errorweb, websites } = websiteList;
  const designsList = useSelector((state) => state.designsList);
  const { loading: loadingDesign, error: errorDesign, designs } = designsList;
  return (
    <>
      <Header bgColor="black" />
      <div class="Mainbackground" id="home">
        <div class="topBackground"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001517"
            fillopacity="1"
            d="M0,192L40,213.3C80,235,160,277,240,293.3C320,309,400,299,480,277.3C560,256,640,224,720,186.7C800,149,880,107,960,122.7C1040,139,1120,213,1200,218.7C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>

        <div class="container fluids">
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div class="screenWords">
                <h1>Hello, I'm Charles.</h1>
                <p>
                  A full-stack developer. Specializing in building exceptional
                  trending mobile applications and websites. Feel free to take a
                  look at my latest projects. Remotely available UTC−1 to UTC+8.
                  laummassy@gmail.com
                </p>
                <div class="twoMainButton">
                  <div class="buttonMain">
                    <Link to="/app">Mobile Apps</Link>
                    <div class="hrizontalLine"></div>
                  </div>
                  <div class="buttonMain">
                    <Link to="/website">Websites</Link>
                    <div class="hrizontalLine diff"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-6">
              <div class="screenImage mx-auto">
                <img
                  src="images/charles-img.jpg"
                  alt="Charles blog"
                  class="rounded-circle w-60 h-60 p-5 my-5 text-center"
                  style={{ width: 380 + "px", height: 380 + "px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div class="section" id="services">
        <div class="container rows">
          <Tabs defaultActiveKey="services" class="tab">
            <Tab class="tablinks" eventKey="services" title="Services">
              <div class="container rows">
                <div class="tabcontent" id="London">
                  <div class="row">
                    {Services.services.map((services) => (
                      <HomeService key={services._id} services={services} />
                    ))}
                  </div>
                </div>
              </div>
            </Tab>
            <Tab class="tablinks" eventKey="technology" title="technologies">
              <div class="container rows">
                <div class="tabcontent" id="London">
                  <div class="row">
                    {Services.Technology.map((technology) => (
                      <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="sectionBox">
                          <div class="sectionImage">
                            <img src={technology.image} alt={technology.tile} />
                          </div>
                          <div class="sectionWords">
                            <h4>{technology.tile}</h4>
                            <ul>
                              {technology.techs.map((tech) => (
                                <li>{tech.name}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tab>
            <Tab class="tablinks" eventKey="industry" title="Industry">
              <div class="container rows">
                <div class="tabcontent" id="London">
                  <div class="row">
                    {Services.Industry.map((industry) => (
                      <HomeIndustry key={industry._id} industry={industry} />
                    ))}
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* ABOUT US */}
      <section id="about">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="row">
                <div class="col-md-6">
                  <div class="aboutMeImg">
                    <img src="images/gifs/about.jpg" alt="about me" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="about-me">
                    <h5>About me</h5>
                    <div class="aboutHorizontalLine"></div>
                    <p>
                      I enjoy creating things that live on the internet, whether
                      that be websites, applications, or anything in between. My
                      goal is to always build products that provide
                      pixel-perfect, performance experiences.
                    </p>
                    <p>
                      Familiarity with Front End High level programming such as
                      HTML, CSS, ReactJS, XML, jQuery and JSON. Server Side
                      coding skills Node.js and Php Frameworks(
                      Express.js,Laravel).
                    </p>
                    <p>
                      Understanding of data structure algorithms including data
                      migration, transformation and analysis. Deploying,
                      managing and operating scalable, highly available and
                      fault tolerant systems on AWS.
                    </p>
                    <p>
                      Excellent communication skills in both Swahili and
                      English.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT US */}
      <div class="contactme" id="contact">
        <div class="contactOverlay">
          <div class="container">
            <div class="form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      {/* RECENT BLOG */}
      <div class="container" id="blogs">
        <div class="article">
          <h2>Recent Work</h2>
          <hr />
          <div class="rows">
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <>
                {apps.slice(0, 1).map((app) => (
                  <RecentApps key={app._id} app={app} />
                ))}
              </>
            )}
            {loadingweb ? (
              <LoadingBox></LoadingBox>
            ) : errorweb ? (
              <MessageBox variant="danger">{errorweb}</MessageBox>
            ) : (
              <>
                {websites.slice(0, 2).map((website) => (
                  <RecentWebsites key={website._id} website={website} />
                ))}
              </>
            )}
            {loadingDesign ? (
              <LoadingBox></LoadingBox>
            ) : errorDesign ? (
              <MessageBox variant="danger">{errorDesign}</MessageBox>
            ) : (
              <>
                {designs.slice(0, 1).map((design) => (
                  <RecentDesigns key={design._id} design={design} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
