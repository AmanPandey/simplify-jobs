import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useFixMobileNav from "./useFixMobileNav";

const Navbar = () => {
  useFixMobileNav();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-navbar mt-3 ${scrolled ? "scrolled" : ""}  `}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="site-logo col-6">
            <NavLink to="/">Simplifyjob</NavLink>
          </div>

          <nav className="mx-auto site-navigation">
            <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="has-children">
                <NavLink to="#">Job Listings</NavLink>
                <ul className="dropdown">
                  <li>
                    <NavLink
                      to="/job-single"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Job Single
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/post-job"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Post a Job
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <NavLink to="#">Pages</NavLink>
                <ul className="dropdown">
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/service-single"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Service Single
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog-single"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Blog Single
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                  </li>
                  <li>
                    <NavLink to="/portfolio-single">Portfolio Single</NavLink>
                  </li> */}
                  <li>
                    <NavLink
                      to="/testimonials"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Testimonials
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/faq"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      FAQ
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/gallery">Gallery</NavLink>
                  </li> */}
                </ul>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="d-lg-none">
                <NavLink to="/post-job">
                  <span className="mr-2">+</span> Post a Job
                </NavLink>
              </li>
              <li className="d-lg-none">
                <NavLink to="/login">Log In</NavLink>
              </li>
            </ul>
          </nav>

          <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
            <div className="ml-auto">
              <NavLink
                to="/post-job"
                className="btn btn-outline-white border-width-2 d-none d-lg-inline-block me-1"
              >
                <span className="mr-2 icon-add"></span>Post a Job
              </NavLink>
              <NavLink
                to="/login"
                className="btn btn-primary border-width-2 d-none d-lg-inline-block ml-2"
              >
                <span className="mr-2 icon-lock_outline"></span>Log In
              </NavLink>
            </div>
            {/* toggler for small screen */}
            <a
              href="#"
              className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3 "
            >
              <span className="icon-menu h3 m-0 p-0 mt-2"></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
