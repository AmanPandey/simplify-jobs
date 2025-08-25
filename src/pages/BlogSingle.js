import React from "react";
import { Link } from "react-router-dom";

const BlogSingle = () => {
  return (
    <>
      <section
        className="section-hero overlay inner-page bg-image"
        style={{ backgroundImage: "url('images/hero_1.jpg')" }}
        id="home-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="custom-breadcrumbs mb-0">
                <span className="slash">Posted by</span> <span> Admin</span>
                <span className="mx-2 slash">&bullet;</span>
                <span className="text-white">
                  <strong>August 22, 2025</strong>
                </span>
              </div>
              <h1 className="text-white">
                How to Land Your Dream Job with SimplifyJob
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" id="next-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 blog-content">
              <h3 className="mb-4">
                SimplifyJob: Making Job Search Smarter and Easier
              </h3>
              <p className="lead">
                SimplifyJob is a modern job portal designed to connect job
                seekers with top employers efficiently. Our smart platform
                streamlines the job search process and helps candidates find
                roles that truly match their skills.
              </p>
              <p>
                <img
                  src="images/job_single_img_1.jpg"
                  alt="Job Search"
                  className="img-fluid rounded"
                />
              </p>
              <p>
                From filtering jobs by location, salary, or experience to
                receiving personalized job recommendations, SimplifyJob makes
                your search faster and more effective. With AI-driven
                suggestions, users can discover opportunities they might
                otherwise miss.
              </p>

              <blockquote>
                <p>
                  “SimplifyJob transformed my career search! The personalized
                  alerts and curated listings saved me countless hours.” – Jane
                  Doe
                </p>
              </blockquote>

              <p>
                Our platform also provides a range of services for employers,
                including posting jobs, tracking applications, and discovering
                the best candidates for their teams. This dual approach ensures
                both sides of the job market are served effectively.
              </p>

              <h4 className="mt-5 mb-4">
                Enhance Your Career with SimplifyJob Features
              </h4>
              <p>
                SimplifyJob offers tools such as resume building, skill
                development courses, career advice, and detailed market
                insights. By leveraging these features, job seekers can improve
                their profiles, gain new skills, and make informed career
                decisions.
              </p>
              <p>
                Whether you are looking for full-time, part-time, freelance, or
                remote opportunities, SimplifyJob has a comprehensive database
                of listings across multiple industries.
              </p>
              <p>
                Stay updated with alerts for the latest job postings, and
                connect directly with top employers looking for candidates just
                like you.
              </p>
              <p>
                <Link to="#" className="btn btn-primary btn-md mt-4">
                  Explore Jobs Now
                </Link>
              </p>
            </div>

            <div className="col-lg-4 sidebar pl-lg-5">
              <div className="sidebar-box">
                <img
                  src="images/person_1.jpg"
                  alt="Image placeholder"
                  className="img-fluid mb-4 w-50 rounded-circle"
                />
                <h3>About The Author</h3>
                <p>
                  Sneha is an experienced career consultant with extensive
                  expertise in guiding professionals through the job market. She
                  is dedicated to simplifying the job search process and
                  provides valuable insights and strategies for both job seekers
                  and employers.
                </p>

                {/* <p>
                  <Link to="#" className="btn btn-primary btn-sm">
                    Read More
                  </Link>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-image overlay-hiring fixed overlay"
        style={{ backgroundImage: "url('images/hiring.jpg')" }}
      >
        <div className="container">
          <div className="row align-items-center d-flex flex-column">
            <div className="col-md-8 mx-auto text-center align-items-center d-flex flex-column">
              <h2 className="" style={{ color: "rgba(137, 186, 22, 0.9)" }}>
                Find Your Dream Job Today
              </h2>
              <p className="mb-2 text-white lead">
                SimplifyJob connects talented professionals with top employers
                across industries. Start your career journey and discover
                opportunities tailored to you.
              </p>
              <button type="submit" className="btn btn-primary d-block">
                Browse Jobs
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;
