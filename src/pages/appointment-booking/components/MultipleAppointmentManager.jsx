import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MultipleAppointmentManager = ({ 
  appointments, 
  onRemoveAppointment, 
  onAddAnother, 
  doctors 
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
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

  if (appointments?.length === 0) {
    return (
      <div className="text-center py-8">
        <Button
          variant="outline"
          onClick={onAddAnother}
          iconName="Plus"
          iconPosition="left"
          className="animate-breathing"
        >
          Add Another Appointment
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-text-primary">
          Scheduled Appointments ({appointments?.length})
        </h3>
        <Button
          variant="outline"
          size="sm"
          onClick={onAddAnother}
          iconName="Plus"
          iconPosition="left"
        >
          Add Another
        </Button>
      </div>
      <div className="space-y-3">
        {appointments?.map((appointment, index) => {
          const doctor = doctors?.find(d => d?.id === appointment?.doctorId);
          
          return (
            <div key={index} className="medical-card p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src={doctor?.image}
                    alt={doctor?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-text-primary">
                      Dr. {doctor?.name}
                    </h4>
                    <p className="text-sm text-primary">
                      {doctor?.specialty}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center space-x-1">
                        <Icon name="Calendar" size={12} />
                        <span>{formatDate(appointment?.date)}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Clock" size={12} />
                        <span>{formatTime(appointment?.time)}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveAppointment(index)}
                  iconName="Trash2"
                  className="text-error hover:text-error hover:bg-error/10"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="medical-card p-4 bg-primary/5 border-primary/20">
        <div className="flex items-center space-x-2">
          <Icon name="Info" size={16} className="text-primary" />
          <p className="text-sm text-primary font-medium">
            Multiple Appointment Booking
          </p>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          You can book up to 5 appointments at once. Each appointment will be confirmed separately.
        </p>
      </div>
    </div>
  );
};

export default MultipleAppointmentManager;