import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';

const BookingFloatingButton = ({ onBook, fee }) => {
  return (
    <motion.div 
      className="fixed bottom-4 left-4 right-4 z-fixed lg:hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <div className="medical-card p-4 shadow-floating">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm text-text-secondary">Consultation Fee</div>
            <div className="text-lg font-semibold text-text-primary">${fee}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-text-secondary">Duration</div>
            <div className="font-medium text-text-primary">30 minutes</div>
          </div>
        </div>
        
        <Button
          onClick={onBook}
          variant="default"
          iconName="Calendar"
          iconPosition="left"
          fullWidth
          size="lg"
          className="animate-breathing"
        >
          Book Appointment Now
        </Button>
      </div>
    </motion.div>
  );
};

export default BookingFloatingButton;