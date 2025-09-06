import React from "react";
import { Link } from "react-router-dom";

const JobSingle = () => {
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
              <h1
                className="text-white font-weight-bold"
                style={{ fontWeight: "600" }}
              >
                UI/UX Designer
              </h1>
              <div className="custom-breadcrumbs">
                <Link to="/">Home</Link> <span className="mx-2 slash">/</span>
                <Link to="#">Job</Link> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>UI/UX Designer</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <div className="d-flex align-items-center">
                <div className="border p-2 d-inline-block mr-3 rounded">
                  <img src="images/job_logo_5.jpg" alt="SimplifyJob Logo" />
                </div>
                <div>
                  <h2>UI/UX Designer</h2>
                  <div>
                    <span className="ml-0 mr-2 mb-2">
                      <span className="icon-briefcase mr-2"></span>Puma
                    </span>
                    <span className="m-2">
                      <span className="icon-room mr-2"></span>Noida, India
                    </span>
                    <span className="m-2">
                      <span className="icon-clock-o mr-2"></span>
                      <span className="text-primary">Full Time</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-6">
                  <Link to="#" className="btn btn-block btn-light btn-md">
                    <span className="icon-heart-o mr-2 text-danger"></span>Save
                    Job
                  </Link>
                </div>
                <div className="col-6">
                  <Link
                    to="#"
                    className="btn btn-block btn-primary btn-md"
                    style={{ fontWeight: "600" }}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="mb-5">
                <figure
                  className="mb-5"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  <img
                    src="images/job_single_img_1.jpg"
                    alt="Job Illustration"
                    className="img-fluid rounded"
                  />
                </figure>
                <h3
                  className="h5 d-flex align-items-center mb-4 text-primary"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <span className="icon-align-left mr-3"></span>Job Description
                </h3>
                <p data-aos="fade-up" data-aos-delay="1000">
                  Puma is looking for a creative and detail-oriented UI/UX
                  Designer to join our team. You will design user-friendly
                  interfaces that enhance our job portal experience for job
                  seekers and employers.
                </p>
                <p data-aos="fade-up" data-aos-delay="1000">
                  Work closely with product managers and developers to deliver
                  seamless user experiences. Bring your ideas to life through
                  intuitive design patterns and thoughtful interactions.
                </p>
              </div>

              <div className="mb-5">
                <h3
                  className="h5 d-flex align-items-center mb-4 text-primary"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <span className="icon-rocket mr-3"></span>Responsibilities
                </h3>
                <ul className="list-unstyled m-0 p-0">
                  <li
                    className="d-flex align-items-start mb-2"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <span className="icon-check_circle mr-2 text-muted"></span>
                    <span>
                      Create wireframes, prototypes, and visual designs
                    </span>
                  </li>
                  <li
                    className="d-flex align-items-start mb-2"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <span className="icon-check_circle mr-2 text-muted"></span>
                    <span>Collaborate with product and engineering teams</span>
                  </li>
                  <li
                    className="d-flex align-items-start mb-2"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <span className="icon-check_circle mr-2 text-muted"></span>
                    <span>Ensure consistent branding and design standards</span>
                  </li>
                  <li
                    className="d-flex align-items-start mb-2"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <span className="icon-check_circle mr-2 text-muted"></span>
                    <span>Conduct user research and usability testing</span>
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h3
                  className="h5 d-flex align-items-center mb-4 text-primary"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <span className="icon-book mr-3"></span>Education + Experience
                </h3>
                <ul className="list-unstyled m-0 p-0">
                  <li
                    className="d-flex align-items-start mb-2"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <span className="icon-check_circle mr-2 text-muted"></span>
                    <span>
                      Bachelor’s degree in Design, HCI, or related field
                    </span>
                  </li>
                  <li
                    className="d-flex align-items-start mb-2"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <span className="icon-check_circle mr-2 text-muted"></span>
                    <span>2+ years of experience in UI/UX design</span>
                  </li>
                  <li
                    className="d-flex align-items-start mb-2"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <span className="icon-check_circle mr-2 text-muted"></span>
                    <span>Strong portfolio demonstrating design thinking</span>
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h3
                  className="h5 d-flex align-items-center mb-4 text-primary"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <span className="icon-turned_in mr-3"></span>Other Benefits
                </h3>
                <ul className="list-unstyled m-0 p-0">
                  <li
                    className="d-flex align-items-start mb-2"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <span className="icon-check_circle mr-2 text-muted"></span>
                    <span>Flexible work hours and remote options</span>
                  </li>
                  <li
                    className="d-flex align-items-start mb-2"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <span className="icon-check_circle mr-2 text-muted"></span>
                    <span>Health, dental, and vision insurance</span>
                  </li>
                  <li
                    className="d-flex align-items-start mb-2"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                  >
                    <span className="icon-check_circle mr-2 text-muted"></span>
                    <span>Learning & development support</span>
                  </li>
                </ul>
              </div>

              <div
                className="row mb-5"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                <div className="col-6">
                  <Link
                    to="#"
                    className="btn btn-block btn-light btn-md border border-grey"
                  >
                    <span className="icon-heart-o mr-2 text-danger"></span>Save
                    Job
                  </Link>
                </div>
                <div className="col-6">
                  <Link
                    to="#"
                    className="btn btn-block btn-primary btn-md"
                    style={{ fontWeight: "600" }}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="bg-light p-3 border rounded mb-4"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <h3 className="text-primary mt-3 h5 pl-3 mb-3">Job Summary</h3>
                <ul className="list-unstyled pl-3 mb-0">
                  <li className="mb-2">
                    <strong className="text-black">Published on:</strong> August
                    22, 2025
                  </li>
                  <li className="mb-2">
                    <strong className="text-black">Vacancy:</strong> 5
                  </li>
                  <li className="mb-2">
                    <strong className="text-black">Employment Status:</strong>{" "}
                    Full-time
                  </li>
                  <li className="mb-2">
                    <strong className="text-black">Experience:</strong> 2+ years
                  </li>
                  <li className="mb-2">
                    <strong className="text-black">Job Location:</strong> Noida,
                    India
                  </li>
                  <li className="mb-2">
                    <strong className="text-black">Salary:</strong> $70k - $120k
                  </li>
                  <li className="mb-2">
                    <strong className="text-black">Gender:</strong> Any
                  </li>
                  <li className="mb-2">
                    <strong className="text-black">
                      Application Deadline:
                    </strong>{" "}
                    September 15, 2025
                  </li>
                </ul>
              </div>

              <div
                className="bg-light p-3 border rounded"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <h3 className="text-primary mt-3 h5 pl-3 mb-3">Share</h3>
                <div className="px-3">
                  <Link to="#" className="pt-3 pb-3 pr-3 pl-0">
                    <span className="icon-facebook"></span>
                  </Link>
                  <Link to="#" className="pt-3 pb-3 pr-3 pl-0">
                    <span className="icon-twitter"></span>
                  </Link>
                  <Link to="#" className="pt-3 pb-3 pr-3 pl-0">
                    <span className="icon-linkedin"></span>
                  </Link>
                  <Link to="#" className="pt-3 pb-3 pr-3 pl-0">
                    <span className="icon-pinterest"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" id="next">
        <div className="container">
          {/* <div className="row mb-5 justify-content-center">
            <div className="col-md-7 text-center">
              <h2 className="section-title mb-2">1223 Related Jobs</h2>
            </div>
          </div> */}

          <ul className="job-listings mb-5">
            <li
              className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <Link to="#"></Link>
              <div className="job-listing-logo">
                <img
                  src="images/job_logo_1.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>

              <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                  <h2>Product Designer</h2>
                  <strong>Adidas</strong>
                </div>
                <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                  <span className="icon-room"></span> New York, New York
                </div>
                <div className="job-listing-location mb-3 custom-width w-25">
                  <span className=""></span>$55,000/year
                </div>
                <div className="job-listing-meta">
                  <span className="badge badge-danger">Part Time</span>
                </div>
              </div>
            </li>
            <li
              className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              <Link to="#"></Link>
              <div className="job-listing-logo">
                <img
                  src="images/job_logo_2.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>

              <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                  <h2>Digital Marketing Director</h2>
                  <strong>Sprint</strong>
                </div>
                <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                  <span className="icon-room"></span> Overland Park, Kansas
                </div>
                <div className="job-listing-location mb-3 custom-width w-25">
                  <span className=""></span>$60,000/year
                </div>
                <div className="job-listing-meta">
                  <span className="badge badge-success">Full Time</span>
                </div>
              </div>
            </li>

            <li
              className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <Link to="#"></Link>
              <div className="job-listing-logo">
                <img
                  src="images/job_logo_3.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>

              <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                  <h2>Back-end Engineer (Python)</h2>
                  <strong>Amazon</strong>
                </div>
                <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                  <span className="icon-room"></span> Overland Park, Kansas
                </div>
                <div className="job-listing-location mb-3 custom-width w-25">
                  <span className=""></span>$35,000/year
                </div>
                <div className="job-listing-meta">
                  <span className="badge badge-success">Full Time</span>
                </div>
              </div>
            </li>

            <li
              className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center"
              data-aos="fade-up"
              data-aos-delay="1300"
            >
              <Link to="#"></Link>
              <div className="job-listing-logo">
                <img
                  src="images/job_logo_4.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>

              <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                  <h2>Senior Art Director</h2>
                  <strong>Microsoft</strong>
                </div>
                <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                  <span className="icon-room"></span> Anywhere
                </div>
                <div className="job-listing-location mb-3 custom-width w-25">
                  <span className=""></span>$100,000/year
                </div>
                <div className="job-listing-meta">
                  <span className="badge badge-success">Full Time</span>
                </div>
              </div>
            </li>

            <li
              className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center"
              data-aos="fade-up"
              data-aos-delay="1300"
            >
              <Link to="#"></Link>
              <div className="job-listing-logo">
                <img
                  src="images/job_logo_5.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>

              <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                  <h2>Product Designer</h2>
                  <strong>Puma</strong>
                </div>
                <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                  <span className="icon-room"></span> San Mateo, CA
                </div>
                <div className="job-listing-location mb-3 custom-width w-25">
                  <span className=""></span>$90,000/year
                </div>
                <div className="job-listing-meta">
                  <span className="badge badge-success">Full Time</span>
                </div>
              </div>
            </li>
            <li
              className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center"
              data-aos="fade-up"
              data-aos-delay="1400"
            >
              <Link to="#"></Link>
              <div className="job-listing-logo">
                <img
                  src="images/job_logo_1.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>

              <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                  <h2>Product Designer</h2>
                  <strong>Adidas</strong>
                </div>
                <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                  <span className="icon-room"></span> New York, New York
                </div>
                <div className="job-listing-location mb-3 custom-width w-25">
                  <span className=""></span>$40,000/year
                </div>
                <div className="job-listing-meta">
                  <span className="badge badge-danger">Part Time</span>
                </div>
              </div>
            </li>
            <li
              className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center"
              data-aos="fade-up"
              data-aos-delay="1500"
            >
              <Link to="#"></Link>
              <div className="job-listing-logo">
                <img
                  src="images/job_logo_2.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>

              <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                  <h2>Digital Marketing Director</h2>
                  <strong>Sprint</strong>
                </div>
                <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                  <span className="icon-room"></span> Overland Park, Kansas
                </div>
                <div className="job-listing-location mb-3 custom-width w-25">
                  <span className=""></span>$80,000/year
                </div>
                <div className="job-listing-meta">
                  <span className="badge badge-success">Full Time</span>
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

      {/* call to action  */}

      <section
        className="bg-image overlay-primary fixed overlay"
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
              data-aos-delay="1000"
            >
              <h2 className="section-title mb-2 text-white">
                Discover More Opportunities
              </h2>
              <p className="text-white">
                Keep exploring thousands of job openings and find the one that
                fits your career goals on SimplyfyJob.
              </p>
              <button
                className="cta-btn mt-4"
                onClick={() => (window.location.href = "/contact")}
              >
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-light pt-5 testimony-full">
        <div className="owl-carousel single-carousel">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center text-center text-lg-left">
                <blockquote>
                  <p>
                    &ldquo;SimplifyJob made my job search effortless! The
                    personalized recommendations and timely alerts helped me
                    land my dream role in record time.&rdquo;
                  </p>
                  <p>
                    <cite> &mdash; Corey Woods, Software Engineer</cite>
                  </p>
                </blockquote>
              </div>
              <div className="col-lg-6 align-self-end text-center text-lg-right">
                <img
                  src="images/person_transparent_2.png"
                  alt="Image"
                  className="img-fluid mb-0"
                />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center text-center text-lg-left">
                <blockquote>
                  <p>
                    &ldquo;Thanks to SimplifyJob, our company filled key
                    positions quickly with qualified candidates. The platform
                    streamlined our hiring process significantly.&rdquo;
                  </p>
                  <p>
                    <cite> &mdash; Chris Peters, HR Manager</cite>
                  </p>
                </blockquote>
              </div>
              <div className="col-lg-6 align-self-end text-center text-lg-right">
                <img
                  src="images/person_transparent.png"
                  alt="Image"
                  className="img-fluid mb-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section
        className="pt-5 bg-image overlay-primary fixed overlay"
        style={{ backgroundImage: "url('images/hero_1.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center text-center text-md-left mb-5 mb-md-0">
              <h2 className="text-white">Get the SimplifyJob App</h2>
              <p className="mb-5 lead text-white">
                Search and apply for jobs on the go, connect with top employers,
                and track your applications—all from your mobile device.
              </p>
              <p className="mb-0">
                <Link
                  to="#"
                  className="btn btn-dark btn-md px-4 border-width-2 mx-1 my-1"
                >
                  <span className="icon-apple mr-3"></span>App Store
                </Link>
                <Link
                  to="#"
                  className="btn btn-dark btn-md px-4 border-width-2 mx-1 my-1"
                >
                  <span className="icon-android mr-3"></span>Play Store
                </Link>
              </p>
            </div>
            <div className="col-md-6 ml-auto align-self-end">
              <img src="images/apps.png" alt="Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default JobSingle;
