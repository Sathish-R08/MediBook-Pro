import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConfirmationStep = ({ 
  selectedDoctor, 
  selectedDate, 
  selectedTime, 
  patientInfo, 
  doctors, 
  onEdit,
  appointments = []
}) => {
  const doctorData = doctors?.find(d => d?.id === selectedDoctor);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString?.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const currentAppointment = {
    doctor: doctorData,
    date: selectedDate,
    time: selectedTime,
    patient: patientInfo
  };

  const allAppointments = [...appointments, currentAppointment];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          Confirm Your Appointment{appointments?.length > 0 ? 's' : ''}
        </h2>
        <p className="text-muted-foreground">
          Please review your appointment details before booking
        </p>
      </div>
      <div className="space-y-4">
        {allAppointments?.map((appointment, index) => (
          <div key={index} className="medical-card p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-medium text-text-primary">
                Appointment {index + 1}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onEdit(1)}
                iconName="Edit"
                iconPosition="left"
              >
                Edit
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Doctor Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="UserCheck" size={20} className="text-primary" />
                  <h4 className="font-medium text-text-primary">Doctor Details</h4>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Image
                    src={appointment?.doctor?.image}
                    alt={appointment?.doctor?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-semibold text-text-primary">
                      Dr. {appointment?.doctor?.name}
                    </h5>
                    <p className="text-primary font-medium">
                      {appointment?.doctor?.specialty}
                    </p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Icon name="Star" size={14} className="text-warning fill-current" />
                      <span className="text-sm text-muted-foreground">
                        {appointment?.doctor?.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={20} className="text-primary" />
                  <h4 className="font-medium text-text-primary">Appointment Details</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Calendar" size={16} className="text-muted-foreground" />
                    <span className="text-sm">
                      {formatDate(appointment?.date)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span className="text-sm">
                      {formatTime(appointment?.time)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={16} className="text-muted-foreground" />
                    <span className="text-sm">
                      {appointment?.doctor?.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Patient Information Summary */}
      <div className="medical-card p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="User" size={20} className="text-primary" />
          <h4 className="font-medium text-text-primary">Patient Information</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Name:</span>
              <span className="text-sm font-medium">{patientInfo?.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Age:</span>
              <span className="text-sm font-medium">{patientInfo?.age}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Gender:</span>
              <span className="text-sm font-medium capitalize">{patientInfo?.gender}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Phone:</span>
              <span className="text-sm font-medium">{patientInfo?.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Email:</span>
              <span className="text-sm font-medium">{patientInfo?.email}</span>
            </div>
          </div>
        </div>

        {patientInfo?.reason && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Reason for visit:</span>
              <span className="text-sm font-medium">{patientInfo?.reason}</span>
            </div>
          </div>
        )}
      </div>
      {/* Important Notes */}
      <div className="medical-card p-4 bg-warning/5 border-warning/20">
        <div className="flex items-start space-x-3">
          <Icon name="AlertTriangle" size={20} className="text-warning mt-0.5" />
          <div className="space-y-2">
            <p className="text-sm font-medium text-warning">
              Important Reminders
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Please arrive 15 minutes before your appointment time</li>
              <li>• Bring a valid ID and insurance card</li>
              <li>• You can reschedule up to 24 hours before the appointment</li>
              <li>• Cancellation fees may apply for same-day cancellations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;