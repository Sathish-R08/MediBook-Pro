import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import StepIndicator from './components/StepIndicator';
import DoctorSelectionStep from './components/DoctorSelectionStep';
import DateTimeStep from './components/DateTimeStep';
import PatientInfoStep from './components/PatientInfoStep';
import ConfirmationStep from './components/ConfirmationStep';
import MultipleAppointmentManager from './components/MultipleAppointmentManager';

const AppointmentBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get pre-selected doctor from navigation state
  const preSelectedDoctor = location?.state?.selectedDoctor;
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isMultipleMode, setIsMultipleMode] = useState(false);
  const [appointments, setAppointments] = useState([]);
  
  // Form state
  const [selectedDoctor, setSelectedDoctor] = useState(preSelectedDoctor || '');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientInfo, setPatientInfo] = useState({
    fullName: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    reason: '',
    medicalHistory: ''
  });
  const [errors, setErrors] = useState({});

  // Mock doctors data
  const doctors = [
    {
      id: 'dr-sarah-johnson',
      name: 'Sarah Johnson',
      specialty: 'Cardiologist',
      image: 'https://plus.unsplash.com/premium_photo-1661713606200-2832945b8d3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.9,
      location: 'Downtown Medical Center',
      experience: 12,
      bio: 'Specialized in preventive cardiology and heart disease management with over 12 years of experience.'
    },
    {
      id: 'dr-michael-chen',
      name: 'Michael Chen',
      specialty: 'Dermatologist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      rating: 4.8,
      location: 'Skin Care Clinic',
      experience: 8,
      bio: 'Expert in medical and cosmetic dermatology, focusing on skin cancer prevention and treatment.'
    },
    {
      id: 'dr-emily-rodriguez',
      name: 'Emily Rodriguez',
      specialty: 'Pediatrician',
      image: 'https://plus.unsplash.com/premium_photo-1661473820951-99a3565f3fca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.9,
      location: 'Children\'s Health Center',
      experience: 10,
      bio: 'Dedicated to providing comprehensive healthcare for children from infancy through adolescence.'
    },
    {
      id: 'dr-david-thompson',
      name: 'David Thompson',
      specialty: 'Orthopedic Surgeon',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
      rating: 4.7,
      location: 'Sports Medicine Institute',
      experience: 15,
      bio: 'Specializes in sports injuries and joint replacement surgery with advanced minimally invasive techniques.'
    },
    {
      id: 'dr-lisa-patel',
      name: 'Lisa Patel',
      specialty: 'Neurologist',
      image: 'https://plus.unsplash.com/premium_photo-1702598616428-205ea0fe9b05?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.8,
      location: 'Neurology Associates',
      experience: 11,
      bio: 'Expert in treating neurological disorders including migraines, epilepsy, and movement disorders.'
    }
  ];

  // Validation functions
  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!selectedDoctor) {
          newErrors.doctor = 'Please select a doctor';
        }
        break;
      case 2:
        if (!selectedDate) {
          newErrors.date = 'Please select a date';
        }
        if (!selectedTime) {
          newErrors.time = 'Please select a time';
        }
        break;
      case 3:
        if (!patientInfo?.fullName?.trim()) {
          newErrors.fullName = 'Full name is required';
        }
        if (!patientInfo?.age || patientInfo?.age < 1 || patientInfo?.age > 120) {
          newErrors.age = 'Please enter a valid age';
        }
        if (!patientInfo?.gender) {
          newErrors.gender = 'Please select gender';
        }
        if (!patientInfo?.phone?.trim()) {
          newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/?.test(patientInfo?.phone?.replace(/\D/g, ''))) {
          newErrors.phone = 'Please enter a valid 10-digit phone number';
        }
        if (!patientInfo?.email?.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(patientInfo?.email)) {
          newErrors.email = 'Please enter a valid email address';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleStepEdit = (step) => {
    setCurrentStep(step);
  };

  const handleAddAnotherAppointment = () => {
    if (validateStep(3)) {
      const newAppointment = {
        doctorId: selectedDoctor,
        date: selectedDate,
        time: selectedTime,
        patientInfo: { ...patientInfo }
      };
      
      setAppointments(prev => [...prev, newAppointment]);
      
      // Reset form for next appointment
      setSelectedDoctor('');
      setSelectedDate('');
      setSelectedTime('');
      setCurrentStep(1);
      setIsMultipleMode(true);
    }
  };

  const handleRemoveAppointment = (index) => {
    setAppointments(prev => prev?.filter((_, i) => i !== index));
    if (appointments?.length === 1) {
      setIsMultipleMode(false);
    }
  };

  const handleBookAppointment = async () => {
    if (!validateStep(currentStep)) return;

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const appointmentData = {
        appointments: isMultipleMode ? [...appointments, {
          doctorId: selectedDoctor,
          date: selectedDate,
          time: selectedTime,
          patientInfo
        }] : [{
          doctorId: selectedDoctor,
          date: selectedDate,
          time: selectedTime,
          patientInfo
        }],
        bookingId: `BK${Date.now()}`,
        timestamp: new Date()?.toISOString()
      };

      // Navigate to confirmation page with appointment data
      navigate('/appointment-confirmation', { 
        state: { 
          appointmentData,
          doctors 
        } 
      });
    } catch (error) {
      console.error('Booking failed:', error);
      // Handle error - show error message
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <DoctorSelectionStep
            selectedDoctor={selectedDoctor}
            onDoctorChange={setSelectedDoctor}
            doctors={doctors}
          />
        );
      case 2:
        return (
          <DateTimeStep
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onDateChange={setSelectedDate}
            onTimeChange={setSelectedTime}
          />
        );
      case 3:
        return (
          <PatientInfoStep
            patientInfo={patientInfo}
            onPatientInfoChange={setPatientInfo}
            errors={errors}
          />
        );
      case 4:
        return (
          <ConfirmationStep
            selectedDoctor={selectedDoctor}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            patientInfo={patientInfo}
            doctors={doctors}
            onEdit={handleStepEdit}
            appointments={appointments}
          />
        );
      default:
        return null;
    }
  };

  const getStepActions = () => {
    const actions = [];

    // Previous button (not on first step)
    if (currentStep > 1) {
      actions?.push(
        <Button
          key="previous"
          variant="outline"
          onClick={handlePrevious}
          iconName="ChevronLeft"
          iconPosition="left"
          disabled={isLoading}
        >
          Previous
        </Button>
      );
    }

    // Next/Continue button (not on last step)
    if (currentStep < 4) {
      actions?.push(
        <Button
          key="next"
          variant="default"
          onClick={handleNext}
          iconName="ChevronRight"
          iconPosition="right"
          disabled={isLoading}
        >
          {currentStep === 3 ? 'Review' : 'Next'}
        </Button>
      );
    }

    // Multiple appointment button (on step 3)
    if (currentStep === 3) {
      actions?.push(
        <Button
          key="add-another"
          variant="secondary"
          onClick={handleAddAnotherAppointment}
          iconName="Plus"
          iconPosition="left"
          disabled={isLoading}
        >
          Add Another
        </Button>
      );
    }

    // Book appointment button (on last step)
    if (currentStep === 4) {
      actions?.push(
        <Button
          key="book"
          variant="default"
          onClick={handleBookAppointment}
          loading={isLoading}
          iconName="Calendar"
          iconPosition="left"
          className="animate-breathing"
        >
          {isMultipleMode || appointments?.length > 0 
            ? `Book ${appointments?.length + 1} Appointments` 
            : 'Book Appointment'
          }
        </Button>
      );
    }

    return actions;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-4xl h-[85vh] bg-surface rounded-2xl shadow-floating flex flex-col"
        >
          {/* Modal Header - Fixed */}
          <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Icon name="Calendar" size={24} color="white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-text-primary">
                  Book Appointment
                </h1>
                <p className="text-sm text-muted-foreground">
                  Schedule your healthcare appointment
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              iconName="X"
              className="text-muted-foreground hover:text-text-primary"
            />
          </div>

          {/* Step Indicator - Fixed */}
          <div className="flex-shrink-0 px-6 py-4 border-b border-border/50">
            <StepIndicator currentStep={currentStep} totalSteps={4} />
          </div>

          {/* Modal Content - Scrollable */}
          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto">
              <div className="p-6 min-h-full">
                {/* Multiple Appointments Manager */}
                {isMultipleMode && currentStep === 1 && (
                  <div className="mb-8">
                    <MultipleAppointmentManager
                      appointments={appointments}
                      onRemoveAppointment={handleRemoveAppointment}
                      onAddAnother={() => setIsMultipleMode(true)}
                      doctors={doctors}
                    />
                  </div>
                )}

                {/* Step Content */}
                <div className="pb-24">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {renderStepContent()}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute top-0 right-0 w-1 h-full bg-muted/30 rounded-full overflow-hidden">
              <div 
                className="w-full bg-primary/20 transition-all duration-300 ease-out"
                style={{
                  height: `${Math.min(100, (currentStep / 4) * 100)}%`
                }}
              />
            </div>
          </div>

          {/* Modal Footer - Fixed & Enhanced */}
          <div className="flex-shrink-0 bg-surface border-t border-border">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-muted">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
            
            {/* Action Buttons */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="text-sm text-muted-foreground">
                    Step {currentStep} of 4
                  </div>
                  {currentStep > 1 && (
                    <div className="text-xs text-muted-foreground/70">
                      • Click Previous to go back
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  {getStepActions()?.map((action, index) => (
                    <div key={action?.key || index}>
                      {action}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AppointmentBooking;