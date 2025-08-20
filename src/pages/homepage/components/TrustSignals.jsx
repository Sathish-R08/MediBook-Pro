import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignals = () => {
  const certifications = [
    {
      name: "HIPAA Compliant",
      description: "Your health information is protected with industry-standard security",
      icon: "Shield",
      color: "text-success"
    },
    {
      name: "SSL Secured",
      description: "All data transmission is encrypted and secure",
      icon: "Lock",
      color: "text-primary"
    },
    {
      name: "Licensed Professionals",
      description: "All doctors are verified and board-certified",
      icon: "Award",
      color: "text-secondary"
    },
    {
      name: "24/7 Support",
      description: "Round-the-clock customer support for your peace of mind",
      icon: "Clock",
      color: "text-accent"
    }
  ];

  const partnerLogos = [
    {
      name: "American Medical Association",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      alt: "AMA Partnership"
    },
    {
      name: "Healthcare Quality Association",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      alt: "HQA Certification"
    },
    {
      name: "Medical Board Certification",
      logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      alt: "Medical Board"
    },
    {
      name: "Patient Safety Organization",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      alt: "PSO Member"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Patient",
      content: "MediBook Pro made it so easy to find and book with my cardiologist. The process was seamless and the doctor was excellent!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "John Davis",
      role: "Patient",
      content: "I've been using this platform for over a year. The quality of doctors and ease of booking is unmatched. Highly recommended!",
      rating: 5,
      avatar: "https://plus.unsplash.com/premium_photo-1677363682086-c8493a6dae52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwb2xkfGVufDB8fDB8fHww"
    },
    {
      name: "Maria Garcia",
      role: "Patient",
      content: "As a busy mom, I appreciate being able to book appointments for my family quickly and efficiently. Great service!",
      rating: 5,
      avatar: "https://plus.unsplash.com/premium_photo-1679440415182-c362deb2fd40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW58ZW58MHx8MHx8fDA%3D"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
    ));
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Certifications */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Your Trust is Our Priority
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12">
            We maintain the highest standards of security, privacy, and professional excellence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications?.map((cert, index) => (
              <motion.div
                key={index}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 ${cert?.color?.replace('text-', 'bg-')}/10 rounded-2xl flex items-center justify-center mx-auto`}>
                  <Icon name={cert?.icon} size={32} className={cert?.color} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {cert?.name}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {cert?.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Logos */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Trusted by Leading Healthcare Organizations
            </h3>
            <p className="text-text-secondary">
              Partnered with top medical institutions and certification bodies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {partnerLogos?.map((partner, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 bg-muted rounded-lg hover:bg-primary/5 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={partner?.logo}
                  alt={partner?.alt}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Patient Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              What Our Patients Say
            </h3>
            <p className="text-lg text-text-secondary">
              Real experiences from thousands of satisfied patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-surface border border-border rounded-xl p-6 shadow-card hover:shadow-modal transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial?.rating)}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-text-secondary italic">
                    "{testimonial?.content}"
                  </p>

                  {/* Patient Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <Image
                      src={testimonial?.avatar}
                      alt={testimonial?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-text-primary">
                        {testimonial?.name}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {testimonial?.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Badge */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-3 bg-success/10 text-success px-6 py-3 rounded-full">
            <Icon name="ShieldCheck" size={24} />
            <span className="font-semibold">
              100% Secure & HIPAA Compliant Platform
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;