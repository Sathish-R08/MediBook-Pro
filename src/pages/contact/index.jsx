import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Breadcrumb from './components/Breadcrumb';
import Icon from '../../components/AppIcon';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - MediBook Pro | Healthcare Support & Assistance</title>
        <meta 
          name="description" 
          content="Get in touch with MediBook Pro for appointments, technical support, billing inquiries, and general assistance. Multiple contact channels available with HIPAA-compliant communication." 
        />
        <meta name="keywords" content="contact, support, appointments, billing, technical help, healthcare assistance" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="section-spacing">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb />
            
            {/* Page Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
                <Icon name="MessageSquare" size={32} className="text-primary" />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                Contact Us
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                We're here to help with your healthcare needs. Reach out to us through multiple channels 
                for appointments, support, and general inquiries.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                <div className="trust-indicator">
                  <Icon name="Shield" size={20} className="text-success" />
                  <span>HIPAA Compliant</span>
                </div>
                
                <div className="trust-indicator">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span>24-Hour Response Time</span>
                </div>
                
                <div className="trust-indicator">
                  <Icon name="Headphones" size={20} className="text-accent" />
                  <span>Dedicated Support Team</span>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Information - Left Column */}
              <div className="order-1 lg:order-1">
                <ContactInfo />
              </div>
              
              {/* Contact Form - Right Column */}
              <div className="order-2 lg:order-2">
                <ContactForm />
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <FAQ />
            </div>

            {/* Quick Actions Section */}
            <div className="medical-card p-8 text-center">
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Need Immediate Assistance?
              </h3>
              
              <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                For urgent matters, use our quick contact options below. Our team is standing by 
                to provide the support you need.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <a
                  href="tel:+15551234567"
                  className="flex flex-col items-center p-6 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-smooth focus-ring"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <span className="font-medium text-text-primary mb-1">Call Now</span>
                  <span className="text-sm text-text-secondary">Appointments</span>
                </a>
                
                <a
                  href="mailto:sathishramesh383@gmail.com"
                  className="flex flex-col items-center p-6 rounded-lg border border-border hover:border-secondary hover:bg-secondary/5 transition-smooth focus-ring"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-3">
                    <Icon name="Mail" size={24} className="text-secondary" />
                  </div>
                  <span className="font-medium text-text-primary mb-1">Email Us</span>
                  <span className="text-sm text-text-secondary">General Support</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/thesathishr383/"
                  className="flex flex-col items-center p-6 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-smooth focus-ring"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3">
                    <Icon name="Headphones" size={24} className="text-accent" />
                  </div>
                  <span className="font-medium text-text-primary mb-1">Tech Support</span>
                  <span className="text-sm text-text-secondary">Platform Help</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/thesathishr383/"
                  className="flex flex-col items-center p-6 rounded-lg border border-border hover:border-warning hover:bg-warning/5 transition-smooth focus-ring"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-warning/10 rounded-lg mb-3">
                    <Icon name="CreditCard" size={24} className="text-warning" />
                  </div>
                  <span className="font-medium text-text-primary mb-1">Billing</span>
                  <span className="text-sm text-text-secondary">Payment Support</span>
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <Icon name="Heart" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-semibold text-text-primary tracking-tight">
                    MediBook
                  </span>
                  <span className="text-xs text-primary font-medium -mt-1">
                    Pro
                  </span>
                </div>
              </div>
              
              <p className="text-text-secondary mb-6 max-w-md mx-auto">
                Connecting patients with healthcare providers through secure, 
                HIPAA-compliant appointment booking.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary">
                <div className="trust-indicator">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span>HIPAA Compliant</span>
                </div>
                
                <div className="trust-indicator">
                  <Icon name="Lock" size={16} className="text-primary" />
                  <span>SSL Secured</span>
                </div>
                
                <div className="trust-indicator">
                  <Icon name="Award" size={16} className="text-accent" />
                  <span>Healthcare Certified</span>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-text-secondary">
                  © {new Date()?.getFullYear()} MediBook Pro. All rights reserved. 
                  Your health information is protected under HIPAA regulations.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;