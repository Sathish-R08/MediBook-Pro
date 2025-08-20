import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AppointmentCard = ({ appointment, index }) => {
  const handleAddToCalendar = () => {
    const startDate = new Date(`${appointment.date}T${appointment.time}`);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour later
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Appointment with ${appointment?.doctorName}&dates=${startDate?.toISOString()?.replace(/[-:]/g, '')?.replace(/\.\d{3}/, '')}&details=Appointment with ${appointment?.doctorName} - ${appointment?.specialty}`;
    
    window.open(calendarUrl, '_blank');
  };

  const handleShareAppointment = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Medical Appointment',
        text: `Appointment with ${appointment?.doctorName} on ${appointment?.date} at ${appointment?.time}`,
        url: window.location?.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const shareText = `Appointment with ${appointment?.doctorName} on ${appointment?.date} at ${appointment?.time}. Confirmation: ${appointment?.confirmationNumber}`;
      navigator.clipboard?.writeText(shareText);
      alert('Appointment details copied to clipboard!');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + (index * 0.1) }}
      className="medical-card p-6 mb-6"
    >
      {/* Confirmation Number Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="medical-badge bg-primary/10 text-primary">
          <Icon name="Hash" size={14} />
          <span className="font-data">{appointment?.confirmationNumber}</span>
        </div>
        <button
          onClick={handleShareAppointment}
          className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-muted transition-smooth focus-ring"
          aria-label="Share appointment"
        >
          <Icon name="Share2" size={18} />
        </button>
      </div>
      {/* Doctor Information */}
      <div className="flex items-start space-x-4 mb-6">
        <div className="relative">
          <Image
            src={appointment?.doctorImage}
            alt={appointment?.doctorName}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
            <Icon name="Check" size={12} color="white" strokeWidth={3} />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-text-primary mb-1">
            {appointment?.doctorName}
          </h3>
          <p className="text-text-secondary mb-2">{appointment?.specialty}</p>
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="MapPin" size={14} />
              <span>{appointment?.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={14} className="text-warning fill-current" />
              <span>{appointment?.rating}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
          <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
            <Icon name="Calendar" size={20} className="text-primary" />
          </div>
          <div>
            <p className="text-sm text-text-secondary">Date</p>
            <p className="font-medium text-text-primary">{appointment?.date}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
          <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg">
            <Icon name="Clock" size={20} className="text-accent" />
          </div>
          <div>
            <p className="text-sm text-text-secondary">Time</p>
            <p className="font-medium text-text-primary appointment-time">{appointment?.time}</p>
          </div>
        </div>
      </div>
      {/* Patient Information */}
      <div className="border-t border-border pt-4 mb-6">
        <h4 className="text-sm font-medium text-text-secondary mb-3">Patient Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-text-secondary">Name</p>
            <p className="font-medium text-text-primary">{appointment?.patientName}</p>
          </div>
          <div>
            <p className="text-sm text-text-secondary">Age</p>
            <p className="font-medium text-text-primary">{appointment?.patientAge} years</p>
          </div>
          <div>
            <p className="text-sm text-text-secondary">Phone</p>
            <p className="font-medium text-text-primary">{appointment?.patientPhone}</p>
          </div>
          <div>
            <p className="text-sm text-text-secondary">Email</p>
            <p className="font-medium text-text-primary">{appointment?.patientEmail}</p>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="default"
          onClick={handleAddToCalendar}
          iconName="Calendar"
          iconPosition="left"
          className="flex-1"
        >
          Add to Calendar
        </Button>
        <Button
          variant="outline"
          onClick={() => window.open(`tel:${appointment?.clinicPhone}`, '_self')}
          iconName="Phone"
          iconPosition="left"
          className="flex-1"
        >
          Call Clinic
        </Button>
      </div>
    </motion.div>
  );
};

export default AppointmentCard;