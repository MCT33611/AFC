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

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <Hero></Hero>
      <Program></Program>
      <Title Subtitle="Our PROGRAM" title="What’s Included"></Title>
      <FitnessChallengePage></FitnessChallengePage>
      <About></About>
      <Title Subtitle='Testimonial' title='Success stories'></Title>
      <TestimonialSlider></TestimonialSlider>
      <Title Subtitle='How to Join' title='Registration Procedures'></Title>
      <Registration></Registration>
      <Contact></Contact>
      <TermsAndConditionsBox></TermsAndConditionsBox>
      <ScrollToTop></ScrollToTop>
      <Footer></Footer>
    </div>
  );
};

export default App;
