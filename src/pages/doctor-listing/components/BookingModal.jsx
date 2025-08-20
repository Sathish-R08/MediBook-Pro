import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const BookingModal = ({ doctor, isOpen, onClose }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    reason: ''
  });

  const availableDates = [
    { date: '2025-08-16', label: 'Today', available: true },
    { date: '2025-08-17', label: 'Tomorrow', available: true },
    { date: '2025-08-18', label: 'Sun, Aug 18', available: true },
    { date: '2025-08-19', label: 'Mon, Aug 19', available: false },
    { date: '2025-08-20', label: 'Tue, Aug 20', available: true },
    { date: '2025-08-21', label: 'Wed, Aug 21', available: true }
  ];

  const timeSlots = [
    { time: '09:00', available: true },
    { time: '09:30', available: false },
    { time: '10:00', available: true },
    { time: '10:30', available: true },
    { time: '11:00', available: false },
    { time: '11:30', available: true },
    { time: '14:00', available: true },
    { time: '14:30', available: true },
    { time: '15:00', available: true },
    { time: '15:30', available: false },
    { time: '16:00', available: true },
    { time: '16:30', available: true }
  ];

  const handleInputChange = (field, value) => {
    setPatientInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBookAppointment = () => {
    if (!selectedDate || !selectedTime || !patientInfo?.name || !patientInfo?.phone) {
      alert('Please fill in all required fields');
      return;
    }

    // Navigate to confirmation page with booking details
    navigate('/appointment-confirmation', {
      state: {
        doctor,
        date: selectedDate,
        time: selectedTime,
        patientInfo
      }
    });
  };

  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative bg-surface rounded-2xl shadow-floating max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-surface border-b border-border p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                <Image
                  src={doctor?.image}
                  alt={`Dr. ${doctor?.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-text-primary">
                  Book Appointment
                </h2>
                <p className="text-sm text-text-secondary">
                  with Dr. {doctor?.name} - {doctor?.specialty}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-text-secondary hover:text-text-primary hover:bg-muted transition-smooth focus-ring"
              aria-label="Close modal"
            >
              <Icon name="X" size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Date Selection */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Select Date</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {availableDates?.map((dateOption) => (
                <button
                  key={dateOption?.date}
                  onClick={() => dateOption?.available && setSelectedDate(dateOption?.date)}
                  disabled={!dateOption?.available}
                  className={`p-3 rounded-lg border text-center transition-smooth ${
                    selectedDate === dateOption?.date
                      ? 'border-primary bg-primary/10 text-primary'
                      : dateOption?.available
                      ? 'border-border hover:border-primary/50 hover:bg-muted text-text-primary' :'border-border bg-muted text-text-secondary cursor-not-allowed opacity-50'
                  }`}
                >
                  <div className="text-sm font-medium">{dateOption?.label}</div>
                  <div className="text-xs mt-1">
                    {dateOption?.available ? 'Available' : 'Unavailable'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Select Time</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {timeSlots?.map((slot) => (
                  <button
                    key={slot?.time}
                    onClick={() => slot?.available && setSelectedTime(slot?.time)}
                    disabled={!slot?.available}
                    className={`p-3 rounded-lg border text-center transition-smooth ${
                      selectedTime === slot?.time
                        ? 'border-primary bg-primary/10 text-primary'
                        : slot?.available
                        ? 'border-border hover:border-primary/50 hover:bg-muted text-text-primary' :'border-border bg-muted text-text-secondary cursor-not-allowed opacity-50'
                    }`}
                  >
                    <div className="text-sm font-medium">{slot?.time}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Patient Information */}
          {selectedTime && (
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">Patient Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter patient name"
                  value={patientInfo?.name}
                  onChange={(e) => handleInputChange('name', e?.target?.value)}
                  required
                />
                <Input
                  label="Age"
                  type="number"
                  placeholder="Enter age"
                  value={patientInfo?.age}
                  onChange={(e) => handleInputChange('age', e?.target?.value)}
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter phone number"
                  value={patientInfo?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter email address"
                  value={patientInfo?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                />
              </div>
              <div className="mt-4">
                <Input
                  label="Reason for Visit"
                  type="text"
                  placeholder="Brief description of your concern"
                  value={patientInfo?.reason}
                  onChange={(e) => handleInputChange('reason', e?.target?.value)}
                />
              </div>
            </div>
          )}

          {/* Appointment Summary */}
          {selectedDate && selectedTime && patientInfo?.name && (
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-3">Appointment Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Doctor:</span>
                  <span className="text-text-primary font-medium">Dr. {doctor?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Specialty:</span>
                  <span className="text-text-primary">{doctor?.specialty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Date:</span>
                  <span className="text-text-primary font-medium">
                    {availableDates?.find(d => d?.date === selectedDate)?.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Time:</span>
                  <span className="text-text-primary font-medium">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Patient:</span>
                  <span className="text-text-primary font-medium">{patientInfo?.name}</span>
                </div>
                <div className="flex justify-between border-t border-border pt-2 mt-2">
                  <span className="text-text-secondary">Consultation Fee:</span>
                  <span className="text-text-primary font-semibold">${doctor?.consultationFee}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-surface border-t border-border p-6 rounded-b-2xl">
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              variant="default"
              onClick={handleBookAppointment}
              disabled={!selectedDate || !selectedTime || !patientInfo?.name || !patientInfo?.phone}
              iconName="Calendar"
              iconPosition="left"
              className="flex-1"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;