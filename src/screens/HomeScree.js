import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Services from "../components/datas/servicesDatas";
import { HomeIndustry, HomeService } from "../components/product/HomeService";
import { Link } from "react-router-dom";
import Header from "../components/header/header";
import ContactForm from "../components/product/contactForm";
import Experience from "../components/product/Experience";

function HomeScreen(props) {
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
                  I'm a Back-End developer. With 5 years of experience building
                  software solutions with high quality standards. Feel free to
                  take a look at my skills, projects and experience as well as
                  contact me if you like to work with me
                  <strong> charlesgrandedstore@gmail.com</strong>
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
      {/* ABOUT US */}
      <section id="about">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="row">
                <div class="col-md-6">
                  <div class="aboutMeImg py-5">
                    <img
                      src="images/gifs/about.svg"
                      class="h-75 py-5"
                      alt="about me"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="about-me">
                    <h5>About me</h5>
                    <div class="aboutHorizontalLine"></div>
                    <p>
                      I like to create things that live on the Internet, whether
                      it's websites, applications or any need that arises in
                      today's market. My goal is always to build products that
                      provide seamless performance experiences for users.
                    </p>
                    <p>
                      Familiarity with Back-End programming with server-side
                      coding skills Node.js and Php Frameworks(
                      Express.js,Laravel).
                    </p>
                    <p>
                      Experience with mobile development technologies such as
                      Xamarin, Flutter, React Native and Ionic.
                    </p>
                    <p>
                      Understanding of data structure algorithms including data
                      migration, transformation and analysis. Implementation,
                      management and operation of scalable, highly available and
                      fault tolerant systems on AWS.
                    </p>
                    <p>Excellent communication skills in English.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <div class="section" id="services">
        <div class="container fluid rows">
          <h3>
            <strong>Services</strong>{" "}
          </h3>
          <div class="aboutHorizontalLine m-4"></div>
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
      \{/* CONTACT US */}
      <div class="contactme" id="contact">
        <div class="contactOverlay">
          <div class="container">
            <div class="form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      {/* EXPERIENCE */}
      <div class="container" id="experience">
        <div class="article">
          <h2>Experience</h2>
          <hr />
          <Experience />
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
