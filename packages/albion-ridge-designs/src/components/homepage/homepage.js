import React from "react";
import Contact from "../contact";
import Offerings from "../offerings";
import Timeline from "../timeline/timeline";
import BlogCards from "../blogcards";
import Testimonials from "../testimonials/testimonials";
import Application from "../application/application";
  
  function Homepage() {
      return (
        <>
          <Offerings />
          <Testimonials />
          <Timeline />
          <Application />
          <BlogCards />
          <Contact />
        </>
      )
  }
  
  export default Homepage;
