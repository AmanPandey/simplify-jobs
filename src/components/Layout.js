import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import $ from "jquery";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // rebuild mobile menu whenever route changes
    if ($(".js-clone-nav").length) {
      $(".site-mobile-menu-body").empty();
      $(".js-clone-nav").each(function () {
        const $this = $(this);
        $this
          .clone()
          .attr("class", "site-nav-wrap")
          .appendTo(".site-mobile-menu-body");
      });
    }
  }, [location.pathname]);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
