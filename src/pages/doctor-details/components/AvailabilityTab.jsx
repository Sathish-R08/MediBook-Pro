import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AvailabilityTab = ({ doctor }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Generate upcoming dates (next 7 days)
  const getUpcomingDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date?.setDate(today?.getDate() + i);
      dates?.push(date);
    }
    return dates;
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatDateKey = (date) => {
    return date?.toISOString()?.split('T')?.[0];
  };

  const upcomingDates = getUpcomingDates();
  
  // Mock available time slots
  const getAvailableSlots = (date) => {
    const dateKey = formatDateKey(date);
    const mockSlots = {
      morning: ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'],
      afternoon: ['2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'],
      evening: ['5:00 PM', '5:30 PM', '6:00 PM']
    };
    
    // Randomly mark some slots as unavailable
    const unavailableSlots = ['9:30 AM', '3:00 PM', '5:30 PM'];
    
    return {
      morning: mockSlots?.morning?.map(time => ({
        time,
        available: !unavailableSlots?.includes(time)
      })),
      afternoon: mockSlots?.afternoon?.map(time => ({
        time,
        available: !unavailableSlots?.includes(time)
      })),
      evening: mockSlots?.evening?.map(time => ({
        time,
        available: !unavailableSlots?.includes(time)
      }))
    };
  };

  const handleBookNow = () => {
    if (selectedDate && selectedTime) {
      navigate('/appointment-booking', {
        state: {
          selectedDoctor: doctor,
          selectedDate,
          selectedTime,
          fromDoctorDetails: true
        }
      });
    }
  };

  const availableSlots = selectedDate ? getAvailableSlots(selectedDate) : null;

  return (
    <div className="space-y-6">
      {/* Consultation Information */}
      <div className="medical-card p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Consultation Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="DollarSign" size={18} className="text-primary" />
            </div>
            <div>
              <div className="font-medium text-text-primary">${doctor?.consultation?.fee}</div>
              <div className="text-sm text-text-secondary">Consultation Fee</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <Icon name="Clock" size={18} className="text-success" />
            </div>
            <div>
              <div className="font-medium text-text-primary">{doctor?.consultation?.duration} minutes</div>
              <div className="text-sm text-text-secondary">Session Duration</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="Video" size={18} className="text-accent" />
            </div>
            <div>
              <div className="font-medium text-text-primary">{doctor?.consultation?.type}</div>
              <div className="text-sm text-text-secondary">Available Options</div>
            </div>
          </div>
        </div>
      </div>
      {/* Date Selection */}
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-4">Select Date</h3>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
          {upcomingDates?.map((date, index) => {
            const isSelected = selectedDate && formatDateKey(selectedDate) === formatDateKey(date);
            const isToday = formatDateKey(date) === formatDateKey(new Date());
            
            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedDate(date);
                  setSelectedTime(null); // Reset time when date changes
                }}
                className={`p-3 rounded-lg border text-center transition-colors focus-ring ${
                  isSelected
                    ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 hover:bg-primary/5 text-text-secondary hover:text-text-primary'
                }`}
              >
                <div className="text-sm font-medium">
                  {formatDate(date)}
                </div>
                {isToday && (
                  <div className="text-xs text-primary mt-1">Today</div>
                )}
              </button>
            );
          })}
        </div>
      </div>
      {/* Time Slots */}
      {selectedDate && (
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Available Times - {formatDate(selectedDate)}
          </h3>
          
          {availableSlots && (
            <div className="space-y-6">
              {/* Morning Slots */}
              <div>
                <h4 className="font-medium text-text-primary mb-3 flex items-center space-x-2">
                  <Icon name="Sun" size={16} className="text-warning" />
                  <span>Morning</span>
                </h4>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {availableSlots?.morning?.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTime(slot?.time)}
                      disabled={!slot?.available}
                      className={`p-2 rounded-lg border text-sm font-medium transition-colors focus-ring ${
                        selectedTime === slot?.time
                          ? 'border-primary bg-primary text-primary-foreground'
                          : slot?.available
                          ? 'border-border hover:border-primary/50 hover:bg-primary/5 text-text-secondary hover:text-text-primary' :'border-border bg-muted text-text-secondary cursor-not-allowed opacity-50'
                      }`}
                    >
                      {slot?.time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Afternoon Slots */}
              <div>
                <h4 className="font-medium text-text-primary mb-3 flex items-center space-x-2">
                  <Icon name="Sun" size={16} className="text-primary" />
                  <span>Afternoon</span>
                </h4>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {availableSlots?.afternoon?.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTime(slot?.time)}
                      disabled={!slot?.available}
                      className={`p-2 rounded-lg border text-sm font-medium transition-colors focus-ring ${
                        selectedTime === slot?.time
                          ? 'border-primary bg-primary text-primary-foreground'
                          : slot?.available
                          ? 'border-border hover:border-primary/50 hover:bg-primary/5 text-text-secondary hover:text-text-primary' :'border-border bg-muted text-text-secondary cursor-not-allowed opacity-50'
                      }`}
                    >
                      {slot?.time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Evening Slots */}
              <div>
                <h4 className="font-medium text-text-primary mb-3 flex items-center space-x-2">
                  <Icon name="Moon" size={16} className="text-accent" />
                  <span>Evening</span>
                </h4>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {availableSlots?.evening?.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTime(slot?.time)}
                      disabled={!slot?.available}
                      className={`p-2 rounded-lg border text-sm font-medium transition-colors focus-ring ${
                        selectedTime === slot?.time
                          ? 'border-primary bg-primary text-primary-foreground'
                          : slot?.available
                          ? 'border-border hover:border-primary/50 hover:bg-primary/5 text-text-secondary hover:text-text-primary' :'border-border bg-muted text-text-secondary cursor-not-allowed opacity-50'
                      }`}
                    >
                      {slot?.time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Book Now Button */}
          {selectedTime && (
            <div className="mt-6 p-4 bg-success/5 border border-success/20 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-text-primary mb-1">
                    Selected Appointment
                  </div>
                  <div className="text-sm text-text-secondary">
                    {formatDate(selectedDate)} at {selectedTime}
                  </div>
                </div>
                <Button
                  onClick={handleBookNow}
                  variant="default"
                  iconName="Calendar"
                  iconPosition="left"
                  className="animate-breathing"
                >
                  Book Now
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
      {/* Booking Instructions */}
      <div className="medical-card p-6">
        <h4 className="font-semibold text-text-primary mb-3">Before Your Appointment</h4>
        <div className="space-y-2 text-sm text-text-secondary">
          <div className="flex items-start space-x-2">
            <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
            <span>Arrive 15 minutes early for check-in and paperwork</span>
          </div>
          <div className="flex items-start space-x-2">
            <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
            <span>Bring your insurance card and a valid photo ID</span>
          </div>
          <div className="flex items-start space-x-2">
            <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
            <span>Prepare a list of current medications and medical history</span>
          </div>
          <div className="flex items-start space-x-2">
            <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
            <span>Cancel at least 24 hours in advance to avoid fees</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityTab;