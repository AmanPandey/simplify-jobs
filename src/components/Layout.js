import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import $ from "jquery";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Rebuild mobile menu
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

    // ✅ Reset all dropdowns on route change
    $(".site-mobile-menu .collapse").each(function () {
      // Use Bootstrap collapse API instead of manually toggling classes
      $(this).collapse("hide");
    });

    $(".site-mobile-menu .arrow-collapse")
      .removeClass("active")
      .addClass("collapsed");

    // Close offcanvas menu
    $("body").removeClass("offcanvas-menu");
  }, [location.pathname]); // trigger on route change

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
