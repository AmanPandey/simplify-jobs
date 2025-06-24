import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <Link href="#top" className="smoothscroll scroll-top">
          <span className="icon-keyboard_arrow_up"></span>
        </Link>

        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4 mb-4 mb-md-0">
              <h3>Company</h3>
              <ul className="list-unstyled">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Career</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-4 mb-md-0">
              <h3>Quick Links</h3>
              <ul className="list-unstyled">
                <li>
                  <Link href="#">FAQ</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h3>Contact Us</h3>
              <div className="footer-social">
                <Link href="#">
                  <span className="icon-facebook "></span>
                </Link>
                <Link href="#">
                  <span className="icon-twitter "></span>
                </Link>
                <Link href="#">
                  <span className="icon-instagram "></span>
                </Link>
                <Link href="#">
                  <span className="icon-linkedin "></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-12">
              <p className="copyright">
                <small>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>
                  SimplifyJob. All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
