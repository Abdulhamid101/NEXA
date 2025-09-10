import React from "react";
import Hero from "../component/Hero/Hero.jsx";
import ImportStrip from "../component/ImportStrip/ImportStrip.jsx";
import Features from "../component/Features/Features.jsx";
import Tools from "../component/Tools/Tools.jsx";
import Security from "../component/Security/Security.jsx";
import SolutionBanner from "../component/SolutionBanner/SolutionBanner.jsx";
import Subscribe from "../component/Subscribe/Subscribe.jsx";

export default function Home(){
  return (
    <>
      <Hero />
      <Security />
      <ImportStrip />
      <Features />
      <Tools />
      <SolutionBanner />
      <Subscribe />
    </>
  );
}
