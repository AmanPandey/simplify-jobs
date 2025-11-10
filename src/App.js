import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

// THIRD PARTY
import Aos from "aos";
import "aos/dist/aos.css";

// GENERAL ROUTE
import PageNotFound from "./pages/PageNotFound.js";

// FRONTEND
import Home from "./pages/Home";
import About from "./pages/About";
import JobSingle from "./pages/JobSingle";
import PostJob from "./pages/PostJob";
import Services from "./pages/Services";
import ServiceSingle from "./pages/ServiceSingle";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import Portfolio from "./pages/Portfolio";
import PortfolioSingle from "./pages/PortfolioSingle";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

// BACKEND ADMIN
import ProtectedRoute from "./admin/Routes/ProtectedRoute.jsx";
import AuthUser from "./admin/Pages/AuthUser.jsx";
import AdminLayout from "./admin/Layout/AdminLayout";
import Dashboard from "./admin/Pages/Dashboard";
import AddNewJob from "./admin/Pages/AddNewJob";
import DraftJobs from "./admin/Pages/DraftJobs";
import EditJob from "./admin/Pages/EditJob";
import Layout from "./components/Layout";
import AdminJobsListing from "./admin/Pages/AdminJobsListing.jsx";
import JobListings from "./pages/JobListings";
import EmployersList from "./admin/Pages/EmployersList.jsx";
import AddEmployer from "./admin/Pages/AddEmployer.jsx";
import EditEmployer from "./admin/Pages/EditEmployer.jsx";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 800,
    });
  }, []);

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/job-listings" element={<JobListings />} />
          <Route path="/job-single" element={<JobSingle />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-single" element={<ServiceSingle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-single" element={<PortfolioSingle />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs-listing" element={<JobListings />} />
        </Route>

        {/* ADMIN PART */}

        {/* Public route for admin login */}
        <Route path="/admin/login" element={<AuthUser />} />

        {/* Protected admin routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* When visiting /admin → Dashboard by default */}
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="jobs" element={<AdminJobsListing />} />
          <Route path="addjob" element={<AddNewJob />} />
          <Route path="draft" element={<DraftJobs />} />
          <Route path="edit" element={<EditJob />} />
          <Route path="employers" element={<EmployersList />} />
          <Route path="add-employer" element={<AddEmployer />} />
          <Route path="edit-employer" element={<EditEmployer />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
