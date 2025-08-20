import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const DateTimeStep = ({ selectedDate, selectedTime, onDateChange, onTimeChange }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(selectedTime);

  const timeSlots = {
    morning: [
      { time: '09:00', available: true },
      { time: '09:30', available: true },
      { time: '10:00', available: false },
      { time: '10:30', available: true },
      { time: '11:00', available: true },
      { time: '11:30', available: false }
    ],
    afternoon: [
      { time: '14:00', available: true },
      { time: '14:30', available: true },
      { time: '15:00', available: true },
      { time: '15:30', available: false },
      { time: '16:00', available: true },
      { time: '16:30', available: true }
    ],
    evening: [
      { time: '18:00', available: true },
      { time: '18:30', available: false },
      { time: '19:00', available: true },
      { time: '19:30', available: true },
      { time: '20:00', available: true }
    ]
  };

  const handleTimeSelect = (time) => {
    setSelectedTimeSlot(time);
    onTimeChange(time);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getMinDate = () => {
    const today = new Date();
    return today?.toISOString()?.split('T')?.[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate?.setDate(maxDate?.getDate() + 30);
    return maxDate?.toISOString()?.split('T')?.[0];
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          Select Date & Time
        </h2>
        <p className="text-muted-foreground">
          Choose your preferred appointment slot
        </p>
      </div>
      <div className="space-y-4">
        <Input
          type="date"
          label="Appointment Date"
          value={selectedDate}
          onChange={(e) => onDateChange(e?.target?.value)}
          min={getMinDate()}
          max={getMaxDate()}
          required
          className="mb-4"
        />

        {selectedDate && (
          <div className="medical-card p-4">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Calendar" size={20} className="text-primary" />
              <span className="font-medium text-text-primary">
                {formatDate(selectedDate)}
              </span>
            </div>
          </div>
        )}
      </div>
      {selectedDate && (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-300">
          {Object.entries(timeSlots)?.map(([period, slots]) => (
            <div key={period} className="space-y-3">
              <h3 className="text-lg font-medium text-text-primary capitalize flex items-center space-x-2">
                <Icon 
                  name={period === 'morning' ? 'Sunrise' : period === 'afternoon' ? 'Sun' : 'Moon'} 
                  size={20} 
                  className="text-primary" 
                />
                <span>{period}</span>
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                {slots?.map(({ time, available }) => (
                  <Button
                    key={time}
                    variant={selectedTimeSlot === time ? 'default' : 'outline'}
                    size="sm"
                    disabled={!available}
                    onClick={() => handleTimeSelect(time)}
                    className={`relative ${!available ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {time}
                    {!available && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-0.5 bg-error rotate-45" />
                      </div>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedTimeSlot && (
        <div className="medical-card p-4 bg-success/5 border-success/20">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={20} className="text-success" />
            <span className="font-medium text-success">
              Selected Time: {selectedTimeSlot}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateTimeStep;