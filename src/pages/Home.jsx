import React from "react";
import Hero from "../components/Hero";
import CounterSection from "../components/CounterSection";
import ServicesPage from "../components/Services";


const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Statistics */}
      <CounterSection />

      {/* Services */}
      <ServicesPage />
      {/* Reviews */}
      {/* <ReviewsSection /> */}
    </>
  );
};

export default Home;