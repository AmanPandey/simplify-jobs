import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import JobListings from "./pages/JobListings";
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
// import Login from "./pages/Login";
import AuthUser from "./admin/Components/AuthUser";
import AdminLayout from "./admin/Layout/AdminLayout";
import Dashboard from "./admin/Pages/Dashboard";
import JobListing from "./admin/Pages/JobListing";
import AddNewJob from "./admin/Pages/AddNewJob";
import DraftJobs from "./admin/Pages/DraftJobs";
import EditJob from "./admin/Pages/EditJob";
import SignUp from "./admin/Components/SignUp";
import Login from "./admin/Components/Login";
import Layout from "./components/Layout";

function App() {
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
          {/* <Route path="/login" element={<Login />} />  */}
        </Route>

        {/* Redirect /admin to /signup */}
        <Route path="/admin" element={<AuthUser />} />

        {/* Admin layout for /admin/dashboard only */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="jobslisting" element={<JobListing />} />
          <Route path="addjob" element={<AddNewJob />} />
          <Route path="draft" element={<DraftJobs />} />
          <Route path="edit" element={<EditJob />} />
        </Route>

        {/* Auth pages */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
