import React from 'react';
import Icon from '../../../components/AppIcon';

// Add the missing cn utility function
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const StepIndicator = ({ currentStep, totalSteps = 4 }) => {
  const steps = [
    { id: 1, title: 'Doctor Selection', icon: 'UserCircle' },
    { id: 2, title: 'Date & Time', icon: 'Calendar' },
    { id: 3, title: 'Patient Info', icon: 'User' },
    { id: 4, title: 'Confirmation', icon: 'CheckCircle' }
  ];

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps?.map((step, index) => (
            <div key={step?.id} className="flex items-center">
              {/* Step Circle */}
              <div className={cn(
                "flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300",
                currentStep >= step?.id
                  ? "bg-primary border-primary text-white shadow-lg"
                  : currentStep === step?.id - 1
                  ? "bg-primary/10 border-primary text-primary" :"bg-muted border-border text-muted-foreground"
              )}>
                <Icon 
                  name={step?.icon} 
                  size={20}
                  className={cn(
                    currentStep >= step?.id ? "text-white" : ""
                  )}
                />
              </div>

              {/* Connector Line */}
              {index < steps?.length - 1 && (
                <div className="w-16 lg:w-24 mx-3">
                  <div className={cn(
                    "h-0.5 transition-all duration-500",
                    currentStep > step?.id
                      ? "bg-primary" :"bg-border"
                  )} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Labels */}
        <div className="flex justify-between items-start mt-4">
          {steps?.map((step) => (
            <div key={step?.id} className="flex flex-col items-center max-w-[100px]">
              <span className={cn(
                "text-sm font-medium text-center transition-colors duration-300",
                currentStep >= step?.id
                  ? "text-primary" :"text-muted-foreground"
              )}>
                {step?.title}
              </span>
              {currentStep === step?.id && (
                <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;