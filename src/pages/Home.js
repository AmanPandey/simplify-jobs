import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Model from "./Model";
import { CiCircleCheck } from "react-icons/ci";
import FrontendContext from "../context/FrontendContext.js";

const Home = () => {
  const { setIsModelOpen, isModelOpen } = useContext(FrontendContext);
  const navigate = useNavigate();

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   navigate("/");
  //   setEmail("");
  // }

  useEffect(() => {
    if (window.$) {
      window.$(".selectpicker").selectpicker(); // Initialize Bootstrap select if using jQuery
      window.$(".owl-carousel").owlCarousel(); // Owl Carousel
    }
  }, []);
  useEffect(() => {
    if (window.innerWidth < 772) {
      const cards = document.querySelectorAll(".card-img-wrapper");

      const handleClick = (e) => {
        const clickedCard = e.currentTarget;

        const isActive = clickedCard.classList.contains("active");

        // Remove 'active' from all cards
        cards.forEach((c) => c.classList.remove("active"));

        // Add it back only if not active before
        if (!isActive) {
          clickedCard.classList.add("active");
        }
      };

      // Attach event listener
      cards.forEach((card) => card.addEventListener("click", handleClick));

      // Clean up
      return () => {
        cards.forEach((card) => card.removeEventListener("click", handleClick));
      };
    }
  }, []);

  return (
    <>
      {/* <div id="overlayer"></div> */}

      {/* Hero Section */}
      <section
        className="home-section section-hero overlay bg-image"
        id="home-section"
        style={{ backgroundImage: "url('images/jobsalgo-hero.jpg')" }}
      >
        <div className="container" data-aos="zoom-in" data-aos-delay="200">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <div className="mb-5 text-center">
                <h1 className="text-white font-weight-bold">
                  Jobs Algo Amplify Growth
                </h1>
                <p>
                  Join 5+ million job seekers monthly. Apply to 100+ fresh
                  opportunities daily in banking, distillery, and automobile
                  sectors.
                </p>
              </div>
              <form method="" className="search-jobs-form" id="job-search-form">
                <div className="row mb-3">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <select
                      className="selectpicker"
                      data-style="btn-white btn-lg"
                      data-width="100%"
                      title="Industry"
                      name="industry"
                    >
                      <option value="Distellery">Distellery</option>

                      <option value="Finance & Banking">
                        Finance & Banking
                      </option>
                      <option value="Automobile">Automobile</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Job title or keyword (e.g., Regional Manager, Cane Manager, Service Head)"
                      name="keyword"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <select
                      className="selectpicker"
                      data-style="btn-white btn-lg"
                      data-width="100%"
                      title="Location"
                      data-live-search="true"
                    >
                      <option>Gurugram</option>

                      <option>Hyderabad</option>
                    </select>
                  </div>{" "}
                  <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block text-white btn-search"
                      onClick={() => navigate("/jobs-listing")}
                    >
                      <span className="icon-search icon mr-2"></span>Search Job
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div id="form-error" className="text-white d-none"></div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 popular-keywords">
                    <h3>Trending Keywords:</h3>
                    <ul className="keywords list-unstyled m-0 p-0">
                      <li>
                        <a href="/" className="mr-1 mb-1">
                          Regional Manager
                        </a>
                      </li>
                      <li>
                        <a href="/" className="mr-1 mb-1">
                          Cane Manager
                        </a>
                      </li>
                      <li>
                        <a href="/" className="mr-1 mb-1">
                          {" "}
                          Service Head
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <a href="#next" className="scroll-button smoothscroll">
            <span className="icon-keyboard_arrow_down"></span>
          </a> */}
      </section>

      {/* why choose */}
      <section className="site-section pb-4">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mb-5 mb-lg-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="images/why_choose_jobsalgo.jpg"
                alt="Why Choose SimplifyJob"
                className="img-fluid img-shadow"
              />
            </div>
            <div
              className="col-lg-5 ml-auto"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h2 className="section-title mb-3">Why Choose JobsAlgo?</h2>
              <div>
                {/* First Item */}
                <div className="d-flex align-items-center justify-content-start mb-3">
                  <div
                    style={{
                      marginRight: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CiCircleCheck
                      style={{ fontSize: "24px", color: "#28a745" }}
                    />
                  </div>
                  <p className="lead m-0">
                    Industry-Focused Opportunities in Banking, Distillery &
                    Automobile.
                  </p>
                </div>

                {/* Second Item */}
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      marginRight: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CiCircleCheck
                      style={{ fontSize: "24px", color: "#28a745" }}
                    />
                  </div>
                  <p className="lead m-0">
                    Fast, AI-Driven Candidate Matching.
                  </p>
                </div>

                {/* Third Item */}
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      marginRight: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CiCircleCheck
                      style={{ fontSize: "24px", color: "#28a745" }}
                    />
                  </div>
                  <p className="lead m-0">100% Verified Employers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* category  */}
      <section
        className="site-section services-section bg-light block__62849"
        id="next-section"
      >
        <div className="container">
          <div
            className="row mb-5 justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="col-md-7 text-center">
              <h2 className="section-title mb-2">Browse by Category</h2>
              <p>Find the job that’s perfect for you</p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 col-md-3 mb-4 mb-md-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="service-single.html"
                className="block__16443 text-center d-block h-100"
              >
                <span className="custom-icon mx-auto">
                  <span className="icon-briefcase d-block"></span>
                </span>
                <h3>Banking & Finance</h3>
                <p>13 Jobs Available</p>
              </a>
            </div>
            <div
              className="col-12 col-md-3 mb-4 mb-md-0 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="service-single.html"
                className="block__16443 text-center d-block h-100"
              >
                <span className="custom-icon mx-auto">
                  <span className="icon-glass d-block"></span>
                </span>
                <h3>Distillery</h3>
                <p>5 Jobs Available</p>
              </a>
            </div>
            <div
              className="col-12 col-md-3 mb-4 mb-md-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="service-single.html"
                className="block__16443 text-center d-block h-100"
              >
                <span className="custom-icon mx-auto">
                  <span className="icon-car d-block"></span>
                </span>
                <h3>Automobile</h3>
                <p>8 Jobs Available</p>
              </a>
            </div>
            <div
              className="col-12 col-md-3 mb-4 mb-md-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="service-single.html"
                className="block__16443 text-center d-block h-100"
              >
                <span className="custom-icon mx-auto">
                  <span className="icon-users d-block"></span>
                </span>
                <h3>Human Resources</h3>
                <p>3 Jobs Available</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* jobs locations */}
      <section className="location-section">
        <div className="container my-5">
          <div className="row mb-5 justify-content-center">
            <div
              className="col-md-7 text-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h2 className="section-title mb-2">Jobs by Location</h2>
            </div>
          </div>
          <div className="row g-4">
            <div
              className="col-12 col-sm-6 col-lg-3 mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card h-100">
                <div className="card-img-wrapper">
                  <img
                    src="images/germany.jpg"
                    className="img-fluid"
                    alt="Germany"
                  />
                  <div className="overlay">
                    <p className="mb-1">
                      <i className="fas fa-briefcase mx-2"></i>12 Vacancies
                    </p>
                    <p>
                      <i className="fas fa-building mx-2"></i>6 Companies
                    </p>
                  </div>
                </div>
              </div>
              <div className="country text-center">
                <strong>Germany</strong>
              </div>
            </div>

            <div
              className="col-12 col-sm-6 col-lg-3 mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card h-100">
                <div className="card-img-wrapper">
                  <img
                    src="images/uk.jpg"
                    className="img-fluid"
                    alt="United Kingdom"
                  />
                  <div className="overlay">
                    <p className="mb-1">
                      <i className="fas fa-briefcase mx-2"></i>9 Vacancies
                    </p>
                    <p>
                      <i className="fas fa-building mx-2"></i>4 Companies
                    </p>
                  </div>
                </div>
              </div>
              <div className="country text-center">
                <strong>United Kingdom</strong>
              </div>
            </div>

            <div
              className="col-12 col-sm-6 col-lg-3 mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card h-100">
                <div className="card-img-wrapper">
                  <img
                    src="images/australia.jpg"
                    className="img-fluid"
                    alt="australia"
                  />
                  <div className="overlay">
                    <p className="mb-1">
                      <i className="fas fa-briefcase mx-2"></i>8 Vacancies
                    </p>
                    <p>
                      <i className="fas fa-building mx-2"></i>5 Companies
                    </p>
                  </div>
                </div>
              </div>
              <div className="country text-center">
                <strong>Australia</strong>
              </div>
            </div>

            <div
              className="col-12 col-sm-6 col-lg-3 mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card h-100">
                <div className="card-img-wrapper">
                  <img
                    src="images/denmark.jpg"
                    className="img-fluid"
                    alt="denmark"
                  />
                  <div className="overlay">
                    <p className="mb-1">
                      <i className="fas fa-briefcase mx-2"></i>7 Vacancies
                    </p>
                    <p>
                      <i className="fas fa-building mx-2"></i>3 Companies
                    </p>
                  </div>
                </div>
              </div>
              <div className="country text-center">
                <strong>Denmark</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* hiring */}

      <section
        className="py-5 bg-image overlay-primary fixed overlay d-flex align-items-center "
        style={{
          backgroundImage: "url('images/we_are_hiring.jpg')",
          height: "400px",
        }}
      >
        <div className="container">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-md-8 mb-3">
              <h2 className="text-white section-title">We are HIRING</h2>
              <p className="mb-0 text-white" style={{ fontSize: "18px" }}>
                Lets work together and explore the opportunities
              </p>
            </div>
            <div className="col-md-3 ml-auto">
              <button
                onClick={() => {
                  console.log("clicked");
                  setIsModelOpen(true);
                }}
                className="btn btn-block btn-lg apply-now"
                style={{ fontWeight: "600" }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiters  */}
      <section className="site-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center mt-4 mb-5">
              <div className="row justify-content-center">
                <div
                  className="col-md-7"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <h2 className="section-title mb-2">Top Recruiters Hiring</h2>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-lg-3 col-md-6 text-center mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="images/tesla-svgrepo-com.svg"
                alt="tesla"
                className="img-fluid logo-1 recruiters-logo"
              />
            </div>
            <div
              className="col-6 col-lg-3 col-md-6 text-center mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="images/amazon-icon-logo-svgrepo-com.svg"
                alt="amazon"
                className="img-fluid logo-2 recruiters-logo"
              />
            </div>
            <div
              className="col-6 col-lg-3 col-md-6 text-center mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="images/linkedin-161-svgrepo-com.svg"
                alt="linkedin"
                className="img-fluid logo-3 recruiters-logo"
              />
            </div>
            <div
              className="col-6 col-lg-3 col-md-6 text-center mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="images/exela-technologies-logo-png_seeklogo-350880.svg"
                alt="exela"
                className="img-fluid logo-4 recruiters-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* career tips */}

      <section
        className="site-section services-section bg-light block__62849"
        id="next-section"
        style={{ marginBottom: "7rem" }}
      >
        <div className="container">
          <div
            className="row mb-5 justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="col-md-7 text-center">
              <h2 className="section-title mb-2" style={{ fontWeight: "700" }}>
                Career Tips & Resources
              </h2>
            </div>
          </div>
          <div className="row d-flex align-items-stretch">
            <div
              className="col-12 col-md-4 mb-4 align-items-stretch d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a href="/" className="block__16443 text-center d-block">
                <span className="custom-icon mx-auto">
                  <span className="icon-chat d-block"></span>
                </span>
                <h3>21 Job Interview Tips to Make a Great Impression</h3>
                <p>
                  Get ready to impress with these practical tips that help you
                  prepare, practice, and present your best self.
                </p>
              </a>
            </div>
            <div
              className="col-12 col-md-4 mb-4 align-items-stretch d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a href="/" className="block__16443 text-center d-block">
                <span className="custom-icon mx-auto">
                  <span className="icon-briefcase d-block"></span>
                </span>
                <h3>How to Write a Resume for Finance Roles</h3>
                <p>
                  Expert guidance on building a finance-specific resume that
                  stands out in 2025.
                </p>
              </a>
            </div>
            <div
              className="col-12 col-md-4 mb-4  align-items-stretch d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a href="/" className="block__16443 text-center d-block">
                <span className="custom-icon mx-auto">
                  <span className="icon-beer d-block"></span>
                </span>
                <h3>Breaking into the Distillery Industry</h3>
                <p>
                  Explore the qualifications, skills, and roles in one of the
                  fastest-growing manufacturing segments.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* subscribe  */}
      <section
        className="site-section bg-image overlay-hiring fixed overlay"
        style={{
          backgroundImage: "url('images/cta-3.jpg')",
          padding: "6rem 0rem",
        }}
      >
        <div className="container">
          <div
            className="row align-items-center d-flex flex-column"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="col-md-8 mx-auto text-center">
              <h2 className="text-white section-title">
                Find the Right Job, Faster
              </h2>
              <p className="mb-0 text-white" style={{ fontSize: "18px" }}>
                Join JobsAlgo to explore thousands of opportunities, connect
                with top employers, and take the next step in your career.
              </p>
            </div>
            <div className="col-md-6 mx-auto py-2 d-flex justify-content-center mt-3">
              <button
                className="cta-btn mt-4"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/jobs");
                }}
              >
                Start Your Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <Model />
    </>
  );
};

export default Home;
