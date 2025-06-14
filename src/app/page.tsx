import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import RoomsSection from '@/components/RoomsSection';
import BookingSection from '@/components/BookingSection';
import AchievementsSection from '@/components/AchievementsSection';
import GallerySection from '@/components/GallerySection';
import TermsSection from '@/components/TermsSection';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <BookingSection />
      <AchievementsSection />
      <GallerySection />
      <TermsSection />
      <Footer />
    </div>
  );
};

export default Home;