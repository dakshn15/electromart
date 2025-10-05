import React from "react";
import HeroSection from '../components/Home/HeroSection';
import CategorySection from "../components/Home/CategorySection";
import CollectionSection from "../components/Home/CollectionSection";
import ProductSection from "../components/Home/ProductSection";
import PartnerSection from "../components/Home/PartnerSection";
import OfferBanner from "../components/Home/OfferBanner";
import LimitedTimeOffer from "../components//Home/LimitedTimeOffer";
import FeaturesSection from "../components/Home/FeaturesSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import BlogSection from "../components/Home/BlogSection";
import NewsletterSection from "../components/Home/NewsletterSection";

// Import all home page section components here as you modularize them
// For now, the content will be inlined as a single component

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <CollectionSection />
      <PartnerSection />
      <ProductSection />
      <OfferBanner />
      <LimitedTimeOffer />
      <FeaturesSection />
      <TestimonialSection />
      <BlogSection />
      <NewsletterSection />
    </main>
  );
};

export default HomePage; 