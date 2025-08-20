import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroBanner from './components/HeroBanner';
import SearchSection from './components/SearchSection';
import FeaturedDoctors from './components/FeaturedDoctors';
import TrustSignals from './components/TrustSignals';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Navigation */}
      <Header />
      {/* Main Content */}
      <main className="relative">
        {/* Hero Banner Section */}
        <HeroBanner />

        {/* Search Section */}
        <SearchSection />

        {/* Featured Doctors Section */}
        <FeaturedDoctors />

        {/* Trust Signals Section */}
        <TrustSignals />
      </main>
      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Homepage;