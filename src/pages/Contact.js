import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section
        className="section-hero overlay inner-page bg-image"
        style={{ backgroundImage: "url('images/hero_1.jpg')" }}
        id="home-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7" data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-white font-weight-bold">Contact Us</h1>
              <div className="custom-breadcrumbs">
                <Link href="#">Home</Link> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Contact Us</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" id="next-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <form
                action="#"
                className=""
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="row form-group">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" for="fname">
                      First Name
                    </label>
                    <input type="text" id="fname" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="text-black" for="lname">
                      Last Name
                    </label>
                    <input type="text" id="lname" className="form-control" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" for="email">
                      Email
                    </label>
                    <input type="email" id="email" className="form-control" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" for="subject">
                      Subject
                    </label>
                    <input
                      type="subject"
                      id="subject"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" for="message">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Write your notes or questions here..."
                    ></textarea>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary btn-md text-white"
                      style={{ fontWeight: "600" }}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-lg-5 ml-auto"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="p-4 mb-3 bg-white">
                <p className="mb-0 font-weight-bold" style={{ color: "#000" }}>
                  Address
                </p>
                <p className="mb-4">Sector 17 , Chandigarh , India</p>

                <p className="mb-0 font-weight-bold" style={{ color: "#000" }}>
                  Phone
                </p>
                <p className="mb-4">
                  <Link href="#" style={{ color: "#7f848c" }}>
                    +91 9041XXXXXX
                  </Link>
                </p>

                <p className="mb-0 font-weight-bold" style={{ color: "#000" }}>
                  Email Address
                </p>
                <p className="mb-0">
                  <Link href="#" style={{ color: "#7f848c" }}>
                    Email@domain.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section bg-light">
        <div className="container">
          <div className="row mb-5" data-aos="zoom-in" data-aos-delay="200">
            <div className="col-12 text-center" data-aos="fade">
              <h2 className="section-title mb-3">Happy Candidates Says</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="block__87154 bg-white rounded">
                <blockquote>
                  <p>
                    &ldquo;Reaching out through the SimplifyJob contact page was
                    quick and effortless. Their team responded within hours and
                    guided me through every step of the hiring process. The
                    support felt personal and genuinely helpful.&rdquo;
                  </p>
                </blockquote>
                <div className="block__91147 d-flex align-items-center">
                  <figure className="mr-4">
                    <img
                      src="contact-client-1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="testimonial-user">
                    <h3>Anita Sharma </h3>
                    <span className="position">HR Manager</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay="200"
              style={{ marginBottom: "7rem" }}
            >
              <div className="block__87154 bg-white rounded">
                <blockquote>
                  <p>
                    &ldquo;I used the contact form to clarify some queries about
                    job postings, and I was impressed by how fast and
                    professional the response was. SimplifyJob really values
                    communication with clients and job seekers alike.&rdquo;
                  </p>
                </blockquote>
                <div className="block__91147 d-flex align-items-center">
                  <figure className="mr-4">
                    <img
                      src="contact-client-2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <div className="testimonial-user">
                    <h3>David Lee</h3>
                    <span className="position">Recruitment Lead</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
