import React, { useState } from "react";
import { Link } from "react-router-dom";

const JobListings = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <section
        className="section-hero overlay inner-page bg-image"
        style={{ backgroundImage: "url('images/hero_1.jpg')" }}
        id="home-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7" data-aos="fade-up" data-aos-delay="500">
              <h1 className="text-white font-weight-bold">Jobs Listing</h1>
              <div className="custom-breadcrumbs">
                <Link href="#">Home</Link> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Jobs Listing</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="job-listing-area pt-120 pb-120">
          <div className="container px-0">
            <div
              className="row position-relative d-flex px-0 "
              // style={{ border: "2px solid black" }}
            >
              {/* Sidebar (Filters) */}
              <div
                className={`filter-sidebar bg-white border position-fixed h-100 p-3 col-lg-3 ${
                  showFilter ? "active" : ""
                } d-lg-block`}
                // style={{ border: "2px solid red" }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3 d-lg-none">
                  <h5 className="mb-0">Filter Jobs</h5>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => setShowFilter(false)}
                  >
                    ✕
                  </button>
                </div>

                {/* Example Filters */}
                <div className="mb-4">
                  <h6>Job Category</h6>
                  <select className="form-control">
                    <option>All Categories</option>
                    <option>Design</option>
                    <option>Development</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>Finance</option>
                    <option>Human Resources</option>
                    <option>Customer Support</option>
                  </select>
                </div>

                {/* Job Type */}
                <div className="mb-4">
                  <h6>Job Type</h6>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="fulltime"
                    />
                    <label className="form-check-label" htmlFor="fulltime">
                      Full Time
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="parttime"
                    />
                    <label className="form-check-label" htmlFor="parttime">
                      Part Time
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="internship"
                    />
                    <label className="form-check-label" htmlFor="internship">
                      Internship
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="freelance"
                    />
                    <label className="form-check-label" htmlFor="freelance">
                      Freelance / Contract
                    </label>
                  </div>
                </div>

                {/* Experience Level */}
                <div className="mb-4">
                  <h6>Experience Level</h6>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exp"
                      id="entry"
                    />
                    <label className="form-check-label" htmlFor="entry">
                      Entry Level
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exp"
                      id="mid"
                    />
                    <label className="form-check-label" htmlFor="mid">
                      Mid Level
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exp"
                      id="senior"
                    />
                    <label className="form-check-label" htmlFor="senior">
                      Senior Level
                    </label>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4">
                  <h6>Location</h6>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City, State or Remote"
                  />
                  <div className="form-check mt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remote"
                    />
                    <label className="form-check-label" htmlFor="remote">
                      Remote Only
                    </label>
                  </div>
                </div>

                {/* Salary Range */}
                <div className="mb-4">
                  <h6>Salary Range</h6>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Min"
                      style={{ maxWidth: "100px" }}
                    />
                    <span className="px-2">-</span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Max"
                      style={{ maxWidth: "100px" }}
                    />
                  </div>
                </div>

                {/* Posted Date */}
                <div className="mb-4">
                  <h6>Date Posted</h6>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="date"
                      id="today"
                    />
                    <label className="form-check-label" htmlFor="today">
                      Today
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="date"
                      id="3days"
                    />
                    <label className="form-check-label" htmlFor="3days">
                      Last 3 Days
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="date"
                      id="7days"
                    />
                    <label className="form-check-label" htmlFor="7days">
                      Last 7 Days
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="date"
                      id="30days"
                    />
                    <label className="form-check-label" htmlFor="30days">
                      Last 30 Days
                    </label>
                  </div>
                </div>

                {/* Company */}
                <div className="mb-4">
                  <h6>Company</h6>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search company"
                  />
                </div>

                {/* Industry */}
                <div className="mb-4">
                  <h6>Industry</h6>
                  <select className="form-control">
                    <option>All Industries</option>
                    <option>IT & Software</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Education</option>
                    <option>Retail</option>
                    <option>Manufacturing</option>
                  </select>
                </div>

                {/* Apply Filters Button */}
                <button
                  className="btn btn-success text-white w-100 mt-3"
                  style={{ fontWeight: "600" }}
                >
                  Apply Filters
                </button>
                <button
                  className="btn btn-success text-white w-100 mt-3"
                  style={{ fontWeight: "600" }}
                >
                  Clear Filters
                </button>
              </div>

              {/* Job Listing Section */}
              <div className="col-lg-9 col-12">
                {/* Toggle Button (only visible on mobile) */}
                <button
                  className="btn btn-outline-success mb-3 d-lg-none mx-0 mx-md-4"
                  onClick={() => setShowFilter(true)}
                >
                  {/* <svg width="20" height="20" fill="green" viewBox="0 0 20 20">
                    <path d="M3 6h14M3 12h14M3 18h14" />
                  </svg>{" "} */}
                  Filters
                </button>

                <section
                  className="featured-job-area"
                  // style={{ border: "2px solid black" }}
                >
                  <div className="container">
                    <div className="row">
                      <div
                        className="col-lg-12 px-0 px-md-4"
                        // style={{ border: "2px solid red" }}
                      >
                        <div className="count-job mb-35 ">
                          <div
                            // style={{ border: "2px solid red" }}
                            className="d-flex align-items-center"
                          >
                            <h6>2,392 Jobs found</h6>
                          </div>

                          <div
                            className="select-job-items d-flex align-items-center "
                            // style={{ border: "2px solid red" }}
                          >
                            <span>Sort by</span>
                            <select
                              name="select "
                              style={{
                                background: "transparent",
                                padding: "2px",
                                // border: "1px solid #ccc",
                              }}
                            >
                              <option value="">None</option>
                              <option value="">job list</option>
                              <option value="">job list</option>
                              <option value="">job list</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* job section  */}
                  <section
                    className="mt-3"
                    id="next"
                    // style={{ border: "2px solid red" }}
                  >
                    <div className="container px-lg-4 px-0">
                      <ul className="job-listings mb-5">
                        <li className="job-listing d-block d-md-flex pb-3 pb-sm-0 align-items-center">
                          <Link to="#"></Link>
                          <div className="job-listing-logo">
                            <img
                              src="images/job_logo_1.jpg"
                              alt="Image"
                              className="img-fluid"
                            />
                          </div>

                          <div className="job-listing-about d-md-flex custom-width w-100 justify-content-between mx-3">
                            <div className="job-listing-position custom-width w-50 mb-1 mb-sm-0">
                              <h2 style={{ fontSize: "18px" }}>
                                Product Designer
                              </h2>
                              <strong>Adidas</strong>
                            </div>
                            <div className="job-listing-location mb-1 mb-sm-0 custom-width w-25">
                              <span className="icon-room"></span> New York
                            </div>
                            <div className="job-listing-location mb-1 custom-width w-25">
                              <span className=""></span>$55,000/year
                            </div>
                            <div className="job-listing-meta mb-4">
                              <span className="badge badge-danger">
                                Part Time
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="job-listing d-block d-md-flex pb-3 pb-sm-0 align-items-center">
                          <Link to="#"></Link>
                          <div className="job-listing-logo">
                            <img
                              src="images/job_logo_2.jpg"
                              alt="Image"
                              className="img-fluid"
                            />
                          </div>

                          <div className="job-listing-about d-md-flex custom-width w-100 justify-content-between mx-3">
                            <div className="job-listing-position custom-width w-50 mb-1 mb-sm-0">
                              <h2 style={{ fontSize: "18px" }}>
                                Digital Marketing Director
                              </h2>
                              <strong>Sprint</strong>
                            </div>
                            <div className="job-listing-location mb-1 mb-sm-0 custom-width w-25">
                              <span className="icon-room"></span> Noida,India
                            </div>
                            <div className="job-listing-location mb-1 custom-width w-25">
                              <span className=""></span>$60,000/year
                            </div>
                            <div className="job-listing-meta mb-4">
                              <span className="badge badge-success">
                                Full Time
                              </span>
                            </div>
                          </div>
                        </li>

                        <li className="job-listing d-block d-md-flex pb-3 pb-sm-0 align-items-center">
                          <Link to="#"></Link>
                          <div className="job-listing-logo">
                            <img
                              src="images/job_logo_3.jpg"
                              alt="Image"
                              className="img-fluid"
                            />
                          </div>

                          <div className="job-listing-about d-md-flex custom-width w-100 justify-content-between mx-3">
                            <div className="job-listing-position custom-width w-50 mb-1 mb-sm-0">
                              <h2 style={{ fontSize: "18px" }}>
                                Back-end Engineer (Python)
                              </h2>
                              <strong>Amazon</strong>
                            </div>
                            <div className="job-listing-location mb-1 mb-sm-0 custom-width w-25">
                              <span className="icon-room"></span>UK
                            </div>
                            <div className="job-listing-location mb-1 custom-width w-25">
                              <span className=""></span>$35,000/year
                            </div>
                            <div className="job-listing-meta mb-4">
                              <span className="badge badge-success">
                                Full Time
                              </span>
                            </div>
                          </div>
                        </li>

                        <li className="job-listing d-block d-md-flex pb-3 pb-sm-0 align-items-center">
                          <Link to="#"></Link>
                          <div className="job-listing-logo">
                            <img
                              src="images/job_logo_4.jpg"
                              alt="Image"
                              className="img-fluid"
                            />
                          </div>

                          <div className="job-listing-about d-md-flex custom-width w-100 justify-content-between mx-3">
                            <div className="job-listing-position custom-width w-50 mb-1 mb-sm-0">
                              <h2 style={{ fontSize: "18px" }}>
                                Senior Art Director
                              </h2>
                              <strong>Microsoft</strong>
                            </div>
                            <div className="job-listing-location mb-1 mb-sm-0 custom-width w-25">
                              <span className="icon-room"></span> Hydrabad,{" "}
                              <br />
                              India
                            </div>
                            <div className="job-listing-location mb-1 custom-width w-25">
                              <span className=""></span>$100,000/year
                            </div>
                            <div className="job-listing-meta mb-4">
                              <span className="badge badge-success">
                                Full Time
                              </span>
                            </div>
                          </div>
                        </li>

                        <li className="job-listing d-block d-md-flex pb-3 pb-sm-0 align-items-center">
                          <Link to="#"></Link>
                          <div className="job-listing-logo">
                            <img
                              src="images/job_logo_5.jpg"
                              alt="Image"
                              className="img-fluid"
                            />
                          </div>

                          <div className="job-listing-about d-md-flex custom-width w-100 justify-content-between mx-3">
                            <div className="job-listing-position custom-width w-50 mb-1 mb-sm-0">
                              <h2 style={{ fontSize: "18px" }}>
                                Product Designer
                              </h2>
                              <strong>Puma</strong>
                            </div>
                            <div className="job-listing-location mb-1 mb-sm-0 custom-width w-25">
                              <span className="icon-room"></span> San Mateo
                            </div>
                            <div className="job-listing-location mb-1 custom-width w-25">
                              <span className=""></span>$90,000/year
                            </div>
                            <div className="job-listing-meta mb-4">
                              <span className="badge badge-success">
                                Full Time
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="job-listing d-block d-md-flex pb-3 pb-sm-0 align-items-center">
                          <Link to="#"></Link>
                          <div className="job-listing-logo">
                            <img
                              src="images/job_logo_1.jpg"
                              alt="Image"
                              className="img-fluid"
                            />
                          </div>

                          <div className="job-listing-about d-md-flex custom-width w-100 justify-content-between mx-3">
                            <div className="job-listing-position custom-width w-50 mb-1 mb-sm-0">
                              <h2 style={{ fontSize: "18px" }}>
                                Product Designer
                              </h2>
                              <strong>Adidas</strong>
                            </div>
                            <div className="job-listing-location mb-1 mb-sm-0 custom-width w-25">
                              <span className="icon-room"></span> New York
                            </div>
                            <div className="job-listing-location mb-1 custom-width w-25">
                              <span className=""></span>$40,000/year
                            </div>
                            <div className="job-listing-meta mb-4">
                              <span className="badge badge-danger">
                                Part Time
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="job-listing d-block d-md-flex pb-3 pb-sm-0 align-items-center">
                          <Link to="#"></Link>
                          <div className="job-listing-logo">
                            <img
                              src="images/job_logo_2.jpg"
                              alt="Image"
                              className="img-fluid"
                            />
                          </div>

                          <div className="job-listing-about d-md-flex custom-width w-100 justify-content-between mx-3">
                            <div className="job-listing-position custom-width w-50 mb-1 mb-sm-0">
                              <h2 style={{ fontSize: "18px" }}>
                                Digital Marketing Director
                              </h2>
                              <strong>Sprint</strong>
                            </div>
                            <div className="job-listing-location mb-1 mb-sm-0 custom-width w-25">
                              <span className="icon-room"></span>
                              Kansas
                            </div>
                            <div className="job-listing-location mb-1 custom-width w-25">
                              <span className=""></span>$80,000/year
                            </div>
                            <div className="job-listing-meta mb-4">
                              <span className="badge badge-success">
                                Full Time
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>

                      <div className="row pagination-wrap">
                        <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
                          <span>Showing 1-7 Of 2,392 Jobs</span>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
                          <div className="custom-pagination ml-auto">
                            <Link to="#" className="prev">
                              Prev
                            </Link>
                            <div className="d-inline-block">
                              <Link to="#" className="active">
                                1
                              </Link>
                              <Link to="#">2</Link>
                              <Link to="#">3</Link>
                              <Link to="#">4</Link>
                            </div>
                            <Link to="#" className="next">
                              Next
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* call to action  */}

      <section
        className=" bg-image overlay-primary fixed overlay "
        id="next-section"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184316/pexels-photo-3184316.jpeg')",
          padding: "6rem 0",
          marginTop: "7rem",
        }}
      >
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div
              className="col-md-7 text-center"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <h2 className="section-title mb-2 text-white">
                Join with us for more information
              </h2>
              <p className=" text-white">
                It’s easier to reach your savings goals when you have the right
                savings account.
              </p>
              <button className="cta-btn mt-4">Let's Talk</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobListings;
