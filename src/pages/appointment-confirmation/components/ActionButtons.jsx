import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ActionButtons = () => {
  const navigate = useNavigate();

  const handleBookAnother = () => {
    navigate('/appointment-booking');
  };

  const handleViewAllAppointments = () => {
    // In a real app, this would navigate to an appointments dashboard
    console.log('Navigate to appointments dashboard');
    navigate('/homepage');
  };

  const handleBackToHome = () => {
    navigate('/homepage');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
      className="text-center space-y-4"
    >
      {/* Primary Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <Button
          variant="default"
          onClick={handleBookAnother}
          iconName="Plus"
          iconPosition="left"
          className="flex-1 animate-breathing"
        >
          Book Another Appointment
        </Button>
        <Button
          variant="outline"
          onClick={handleViewAllAppointments}
          iconName="Calendar"
          iconPosition="left"
          className="flex-1"
        >
          View All Appointments
        </Button>
      </div>
      {/* Secondary Action */}
      <div className="pt-4">
        <Button
          variant="ghost"
          onClick={handleBackToHome}
          iconName="Home"
          iconPosition="left"
        >
          Back to Home
        </Button>
      </div>
      {/* Additional Information */}
      <div className="pt-6 max-w-lg mx-auto">
        <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
          <div className="flex items-center space-x-2">
            <Icon name="Smartphone" size={16} />
            <span>Mobile App Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Bell" size={16} />
            <span>SMS Reminders</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ActionButtons;