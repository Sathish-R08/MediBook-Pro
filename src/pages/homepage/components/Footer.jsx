import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Find Doctors", path: "/doctor-listing" },
        { label: "Book Appointment", path: "/appointment-booking" },
        { label: "About Us", path: "/about-us" },
        { label: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Medical Specialties",
      links: [
        { label: "Cardiology", path: "/doctor-listing?specialty=cardiology" },
        { label: "Dermatology", path: "/doctor-listing?specialty=dermatology" },
        { label: "Pediatrics", path: "/doctor-listing?specialty=pediatrics" },
        { label: "Orthopedics", path: "/doctor-listing?specialty=orthopedics" }
      ]
    },
    {
      title: "Patient Resources",
      links: [
        { label: "Health Tips", path: "#" },
        { label: "Insurance Guide", path: "#" },
        { label: "Appointment Policy", path: "#" },
        { label: "Patient Portal", path: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", path: "#" },
        { label: "Privacy Policy", path: "#" },
        { label: "Terms of Service", path: "#" },
        { label: "HIPAA Notice", path: "#" }
      ]
    }
  ];


  const socialLinks = [
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/in/thesathishr383",target:"_blank", rel:"noopener noreferrer" },
    { name: "Instagram", icon: "Instagram", url: "https://www.instagram.com/sathishh555/" },
    { name: "Facebook", icon: "Facebook", url: "#" },
    { name: "Twitter", icon: "Twitter", url: "#" }
  ];

  const contactInfo = [
    {
      icon: "Phone",
      label: "24/7 Support",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "Mail",
      label: "Email Support",
      value: "support@medibookpro.com",
      link: "mailto:sathishramesh383@gmail.com"
    },
    {
      icon: "MapPin",
      label: "Main Office",
      value: "123 Healthcare Ave, Tamil Nadu, India",
      link: "#"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Health Tips
            </h3>
            <p className="text-white/80 mb-6">
              Subscribe to our newsletter for the latest health insights and appointment reminders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button
                variant="default"
                iconName="Send"
                iconPosition="right"
                className="bg-primary hover:bg-primary/90"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <Link to="/homepage" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
                <Icon name="Heart" size={28} color="white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">
                  MediBook
                </span>
                <span className="text-sm text-primary font-medium -mt-1">
                  Pro
                </span>
              </div>
            </Link>

            <p className="text-white/80 leading-relaxed">
              Your trusted healthcare companion. Connect with qualified medical professionals 
              and schedule appointments with ease. Quality care is just a click away.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo?.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon 
                    name={contact?.icon} 
                    size={18} 
                    className="text-primary mt-0.5 flex-shrink-0" 
                  />
                  <div>
                    <p className="text-sm text-white/60">{contact?.label}</p>
                    {contact?.link !== "#" ? (
                      <a 
                        href={contact?.link}
                        className="text-white hover:text-primary transition-colors duration-300"
                      >
                        {contact?.value}
                      </a>
                    ) : (
                      <p className="text-white">{contact?.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections?.map((section, sectionIndex) => (
              <motion.div
                key={section?.title}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white">
                  {section?.title}
                </h4>
                <ul className="space-y-3">
                  {section?.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link?.path}
                        className="text-white/80 hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © {currentYear} MediBook Pro. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                HIPAA Compliant • SSL Secured • Licensed Healthcare Platform
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-white/60 text-sm mr-2">Follow us:</span>
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.url}
                  target="_blank" // ✅ Opens in a new tab
                  rel="noopener noreferrer" // ✅ Security best practice
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={`Follow us on ${social?.name}`}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            className="mt-8 pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="text-xs text-white/80">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Lock" size={16} className="text-primary" />
                <span className="text-xs text-white/80">256-bit SSL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-secondary" />
                <span className="text-xs text-white/80">Board Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-accent" />
                <span className="text-xs text-white/80">24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
