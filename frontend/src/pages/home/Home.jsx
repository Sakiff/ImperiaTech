import React from "react";
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import FAQ from "../../components/faq/Faq";

export default function Home() {
  return (
    <div className="px-5 sm:px-16">
      <Hero />
      <Features />
      <FAQ />
    </div>
  );
}
