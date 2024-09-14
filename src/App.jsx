import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Program from "./Components/Program/Program.jsx";
import FitnessChallengePage from "./Components/FitnessChallengePage/FitnessChallengePage.jsx";
import Title from "./Components/Title/Title.jsx";
import About from "./Components/About/About.jsx";
import TestimonialSlider from "./Components/Testimonials/Testimonial.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import TermsAndConditionsBox from "./Components/TermsAndConditionsBox/TermsAndConditionsBox.jsx";
import Registration from "./Components/Registration/Registration.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* Home page route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Program />
              <Title Subtitle="Our PROGRAM" title="What’s Included" />
              <FitnessChallengePage />
              <About />
              <Title Subtitle="Testimonial" title="Success stories" />
              <TestimonialSlider />
              <Title Subtitle="How to Join" title="Registration Procedures" />
              <Registration />
              <Contact />
            </>
          }
        />

        {/* Terms and Conditions route */}
        <Route path="/terms-and-conditions" element={<TermsAndConditionsBox />} />

        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
