import React from "react";
import Contact from "../contact/contact";
import Offerings from "../offerings/offerings";
import TimelineWrapper from "../timeline/timelinewrapper";
import BlogCards from "./blogcards";
import Testimonials from "../testimonials/testimonials";
import Application from "../application/application";
  
  function Homepage() {
      return (
        <>
          <Offerings />
          <Testimonials />
          <TimelineWrapper />
          <Application />
          <BlogCards />
          <Contact />
        </>
      )
  }
  
  export default Homepage;
