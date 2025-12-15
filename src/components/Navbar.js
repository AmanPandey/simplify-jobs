import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useFixMobileNav from "./useFixMobileNav";
import { useContext } from "react";
import FrontendContext from "../context/FrontendContext";
import { getCurrentUser } from "../Hooks/getCurrentUser";
import FrontEndProvider from "../context/FrontEndProvider";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  // console.log(openDropdown);

  const { user, handleLogout } = useContext(FrontendContext);

  useFixMobileNav();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(false);
  }, [user]);

  return (
    <header className={`site-navbar py-4  ${scrolled ? "scrolled" : ""}  `}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="site-logo col-6">
            <NavLink to="/">
              <img
                src="/images/logo/jobsalgo-logo-removebg-preview.png"
                alt=""
                style={{ width: "130px", filter: "brightness(0) invert(1)" }}
              />
            </NavLink>
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
              <li>
                <NavLink
                  to="/jobs"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Jobs
                </NavLink>
              </li>

              <li className="has-children">
                <NavLink to="#">Company</NavLink>
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
                  {/* <li>
                    <NavLink
                      to="/service-single"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Service Single
                    </NavLink>
                  </li> */}
                  {/* <li>
                    <NavLink
                      to="/blog-single"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Blog Single
                    </NavLink>
                  </li> */}
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
              <li className="d-xl-none">
                <NavLink to="/post-job">
                  <span className="mr-2">+</span> Post a Job
                </NavLink>
              </li>
              {/* <li className="d-lg-none">
                <NavLink to="/login">Log In</NavLink>
              </li> */}
            </ul>
          </nav>

          <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
            <div className="ml-auto d-flex align-items-center">
              <NavLink
                to="/post-job"
                className="btn btn-outline-white border-width-2 d-none d-xl-inline-block me-1"
              >
                <span className="mr-2 icon-add"></span>Post a Job
              </NavLink>
              {user ? (
                <div
                  className="avatar-wrapper"
                  onMouseEnter={() => setOpenDropdown(true)}
                  onMouseLeave={() => setOpenDropdown(false)}
                >
                  <div
                    className="user-avatar d-flex align-items-center justify-content-center ml-lg-3"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "rgb(137, 186, 22)",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                  >
                    {user?.name?.charAt(0)?.toUpperCase()}
                  </div>

                  <ul
                    className={`custom-dropdown-menu ${
                      openDropdown ? "dropdown-open" : ""
                    }`}
                  >
                    {/* <li>
                      <NavLink to="/profile" className="custom-dropdown-item">
                        Details
                      </NavLink>
                    </li> */}
                    {/* <li>
                      <NavLink to="/profile" className="custom-dropdown-item">
                        Log Out
                      </NavLink>
                    </li> */}

                    <li>
                      <button
                        className="custom-dropdown-item logout-btn"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="btn btn-primary border-width-2  ml-xl-2 mr-xl-3 log-in-btn"
                >
                  <span className="mr-2 icon-lock_outline"></span>Log In
                </NavLink>
              )}
            </div>
            {/* toggler for small screen */}
            <a
              href="#"
              className="site-menu-toggle js-menu-toggle d-flex align-items-center d-xl-none  ml-3 "
            >
              <span className="icon-menu h3 m-0 p-0 "></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
