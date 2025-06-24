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
            <div className="col-md-7">
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
                  <h2>Post Link Job</h2>
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
                  <Link to="#" className="btn btn-block btn-primary btn-md">
                    Save Job
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-12">
              <form className="p-4 p-md-5 border rounded" method="post">
                <h3 className="text-black mb-5 border-bottom pb-2">
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
                  <label for="job-region">Job Region</label>
                  <select
                    className="selectpicker border rounded"
                    id="job-region"
                    data-style="btn-black"
                    data-width="100%"
                    data-live-search="true"
                    title="Select Region"
                  >
                    <option>Anywhere</option>
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
                  <label for="job-type">Job Type</label>
                  <select
                    className="selectpicker border rounded"
                    id="job-type"
                    data-style="btn-black"
                    data-width="100%"
                    data-live-search="true"
                    title="Select Job Type"
                  >
                    <option>Part Time</option>
                    <option>Full Time</option>
                  </select>
                </div>

                <div className="form-group">
                  <label for="job-description">Job Description</label>
                  <div className="editor" id="editor-1">
                    <p>Write Job Description!</p>
                  </div>
                </div>

                <h3 className="text-black my-5 border-bottom pb-2">
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
                  <div className="editor" id="editor-2">
                    <p>Description</p>
                  </div>
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
                  <label className="btn btn-primary btn-md btn-file">
                    Browse File
                    <input type="file" hidden />
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-lg-4 ml-auto">
              <div className="row">
                <div className="col-6">
                  <Link to="#" className="btn btn-block btn-light btn-md">
                    <span className="icon-open_in_new mr-2"></span>Preview
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="#" className="btn btn-block btn-primary btn-md">
                    Save Job
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostJob;
