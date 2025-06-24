import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
    setEmail("");
  }

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
      <div id="overlayer"></div>
      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        {/* Hero Section */}
        <section
          className="home-section section-hero overlay bg-image"
          id="home-section"
          style={{ backgroundImage: "url('images/hero_1.jpg')" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="mb-5 text-center">
                  <h1 className="text-white font-weight-bold">
                    Simplify Job Amplify Growth
                  </h1>
                  <p>
                    Join 5+ million job seekers monthly. Apply to 100+ fresh
                    opportunities daily in banking, distillery, and automobile
                    sectors.
                  </p>
                </div>
                <form
                  method="post"
                  className="search-jobs-form"
                  id="job-search-form"
                >
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
                      >
                        <span className="icon-search icon mr-2"></span>Search
                        Job
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
                          <a href="#" className="">
                            Regional Manager
                          </a>
                        </li>
                        <li>
                          <a href="#" className="">
                            Cane Manager
                          </a>
                        </li>
                        <li>
                          <a href="#" className="">
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

          <a href="#next" className="scroll-button smoothscroll">
            <span className="icon-keyboard_arrow_down"></span>
          </a>
        </section>
      </div>

      {/* why choose */}
      <section className="site-section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="images/sq_img_6.jpg"
                alt="Image"
                className="img-fluid img-shadow"
              />
            </div>
            <div className="col-lg-5 ml-auto">
              <h2 className="section-title mb-3">Why Choose SimplifyJob?</h2>
              <p className="lead">
                ✔ Industry-Focused Opportunities in Banking, Distillery &
                Automobile.
              </p>
              <p className="lead">✔ Fast, AI-Driven Candidate Matching.</p>
              <p className="lead">✔ 100% Verified Employers.</p>
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
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7 text-center">
              <h2 className="section-title mb-2">Browse by Category</h2>
              <p>Find the job that’s perfect for you</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3 mb-4 mb-lg-5">
              <a
                href="service-single.html"
                className="block__16443 text-center d-block"
              >
                <span className="custom-icon mx-auto">
                  <span className="icon-briefcase d-block"></span>
                </span>
                <h3>Banking & Finance</h3>
                <p>13 Jobs Available</p>
              </a>
            </div>
            <div className="col-12 col-md-3 mb-4 mb-lg-5">
              <a
                href="service-single.html"
                className="block__16443 text-center d-block"
              >
                <span className="custom-icon mx-auto">
                  <span className="icon-glass d-block"></span>
                </span>
                <h3>Distillery</h3>
                <p>5 Jobs Available</p>
              </a>
            </div>
            <div className="col-12 col-md-3 mb-4 mb-lg-5">
              <a
                href="service-single.html"
                className="block__16443 text-center d-block"
              >
                <span className="custom-icon mx-auto">
                  <span className="icon-car d-block"></span>
                </span>
                <h3>Automobile</h3>
                <p>8 Jobs Available</p>
              </a>
            </div>
            <div className="col-12 col-md-3 mb-4 mb-lg-5">
              <a
                href="service-single.html"
                className="block__16443 text-center d-block"
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

      {/* feature jobs  */}
      <section className="site-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7 text-center">
              <h2 className="section-title mb-2">Feature Jobs</h2>
            </div>
          </div>

          <ul className="job-listings mb-5">
            <li className="job-listing d-block d-md-flex pb-3 pb-sm-0 align-items-center">
              <a href="job-single.html"></a>
              <div className="job-listing-logo">
                <img
                  src="images/job_logo_1.jpg"
                  alt="Free Website Template by Free-Template.co"
                  className="img-fluid"
                />
              </div>

              <div className="job-listing-about d-md-flex custom-width w-100 justify-content-between mx-4">
                <div className="job-listing-position custom-width w-25 mb-3">
                  <h2>Mechanical Design Engineer</h2>
                  <strong>Tesla</strong>
                </div>
                <div className="job-listing-location mb-3 custom-width w-25">
                  <span className="icon-room"></span>London, UK
                </div>
                <div className="job-listing-location mb-3 custom-width w-25">
                  <span className=""></span>$80,000/year
                </div>
                <div className="job-listing-meta w-25 text-md-right mb-3">
                  <span className="badge badge-success">Full-Time</span>
                </div>
              </div>
            </li>
            <li className="job-listing d-block d-md-flex pb-3 pb-sm-0 align-items-center">
              <a href="job-single.html"></a>
              <div className="job-listing-logo">
                <img
                  src="images/job_logo_2.jpg"
                  alt="Free Website Template by Free-Template.co"
                  className="img-fluid"
                />
              </div>

              <div className="job-listing-about d-md-flex custom-width w-100 justify-content-between mx-4">
                <div className="job-listing-position custom-width w-25 mb-3">
                  <h2>Master Distiller</h2>
                  <strong>Car Toys</strong>
                </div>
                <div className="job-listing-location mb-3 custom-width w-25">
                  <span className="icon-room"></span>Denmark
                </div>
                <div className="job-listing-location mb-3 custom-width w-25">
                  <span className=""></span>$60,000/year
                </div>
                <div className="job-listing-meta w-25 text-md-right mb-3">
                  <span className="badge badge-success">Full-Time</span>
                </div>
              </div>
            </li>

            <li className="job-listing d-block d-md-flex pb-3 pb-sm-0 align-items-center">
              <a href="job-single.html"></a>
              <div className="job-listing-logo">
                <img
                  src="images/job_logo_3.jpg"
                  alt="Free Website Template by Free-Template.co"
                  className="img-fluid"
                />
              </div>

              <div className="job-listing-about d-md-flex custom-width w-100 justify-content-between mx-4">
                <div className="job-listing-position custom-width w-25 mb-3">
                  <h2>Investment Analyst</h2>
                  <strong> Ibotta, Inc</strong>
                </div>
                <div className="job-listing-location mb-3 custom-width w-25">
                  <span className="icon-room"></span>Germany
                </div>
                <div className="job-listing-location mb-3 custom-width w-25">
                  <span className=""></span>$45/hr
                </div>
                <div className="job-listing-meta w-25 text-md-right mb-3">
                  <span className="badge badge-danger">Part-Time</span>
                </div>
              </div>
            </li>
          </ul>

          <div className="row pagination-wrap">
            <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
              <span>Showing 1-7 Of 1367 Jobs</span>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="custom-pagination ml-auto">
                <a href="#" className="prev">
                  Prev
                </a>
                <div className="d-inline-block">
                  <a href="#" className="active">
                    1
                  </a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                </div>
                <a href="#" className="next">
                  Next
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* jobs locations */}
      <section className="location-section">
        <div className="container my-5">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7 text-center">
              <h2 className="section-title mb-2">Jobs by Location</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-sm-6 col-lg-3 mb-5">
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

            <div className="col-12 col-sm-6 col-lg-3 mb-5">
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

            <div className="col-12 col-sm-6 col-lg-3 mb-5">
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

            <div className="col-12 col-sm-6 col-lg-3 mb-5">
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
        className="py-5 bg-image overlay-primary fixed overlay"
        style={{ backgroundImage: "url('images/hero_1.jpg')" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 mb-3">
              <h2 className="text-white section-title">We are HIRING</h2>
              <p className="mb-0 text-white lead">
                Lets work together and explore the opportunities
              </p>
            </div>
            <div className="col-md-3 ml-auto">
              <a href="#" className="btn btn-warning btn-block btn-lg">
                Apply Now
              </a>
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
                <div className="col-md-7">
                  <h2 className="section-title mb-2">Top Recruiters Hiring</h2>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-6 text-center mb-5">
              <img
                src="images/tesla-svgrepo-com.svg"
                alt="Image"
                className="img-fluid logo-1 recruiters-logo"
              />
            </div>
            <div className="col-6 col-lg-3 col-md-6 text-center mb-5">
              <img
                src="images/amazon-icon-logo-svgrepo-com.svg"
                alt="Image"
                className="img-fluid logo-2 recruiters-logo"
              />
            </div>
            <div className="col-6 col-lg-3 col-md-6 text-center mb-5">
              <img
                src="images/linkedin-161-svgrepo-com.svg"
                alt="Image"
                className="img-fluid logo-3 recruiters-logo"
              />
            </div>
            <div className="col-6 col-lg-3 col-md-6 text-center mb-5">
              <img
                src="images/exela-technologies-logo-png_seeklogo-350880.svg"
                alt="Image"
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
      >
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7 text-center">
              <h2 className="section-title mb-2">Career Tips & Resources</h2>
            </div>
          </div>
          <div className="row d-flex align-items-stretch">
            <div className="col-12 col-md-4 mb-4 align-items-stretch d-flex">
              <a href="#" className="block__16443 text-center d-block">
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
            <div className="col-12 col-md-4 mb-4 align-items-stretch d-flex">
              <a href="#" className="block__16443 text-center d-block">
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
            <div className="col-12 col-md-4 mb-4  align-items-stretch d-flex">
              <a href="#" className="block__16443 text-center d-block">
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
        className="bg-image overlay-hiring fixed overlay py-5"
        style={{ backgroundImage: "url('images/hiring.jpg')" }}
      >
        <div className="container">
          <div className="row align-items-center d-flex flex-column">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="text-white">Subscribe for Job Alerts</h2>
              <p className="mb-0 text-white lead">
                Get personalized job alerts, blog updates, and hiring trends
                directly to your inbox.
              </p>
            </div>
            <div className="col-md-6 mx-auto py-2">
              <form
                className="row g-2 justify-content-center align-items-center subscribe-form d-flex"
                method="post"
                id="subscribe-form"
                onSubmit={handleSubmit}
              >
                <div className="col-md-8 px-1 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-4 px-1 mb-3 ">
                  <button type="" className="btn btn-primary w-100 d-block">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        className="pt-5 bg-image overlay-primary fixed overlay"
        style={{ backgroundImage: "url('images/hero_1.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center text-center text-md-left mb-5 mb-md-0">
              <h2 className="text-white">Download the SimplifyJob App</h2>
              <p className="mb-5 lead text-white">
                Find and apply for jobs on the go. Get 15% more visibility with
                mobile applications.
              </p>
              <p className="mb-0">
                <a
                  href="#"
                  className="btn btn-dark btn-md px-4 border-width-2 mb-3 mx-md-1"
                >
                  <span className="icon-apple mr-3"></span>Download for iOS
                </a>
                <a
                  href="#"
                  className="btn btn-dark btn-md px-4 border-width-2 mb-3 mx-md-1"
                >
                  <span className="icon-android mr-3"></span>Download for
                  Android
                </a>
              </p>
            </div>
            <div className="col-md-6 ml-auto align-self-end">
              <img
                src="images/apps.png"
                alt="Free Website Template by Free-Template.co"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
