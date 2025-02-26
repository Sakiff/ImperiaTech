import React from "react";
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import FAQ from "../../components/faq/Faq";
import Testimonials from "../../components/testimonials/Testimonials";
import Benefits from "../../components/benefits/Benefits";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <FAQ />
      <Testimonials />
    </>
  );
}

// TODO footere bg ver bg-gradient-to-b from-[#0f0f0f] to-[#111f0f]
