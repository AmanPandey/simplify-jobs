import React from "react";
import { Link } from "react-router-dom";

const Testimonials = () => {
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
              <h1 className="text-white font-weight-bold">
                Candidate's Testimonials
              </h1>
              <div className="custom-breadcrumbs">
                <Link href="/">Home</Link> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Testimonials</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" id="next-section">
        <div className="container">
          <div className="row">
            {/* Employee Testimonial */}
            <div className="col-lg-6 mb-4">
              <div className="block__87154">
                <blockquote>
                  <p>
                    &ldquo;SimplyfyJob made job hunting so much easier. Within a
                    week I found multiple roles that matched my skills and got
                    an interview quickly. The resume builder helped me create a
                    strong CV in minutes.&rdquo;
                  </p>
                </blockquote>
                <div className="block__91147 d-flex align-items-center">
                  <figure className="mr-4">
                    <img
                      src="simple-testimonial-1.jpg"
                      alt="Employee testimonial"
                      className="img-fluid"
                    />
                  </figure>
                  <div>
                    <h3>Ananya Desai</h3>
                    <span className="position">Data Analyst</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Employer Testimonial */}
            <div className="col-lg-6 mb-4">
              <div className="block__87154">
                <blockquote>
                  <p>
                    &ldquo;As an employer, SimplyfyJob has been a game changer.
                    The candidate search filters are excellent, and I was able
                    to connect with qualified applicants in less than 48
                    hours.&rdquo;
                  </p>
                </blockquote>
                <div className="block__91147 d-flex align-items-center">
                  <figure className="mr-4">
                    <img
                      src="simple-testimonial-2.jpg"
                      alt="Employer testimonial"
                      className="img-fluid"
                    />
                  </figure>
                  <div>
                    <h3>Vikram Iyer</h3>
                    <span className="position">HR Manager</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Employee Testimonial */}
            <div className="col-lg-6 mb-4">
              <div className="block__87154">
                <blockquote>
                  <p>
                    &ldquo;The instant job alerts kept me updated on new
                    opportunities daily. I never missed an opening that matched
                    my career goals, and I landed a role faster than I
                    expected.&rdquo;
                  </p>
                </blockquote>
                <div className="block__91147 d-flex align-items-center">
                  <figure className="mr-4">
                    <img
                      src="simple-testimonial-3.jpg"
                      alt="Employee testimonial"
                      className="img-fluid"
                    />
                  </figure>
                  <div>
                    <h3>Arjun Mehta</h3>
                    <span className="position">Software Developer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Employer Testimonial */}
            <div className="col-lg-6 mb-4">
              <div className="block__87154">
                <blockquote>
                  <p>
                    &ldquo;We’ve hired several skilled candidates through
                    SimplyfyJob. The platform is easy to use, and the skill
                    assessments gave us confidence in the applicants’ abilities
                    before interviews.&rdquo;
                  </p>
                </blockquote>
                <div className="block__91147 d-flex align-items-center">
                  <figure className="mr-4">
                    <img
                      src="simple-testimonial-4.jpg"
                      alt="Employer testimonial"
                      className="img-fluid"
                    />
                  </figure>
                  <div>
                    <h3>Priya Nair</h3>
                    <span className="position">Recruitment Lead</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlighted Testimonial */}
            <div className="col-lg-12 mb-4">
              <div className="block__87154 bg-primary">
                <blockquote>
                  <p className="text-white">
                    &ldquo;SimplyfyJob bridges the gap between employers and
                    employees. Whether you are looking for the right opportunity
                    or the right talent, this platform makes the process smooth,
                    fast, and reliable.&rdquo;
                  </p>
                </blockquote>
                <div className="block__91147 d-flex align-items-center">
                  <figure className="mr-4">
                    <img
                      src="simple-testimonial-5.jpg"
                      alt="General testimonial"
                      className="img-fluid"
                    />
                  </figure>
                  <div>
                    <h3 className="text-white">Alex Morgan</h3>
                    <span className="position position-2">
                      Business Consultant
                    </span>
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

export default Testimonials;
