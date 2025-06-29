import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
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
              <h1 className="text-white font-weight-bold">Gallery</h1>
              <div className="custom-breadcrumbs">
                <Link to="/">Home</Link> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Gallery</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" id="next-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 item">
              <a
                href="images/sq_img_1.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/sq_img_1.jpg" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <a
                href="images/sq_img_2.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/sq_img_2.jpg" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <a
                href="images/sq_img_3.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/sq_img_3.jpg" />
              </a>
            </div>

            <div className="col-md-6 col-lg-4 item">
              <a
                href="images/sq_img_4.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/sq_img_4.jpg" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <a
                href="images/sq_img_5.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/sq_img_5.jpg" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <a
                href="images/sq_img_6.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/sq_img_6.jpg" />
              </a>
            </div>

            <div className="col-md-6 col-lg-6 item">
              <a
                href="images/sq_img_11.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/sq_img_11.jpg" />
              </a>
            </div>
            <div className="col-md-6 col-lg-6 item">
              <a
                href="images/sq_img_2.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/sq_img_2.jpg" />
              </a>
            </div>

            <div className="col-md-6 col-lg-4 item">
              <a
                href="images/sq_img_7.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/sq_img_7.jpg" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <a
                href="images/sq_img_8.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/sq_img_8.jpg" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <a
                href="images/sq_img_9.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/sq_img_9.jpg" />
              </a>
            </div>

            <div className="col-md-6 col-lg-4 item">
              <a
                href="images/sq_img_10.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/sq_img_10.jpg" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <a
                href="images/sq_img_11.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/sq_img_11.jpg" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <a
                href="images/sq_img_12.jpg"
                className="item-wrap fancybox"
                data-fancybox="gallery2"
              >
                <span className="icon-search2"></span>
                <img className="img-fluid" src="images/sq_img_12.jpg" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
