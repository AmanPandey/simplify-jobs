import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
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
              <h1 className="text-white font-weight-bold">Services</h1>
              <div className="custom-breadcrumbs">
                <Link to="/">Home</Link> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Services</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="site-section services-section bg-light block__62849"
        id="next-section"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Link to="#" className="block__16443 text-center d-block">
                <span className="custom-icon mx-auto">
                  <span className="icon-search d-block"></span>
                </span>
                <h3>Smart Job Search</h3>
                <p>
                  Find jobs fast with filters for skills, location and
                  preferences that match your profile instantly.
                </p>
              </Link>
            </div>
            <div
              className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Link to="#" className="block__16443 text-center d-block">
                <span className="custom-icon mx-auto">
                  <span className="icon-file-text d-block"></span>
                </span>
                <h3>Resume Builder</h3>
                <p>
                  Create a strong resume with templates and smart tips that help
                  you stand out to employers easily.
                </p>
              </Link>
            </div>
            <div
              className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <Link to="#" className="block__16443 text-center d-block">
                <span className="custom-icon mx-auto">
                  <span className="icon-laptop d-block"></span>
                </span>
                <h3>Skill Assessments</h3>
                <p>
                  Take quick tests to highlight your abilities and boost your
                  chances of landing the right job today.
                </p>
              </Link>
            </div>
            <div
              className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <Link to="#" className="block__16443 text-center d-block">
                <span className="custom-icon mx-auto">
                  <span className="icon-bell d-block"></span>
                </span>
                <h3>Instant Job Alerts</h3>
                <p>
                  Get real time updates whenever new jobs are posted that fit
                  your career goals and requirements.
                </p>
              </Link>
            </div>
            <div
              className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <Link to="#" className="block__16443 text-center d-block">
                <span className="custom-icon mx-auto">
                  <span className="icon-briefcase d-block"></span>
                </span>
                <h3>Career Guidance</h3>
                <p>
                  Access expert advice, interview practice and career tips that
                  guide you to achieve real success.
                </p>
              </Link>
            </div>
            <div
              className="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <Link to="#" className="block__16443 text-center d-block">
                <span className="custom-icon mx-auto">
                  <span className="icon-users d-block"></span>
                </span>
                <h3>Employer Connections</h3>
                <p className="d-sm-block">
                  Connect directly with recruiters and companies that are
                  actively hiring for roles you want now.
                </p>
              </Link>
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
                Simplify Hiring & Job Search with Us
              </h2>
              <p className="text-white">
                From helping employers find top talent to guiding job seekers
                toward the right opportunities, SimplyfyJob offers services that
                make the hiring process seamless and effective.
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

export default Services;
