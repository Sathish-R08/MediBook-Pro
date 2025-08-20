import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const trustItems = [
    {
      icon: "Shield",
      title: "HIPAA Compliant",
      description: "Your health information is protected and secure"
    },
    {
      icon: "Clock",
      title: "24/7 Support",
      description: "Round-the-clock assistance for any concerns"
    },
    {
      icon: "Mail",
      title: "Email Confirmation",
      description: "Detailed appointment information sent to your inbox"
    },
    {
      icon: "Phone",
      title: "Easy Rescheduling",
      description: "Call us anytime to modify your appointment"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="medical-card p-6 mb-8"
    >
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Your Appointment is Secure
        </h3>
        <p className="text-text-secondary">
          We prioritize your privacy and provide comprehensive support
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trustItems?.map((item, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-smooth">
            <div className="flex items-center justify-center w-10 h-10 bg-success/10 rounded-lg flex-shrink-0">
              <Icon name={item?.icon} size={18} className="text-success" />
            </div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">{item?.title}</h4>
              <p className="text-sm text-text-secondary">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={18} className="text-primary flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="text-text-primary font-medium mb-1">Need to make changes?</p>
            <p className="text-text-secondary">
              Contact us at <a href="tel:+91 6369440965" className="text-primary hover:underline font-medium">+1 (555) 012-3456</a> or 
              email <a href="mailto:sathishramesh383@gmail.com" className="text-primary hover:underline font-medium">support@medibookpro.com</a> 
              at least 24 hours before your appointment.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrustSignals;