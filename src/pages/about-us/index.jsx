import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from './components/Breadcrumb';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import Icon from '../../components/AppIcon';

const AboutUs = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const currentYear = new Date()?.getFullYear();

  return (
    <>
      <Helmet>
        <title>About Us - MediBook Pro | Trusted Healthcare Platform</title>
        <meta 
          name="description" 
          content="Learn about MediBook Pro's mission to revolutionize healthcare access. Meet our expert team, discover our journey, and see why thousands trust us for their healthcare needs." 
        />
        <meta name="keywords" content="about medibook pro, healthcare platform, medical team, healthcare technology, patient care, HIPAA compliant" />
        <meta property="og:title" content="About Us - MediBook Pro | Trusted Healthcare Platform" />
        <meta property="og:description" content="Discover MediBook Pro's commitment to accessible, secure healthcare. Meet our team of medical and technology experts." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-us" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb />
        
        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Team Section */}
          <TeamSection />
          
          {/* Benefits Section */}
          <BenefitsSection />
          
          {/* Testimonials Section */}
          <TestimonialsSection />
          
          {/* Timeline Section */}
          <TimelineSection />
          
          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="bg-text-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                    <Icon name="Heart" size={24} color="white" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold tracking-tight">
                      MediBook Pro
                    </span>
                    <span className="text-xs text-primary font-medium -mt-1">
                      Trusted Healthcare Platform
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                  Revolutionizing healthcare access through innovative technology, 
                  connecting patients with verified healthcare providers for seamless, 
                  secure appointment booking experiences.
                </p>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth">
                    <Icon name="Facebook" size={20} />
                  </button>
                  <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth">
                    <Icon name="Twitter" size={20} />
                  </button>
                  <a
                    href="https://linkedin.com/in/thesathishr383"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <Icon name="Linkedin" size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/sathishh555/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <Icon name="Instagram" size={20} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/homepage" className="text-gray-300 hover:text-white transition-smooth flex items-center gap-2">
                      <Icon name="Home" size={16} />
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/doctor-listing" className="text-gray-300 hover:text-white transition-smooth flex items-center gap-2">
                      <Icon name="UserCheck" size={16} />
                      Find Doctors
                    </a>
                  </li>
                  <li>
                    <a href="/appointment-booking" className="text-gray-300 hover:text-white transition-smooth flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      Book Appointment
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-300 hover:text-white transition-smooth flex items-center gap-2">
                      <Icon name="Phone" size={16} />
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <div className="text-gray-300 text-sm">
                      123 Healthcare Plaza, Suite 500<br />
                      Tamil Nadu, India
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Phone" size={16} className="text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Mail" size={16} className="text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">support@medibookpro.com</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/10 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-300 text-sm">
                  © {currentYear} MediBook Pro. All rights reserved.
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <a href="#" className="text-gray-300 hover:text-white transition-smooth">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-smooth">
                    Terms of Service
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-smooth">
                    HIPAA Compliance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutUs;