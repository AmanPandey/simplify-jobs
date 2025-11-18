import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useFixMobileNav = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest(".site-mobile-menu a");
      if (
        link &&
        link.getAttribute("href") &&
        !link.getAttribute("href").startsWith("#")
      ) {
        e.preventDefault();
        const path = link.getAttribute("href");
        navigate(path);
        document.body.classList.remove("offcanvas-menu");
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate]);
};

export default useFixMobileNav;
