import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
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
              <h1 className="text-white font-weight-bold">Our Blog</h1>
              <div className="custom-breadcrumbs">
                <Link href="#">Home</Link> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Blogs</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section blog-section">
        <div className="container">
          <div className="row mb-5">
            <div
              className="col-md-6 col-lg-4 mb-5"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Link href="blog-single.html">
                <img
                  src="simply-blog-1.jpg"
                  alt="Image"
                  className="img-fluid rounded mb-4 blog-img"
                />
              </Link>
              <h3>
                <Link href="blog-single.html" className="text-black">
                  7 Tips to Find the Right Job Faster
                </Link>
              </h3>
              <div>August 20, 2025</div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-5"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Link href="blog-single.html">
                <img
                  src="simply-blog-2.jpg"
                  alt="Image"
                  className="img-fluid rounded mb-4 blog-img"
                />
              </Link>
              <h3>
                <Link href="blog-single.html" className="text-black">
                  How to Write a Standout Resume for SimplifyJob
                </Link>
              </h3>
              <div>August 18, 2025</div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-5"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <Link href="blog-single.html">
                <img
                  src="simply-blog-3.jpg"
                  alt="Image"
                  className="img-fluid rounded mb-4 blog-img"
                />
              </Link>
              <h3>
                <Link href="blog-single.html" className="text-black">
                  How to Connect with Top Employers Online
                </Link>
              </h3>
              <div>August 15, 2025</div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-5"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <Link href="blog-single.html">
                <img
                  src="simply-blog-4.jpg"
                  alt="Image"
                  className="img-fluid rounded mb-4 blog-img"
                />
              </Link>
              <h3>
                <Link href="blog-single.html" className="text-black">
                  Maximizing Job Alerts to Never Miss Opportunities
                </Link>
              </h3>
              <div>August 12, 2025</div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-5"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <Link href="blog-single.html">
                <img
                  src="images/sq_img_5.jpg"
                  alt="Image"
                  className="img-fluid rounded mb-4 blog-img"
                />
              </Link>
              <h3>
                <Link href="blog-single.html" className="text-black">
                  Skill Development Courses to Boost Your Career
                </Link>
              </h3>
              <div>August 10, 2025</div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-5"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <Link href="blog-single.html">
                <img
                  src="simply-blog-6.jpg"
                  alt="Image"
                  className="img-fluid rounded mb-4 blog-img"
                />
              </Link>
              <h3>
                <Link href="blog-single.html" className="text-black">
                  Understanding Salary Insights Before Negotiation
                </Link>
              </h3>
              <div>August 8, 2025</div>
            </div>
          </div>

          <div className="row pagination-wrap mt-5">
            <div className="col-md-12 text-center">
              <div className="custom-pagination ml-auto">
                <Link href="#" className="prev">
                  Prev
                </Link>
                <div className="d-inline-block">
                  <Link href="#" className="active">
                    1
                  </Link>
                  <Link href="#">2</Link>
                  <Link href="#">3</Link>
                  <Link href="#">4</Link>
                </div>
                <Link href="#" className="next">
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
              data-aos-delay="500"
            >
              <h2 className="section-title mb-2 text-white">
                Have Questions or Need Guidance?
              </h2>
              <p className="text-white">
                Whether you’re exploring career advice or hiring strategies from
                our blog, our team is here to support you. Get in touch to
                discuss your goals with SimplyfyJob.
              </p>
              <button
                className="cta-btn mt-4"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
