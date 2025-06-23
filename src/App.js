import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import JobListings from './pages/JobListings';
import JobSingle from './pages/JobSingle';
import PostJob from './pages/PostJob';
import Services from './pages/Services';
import ServiceSingle from './pages/ServiceSingle';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import Portfolio from './pages/Portfolio';
import PortfolioSingle from './pages/PortfolioSingle';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;
