import React from "react";
import { Link } from "react-router-dom";

const PostJob = () => {
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
              <h1 className="text-white font-weight-bold">Post Link Job</h1>
              <div className="custom-breadcrumbs">
                <Link to="/">Home</Link> <span className="mx-2 slash">/</span>
                <Link to="#">Job</Link> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Post Link Job</strong>
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
                <div>
                  <h2 style={{ fontWeight: "600" }}>Post Link Job</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-6">
                  <Link to="#" className="btn btn-block btn-light btn-md">
                    <span className="icon-open_in_new mr-2"></span>Preview
                  </Link>
                </div>
                <div className="col-6">
                  <Link
                    to="#"
                    className="btn btn-block btn-primary btn-md"
                    style={{ fontWeight: "600" }}
                  >
                    Save Job
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5" data-aos="zoom-in" data-aos-delay="500">
            <div className="col-lg-12">
              <form className="p-4 p-md-5 border rounded" method="post">
                <h3
                  className="text-black mb-5 border-bottom pb-2"
                  style={{ fontWeight: "600" }}
                >
                  Job Details
                </h3>

                <div className="form-group">
                  <label for="company-website-tw d-block">
                    Upload Featured Image
                  </label>
                  <br />
                  <label className="btn btn-primary btn-md btn-file">
                    Browse File
                    <input type="file" hidden />
                  </label>
                </div>

                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="you@yourdomain.com"
                  />
                </div>
                <div className="form-group">
                  <label for="job-title">Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="job-title"
                    placeholder="Product Designer"
                  />
                </div>
                <div className="form-group">
                  <label for="job-location">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="job-location"
                    placeholder="e.g. New York"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="job-region">Job Region</label>
                  <select
                    className="form-control border rounded"
                    id="job-region"
                  >
                    <option disabled hidden>
                      Anywhere
                    </option>
                    <option>San Francisco</option>
                    <option>Palo Alto</option>
                    <option>New York</option>
                    <option>Manhattan</option>
                    <option>Ontario</option>
                    <option>Toronto</option>
                    <option>Kansas</option>
                    <option>Mountain View</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="job-type">Job Type</label>
                  <select className="form-control border rounded" id="job-type">
                    <option>Part Time</option>
                    <option>Full Time</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="job-description">Job Description</label>

                  <textarea
                    className="w-100"
                    style={{ minHeight: "250px" }}
                  ></textarea>
                </div>

                <h3
                  className="text-black my-5 border-bottom pb-2"
                  style={{ fontWeight: "600" }}
                >
                  Company Details
                </h3>
                <div className="form-group">
                  <label for="company-name">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="company-name"
                    placeholder="e.g. New York"
                  />
                </div>

                <div className="form-group">
                  <label for="company-tagline">Tagline (Optional)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="company-tagline"
                    placeholder="e.g. New York"
                  />
                </div>

                <div className="form-group">
                  <label for="job-description">
                    Company Description (Optional)
                  </label>
                  <textarea
                    className="w-100"
                    style={{ minHeight: "250px" }}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label for="company-website">Website (Optional)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="company-website"
                    placeholder="https://"
                  />
                </div>

                <div className="form-group">
                  <label for="company-website-fb">
                    Facebook Username (Optional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="company-website-fb"
                    placeholder="companyname"
                  />
                </div>

                <div className="form-group">
                  <label for="company-website-tw">
                    Twitter Username (Optional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="company-website-tw"
                    placeholder="@companyname"
                  />
                </div>
                <div className="form-group">
                  <label for="company-website-tw">
                    Linkedin Username (Optional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="company-website-tw"
                    placeholder="companyname"
                  />
                </div>

                <div className="form-group">
                  <label for="company-website-tw d-block">Upload Logo</label>
                  <br />
                  <label
                    className="btn btn-primary btn-md btn-file"
                    style={{ fontWeight: "600" }}
                  >
                    Browse File
                    <input type="file" hidden />
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div
            className="row align-items-center mb-5"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="col-lg-4 ml-auto">
              <div className="row">
                <div className="col-6">
                  <Link to="#" className="btn btn-block btn-light btn-md">
                    <span className="icon-open_in_new mr-2"></span>Preview
                  </Link>
                </div>
                <div className="col-6">
                  <Link
                    to="#"
                    className="btn btn-block btn-primary btn-md"
                    style={{ fontWeight: "600" }}
                  >
                    Save Job
                  </Link>
                </div>
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
              data-aos-delay="500"
            >
              <h2 className="section-title mb-2 text-white">
                Connect with SimplyfyJob
              </h2>
              <p className="text-white">
                Whether you’re looking for top talent or exploring career
                opportunities, SimplyfyJob makes it simple to connect the right
                people with the right jobs.
              </p>
              <button
                className="cta-btn mt-4"
                onClick={() => (window.location.href = "/contact")}
              >
                Let’s Talk
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostJob;
