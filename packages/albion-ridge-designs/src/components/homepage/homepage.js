import React, { useState, useEffect } from "react";
import { connect } from "frontity";
import Contact from "../contact/contact";
import Offerings from "../offerings/offerings";
import Timeline from "../timeline/timeline";
import BlogCards from "./blogcards";
import Testimonials from "../testimonials/testimonials";
import Application from "../application/application";
  
  function Homepage({ state, libraries, actions }) {
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
  
  export default connect(Homepage);
