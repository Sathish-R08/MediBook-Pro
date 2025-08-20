import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SuccessHeader = () => {
  return (
    <div className="text-center mb-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 0.2 
        }}
        className="inline-flex items-center justify-center w-20 h-20 bg-success rounded-full mb-6 mx-auto"
      >
        <Icon name="Check" size={40} color="white" strokeWidth={3} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h1 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-3">
          Appointment Confirmed!
        </h1>
        <p className="text-lg text-text-secondary max-w-md mx-auto">
          Your appointment has been successfully booked. We've sent confirmation details to your email.
        </p>
      </motion.div>
    </div>
  );
};

export default SuccessHeader;