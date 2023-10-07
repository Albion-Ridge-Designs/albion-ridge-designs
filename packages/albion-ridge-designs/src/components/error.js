import React from "react";
import { connect } from "frontity";
import PageHero from "./page/pagehero";
import Cta from "./sections/cta";
import Instagram from "./instagram/instagram";
import HeavensGateName from "./generators/heavensgatename";
import derphorse from "../assets/derphorse.png";

const Error = ({ state }) => {
  return (
    <>
        <PageHero 
          image={derphorse}
          heading="404 Not Found"
          subheading={`The path ${state.router.link} cannot be found.`}
          headingTextColor="brand.800"
          subheadingTextColor="brand.800"
        />
        <HeavensGateName />
        <Cta />
        <Instagram limit={12} />
    </>
  )
}

export default connect(Error);